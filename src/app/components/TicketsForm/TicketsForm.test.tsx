import { render, screen, fireEvent } from "@testing-library/react";
import TicketsForm from "./TicketsForm";

import { BandT } from "../../types";

describe("TicketsForm", () => {
  const band = {
    name: "The K-Tones",
    ticketTypes: [
      {
        type: "ga",
        name: "General Admission",
        description: "Standing room",
        cost: 1000,
      },
      {
        type: "vip",
        name: "VIP",
        description: "Seat + Drink",
        cost: 2000,
      },
    ],
  } as BandT;

  test("renders ticket types and total", () => {
    render(<TicketsForm band={band} />);

    expect(screen.getByText("Select Tickets")).toBeInTheDocument();
    expect(screen.getByText("TOTAL")).toBeInTheDocument();
    expect(screen.getByText("$0")).toBeInTheDocument();
  });

  test("updates total when ticket quantity is changed", () => {
    render(<TicketsForm band={band} />);
    const input = screen.getByLabelText("Quantity of General Admission");

    fireEvent.change(input, { target: { value: "2" } });

    expect(screen.getAllByText("$20")[0]).toBeInTheDocument();
  });

  test("enables submit button when form is valid", () => {
    render(<TicketsForm band={band} />);

    // Add ticket
    fireEvent.change(screen.getByLabelText("Quantity of VIP"), {
      target: { value: "1" },
    });

    // Fill payment
    fireEvent.change(screen.getByLabelText("First Name"), {
      target: { value: "John" },
    });
    fireEvent.change(screen.getByLabelText("Last Name"), {
      target: { value: "Doe" },
    });
    fireEvent.change(screen.getByLabelText("Address"), {
      target: { value: "123 Street" },
    });
    fireEvent.change(screen.getByLabelText("Card Number"), {
      target: { value: "4111 1111 1111 1111" },
    });
    fireEvent.change(screen.getByLabelText("Card Expiration"), {
      target: { value: "12 / 25" },
    });
    fireEvent.change(screen.getByLabelText("Card CVV"), {
      target: { value: "123" },
    });

    expect(screen.getByRole("button", { name: /Get Tickets/i })).toBeEnabled();
  });

  test("logs submitted data on submit", () => {
    const logSpy = jest.spyOn(console, "log").mockImplementation(() => {});
    const warnSpy = jest.spyOn(console, "warn").mockImplementation(() => {});

    render(<TicketsForm band={band} />);

    fireEvent.change(screen.getByLabelText("Quantity of VIP"), {
      target: { value: "1" },
    });
    fireEvent.change(screen.getByLabelText("First Name"), {
      target: { value: "Jane" },
    });
    fireEvent.change(screen.getByLabelText("Last Name"), {
      target: { value: "Smith" },
    });
    fireEvent.change(screen.getByLabelText("Address"), {
      target: { value: "456 Ave" },
    });
    fireEvent.change(screen.getByLabelText("Card Number"), {
      target: { value: "4111 1111 1111 1111" },
    });
    fireEvent.change(screen.getByLabelText("Card Expiration"), {
      target: { value: "11 / 26" },
    });
    fireEvent.change(screen.getByLabelText("Card CVV"), {
      target: { value: "456" },
    });

    fireEvent.submit(screen.getByTestId("tickets-form"));

    expect(warnSpy).toHaveBeenCalled();

    expect(logSpy).toHaveBeenCalledWith(
      expect.objectContaining({
        tickets: expect.arrayContaining([
          expect.objectContaining({ type: "vip", quantity: 1 }),
        ]),
        payment: expect.objectContaining({
          cardNumber: 16,
          cardExpiration: 5,
        }),
      })
    );

    logSpy.mockRestore();
    warnSpy.mockRestore();
  });
});

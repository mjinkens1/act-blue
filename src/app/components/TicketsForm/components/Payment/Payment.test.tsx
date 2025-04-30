import { render, screen, fireEvent } from "@testing-library/react";
import Payment from "./Payment";

describe("Payment", () => {
  const basePayment = {
    firstName: "John",
    lastName: "Doe",
    address: "123 Ska St",
    cardNumber: "4111 1111 1111 1111",
    cardExpiration: "12 / 25",
    cardCVV: "123",
  };

  test("renders all input fields with correct initial values", () => {
    render(
      <Payment isFormValid={false} payment={basePayment} onChange={() => {}} />
    );

    expect(screen.getByLabelText("First Name")).toHaveValue("John");
    expect(screen.getByLabelText("Last Name")).toHaveValue("Doe");
    expect(screen.getByLabelText("Address")).toHaveValue("123 Ska St");
    expect(screen.getByLabelText("Card Number")).toHaveValue(
      "4111 1111 1111 1111"
    );
    expect(screen.getByLabelText("Card Expiration")).toHaveValue("12 / 25");
    expect(screen.getByLabelText("Card CVV")).toHaveValue("123");
  });

  test("calls onChange when inputs change", () => {
    const handleChange = jest.fn();
    render(
      <Payment
        isFormValid={true}
        payment={basePayment}
        onChange={handleChange}
      />
    );

    fireEvent.change(screen.getByLabelText("First Name"), {
      target: { value: "Jane" },
    });
    expect(handleChange).toHaveBeenCalledWith("firstName", "Jane");

    fireEvent.change(screen.getByLabelText("Card CVV"), {
      target: { value: "456" },
    });
    expect(handleChange).toHaveBeenCalledWith("cardCVV", "456");
  });

  test("disables submit button when form is invalid", () => {
    render(
      <Payment isFormValid={false} payment={basePayment} onChange={() => {}} />
    );
    expect(screen.getByRole("button", { name: /Get Tickets/i })).toBeDisabled();
  });

  test("enables submit button when form is valid", () => {
    render(
      <Payment isFormValid={true} payment={basePayment} onChange={() => {}} />
    );
    expect(screen.getByRole("button", { name: /Get Tickets/i })).toBeEnabled();
  });
});

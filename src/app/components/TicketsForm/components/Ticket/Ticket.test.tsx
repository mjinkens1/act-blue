import { render, screen, fireEvent } from "@testing-library/react";
import Ticket from "./Ticket";

describe("Ticket", () => {
  const ticket = {
    type: "vip",
    name: "VIP Pass",
    description: "Front row seating with a free drink",
    cost: 2500, // cents
    quantity: 2,
  };

  test("renders ticket info: name, description, and price", () => {
    render(<Ticket ticket={ticket} onQuantityChange={() => {}} />);

    expect(screen.getByText("VIP Pass")).toBeInTheDocument();
    expect(
      screen.getByText("Front row seating with a free drink")
    ).toBeInTheDocument();
    expect(screen.getByText("$25")).toBeInTheDocument(); // assumes formatUsd logic
  });

  test("renders quantity input with correct value", () => {
    render(<Ticket ticket={ticket} onQuantityChange={() => {}} />);
    const input = screen.getByLabelText(
      "Quantity of VIP Pass"
    ) as HTMLInputElement;
    expect(input.value).toBe("2");
  });

  test("calls onQuantityChange with new quantity", () => {
    const handleChange = jest.fn();
    render(<Ticket ticket={ticket} onQuantityChange={handleChange} />);

    const input = screen.getByLabelText("Quantity of VIP Pass");
    fireEvent.change(input, { target: { value: "4" } });

    expect(handleChange).toHaveBeenCalledWith("vip", 4);
  });
});

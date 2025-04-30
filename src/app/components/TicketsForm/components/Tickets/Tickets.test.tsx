import { render, screen, fireEvent } from "@testing-library/react";
import Tickets from "./Tickets";

describe("Tickets", () => {
  const mockTickets = [
    {
      type: "ga",
      name: "General Admission",
      description: "Standing room only",
      cost: 1500,
      quantity: 1,
    },
    {
      type: "vip",
      name: "VIP",
      description: "Seating with perks",
      cost: 3000,
      quantity: 0,
    },
  ];

  test("renders all ticket types", () => {
    render(<Tickets tickets={mockTickets} onQuantityChange={() => {}} />);

    expect(screen.getByText("General Admission")).toBeInTheDocument();
    expect(screen.getByText("VIP")).toBeInTheDocument();
  });

  test("calls onQuantityChange when a ticket quantity changes", () => {
    const handleQuantityChange = jest.fn();
    render(
      <Tickets tickets={mockTickets} onQuantityChange={handleQuantityChange} />
    );

    const input = screen.getByLabelText("Quantity of General Admission");
    fireEvent.change(input, { target: { value: "3" } });

    expect(handleQuantityChange).toHaveBeenCalledWith("ga", 3);
  });
});

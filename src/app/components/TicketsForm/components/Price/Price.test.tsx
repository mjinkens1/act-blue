import { render, screen } from "@testing-library/react";
import Price from "./Price";

describe("Price", () => {
  test("formats cents as USD without decimals", () => {
    render(<Price amount={12300} />);
    expect(screen.getByText("$123")).toBeInTheDocument();
  });

  test("renders 0 cents as $0", () => {
    render(<Price amount={0} />);
    expect(screen.getByText("$0")).toBeInTheDocument();
  });

  test("applies className if provided", () => {
    render(<Price amount={5000} className="highlighted-price" />);
    const element = screen.getByText("$50");
    expect(element).toHaveClass("highlighted-price");
  });
});

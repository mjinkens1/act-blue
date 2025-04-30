import { render, screen } from "@testing-library/react";

import { BandT } from "../../types";

import EventInfo from "./EventInfo";

describe("EventInfo", () => {
  const band = {
    name: "The K-Tones",
    date: 1683644012000, // Tuesday, May 9
    location: "Brooklyn Bowl",
  } as BandT;

  test("renders band name in the title", () => {
    render(<EventInfo band={band} />);
    expect(
      screen.getByRole("heading", { name: /The K-Tones/i })
    ).toBeInTheDocument();
  });

  test("renders formatted date", () => {
    render(<EventInfo band={band} />);
    expect(screen.getByText("Tuesday, May 9")).toBeInTheDocument(); // depends on locale
  });

  test("renders location", () => {
    render(<EventInfo band={band} />);
    expect(screen.getByText("Brooklyn Bowl")).toBeInTheDocument();
  });
});

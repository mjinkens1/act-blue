import { render, screen } from "@testing-library/react";
import App from "./App";

// Optionally mock JSON imports if needed
jest.mock("./band-json/ska-band.json", () => ({
  name: "The Ska Masters",
  imgUrl: "/ska.jpg",
  description_blurb: "<p>Ska forever</p>",
  date: 1746057600,
  location: "Kingston, JA",
  ticketTypes: [
    {
      type: "ga",
      name: "General Admission",
      description: "Jump in the pit",
      cost: 3000,
    },
  ],
}));
jest.mock("./band-json/kpop-band.json", () => ({}));
jest.mock("./band-json/punk-band.json", () => ({}));

describe("App", () => {
  test("renders BandForm with ska band details", () => {
    render(<App />);

    // from EventInfo
    expect(
      screen.getByRole("heading", { name: /The Ska Masters/i })
    ).toBeInTheDocument();
    expect(screen.getByText("Kingston, JA")).toBeInTheDocument();

    // from BandInfo
    expect(screen.getByText("Ska forever")).toBeInTheDocument();

    // from TicketsForm
    expect(screen.getByText("General Admission")).toBeInTheDocument();
  });
});

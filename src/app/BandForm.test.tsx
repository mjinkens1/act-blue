import { render, screen } from "@testing-library/react";

import BandForm from "./BandForm";
import { BandT } from "./types";

describe("BandForm", () => {
  const mockBand = {
    name: "The Ska-tones",
    imgUrl: "/ska.jpg",
    description_blurb: "<p>Legendary ska revivalists</p>",
    date: 1746057600, // June 1, 2025
    location: "Seattle, WA",
    ticketTypes: [
      {
        type: "ga",
        name: "General Admission",
        description: "Standing room",
        cost: 2000,
      },
    ],
  } as BandT;

  test("renders BandInfo, EventInfo, and TicketsForm content", () => {
    render(<BandForm band={mockBand} />);

    // From EventInfo
    expect(
      screen.getByRole("heading", { name: /The Ska-tones/i })
    ).toBeInTheDocument();
    expect(screen.getByText("Seattle, WA")).toBeInTheDocument();

    // From BandInfo (sanitized HTML)
    expect(screen.getByText("Legendary ska revivalists")).toBeInTheDocument();

    // From TicketsForm
    expect(screen.getByText("Select Tickets")).toBeInTheDocument();
    expect(screen.getByText("General Admission")).toBeInTheDocument();
  });
});

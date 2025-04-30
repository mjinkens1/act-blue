import { render, screen } from "@testing-library/react";

import { BandT } from "../../types";

import BandInfo from "./BandInfo";

describe("BandInfo", () => {
  const band = {
    name: "Ska Explosion",
    imgUrl: "/ska.jpg",
    description_blurb: '<script>alert("xss")</script><p>Horn section is 🔥</p>',
  } as BandT;

  test("renders image with correct alt and src", () => {
    render(<BandInfo band={band} />);
    const img = screen.getByRole("img");
    expect(img).toHaveAttribute("src", "/ska.jpg");
    expect(img).toHaveAttribute("alt", "Ska Explosion");
  });

  test("renders sanitized description HTML", () => {
    render(<BandInfo band={band} />);
    expect(screen.getByText("Horn section is 🔥")).toBeInTheDocument();
    expect(screen.queryByText("alert")).not.toBeInTheDocument(); // script removed
  });
});

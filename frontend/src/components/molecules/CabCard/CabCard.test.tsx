/**
 * @jest-environment jsdom
 */

import { render, screen, cleanup } from "@testing-library/react";
import CabCard, { CabCardProps } from "./CabCard";

afterEach(cleanup);

const data: CabCardProps = {
  name: "Ola",
  img:
    "https://cdn.zeplin.io/5fa28fcbff79c58958e4e1a6/assets/d48594a7-0574-4fc0-967e-59b8b54f0c21.png",
  cost: "$30",
};

describe("CabCard Testing", () => {
  it("Checking The title", () => {
    render(<CabCard {...data} />);

    expect(screen.getByText("Ola")).toBeInTheDocument();
  });
});

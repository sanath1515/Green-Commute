/**
 * @jest-environment jsdom
 */

import { render, screen, cleanup } from "@testing-library/react";
import StepBar, { StepBarProps } from "./StepBar";

afterEach(cleanup);

const data: StepBarProps = {
  status: 2,
};

describe("StepBar Testing", () => {
  it("Checking The title", () => {
    render(<StepBar {...data} />);

    expect(screen.getByText("Your Location")).toBeInTheDocument();
  });
});

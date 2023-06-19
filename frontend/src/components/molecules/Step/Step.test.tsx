/**
 * @jest-environment jsdom
 */

import { render, screen, cleanup } from "@testing-library/react";
import Step, { StepProps } from "./Step";

afterEach(cleanup);

const data: StepProps = {
  name: "Your Location",
  number: "1",
  completed: true,
};

describe("Step Testing", () => {
  it("Checking The title", () => {
    render(<Step {...data} />);

    expect(screen.getByText("Your Location")).toBeInTheDocument();
  });
});

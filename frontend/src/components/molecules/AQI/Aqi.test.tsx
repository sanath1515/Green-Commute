/**
 * @jest-environment jsdom
 */

import { render, screen, cleanup } from "@testing-library/react";
import Aqi, { AqiProps } from "./Aqi";

afterEach(cleanup);

const data: AqiProps = {
  step: 1,
};

describe("Aqi Testing", () => {
  it("Checking The title", () => {
    render(<Aqi {...data} />);

    expect(
      screen.getByText("Enter location to know Time Air Quality Index (Aqi)")
    ).toBeInTheDocument();
  });

  it("Matches the snapshot", () => {
    const { container } = render(<Aqi {...data} />);
    expect(container).toMatchSnapshot();
  });
});

/**
 * @jest-environment jsdom
 */
import { fireEvent, render, screen } from "@testing-library/react";
import RadioButtons from "./RadioButtons";

describe("Radio Component", () => {
  test("Matches Snapshot", () => {
    const { asFragment } = render(<RadioButtons />);
    expect(asFragment.name).toMatchSnapshot();
  });
});

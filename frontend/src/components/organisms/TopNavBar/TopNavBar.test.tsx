/**
 * @jest-environment jsdom
 */
import { fireEvent, render, screen } from "@testing-library/react";
import TopNavBar from "./TopNavBar";

describe("TopNavBar Component", () => {
  test("Matches Snapshot", () => {
    const { asFragment } = render(<TopNavBar />);
    expect(asFragment.name).toMatchSnapshot();
  });
});

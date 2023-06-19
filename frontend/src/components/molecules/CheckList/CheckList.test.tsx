/**
 * @jest-environment jsdom
 */
import { fireEvent, render, screen } from "@testing-library/react";
import CheckList from "./CheckList";

describe("checkbox Component", () => {
  const onChange = jest.fn();

  test("Matches Snapshot", () => {
    const { asFragment } = render(
      <CheckList onChange={onChange} heading={""} listNames={[]} />
    );
    expect(asFragment.name).toMatchSnapshot();
  });
});

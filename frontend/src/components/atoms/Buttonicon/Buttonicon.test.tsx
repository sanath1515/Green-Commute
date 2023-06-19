/**
 * @jest-environment jsdom
 */
import { fireEvent, render, screen } from "@testing-library/react";
import Icons1 from "../Transporticons/icons";
import { ButtonIcon } from "./Buttonicon";

describe("Button Component", () => {
  const onClick = jest.fn();

  test("Matches Snapshot", () => {
    const { asFragment } = render(
      <>
        <ButtonIcon />
        <Icons1 name="message" />
      </>
    );
    expect(asFragment.name).toMatchSnapshot();
  });
});

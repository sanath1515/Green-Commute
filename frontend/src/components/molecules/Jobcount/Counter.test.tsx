import React from "react";
import Counter from "./Count";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";

describe("Counter renders correctly", () => {
  test("should match snapshot", () => {
    const { asFragment } = render(<Counter number="1000" />);
    expect(asFragment()).toMatchSnapshot();
  });
});

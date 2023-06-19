/**
 * @jest-environment jsdom
 */

import React from "react";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import Navicon from "./Navicons";

describe("Icons placeholder test", () => {
  it("Matches the snapshot", () => {
    const { container } = render(<Navicon name="message" />);
    expect(container).toMatchSnapshot();
  });
});

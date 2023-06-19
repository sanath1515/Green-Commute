/**
 * @jest-environment jsdom
 */

import React from "react";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import Icons1 from "./icons";

describe("Icons placeholder test", () => {
  it("Matches the snapshot", () => {
    const { container } = render(<Icons1 name="metro" />);
    expect(container).toMatchSnapshot();
  });
});

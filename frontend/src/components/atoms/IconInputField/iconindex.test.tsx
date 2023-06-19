/**
 * @jest-environment jsdom
 */

import React from "react";
import Iconindex from "./iconindex";
import { render } from "@testing-library/react";

describe("component renders correctly", () => {
  test("Matches Snapshot", () => {
    const { asFragment } = render(
      <Iconindex size="small" variant="outlined" color="primary" />
    );
    expect(asFragment.name).toMatchSnapshot();
  });
});

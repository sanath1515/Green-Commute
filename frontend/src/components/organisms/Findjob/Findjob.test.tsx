/**
 * @jest-environment jsdom
 */

import React from "react";
import Findjob from "./Findjob";
import { render } from "@testing-library/react";
import { BrowserRouter as Router } from "react-router-dom";
import store from "../../../store/store";
import { Provider } from "react-redux";

describe("component renders correctly", () => {
  test("Matches Snapshot", () => {
    const { asFragment } = render(
      <Router>
        <Provider store={store}>
          <Findjob Skill="react" />{" "}
        </Provider>
      </Router>
    );
    expect(asFragment.name).toMatchSnapshot();
  });
});

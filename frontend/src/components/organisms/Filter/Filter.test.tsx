/**
 * @jest-environment jsdom
 */
import { render } from "@testing-library/react";
import { Provider } from "react-redux";
import { BrowserRouter as Router } from "react-router-dom";
import store from "../../../store/store";
import Filters from "./Filters";

describe("Filter Component", () => {
  test("Matches Snapshot", () => {
    const { asFragment } = render(
      <Router>
        <Provider store={store}>
          <Filters button="Filter" button1="Clear all" button2="Apply" />
        </Provider>
      </Router>
    );
    expect(asFragment.name).toMatchSnapshot();
  });
});

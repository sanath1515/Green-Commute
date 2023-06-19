/**
 * @jest-environment jsdom
 */

import { render } from "@testing-library/react";
import { Provider } from "react-redux";
import { BrowserRouter as Router } from "react-router-dom";
import store from "../../../store/store";
import SearchPage from "./SearchPage";

describe("SearchPage Page Test", () => {
  const page = () => {
    render(
      <Router>
        <Provider store={store}>
          <SearchPage />
        </Provider>
      </Router>
    );
  };

  it("Match Snapshot", () => {
    expect(page).toMatchSnapshot();
  });

  it("To be Required", () => {
    const container = () =>
      render(
        <Router>
          <Provider store={store}>
            <SearchPage />
          </Provider>
        </Router>
      );
    expect(container).toBeRequired;
  });
});

/**
 * @jest-environment jsdom
 */

import { render, screen, cleanup } from "@testing-library/react";
import Chips, { chipProps } from "./chips";
import { BrowserRouter as Router } from "react-router-dom";
import { Provider } from "react-redux";
import store from "../../../store/store";

afterEach(cleanup);

const data: chipProps = {
  label: "Mumbai",
};

describe("chips Testing", () => {
  it("Checking The title", () => {
    render(
      <Router>
        <Provider store={store}>
          <Chips {...data} />
        </Provider>
      </Router>
    );
    expect(screen.getByText("Mumbai")).toBeInTheDocument();
  });
});

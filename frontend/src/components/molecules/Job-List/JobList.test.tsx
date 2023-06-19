/**
 * @jest-environment jsdom
 */
import { fireEvent, render, screen } from "@testing-library/react";
import JobList from "./JobList";
import { BrowserRouter as Router } from "react-router-dom";
import { Provider } from "react-redux";
import store from "../../../store/store";

describe("JobList Component", () => {
  test("Matches Snapshot", () => {
    const { asFragment } = render(
      <Router>
        <Provider store={store}>
          <JobList
            src="./image.sng"
            dayscount="2d"
            jobRole="User Experience Designer"
            companyName="Hp"
            location="Hyderabad,Telanagana, India"
            id={""}
            commuteRoutes={[]}
          />
        </Provider>
      </Router>
    );
    expect(asFragment.name).toMatchSnapshot();
  });
});

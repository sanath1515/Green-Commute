/**
 * @jest-environment jsdom
 */
import { fireEvent, render, screen } from "@testing-library/react";
import JobCard from "./JobCard";

describe("Jobcard Component", () => {
  test("Matches Snapshot", () => {
    const { asFragment } = render(
      <JobCard
        src="./image.sng"
        days={2}
        jobRole="User Experience Designer"
        companyName="Hp"
        location="Hyderabad,Telanagana, India"
        commuteRoute={[]}
        key="1"
      />
    );
    expect(asFragment.name).toMatchSnapshot();
  });
});

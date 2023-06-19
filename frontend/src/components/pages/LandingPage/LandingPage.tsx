import React from "react";
import { useSelector } from "react-redux";
import { greenState } from "../../../store/reducers";
import JobLocation from "../JobLocation/JobLocation";
import JobSkills from "../JobSkills/JobSkills";
import WorkLocation from "../WorkLocation/WorkLocation";

function LandingPage() {
  const stepId = useSelector<greenState, greenState["step"]>((state) => {
    return state.step;
  });

  return (
    <React.Fragment>
      {stepId === "1" && <JobLocation status={1} />}
      {stepId === "2" && <WorkLocation status={2} />}
      {stepId === "3" && <JobSkills status={3} />}
    </React.Fragment>
  );
}

export default LandingPage;

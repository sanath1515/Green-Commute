import React from "react";
import { useSelector } from "react-redux";
import { greenState } from "../../../store/reducers";
import JobLocation from "../JobLocation/JobLocation";
import JobSkills from "../JobSkills/JobSkills";
import WorkLocation from "../WorkLocation/WorkLocation";

const LandingPage: React.FC = () => {
  const stepId = useSelector<greenState, greenState["step"]>(
    (state) => state.step
  );

  const renderStep = () => {
    switch (stepId) {
      case "1":
        return <JobLocation status={1} />;
      case "2":
        return <WorkLocation status={2} />;
      case "3":
        return <JobSkills status={3} />;
      default:
        return null;
    }
  };

  return <>{renderStep()}</>;
};

export default LandingPage;

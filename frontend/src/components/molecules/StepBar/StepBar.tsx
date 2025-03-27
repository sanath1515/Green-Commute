import React from "react";
import Step from "../Step/Step";
import { StepBarData } from "../../../Constants";
import { styled } from "@mui/material/styles";

export type StepBarProps = {
  status: number;
};

// Styled container
const Root = styled("div")(({ theme }) => ({
  display: "flex",
  width: 790,
  justifyContent: "space-around",
}));

const StepBar: React.FC<StepBarProps> = ({ status }) => {
  const steps = StepBarData.map((step) => (
    <Step key={step.number} {...step} completed={parseInt(step.number) <= status} />
  ));

  return <Root>{steps}</Root>;
};

export default StepBar;

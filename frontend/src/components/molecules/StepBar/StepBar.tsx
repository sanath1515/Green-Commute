import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Step from "../Step/Step";
import { StepBarData } from "../../../Constants";

const useStyles = makeStyles({
  root: {
    display: "flex",
    width: 790,
    justifyContent: "space-around",
  },
});

export type StepBarProps = {
  status: number;
};

const StepBar: React.FC<StepBarProps> = ({ status }) => {
  const classes = useStyles();
  const steps = StepBarData.map((step) => (
    <Step {...step} completed={parseInt(step.number) <= status} />
  ));

  return <div className={classes.root}>{steps}</div>;
};

export default StepBar;

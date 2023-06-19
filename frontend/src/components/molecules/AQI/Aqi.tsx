import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Typography } from "@material-ui/core";
import { AqiData, jobCountData } from "../../../Constants";
import Count from "../Jobcount/Count";
import theme from "../../../theme/theme";
import { useSelector } from "react-redux";
import { greenState } from "../../../store/reducers";

const useStyles = makeStyles({
  root: {
    width: "650px",
    height: "850px",
    backgroundColor: "#e7fce0",
    alignItems: "center",
    alignContent: "center",
    display: "flex",
    flexDirection: "column",
  },
  image: {
    flexGrow: 0,
    marginBottom: "20px",
    objectFit: "contain",
    position: "relative",
    top: "150px",
  },
  text: {
    //no number
    margin: "10px 0 0",
    color: "#19293b",
    position: "relative",
    top: "225px",
    width: 500,
    textAlign: "center",
    marginLeft: "auto",
    marginRight: "auto",
  },
  text1: {
    margin: "40px 0 0",
    color: "#19293b",
    position: "relative",
    top: "150px",
    width: 500,
    textAlign: "center",
    marginLeft: "auto",
    marginRight: "auto",
  },
  number: {
    position: "relative",
    top: "175px",
    marginLeft: "auto",
    marginRight: "auto",
    fontSize: "100px",
    color: "#19293b",
    width: "auto",
    height: "122px",
    fontWeight: "normal",
  },
  mock: {
    display: "flex",
    justifyContent: "space-around",
    position: "relative",
    top: "150px",
    width: "500px",
    marginTop: theme.spacing(5),
    fontWeight: 300,
  },
  job: {
    // marginLeft:theme.spacing()
  },
});

export type AqiProps = {
  step: number;
  number?: string;
};

const Aqi: React.FC<AqiProps> = ({ step, number }) => {
  const classes = useStyles();

  const workLocations: string[] = useSelector<
    greenState,
    greenState["worklocations"]
  >((state) => {
    return state.worklocations;
  });

  const aqis = ["830", "920"];

  const jobs = workLocations.slice(0, 2).map((temp, index) => (
    <div className={classes.job}>
      <Count city={temp} number={aqis[index % 2]} />
    </div>
  ));
  return (
    <div className={classes.root}>
      <img className={classes.image} src={AqiData[step - 1].img} />
      {number && step !== 2 && (
        <Typography className={classes.number} variant="h3">
          {number}
        </Typography>
      )}
      {number && step === 2 && <div className={classes.mock}>{jobs}</div>}
      <Typography
        className={!number ? classes.text : classes.text1}
        variant="h3"
      >
        {number ? AqiData[step - 1].textWithNum : AqiData[step - 1].textNoNum}
      </Typography>
    </div>
  );
};

export default Aqi;

import React, { useState } from "react";
import { makeStyles } from "@material-ui/styles";
import { Typography, Input } from "@material-ui/core";
import Aqi from "../../molecules/AQI/Aqi";
import StepBar from "../../molecules/StepBar/StepBar";
import Navicons from "../../atoms/dashboardicons/Navicons";
import { Button } from "../../atoms/Button/Button";
import ArrowBackIcon from "@material-ui/icons/ArrowBack";
import { useDispatch, useSelector } from "react-redux";
import { greenState } from "../../../store/reducers";
import { LANDING_PAGE_MESSAGE } from "../../../Constants";
import theme from "../../../theme/theme";
import IconInputField from "../../atoms/IconInputField/iconindex";

type JobSkillScreen = {
  status: number;
  step?: number;
  numValue?: string;
};
const useStyles = makeStyles({
  parentDiv: {
    display: "flex",
    overflowX: "hidden",
    overflowY: "hidden",
  },
  root: {
    width: "590px",
    height: "100px",
    flexGrow: 65,
  },
  stepBar: {
    marginLeft: "15px",
    marginTop: "8px",
  },
  typoText: {
    width: "550px",
    height: "84px",
    marginTop: "81px",
    marginLeft: "80px",
    marginRight: "210px",
    fontSize: "32px",
    fontWeight: 600,
    lineHeight: "1.31",
  },
  aqiBoard: {
    overflowX: "hidden",
    overflowY: "hidden",
    height: "690px",
  },
  detailedTypo: {
    width: "304px",
    height: "26px",
    marginTop: "0px",
    marginLeft: "80px",
    fontWeight: 600,
  },
  inputField: {
    width: "500px",
    height: "60px",
    marginLeft: "80px",
    marginTop: "20px",
    border: "1px solid #9bbdcb",
    borderRadius: "10px",
  },
  buttonLeft: {
    width: "136px",
    height: "50px",
    marginLeft: "80px",
    marginTop: "30px",
    color: "white",
    fontFamily: "Montserrat",
    borderRadius: "15px",
    textTransform: "none",
  },
  buttonRight: {
    width: "136px",
    height: "50px",
    marginLeft: "20px",
    marginTop: "30px",
    fontFamily: "Montserrat",
    borderRadius: "15px",
    textTransform: "none",
  },
  backButton: {
    height: "50px",
    width: "85px",
    color: "#9bbdcb",
    marginLeft: "80px",
    marginBottom: "0px",
    marginTop: "30px",
    textTransform: "none",
    visibility: "hidden",
  },
  icons: {
    color: "#9bbdcb",
    marginLeft: "20px",
    marginTop: "18px",
    marginBottom: "18px",
  },
  hr: {
    border: "0.1px solid",
    borderColor: theme.palette.grey["100"],
    marginTop: theme.spacing(6),
  },
});

const JobLocation: React.FC<JobSkillScreen> = ({ status }) => {
  const [aqiValue, setaqiValue] = useState("");

  const dispatch = useDispatch();

  const handleClick = () => {
    dispatch({ type: "SET_STEP", payload: "2" });
  };

  const inputFieldHandler = (event: any) => {
    if (event.key === "Enter") {
      dispatch({ type: "SET_LOCATION", payload: event.target.value });
      setaqiValue("894");
    }
  };

  const classes = useStyles();
  return (
    <>
      <div className={classes.parentDiv}>
        <div className={classes.stepBar}>
          <StepBar status={status}></StepBar>
          <hr className={classes.hr} />

          <Typography className={classes.typoText} variant="h2">
            {" "}
            {LANDING_PAGE_MESSAGE.LANDING_PAGE_COMMUTE_HEADING}{" "}
          </Typography>
          <Button
            className={classes.backButton}
            startIcon={<ArrowBackIcon />}
            name="Back"
            variant="text"
          />
          <Typography className={classes.detailedTypo} variant="h5">
            {LANDING_PAGE_MESSAGE.USER_LOCATION_HEADING}
          </Typography>
          <div className={classes.inputField}>
            <IconInputField
              placeholder={"Enter your location"}
              onkeydown={inputFieldHandler}
              icon={<Navicons className={classes.icons} name={"location"} />}
              inputProps={{ disableUnderline: true }}
            />
          </div>
          <Button
            className={classes.buttonLeft}
            name="Next"
            variant="contained"
            color="primary"
            onClick={handleClick}
          />
          <Button
            className={classes.buttonRight}
            name="Skip"
            variant="outlined"
            color="primary"
            onClick={handleClick}
          />
        </div>
        <div className={classes.aqiBoard}>
          <Aqi step={status} number={aqiValue}></Aqi>
        </div>
      </div>
    </>
  );
};

export default JobLocation;

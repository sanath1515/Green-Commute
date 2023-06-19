import React, { useEffect, useState } from "react";
import { makeStyles } from "@material-ui/styles";
import { Typography } from "@material-ui/core";
import Aqi from "../../molecules/AQI/Aqi";
import StepBar from "../../molecules/StepBar/StepBar";
import Navicons from "../../atoms/dashboardicons/Navicons";
import ArrowBackIcon from "@material-ui/icons/ArrowBack";
import { Button } from "../../atoms/Button/Button";
import { useDispatch, useSelector } from "react-redux";
import ChipInput from "../../molecules/ChipInput/ChipInput";
import { greenState } from "../../../store/reducers";
import { LANDING_PAGE_MESSAGE, PLACEHOLDERS } from "../../../Constants";
import IconInputField from "../../atoms/IconInputField/iconindex";
import theme from "../../../theme/theme";

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
  },
  icons: {
    color: "#9bbdcb",
    marginLeft: "20px",
    marginTop: "18px",
    marginBottom: "18px",
  },
  chips: {
    backgroundColor: "white",
    border: "1px solid #5ac568",
    borderRadius: "5px",
    marginLeft: "5px",
    fontFamily: "Montserrat",
    fontSize: "15px",
  },
  hr: {
    border: "0.1px solid",
    borderColor: theme.palette.grey["100"],
    marginTop: theme.spacing(6),
  },
});

const WorkLocation: React.FC<JobSkillScreen> = ({ status, step, numValue }) => {
  const classes = useStyles();

  let underlineFlag: boolean = true;
  const dispatch = useDispatch();

  const [inputValue, setinputValue] = useState("");
  const [aqiIndex, setaqiIndex] = useState<number>(1);
  const [aqiCount, setaqiCount] = useState<string>("");
  const [placeholder, setPlaceholder] = useState<string>(
    PLACEHOLDERS.WORK_LOCATION
  );
  const [arrayInput, setArrayInput] = useState<Array<string>>([]);

  useEffect(() => {
    dispatch({ type: "SET_WORK_LOCATIONS", payload: arrayInput });
    if (arrayInput.length > 1) {
      setaqiIndex(2);
      setaqiCount("1");
    }
  }, [arrayInput, placeholder]);

  const handleInputChange = (event: any) => {
    setinputValue(event.target.value);
  };

  const handleKeyDown = (event: any) => {
    if (event.key === "Enter") {
      const newSelectedItem = [...arrayInput];
      const duplicatedValues = newSelectedItem.indexOf(
        event.target.value.trim()
      );

      if (duplicatedValues !== -1) {
        setinputValue("");
        return;
      }
      newSelectedItem.push(event.target.value.trim());
      setArrayInput(newSelectedItem);

      setinputValue("");
      if (newSelectedItem.length > 0) {
        setPlaceholder("");
      }
    }
    if (arrayInput.length && !inputValue.length && event.key === "Backspace") {
      setArrayInput(arrayInput.slice(0, arrayInput.length - 1));
    }
  };

  const handleDelete = (item: any) => {
    const newSelectedItem = [...arrayInput];
    newSelectedItem.splice(newSelectedItem.indexOf(item), 1);
    setArrayInput(newSelectedItem);
  };
  const handleBackClick = () => {
    dispatch({ type: "SET_STEP", payload: "1" });
  };

  const handleClick = () => {
    dispatch({ type: "SET_STEP", payload: "3" });
  };

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
            onClick={handleBackClick}
            variant="text"
          />

          <Typography className={classes.detailedTypo} variant="h5">
            {LANDING_PAGE_MESSAGE.JOB_LOCATION_HEADING}
          </Typography>
          <div className={classes.inputField}>
            <IconInputField
              icon={<Navicons className={classes.icons} name="location" />}
              value={inputValue}
              variant="filled"
              size="medium"
              color="primary"
              placeholder={placeholder}
              inputProps={{
                disableUnderline: { underlineFlag },
                startAdornment: arrayInput?.map((item) => (
                  <ChipInput
                    classname={classes.chips}
                    key={item}
                    onDelete={handleDelete}
                    label={item}
                  />
                )),
                onChange: (event: any) => {
                  handleInputChange(event);
                },
                onKeyDown: handleKeyDown,
                onBlur: handleKeyDown,
              }}
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
          <Aqi step={aqiIndex} number={aqiCount}></Aqi>
        </div>
      </div>
    </>
  );
};

export default WorkLocation;

import React from "react";
import { makeStyles } from "@material-ui/styles";
import { Typography } from "@material-ui/core";
import IconInputField from "../../atoms/IconInputField/iconindex";
import Aqi from "../../molecules/AQI/Aqi";
import StepBar from "../../molecules/StepBar/StepBar";
import { LANDING_PAGE_MESSAGE } from "../../../Constants";
import Navicons from "../../atoms/dashboardicons/Navicons";
import ArrowBackIcon from "@material-ui/icons/ArrowBack";
import { Button } from "../../atoms/Button/Button";
import useJobSkills from "../../customhooks/useJobSkills";
import ChipInput from "../../molecules/ChipInput/ChipInput";
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
    visibility: "hidden",
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

const JobSkills: React.FC<JobSkillScreen> = ({ status }) => {
  const {
    inputValue,
    arrayInput,
    aqiCount,
    handleInputChange,
    handleFinishClick,
    handleKeyDown,
    handleDelete,
    handleBackClick,
    placeholder,
  } = useJobSkills();

  let underlineFlag: boolean = true;
  const classes = useStyles();
  return (
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
          onClick={handleBackClick}
          name="Back"
          variant="text"
        />

        <Typography className={classes.detailedTypo} variant="h5">
          {LANDING_PAGE_MESSAGE.JOB_SKILLS_HEADING}
        </Typography>
        <div className={classes.inputField}>
          <IconInputField
            icon={<Navicons className={classes.icons} name="work" />}
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
          name="Finish"
          variant="contained"
          color="primary"
          onClick={handleFinishClick}
        />
        <Button
          className={classes.buttonRight}
          name="Skip"
          variant="outlined"
          color="primary"
        />
      </div>
      <div className={classes.aqiBoard}>
        <Aqi step={status} number={aqiCount}></Aqi>
      </div>
    </div>
  );
};
export default JobSkills;

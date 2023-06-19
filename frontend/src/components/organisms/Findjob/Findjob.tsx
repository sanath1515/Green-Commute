import { makeStyles } from "@material-ui/core";
import React, { useState } from "react";
import IconInputField from "../../atoms/IconInputField/iconindex";
import SearchIcon from "@material-ui/icons/Search";
import { ButtonIcon } from "../../atoms/Buttonicon/Buttonicon";
import Navicons from "../../atoms/dashboardicons/Navicons";
import { useDispatch } from "react-redux";
import { useHistory } from "react-router";
import { PATHS } from "../../../Constants";

export type prop1 = {
  Skill?: string;
  Location?: string;
  ClassName?: string;
};
const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    alignItems: "center",
    width: 500,
  },
  line: {
    height: 40,
    color: theme.palette.grey["600"],
    border: "0.1px solid",
    marginRight: theme.spacing(2),
  },
  btn: {
    color: "white",
    height: 50,
    borderTopLeftRadius: 0,
    borderTopRightRadius: 10,
    borderBottomLeftRadius: 0,
    borderBottomRightRadius: 10,
    width: 70,
  },
}));

const Findjob: React.FC<prop1> = ({ Skill, Location, ClassName }) => {
  const classes = useStyles();
  const dispatch = useDispatch();
  const history = useHistory();

  const [skill, setSkill] = useState<string>(Skill!);
  const [location, setLocation] = useState<string>(Location!);

  const onchangeHandler1 = (event: any) => {
    setSkill(event.target.value);
  };

  const onchangeHandler2 = (event: any) => {
    setLocation(event.target.value);
  };

  const clickHandler = (event: any) => {
    dispatch({
      type: "SET_SEARCH_SKILL",
      payload: skill,
    });
    dispatch({
      type: "SET_SEARCH_LOCATION",
      payload: location,
    });
    history.push(PATHS.ADVANCED_SEARCH);
  };

  return (
    <div className={ClassName}>
      <IconInputField
        icon={<Navicons name="work" />}
        placeholder="Search skills"
        value={skill}
        onChange={onchangeHandler1}
        inputProps={{
          disableUnderline: "underlineFlag",
        }}
      />
      <div className={classes.line}></div>
      <IconInputField
        icon={<Navicons name="location" />}
        placeholder="Location"
        value={location}
        onChange={onchangeHandler2}
        inputProps={{
          disableUnderline: "underlineFlag",
        }}
      />
      <ButtonIcon
        variant="contained"
        color="primary"
        className={classes.btn}
        onClick={clickHandler}
      >
        <SearchIcon />
      </ButtonIcon>
    </div>
  );
};

export default Findjob;

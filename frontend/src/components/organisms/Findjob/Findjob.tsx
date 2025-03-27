import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { Typography, Divider, useTheme } from "@mui/material";
import { styled } from "@mui/material/styles";
import SearchIcon from "@mui/icons-material/Search";
import IconInputField from "../../atoms/IconInputField/iconindex";
import Navicons from "../../atoms/dashboardicons/Navicons";
import { ButtonIcon } from "../../atoms/Buttonicon/Buttonicon";
import { getAllJobsPython } from "../../../axios/ApiProvider";
import { jobDataProp, PATHS } from "../../../Constants";
import { greenState } from "../../../store/reducers";

// Props type
export type FindJobProps = {
  Skill?: string;
  Location?: string;
  ClassName?: string;
  OnClick?: (jobs: jobDataProp[]) => void;
};

// Styled components
const Root = styled("div")({
  display: "flex",
  alignItems: "center",
  width: 500,
});

const StyledButton = styled(ButtonIcon)(({ theme }) => ({
  color: "white",
  height: 50,
  borderTopLeftRadius: 0,
  borderTopRightRadius: 10,
  borderBottomLeftRadius: 0,
  borderBottomRightRadius: 10,
  width: 70,
}));

const Findjob: React.FC<FindJobProps> = ({ Skill = "", Location = "", ClassName, OnClick }) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const theme = useTheme();

  const [skill, setSkill] = useState<string>(Skill);
  const [location, setLocation] = useState<string>(Location);

  const resume_name = useSelector<greenState, greenState["resumeName"]>(
    (state) => state.resumeName
  );

  const handleSkillChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSkill(event.target.value);
  };

  const handleLocationChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setLocation(event.target.value);
  };

  const handleClick = () => {
    dispatch({ type: "SET_SEARCH_SKILL", payload: skill });
    dispatch({ type: "SET_SEARCH_LOCATION", payload: location });

    getAllJobsPython(skill, resume_name, OnClick);
    navigate(PATHS.ADVANCED_SEARCH);
  };

  return (
    <Root className={ClassName}>
      <IconInputField
        icon={<Navicons name="work" />}
        placeholder="Search skills"
        value={skill}
        onChange={handleSkillChange}
        inputProps={{ disableUnderline: true }}
      />
      {/* Uncomment to use Location Field */}
      {/* 
      <Divider orientation="vertical" flexItem sx={{ mx: 2, height: 40, borderColor: theme.palette.grey[600] }} />
      <IconInputField
        icon={<Navicons name="location" />}
        placeholder="Location"
        value={location}
        onChange={handleLocationChange}
        inputProps={{ disableUnderline: true }}
      />
      */}
      <StyledButton
        variant="contained"
        color="primary"
        onClick={handleClick}
      >
        <SearchIcon />
      </StyledButton>
    </Root>
  );
};

export default Findjob;

import React, { useState } from "react";
import {
  Typography,
  Divider,
  Box,
  useTheme,
} from "@mui/material";
import { styled } from "@mui/material/styles";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import Aqi from "../../molecules/AQI/Aqi";
import StepBar from "../../molecules/StepBar/StepBar";
import Navicons from "../../atoms/dashboardicons/Navicons";
import { Button } from "../../atoms/Button/Button";
import { useDispatch } from "react-redux";
import { LANDING_PAGE_MESSAGE } from "../../../Constants";
import IconInputField from "../../atoms/IconInputField/iconindex";

// Styled Components
const Root = styled(Box)({
  display: "flex",
  overflowX: "hidden",
  overflowY: "hidden",
});

const StepWrapper = styled(Box)({
  width: 590,
  height: 100,
  flexGrow: 65,
});

const AQIWrapper = styled(Box)({
  overflowX: "hidden",
  overflowY: "hidden",
  height: 690,
});

const InputContainer = styled(Box)({
  width: 500,
  height: 60,
  marginLeft: 80,
  marginTop: 20,
  border: "1px solid #9bbdcb",
  borderRadius: 10,
});

const JobLocation: React.FC<{ status: number }> = ({ status }) => {
  const [aqiValue, setaqiValue] = useState("");
  const dispatch = useDispatch();
  const theme = useTheme();

  const handleClick = () => {
    dispatch({ type: "SET_STEP", payload: "2" });
  };

  const inputFieldHandler = (event: React.KeyboardEvent<HTMLInputElement>) => {
    if (event.key === "Enter") {
      dispatch({ type: "SET_LOCATION", payload: (event.target as HTMLInputElement).value });
      setaqiValue("894");
    }
  };

  return (
    <Root>
      <StepWrapper>
        <StepBar status={status} />
        <Divider sx={{ mt: 6, borderColor: theme.palette.grey[100] }} />

        <Typography
          variant="h2"
          sx={{
            width: 550,
            height: 84,
            mt: 10,
            ml: 10,
            fontSize: 32,
            fontWeight: 600,
            lineHeight: 1.31,
          }}
        >
          {LANDING_PAGE_MESSAGE.LANDING_PAGE_COMMUTE_HEADING}
        </Typography>

        <Button
          variant="text"
          name="Back"
          startIcon={<ArrowBackIcon />}
          sx={{
            height: 50,
            width: 85,
            color: "#9bbdcb",
            ml: 10,
            mt: 3,
            textTransform: "none",
            visibility: "hidden",
          }}
        />

        <Typography
          variant="h5"
          sx={{
            width: 304,
            height: 26,
            ml: 10,
            fontWeight: 600,
          }}
        >
          {LANDING_PAGE_MESSAGE.USER_LOCATION_HEADING}
        </Typography>

        <InputContainer>
          <IconInputField
            placeholder={"Enter your location"}
            onKeyDown={inputFieldHandler}
            icon={<Navicons name="location" sx={{ color: "#9bbdcb", ml: 2, my: 2 }} />}
            inputProps={{ disableUnderline: true }}
          />
        </InputContainer>

        <Box sx={{ display: "flex", ml: 10, mt: 3 }}>
          <Button
            variant="contained"
            color="primary"
            name="Next"
            sx={{
              width: 136,
              height: 50,
              color: "white",
              fontFamily: "Montserrat",
              borderRadius: "15px",
              textTransform: "none",
            }}
            onClick={handleClick}
          />
          <Button
            variant="outlined"
            color="primary"
            name="Skip"
            sx={{
              width: 136,
              height: 50,
              ml: 2,
              fontFamily: "Montserrat",
              borderRadius: "15px",
              textTransform: "none",
            }}
            onClick={handleClick}
          />
        </Box>
      </StepWrapper>

      <AQIWrapper>
        <Aqi step={status} number={aqiValue} />
      </AQIWrapper>
    </Root>
  );
};

export default JobLocation;

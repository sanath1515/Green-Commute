import React from "react";
import {
  Typography,
  Box,
  Divider,
  useTheme,
  InputAdornment,
} from "@mui/material";
import { styled } from "@mui/material/styles";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import Aqi from "../../molecules/AQI/Aqi";
import StepBar from "../../molecules/StepBar/StepBar";
import Navicons from "../../atoms/dashboardicons/Navicons";
import { Button } from "../../atoms/Button/Button";
import IconInputField from "../../atoms/IconInputField/iconindex";
import ChipInput from "../../molecules/ChipInput/ChipInput";
import { LANDING_PAGE_MESSAGE } from "../../../Constants";
import useJobSkills from "../../customhooks/useJobSkills";

// Styled
const Container = styled(Box)({
  display: "flex",
  overflowX: "hidden",
  overflowY: "hidden",
});

const StepSection = styled(Box)({
  width: 590,
  flexGrow: 1,
});

const AQISection = styled(Box)({
  overflowX: "hidden",
  overflowY: "hidden",
  height: 690,
});

const InputWrapper = styled(Box)({
  width: 500,
  height: 60,
  marginLeft: 80,
  marginTop: 20,
  border: "1px solid #9bbdcb",
  borderRadius: 10,
});

const StyledChip = styled(ChipInput)(({ theme }) => ({
  backgroundColor: "white",
  border: "1px solid #5ac568",
  borderRadius: 5,
  marginLeft: 5,
  fontFamily: "Montserrat",
  fontSize: 15,
}));

const JobSkills: React.FC<{ status: number }> = ({ status }) => {
  const theme = useTheme();
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

  return (
    <Container>
      <StepSection>
        <StepBar status={status} />
        <Divider sx={{ mt: 6, borderColor: theme.palette.grey[100] }} />

        <Typography
          variant="h2"
          sx={{
            width: 550,
            height: 84,
            mt: 10,
            ml: 10,
            mr: 30,
            fontSize: 32,
            fontWeight: 600,
            lineHeight: 1.31,
          }}
        >
          {LANDING_PAGE_MESSAGE.LANDING_PAGE_COMMUTE_HEADING}
        </Typography>

        <Button
          startIcon={<ArrowBackIcon />}
          onClick={handleBackClick}
          name="Back"
          variant="text"
          sx={{
            height: 50,
            width: 85,
            color: "#9bbdcb",
            ml: 10,
            mt: 3,
            textTransform: "none",
          }}
        />

        <Typography variant="h5" sx={{ width: 304, ml: 10, fontWeight: 600 }}>
          {LANDING_PAGE_MESSAGE.JOB_SKILLS_HEADING}
        </Typography>

        <InputWrapper>
          <IconInputField
            icon={<Navicons name="work" sx={{ color: "#9bbdcb", ml: 2, my: 2 }} />}
            placeholder={placeholder}
            value={inputValue}
            variant="filled"
            size="medium"
            color="primary"
            onChange={handleInputChange}
            onKeyDown={handleKeyDown}
            onBlur={handleKeyDown}
            inputProps={{
              disableUnderline: true,
              startAdornment: arrayInput?.map((item) => (
                <StyledChip
                  key={item}
                  label={item}
                  onDelete={() => handleDelete(item)}
                />
              )),
            }}
          />
        </InputWrapper>

        <Box sx={{ display: "flex", ml: 10, mt: 3 }}>
          <Button
            variant="contained"
            color="primary"
            name="Finish"
            onClick={handleFinishClick}
            sx={{
              width: 136,
              height: 50,
              fontFamily: "Montserrat",
              borderRadius: "15px",
              textTransform: "none",
              color: "white",
            }}
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
              visibility: "hidden",
              textTransform: "none",
            }}
          />
        </Box>
      </StepSection>

      <AQISection>
        <Aqi step={status} number={aqiCount} />
      </AQISection>
    </Container>
  );
};

export default JobSkills;

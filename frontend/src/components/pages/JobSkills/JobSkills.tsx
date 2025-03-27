import React from "react";
import { Box, Typography, Divider } from "@mui/material";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import { Button } from "../../atoms/Button/Button";
import IconInputField from "../../atoms/IconInputField/iconindex";
import Aqi from "../../molecules/AQI/Aqi";
import StepBar from "../../molecules/StepBar/StepBar";
import Navicons from "../../atoms/dashboardicons/Navicons";
import ChipInput from "../../molecules/ChipInput/ChipInput";
import { LANDING_PAGE_MESSAGE } from "../../../Constants";
import useJobSkills from "../../customhooks/useJobSkills";

const JobSkills: React.FC<{ status: number }> = ({ status }) => {
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
    <Box display="flex" overflow="hidden">
      <Box sx={{ ml: "15px", mt: "8px" }}>
        <StepBar status={status} />
        <Divider sx={{ borderColor: "grey.100", mt: 6 }} />
        <Typography
          variant="h2"
          sx={{
            width: "550px",
            height: "84px",
            mt: "81px",
            ml: "80px",
            mr: "210px",
            fontSize: "32px",
            fontWeight: 600,
            lineHeight: "1.31",
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
            height: "50px",
            width: "85px",
            color: "grey.600",
            ml: "80px",
            mt: "30px",
            textTransform: "none",
          }}
        />

        <Typography
          variant="h5"
          sx={{
            width: "304px",
            height: "26px",
            mt: "0px",
            ml: "80px",
            fontWeight: 600,
          }}
        >
          {LANDING_PAGE_MESSAGE.JOB_SKILLS_HEADING}
        </Typography>

        <Box
          sx={{
            width: "500px",
            height: "60px",
            ml: "80px",
            mt: "20px",
            border: "1px solid #9bbdcb",
            borderRadius: "10px",
          }}
        >
          <IconInputField
            icon={<Navicons sx={{ color: "#9bbdcb", ml: 2, my: 1.5 }} name="work" />}
            value={inputValue}
            variant="filled"
            size="medium"
            color="primary"
            placeholder={placeholder}
            inputProps={{
              disableUnderline: true,
              startAdornment: arrayInput.map((item: string) => (
                <ChipInput
                  key={item}
                  className="custom-chip"
                  onDelete={handleDelete}
                  label={item}
                  sx={{
                    backgroundColor: "white",
                    border: "1px solid #5ac568",
                    borderRadius: "5px",
                    ml: 0.5,
                    fontFamily: "Montserrat",
                    fontSize: "15px",
                  }}
                />
              )),
              onChange: (event: any) => handleInputChange(event),
              onKeyDown: handleKeyDown,
              onBlur: handleKeyDown,
            }}
          />
        </Box>

        <Box display="flex" flexDirection="row">
          <Button
            name="Finish"
            variant="contained"
            color="primary"
            onClick={handleFinishClick}
            sx={{
              width: "136px",
              height: "50px",
              ml: "80px",
              mt: "30px",
              color: "white",
              fontFamily: "Montserrat",
              borderRadius: "15px",
              textTransform: "none",
            }}
          />
          <Button
            name="Skip"
            variant="outlined"
            color="primary"
            sx={{
              width: "136px",
              height: "50px",
              ml: "20px",
              mt: "30px",
              fontFamily: "Montserrat",
              borderRadius: "15px",
              textTransform: "none",
              visibility: "hidden",
            }}
          />
        </Box>
      </Box>

      <Box sx={{ height: "690px", overflow: "hidden" }}>
        <Aqi step={status} number={aqiCount} />
      </Box>
    </Box>
  );
};

export default JobSkills;

import React, { useEffect, useState } from "react";
import { Box, Typography } from "@mui/material";
import Aqi from "../../molecules/AQI/Aqi";
import StepBar from "../../molecules/StepBar/StepBar";
import Navicons from "../../atoms/dashboardicons/Navicons";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import { Button } from "../../atoms/Button/Button";
import { useDispatch } from "react-redux";
import ChipInput from "../../molecules/ChipInput/ChipInput";
import { greenState } from "../../../store/reducers";
import { LANDING_PAGE_MESSAGE, PLACEHOLDERS } from "../../../Constants";
import IconInputField from "../../atoms/IconInputField/iconindex";

type JobSkillScreen = {
  status: number;
  step?: number;
  numValue?: string;
};

const WorkLocation: React.FC<JobSkillScreen> = ({ status }) => {
  const dispatch = useDispatch();
  const [inputValue, setInputValue] = useState("");
  const [aqiIndex, setAqiIndex] = useState<number>(1);
  const [aqiCount, setAqiCount] = useState<string>("");
  const [placeholder, setPlaceholder] = useState<string>(PLACEHOLDERS.WORK_LOCATION);
  const [arrayInput, setArrayInput] = useState<string[]>([]);

  useEffect(() => {
    dispatch({ type: "SET_WORK_LOCATIONS", payload: arrayInput });
    if (arrayInput.length > 1) {
      setAqiIndex(2);
      setAqiCount("1");
    }
  }, [arrayInput, placeholder]);

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue(event.target.value);
  };

  const handleKeyDown = (event: React.KeyboardEvent<HTMLInputElement>) => {
    if (event.key === "Enter") {
      const trimmed = inputValue.trim();
      if (trimmed && !arrayInput.includes(trimmed)) {
        setArrayInput([...arrayInput, trimmed]);
        setInputValue("");
        setPlaceholder("");
      }
    }

    if (!inputValue && event.key === "Backspace") {
      setArrayInput(arrayInput.slice(0, arrayInput.length - 1));
    }
  };

  const handleDelete = (item: string) => {
    const updated = arrayInput.filter((i) => i !== item);
    setArrayInput(updated);
  };

  const handleBackClick = () => {
    dispatch({ type: "SET_STEP", payload: "1" });
  };

  const handleNextClick = () => {
    dispatch({ type: "SET_STEP", payload: "3" });
  };

  return (
    <Box display="flex">
      <Box flex={1} px={5}>
        <StepBar status={status} />
        <Box borderTop="1px solid" borderColor="grey.100" mt={6} mb={4} />
        <Typography variant="h2" fontSize="32px" fontWeight={600} ml={10}>
          {LANDING_PAGE_MESSAGE.LANDING_PAGE_COMMUTE_HEADING}
        </Typography>

        <Button
          startIcon={<ArrowBackIcon />}
          name="Back"
          variant="text"
          className=""
          onClick={handleBackClick}
          sx={{
            ml: 10,
            mt: 3,
            color: "#9bbdcb",
            height: 50,
            width: 85,
            textTransform: "none",
          }}
        />

        <Typography variant="h5" fontWeight={600} ml={10}>
          {LANDING_PAGE_MESSAGE.JOB_LOCATION_HEADING}
        </Typography>

        <Box
          sx={{
            ml: 10,
            mt: 2,
            width: 500,
            height: 60,
            border: "1px solid #9bbdcb",
            borderRadius: "10px",
            display: "flex",
            alignItems: "center",
          }}
        >
          <IconInputField
            icon={<Navicons name="location" sx={{ color: "#9bbdcb", mx: 2 }} />}
            value={inputValue}
            variant="filled"
            size="medium"
            color="primary"
            placeholder={placeholder}
            onChange={handleInputChange}
            onKeyDown={handleKeyDown}
            inputProps={{
              disableUnderline: true,
              startAdornment: arrayInput.map((item) => (
                <ChipInput
                  key={item}
                  label={item}
                  onDelete={() => handleDelete(item)}
                  className=""
                  sx={{
                    backgroundColor: "white",
                    border: "1px solid #5ac568",
                    borderRadius: "5px",
                    fontSize: "15px",
                    fontFamily: "Montserrat",
                    ml: 1,
                  }}
                />
              )),
            }}
          />
        </Box>

        <Box display="flex" ml={10} mt={3}>
          <Button
            name="Next"
            variant="contained"
            color="primary"
            onClick={handleNextClick}
            sx={{
              width: 136,
              height: 50,
              borderRadius: "15px",
              fontFamily: "Montserrat",
              textTransform: "none",
              mr: 2,
            }}
          />
          <Button
            name="Skip"
            variant="outlined"
            color="primary"
            onClick={handleNextClick}
            sx={{
              width: 136,
              height: 50,
              borderRadius: "15px",
              fontFamily: "Montserrat",
              textTransform: "none",
            }}
          />
        </Box>
      </Box>

      <Box flex={1}>
        <Aqi step={aqiIndex} number={aqiCount} />
      </Box>
    </Box>
  );
};

export default WorkLocation;

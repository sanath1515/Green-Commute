import React from "react";
import { Chip, Stack, useTheme } from "@mui/material";
import { grey } from "@mui/material/colors";
import CloseOutlinedIcon from "@mui/icons-material/CloseOutlined";
import { useDispatch, useSelector } from "react-redux";
import { optionsType } from "../../../Constants";
import { greenState } from "../../../store/reducers";

export type ChipProps = {
  label?: string;
  className?: string;
};

const Chips: React.FC<ChipProps> = ({ label, className }) => {
  const theme = useTheme();
  const dispatch = useDispatch();

  const options = useSelector<greenState, greenState["options"]>(
    (state) => state.options
  );

  const opsValue = useSelector<greenState, greenState["optionValue"]>(
    (state) => state.optionValue
  );

  const removeValue = (arr: string[], value: string) => {
    const index = arr.indexOf(value);
    if (index > -1) {
      arr.splice(index, 1);
    }
  };

  const DeleteHandler = () => {
    removeValue(options.datePosted, label!);
    removeValue(options.distance, label!);
    removeValue(options.experienceLevel, label!);
    removeValue(options.transport, label!);
    removeValue(options.jobType, label!);

    dispatch({ type: "SET_OPTIONS", payload: options });
    dispatch({ type: "SET_OPTIONS_VALUE", payload: !opsValue });
  };

  return (
    <Stack direction="row" spacing={1} className={className}>
      <Chip
        label={label}
        onDelete={DeleteHandler}
        variant="outlined"
        color="success"
        sx={{
          backgroundColor: grey[50],
          color: theme.palette.primary.main,
          borderRadius: 2,
          borderColor: theme.palette.primary.main,
          fontSize: "15px",
        }}
        deleteIcon={<CloseOutlinedIcon sx={{ fontSize: "14px" }} />}
      />
    </Stack>
  );
};

export default Chips;

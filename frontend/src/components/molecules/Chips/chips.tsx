import React from "react";
import Chip from "@mui/material/Chip";
import Stack from "@mui/material/Stack";
import { grey } from "@mui/material/colors";
import theme from "../../../theme/theme";
import { useDispatch, useSelector } from "react-redux";
import { optionsType } from "../../../Constants";
import { greenState } from "../../../store/reducers";
import { makeStyles } from "@material-ui/core/styles";
import CloseOutlinedIcon from "@mui/icons-material/CloseOutlined";

export type chipProps = {
  label?: string;
  className?: string;
};

const useStyles = makeStyles({
  root: {
    fontSize: "15px",
  },
  " & .css-hk6fit-MuiButtonBase-root-MuiChip-root ": {
    fontSize: "15px",
    color: "red",
  },
});
const chips: React.FC<chipProps> = ({ label, className }) => {
  const dispatch = useDispatch();
  const options: optionsType = useSelector<greenState, greenState["options"]>(
    (state) => {
      return state.options;
    }
  );

  const opsValue: boolean = useSelector<greenState, greenState["optionValue"]>(
    (state) => {
      return state.optionValue;
    }
  );

  const removeValue = (arr: string[], value: string) => {
    let index = arr.indexOf(value);
    if (index > -1) {
      arr.splice(index, 1);
    }
  };
  const DeleteHandler = (event: any) => {
    removeValue(options.datePosted, label!);
    removeValue(options.distance, label!);
    removeValue(options.experienceLevel, label!);
    removeValue(options.transport, label!);
    removeValue(options.jobType, label!);

    dispatch({ type: "SET_OPTIONS", payload: options });
    dispatch({ type: "SET_OPTIONS_VALUE", payload: !opsValue });
  };
  const classes = useStyles();

  return (
    <Stack direction="row" spacing={1} className={className}>
      <Chip
        label={label}
        style={{
          backgroundColor: grey[50],
          color: theme.palette.primary.main,
          borderRadius: 10,
          borderColor: theme.palette.primary.main,
        }}
        variant="outlined"
        color="success"
        onDelete={DeleteHandler}
        deleteIcon={
          <CloseOutlinedIcon
            sx={{ fontSize: "10px" }}
            className={classes.root}
          />
        }
      />
    </Stack>
  );
};
export default chips;

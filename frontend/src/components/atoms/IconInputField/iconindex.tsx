import { Grid, TextField } from "@material-ui/core";
import React from "react";
import PropTypes from "prop-types";
import { makeStyles } from "@material-ui/core/styles";
import theme from "../../../theme/theme";
const useStyles = makeStyles({
  underline: {
    "&&&:before": {
      borderBottom: "none",
    },
    "&&:after": {
      borderBottom: "none",
    },
  },
  text: {
    marginLeft: theme.spacing(2),
  },
  icon: {
    marginLeft: theme.spacing(2),
    marginRight: theme.spacing(3),
    marginTop: theme.spacing(0.5),
    color: theme.palette.grey["600"],
  },
  root: {
    display: "flex",
    alignItems: "center",
    flexWrap: "nowrap",
    overflow: "hidden",
  },
});
export type TextFieldProps = {
  icon?: PropTypes.ReactElementLike;
  placeholder?: string;
  value?: unknown;
  size?: "small" | "medium";
  onChange?: React.ChangeEventHandler<HTMLTextAreaElement | HTMLInputElement>;
  variant?: "outlined" | "standard" | "filled";
  color?: "primary" | "secondary";
  inputProps?: object;
  onkeydown?: any;
};

const IconInputField: React.FC<TextFieldProps> = ({
  icon,
  placeholder,
  size,
  value,
  onChange,
  variant,
  color,
  onkeydown,
  inputProps,
}) => {
  const classes = useStyles();
  return (
    <Grid container className={classes.root}>
      <Grid item className={classes.icon}>
        {icon}
      </Grid>
      <Grid item>
        <TextField
          fullWidth
          value={value}
          color={color}
          size={size}
          placeholder={placeholder}
          onChange={onChange}
          InputProps={inputProps}
          onKeyDown={onkeydown}
        />
      </Grid>
    </Grid>
  );
};
export default IconInputField;

import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import theme from "../../../theme/theme";
import { Typography } from "@material-ui/core";
import Avatar from "@mui/material/Avatar";

export type StepProps = {
  number: string;
  name: string;
  completed: boolean;
};

const useStyles = makeStyles({
  root: {
    display: "flex",
  },
  textFalse: {
    marginLeft: theme.spacing(2.5),
    marginTop: theme.spacing(1.5),
    color: theme.palette.grey[200],
  },
  textTrue: {
    marginLeft: theme.spacing(2.5),
    marginTop: theme.spacing(1.5),
  },
  avatar: {
    width: 40,
    height: 40,
  },
});

const Step: React.FC<StepProps> = ({ number, name, completed }) => {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <Avatar
        alt={number}
        src="sdbkvd"
        className={classes.avatar}
        sx={{
          backgroundColor: completed
            ? theme.palette.primary.main
            : theme.palette.grey[100],
          color: completed
            ? theme.palette.success.light
            : theme.palette.grey[200],
        }}
      />
      <Typography
        children={name}
        variant="h6"
        color="primary"
        className={completed ? classes.textTrue : classes.textFalse}
      />
    </div>
  );
};

export default Step;

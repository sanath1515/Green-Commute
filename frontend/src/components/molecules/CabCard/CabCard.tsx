import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import theme from "../../../theme/theme";
import { Typography } from "@material-ui/core";

export type CabCardProps = {
  img: string;
  name: string;
  cost: string;
};

const useStyles = makeStyles({
  root: {
    display: "flex",
    alignItems: "center",
  },
  col: {
    display: "flex",
    flexDirection: "column",
    marginLeft: theme.spacing(2.5),
    marginRight: theme.spacing(20),
    textAlign: "left",
  },
  name: {
    textTransform: "none",
    color: theme.palette.grey[700],
  },
  cost: {
    textTransform: "none",
    color: theme.palette.grey[200],
  },
  booknow: {
    color: theme.palette.primary.main,
    float: "right",
    fontWeight: 600,
  },
});

const CabCard: React.FC<CabCardProps> = ({ cost, img, name }) => {
  const classes = useStyles();
  const BOOKNOW = "Book now";
  return (
    <div className={classes.root}>
      <img src={img}></img>
      <div className={classes.col}>
        <Typography children={name} className={classes.name} variant="body1" />
        <Typography
          children={`Approx ${cost}`}
          className={classes.cost}
          variant="overline"
        />
      </div>
      <Typography
        children={BOOKNOW}
        variant="body1"
        className={classes.booknow}
      />
    </div>
  );
};

export default CabCard;

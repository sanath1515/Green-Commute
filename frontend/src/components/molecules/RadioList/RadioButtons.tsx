import * as React from "react";
import { makeStyles } from "@material-ui/core/styles";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import { Typography, Radio } from "@material-ui/core";
import { COMMUTE_ROUTES } from "../../../Constants";

const useStyles = makeStyles({
  root: {
    width: "100%",
    maxWidth: 360,
    borderRadius: 20,
  },
  typo: {
    width: "122px",
    height: "24px",
    paddingTop: "5px",
    paddingLeft: "0px",
    color: "#19293b",
    marginBottom: "5px",
  },
  list: {
    gap: "5px",
    padding: "1px 0",
    objectFit: "contain",
  },

  text: {
    width: "97px",
    height: "24px",

    paddingLeft: "5px",
    color: "#5f7381",
  },
  radio: {
    width: "20px",
    height: "20px",
    flexGrow: 0,
    objectFit: "contain",
    borderColor: "white",
    display: "flex",
    flexDirection: "row",
    justifyContent: "flex-start",
    alignItems: "center",
    gap: "5px",
    padding: "1px 0",
    marginBottom: "5px",
  },
});

const RadioButtons = () => {
  const classes = useStyles();

  return (
    <>
      <List>
        <Typography variant="subtitle2" className={classes.typo}>
          {COMMUTE_ROUTES.GREEN_COMMUTE}
        </Typography>
        <ListItem className={classes.list}>
          <Radio
            className={classes.radio}
            checked
            size="small"
            color="primary"
          />
          <Typography className={classes.text}>{COMMUTE_ROUTES.YES}</Typography>
        </ListItem>
        <ListItem className={classes.list}>
          <Radio className={classes.radio} size="small" color="primary" />
          <Typography variant="body2" className={classes.text}>
            {COMMUTE_ROUTES.NO}
          </Typography>
        </ListItem>
      </List>
    </>
  );
};

export default RadioButtons;

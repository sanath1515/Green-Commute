import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";

import Checkbox from "@material-ui/core/Checkbox";
import CheckBoxOutlinedIcon from "@material-ui/icons/CheckBoxOutlined";
import { COMMUTE_ROUTES } from "../../../Constants";
import { Typography } from "@material-ui/core";
import { CheckBoxOutlineBlankOutlined } from "@material-ui/icons";

const useStyles = makeStyles((theme) => ({
  root: {
    width: "100%",
    maxWidth: 360,
    backgroundColor: theme.palette.background.paper,
  },
  checkbox: {
    borderColor: "white",
    display: "flex",
    flexDirection: "row",
    justifyContent: "flex-start",
    alignItems: "center",
    gap: "5px",
    padding: "1px 0",
    marginBottom: "5px",
  },
  text: {
    color: "#5f7381",
    paddingLeft: "5px",
    marginBottom: "3px",
  },
  typo: {
    color: "#19293b",
    padding: "5px 0",
    marginLeft: "10px",
    marginBottom: "5px",
  },
  list: {
    gap: "5px",
    padding: "1px 0",
    objectFit: "contain",
    paddingLeft: "20px",
  },
}));

type CheckboxProps = {
  heading: string;
  listNames: Array<string>;
  onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
  flag?: boolean;
};

const CheckList = ({ heading, listNames, onChange, flag }: CheckboxProps) => {
  const classes = useStyles();

  return (
    <List className={classes.root}>
      <Typography variant="subtitle2" className={classes.typo}>
        {heading}
      </Typography>
      {COMMUTE_ROUTES.ARRAY_OF_FOUR.map((value) => {
        return (
          <ListItem key={value} className={classes.list}>
            <Checkbox
              className={classes.checkbox}
              edge="start"
              disableRipple
              size="small"
              value={listNames[value]}
              onChange={onChange}
              color="primary"
              checkedIcon={<CheckBoxOutlinedIcon />}
              icon={<CheckBoxOutlineBlankOutlined color="secondary" />}
            />

            <Typography variant="body2" className={classes.text}>
              {listNames[value]}
            </Typography>
          </ListItem>
        );
      })}
    </List>
  );
};

export default CheckList;

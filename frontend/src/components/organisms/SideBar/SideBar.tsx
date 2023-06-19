import { Divider, List, Toolbar } from "@material-ui/core";
import Drawer from "@mui/material/Drawer";
import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import SideBarItem from "../../molecules/SideBarItem/SideBarItem";
import theme from "../../../theme/theme";
import { GREENCOMMUTE, items1, items2 } from "../../../Constants";
import { useDispatch } from "react-redux";

const useStyles = makeStyles({
  root: {
    marginLeft: theme.spacing(3.75),
    marginRight: theme.spacing(3.75),
  },
  divider: {
    marginBottom: theme.spacing(4),
  },
  toolbar: {
    fontSize: 20,
    fontFamily: "Montserrat",
    color: theme.palette.primary.main,
    fontWeight: 600,
    margin: "auto",
    height: 65,
    marginTop: 0,
    marginBottom: 0,
  },
  listitem: {
    marginLeft: 12,
    marginRight: 8,
    width: 240,
    backgroundColor: "white",
    cursor: "pointer",
    // color: theme.palette.grey[600],
  },

  root1: {
    display: "flex",
    justifyContent: "evenly-spaced",
    paddingTop: theme.spacing(3.75),
    paddingBottom: theme.spacing(3.75),
    width: 240,
    borderRadius: 10,
    color: theme.palette.grey[600],
    marginTop: theme.spacing(2),
    marginBottom: theme.spacing(2),
  },
  active: {
    display: "flex",
    justifyContent: "evenly-spaced",
    paddingTop: theme.spacing(3.75),
    paddingBottom: theme.spacing(3.75),
    width: 240,
    borderRadius: 10,
    backgroundColor: theme.palette.grey[400],
    color: theme.palette.primary.main,
    marginTop: theme.spacing(2),
    marginBottom: theme.spacing(2),
  },
});

const SideBar: React.FC = () => {
  const classes = useStyles();
  const dispatch = useDispatch();

  const [selectedIndex, setSelectedIndex] = useState<string>("1");

  const handleClick = (id: string) => {
    setSelectedIndex(id);
    dispatch({ type: "SET_SIDEBAR_INDEX", payload: id });
  };

  const sideItems1 = items1.map((item, index) => {
    return (
      <div key={index} className={classes.listitem}>
        <SideBarItem
          key={index}
          {...item}
          handleClick={handleClick}
          class1={
            selectedIndex === index + 1 + "" ? classes.active : classes.root1
          }
        />
      </div>
    );
  });

  const sideItems2 = items2.map((item, index) => {
    return (
      <div key={index} className={classes.listitem}>
        <SideBarItem
          key={index}
          {...item}
          handleClick={handleClick}
          class1={
            selectedIndex === index + 6 + "" ? classes.active : classes.root1
          }
        />
      </div>
    );
  });
  return (
    <React.Fragment>
      <Drawer
        sx={{
          width: 270,
          flexShrink: 0,
          "& .MuiDrawer-paper": {
            width: 270,
            boxSizing: "border-box",
          },
        }}
        variant="permanent"
        anchor="left"
      >
        <Toolbar className={classes.toolbar}>{GREENCOMMUTE}</Toolbar>

        <List>{sideItems1}</List>

        <Divider className={classes.divider} />

        <List>{sideItems2}</List>
      </Drawer>
    </React.Fragment>
  );
};

export default SideBar;

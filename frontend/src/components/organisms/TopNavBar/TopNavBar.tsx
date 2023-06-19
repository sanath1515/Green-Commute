import * as React from "react";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import { Typography } from "@material-ui/core";
import { COMMUTE_ROUTES, NAV_ICONS } from "../../../Constants";
import { Avatars } from "../../atoms/Avatar/Avatar";
import { Navicons } from "../../atoms/dashboardicons/Navicons";
import { makeStyles } from "@material-ui/core/styles";
import KeyboardArrowDownIcon from "@material-ui/icons/KeyboardArrowDown";

const useStyles = makeStyles((theme) => ({
  root: {
    width: 1180,
    height: "80px",
    boxShadow: "none",
    paddingTop: "8px",
    paddingBottom: "26px",
    background: "white",
    border: "solid 1px #e3f3f6",
    paddingLeft: "60px",
    paddingRight: "40px",
    marginTop: theme.spacing(-4.5),
    marginLeft: theme.spacing(-2),
  },
  icon: {
    width: "24px",
    height: "24px",
    paddingTop: "33px",
    paddingBottom: "28px",
    paddingRight: "28px",
    color: "#9bbdcb",
    paddingLeft: "10px",
  },
  location: {
    width: "265px",
    height: "24px",
    flexGrow: 1,
    color: "#19293b",
    marginLeft: "-18px",
    paddingTop: "1px",
  },
  user: {
    width: "87px",
    height: "18px",
    color: "#19293b",
    paddingLeft: "10px",
  },
  down: {
    color: "black",
    width: "20px",
    height: "20px",
    flexGrow: 0,
    objectFit: "contain",
    marginLeft: "5px",
  },
}));

type navProps = {
  location?: string;
  src?: string;
};
const TopNavBar = ({ location, src }: navProps) => {
  const classes = useStyles();
  return (
    <>
      <AppBar position="static" className={classes.root}>
        <Toolbar>
          <Navicons name={NAV_ICONS[7]} className={classes.icon} />
          <Typography variant="subtitle1" className={classes.location}>
            {location}
          </Typography>
          <Navicons name={NAV_ICONS[0]} className={classes.icon} />
          <Navicons name={NAV_ICONS[1]} className={classes.icon} />
          <Avatars src={src} />
          <Typography className={classes.user} variant="subtitle2">
            {COMMUTE_ROUTES.userName}
          </Typography>
          <KeyboardArrowDownIcon />
        </Toolbar>
      </AppBar>
    </>
  );
};

export default TopNavBar;

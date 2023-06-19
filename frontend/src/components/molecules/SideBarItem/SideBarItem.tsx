import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Typography } from "@material-ui/core";
import theme from "../../../theme/theme";
import DashboardOutlinedIcon from "@mui/icons-material/DashboardOutlined";
import WorkOutlineOutlinedIcon from "@mui/icons-material/WorkOutlineOutlined";
import BookmarkBorderOutlinedIcon from "@mui/icons-material/BookmarkBorderOutlined";
import DescriptionOutlinedIcon from "@mui/icons-material/DescriptionOutlined";
import DateRangeOutlinedIcon from "@mui/icons-material/DateRangeOutlined";
import HelpOutlineOutlinedIcon from "@mui/icons-material/HelpOutlineOutlined";

import SettingsOutlinedIcon from "@mui/icons-material/SettingsOutlined";

export type SideBarItemProps = {
  id: string;
  img: string;
  name: string;
  handleClick?: (key: string) => void;
  class1?: string;
};

const useStyles = makeStyles({
  text: {
    fontFamily: "Montserrat",
    marginLeft: theme.spacing(4),
  },
  icon: {
    marginLeft: theme.spacing(4),
  },
});

const SideBarItem: React.FC<SideBarItemProps> = ({
  id,
  img,
  name,
  handleClick,
  class1,
}) => {
  const classes = useStyles();
  const icons = [
    <DashboardOutlinedIcon className={classes.icon} />,
    <WorkOutlineOutlinedIcon className={classes.icon} />,
    <BookmarkBorderOutlinedIcon className={classes.icon} />,
    <DescriptionOutlinedIcon className={classes.icon} />,
    <DateRangeOutlinedIcon className={classes.icon} />,
    <HelpOutlineOutlinedIcon className={classes.icon} />,
    <SettingsOutlinedIcon className={classes.icon} />,
    <SettingsOutlinedIcon className={classes.icon} />,
  ];
  const clickHandler = () => {
    handleClick!(id);
  };

  return (
    <div className={class1} onClick={clickHandler}>
      {id !== "7" ? (
        icons[parseInt(id) - 1]
      ) : (
        <img src={img} className={classes.icon}></img>
      )}
      <Typography variant="subtitle1" className={classes.text}>
        {name}
      </Typography>
    </div>
  );
};

export default SideBarItem;

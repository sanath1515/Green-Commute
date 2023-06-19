import React from "react";
import LocationOnOutlinedIcon from "@mui/icons-material/LocationOnOutlined";
import WorkOutlineTwoToneIcon from "@mui/icons-material/WorkOutlineTwoTone";
import MessageOutlinedIcon from "@mui/icons-material/MessageOutlined";
import NotificationsNoneOutlinedIcon from "@mui/icons-material/NotificationsNoneOutlined";
import DashboardOutlinedIcon from "@mui/icons-material/DashboardOutlined";
import BookmarkBorderOutlinedIcon from "@mui/icons-material/BookmarkBorderOutlined";
import DescriptionOutlinedIcon from "@mui/icons-material/DescriptionOutlined";
import DateRangeOutlinedIcon from "@mui/icons-material/DateRangeOutlined";
import HelpOutlineOutlinedIcon from "@mui/icons-material/HelpOutlineOutlined";
import SettingsOutlinedIcon from "@mui/icons-material/SettingsOutlined";
import { NAV_ICONS } from "../../../Constants";
export type iconProps = {
  name?: string;
  className?: string;
};
export const Navicons: React.FC<iconProps> = ({ name, ...rest }) => {
  return (
    <div>
      {(() => {
        switch (name) {
          case NAV_ICONS[0]:
            return <MessageOutlinedIcon {...rest} />;
          case NAV_ICONS[1]:
            return <NotificationsNoneOutlinedIcon {...rest} />;
          case NAV_ICONS[2]:
            return <DashboardOutlinedIcon {...rest} />;
          case NAV_ICONS[3]:
            return <BookmarkBorderOutlinedIcon {...rest} />;
          case NAV_ICONS[4]:
            return <DescriptionOutlinedIcon {...rest} />;
          case NAV_ICONS[5]:
            return <DateRangeOutlinedIcon {...rest} />;
          case NAV_ICONS[6]:
            return <HelpOutlineOutlinedIcon {...rest} />;
          case NAV_ICONS[7]:
            return <LocationOnOutlinedIcon {...rest} />;
          case NAV_ICONS[8]:
            return <WorkOutlineTwoToneIcon {...rest} />;

          default:
            return <SettingsOutlinedIcon {...rest} />;
        }
      })()}
    </div>
  );
};

export default Navicons;

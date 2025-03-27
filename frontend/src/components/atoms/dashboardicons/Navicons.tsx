import React from "react";
import {
  LocationOnOutlined as LocationIcon,
  WorkOutlineTwoTone as WorkIcon,
  MessageOutlined as MessageIcon,
  NotificationsNoneOutlined as NotificationsIcon,
  DashboardOutlined as DashboardIcon,
  BookmarkBorderOutlined as BookmarkIcon,
  DescriptionOutlined as DescriptionIcon,
  DateRangeOutlined as DateRangeIcon,
  HelpOutlineOutlined as HelpIcon,
  SettingsOutlined as SettingsIcon,
} from "@mui/icons-material";
import { SxProps, Theme } from "@mui/material/styles";
import { NAV_ICONS } from "../../../Constants";

export type IconProps = {
  name?: string;
  sx?: SxProps<Theme>;
  fontSize?: "inherit" | "small" | "medium" | "large";
  className?: string;
};

const NAV_ICONS_MAP: Record<string, React.ElementType> = {
  [NAV_ICONS[0]]: MessageIcon,
  [NAV_ICONS[1]]: NotificationsIcon,
  [NAV_ICONS[2]]: DashboardIcon,
  [NAV_ICONS[3]]: BookmarkIcon,
  [NAV_ICONS[4]]: DescriptionIcon,
  [NAV_ICONS[5]]: DateRangeIcon,
  [NAV_ICONS[6]]: HelpIcon,
  [NAV_ICONS[7]]: LocationIcon,
  [NAV_ICONS[8]]: WorkIcon,
  default: SettingsIcon,
};

export const Navicons: React.FC<IconProps> = ({ name, sx, fontSize = "medium", className }) => {
  const IconComponent =
    name && NAV_ICONS_MAP[name] ? NAV_ICONS_MAP[name] : NAV_ICONS_MAP.default;

  return <IconComponent sx={sx} fontSize={fontSize} className={className} />;
};

export default Navicons;

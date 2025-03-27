import React from "react";
import TrainOutlinedIcon from "@mui/icons-material/TrainOutlined";
import DirectionsBusIcon from "@mui/icons-material/DirectionsBus";
import DriveEtaOutlinedIcon from "@mui/icons-material/DriveEtaOutlined";

import { TRANSPORT_ICONS } from "../../../Constants";

export type IconProps = {
  name?: string;
  className?: string;
  onClick?: (event: React.MouseEvent<SVGSVGElement>) => void;
  id?: string;
};

// Map icon name to component
const ICON_MAP: Record<string, React.ElementType> = {
  [TRANSPORT_ICONS[0]]: TrainOutlinedIcon,
  [TRANSPORT_ICONS[1]]: DirectionsBusIcon,
  [TRANSPORT_ICONS[2]]: DriveEtaOutlinedIcon,
  default: DriveEtaOutlinedIcon,
};

export const Icons1: React.FC<IconProps> = ({
  name,
  className,
  onClick,
  id,
}) => {
  const IconComponent = name && ICON_MAP[name] ? ICON_MAP[name] : ICON_MAP.default;
  return <IconComponent className={className} onClick={onClick} id={id} />;
};

export default Icons1;

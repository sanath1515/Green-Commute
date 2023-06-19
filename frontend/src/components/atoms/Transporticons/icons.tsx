import React from "react";
import DirectionsBusIcon from "@material-ui/icons/DirectionsBus";
import DriveEtaOutlinedIcon from "@material-ui/icons/DriveEtaOutlined";
import MotorcycleOutlinedIcon from "@material-ui/icons/MotorcycleOutlined";
import TrainOutlinedIcon from "@material-ui/icons/TrainOutlined";
import { TRANSPORT_ICONS } from "../../../Constants";
export type iconProps = {
  name?: string;
  className?: string;
  onClick?: (event: any) => void;
  id?: string;
};

export const Icons1: React.FC<iconProps> = ({
  name,
  className,
  onClick,
  id,
}) => {
  return (
    <div>
      {(() => {
        switch (name) {
          case TRANSPORT_ICONS[0]:
            return (
              <TrainOutlinedIcon
                className={className}
                onClick={onClick}
                id={id}
              />
            );
          case TRANSPORT_ICONS[1]:
            return (
              <DirectionsBusIcon
                className={className}
                onClick={onClick}
                id={id}
              />
            );

          case TRANSPORT_ICONS[2]:
            return (
              <DriveEtaOutlinedIcon
                className={className}
                onClick={onClick}
                id={id}
              />
            );

          default:
            return (
              <MotorcycleOutlinedIcon
                className={className}
                onClick={onClick}
                id={id}
              />
            );
        }
      })()}
    </div>
  );
};

export default Icons1;

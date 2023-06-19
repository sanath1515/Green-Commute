import { Chip } from "@material-ui/core";
import React from "react";

export type ChipProps = {
  label?: any;
  onDelete?: React.EventHandler<any>;
  classname?: any;
};
const ChipInput: React.FC<ChipProps> = ({ label, onDelete, classname }) => {
  return <Chip className={classname} onDelete={onDelete} label={label}></Chip>;
};

export default ChipInput;

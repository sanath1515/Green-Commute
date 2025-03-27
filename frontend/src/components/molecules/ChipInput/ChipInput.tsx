import React from "react";
import { Chip, SxProps } from "@mui/material";

export type ChipProps = {
  label?: React.ReactNode;
  onDelete?: (event: React.MouseEvent<HTMLDivElement>) => void;
  className?: string;
  sx?: SxProps; 
};

const ChipInput: React.FC<ChipProps> = ({ label, onDelete, className }) => {
  return <Chip className={className} onDelete={onDelete} label={label} />;
};

export default ChipInput;

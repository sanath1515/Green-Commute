import React from "react";
import { Button as MuiButton } from "@mui/material";

export type ButtonProps = {
  children?: React.ReactNode;
  variant?: "contained" | "text" | "outlined";
  color?: "primary" | "secondary" | "inherit";
  onClick?: (event: React.MouseEvent<HTMLButtonElement>) => void;
  className?: string;
};

export const ButtonIcon = ({
  children,
  variant = "contained",
  color = "primary",
  onClick,
  className,
}: ButtonProps) => {
  return (
    <MuiButton
      variant={variant}
      onClick={onClick}
      color={color}
      className={className}
    >
      {children}
    </MuiButton>
  );
};

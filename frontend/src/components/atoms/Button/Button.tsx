import React from "react";
import { Button as MuiButton, ButtonProps as MuiButtonProps  } from "@mui/material";

export type ButtonProps = {
  name?: string;
  variant?: "contained" | "text" | "outlined";
  color?: "primary" | "secondary" | "inherit";
  onClick?: (event: React.MouseEvent<HTMLButtonElement>) => void;
  className?: string;
  startIcon?: JSX.Element;
  disabled?: boolean;
  children?: string | JSX.Element;
} & MuiButtonProps;

export const Button = ({
  name,
  variant = "contained",
  color = "primary",
  onClick,
  className,
  startIcon,
  disabled,
  children,
  ...props
}: ButtonProps) => {
  return (
    <MuiButton
      {...props}
      variant={variant}
      onClick={onClick}
      color={color}
      className={className}
      startIcon={startIcon}
      disabled={disabled}
    >
      {name}
      {children}
    </MuiButton>
  );
};

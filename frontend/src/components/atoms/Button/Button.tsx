import React from "react";
import { Button as MuiButton } from "@material-ui/core";

export type ButtonProps = {
  name: string;
  variant?: "contained" | "text" | "outlined";
  color?: "primary" | "secondary" | "inherit";
  onClick?: (event: React.MouseEvent<HTMLButtonElement>) => void;
  className?: string;
  startIcon?: JSX.Element;
};

export const Button = (props: ButtonProps) => {
  return (
    <>
      <MuiButton
        variant={props.variant}
        onClick={props.onClick}
        color={props.color}
        className={props.className}
        startIcon={props.startIcon}
        {...props}
      >
        {props.name}
      </MuiButton>
    </>
  );
};

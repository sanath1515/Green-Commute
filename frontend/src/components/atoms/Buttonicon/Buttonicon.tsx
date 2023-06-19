import React from "react";
import { Button as MuiButton } from "@material-ui/core";

export type ButtonProps = {
  children?: JSX.Element;
  variant?: "contained" | "text" | "outlined";
  color?: "primary" | "secondary" | "inherit";
  onClick?: (event: React.MouseEvent<HTMLButtonElement>) => void;
  className?: string;
};

export const ButtonIcon = (props: ButtonProps) => {
  return (
    <>
      <MuiButton
        variant={props.variant}
        onClick={props.onClick}
        color={props.color}
        className={props.className}
      >
        {props.children}
      </MuiButton>
    </>
  );
};

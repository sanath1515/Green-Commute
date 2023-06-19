import { Avatar } from "@material-ui/core";
import { makeStyles } from "@material-ui/styles";
import React from "react";

type AvatarProps = {
  alt?: string;
  src?: string;
  variant?: "circular" | "rounded" | "square";
  className?: string;
  valid?: boolean;
};
const useStyles = makeStyles({
  root: {
    backgroundColor: "grey",
  },
});

export const Avatars = (props: AvatarProps) => {
  const classes = useStyles();
  return (
    <Avatar
      alt={props.alt}
      src={props.src}
      variant={props.variant}
      className={props.className}
      classes={{ root: props.valid ? classes.root : "" }}
    />
  );
};

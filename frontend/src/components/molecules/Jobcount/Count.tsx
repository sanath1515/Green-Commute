/* eslint-disable no-unused-vars */
import { makeStyles, Typography } from "@material-ui/core";
import React from "react";
import PropTypes from "prop-types";
export type countProps = {
  number?: string;
  city?: string;
};
const useStyles = makeStyles((theme) => ({
  text: {
    textAlign: "center",
    fontSize: "100px",
    fontWeight: 300,
  },
  text1: {
    textAlign: "center",
  },
}));
export const Count: React.FC<countProps> = (props) => {
  const classes = useStyles();
  const { number, city, ...rest } = props;

  return (
    <>
      <Typography variant="h2" className={classes.text}>
        {number}
      </Typography>

      <Typography variant="h3" {...rest} className={classes.text1}>
        {city}
      </Typography>
    </>
  );
};

Count.propTypes = {
  number: PropTypes.string.isRequired,
  city: PropTypes.string,
};

Count.defaultProps = {
  city: "",
};

export default Count;

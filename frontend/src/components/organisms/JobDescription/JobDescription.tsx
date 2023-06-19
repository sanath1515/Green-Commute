import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Typography } from "@material-ui/core";
import theme from "../../../theme/theme";
import { Button } from "../../atoms/Button/Button";

const useStyles = makeStyles({
  root: {
    paddingLeft: 20,
    paddingRight: 40,
    width: 300,
    color: theme.palette.grey["200"],
    float: "right",
  },
  part1: {
    display: "flex",
    marginLeft: 10,
  },
  details: {
    display: "flex",
    flexDirection: "column",
    marginLeft: 20,
  },
  img: {
    width: 50,
    height: 50,
  },
  title: {
    color: theme.palette.grey[700],
    textAlign: "left",
  },
  company: {
    color: theme.palette.grey["200"],
    textAlign: "left",
  },
  location: {
    color: theme.palette.grey["200"],
    textAlign: "left",
    textTransform: "none",
  },
  hr: {
    color: theme.palette.grey["800"],
    marginBottom: theme.spacing(6.25),
    marginTop: theme.spacing(3.75),
    paddingLeft: theme.spacing(2.5),
    paddingRight: theme.spacing(2.5),
    border: "solid 0.1px",
  },
  part2: {
    marginLeft: theme.spacing(2),
  },
  heading: {
    textAlign: "left",
    marginBottom: theme.spacing(2),
    color: theme.palette.grey[700],
  },
  part3: {
    display: "flex",
    flexDirection: "column",
    marginLeft: theme.spacing(2),
  },
  point: {
    textAlign: "left",
    color: theme.palette.grey[200],
    fontFamily: "Montserrat",
    fontSize: 14,
    fontStretch: "normal",
    fontStyle: "normal",
    lineHeight: 1.57,
    letterSpacing: 0.1,
  },
  list: {
    marginTop: theme.spacing(0),
    paddingLeft: 15,
  },
  buttons: {
    marginTop: 15,
    marginBottom: 15,
  },
  button1: {
    borderRadius: 10,
    marginRight: 20,
    textTransform: "none",
    fontWeight: 600,
    fontFamily: "Montserrat",
    width: 98,
  },
  button2: {
    color: "#FFF",
    borderRadius: 10,
    textTransform: "none",
    fontWeight: 600,
    fontFamily: "Montserrat",
    width: 98,
  },
  bigButton: {
    color: "#FFF",
    borderRadius: 5,
    width: "auto",
    textTransform: "none",
    fontFamily: "Montserrat",
    fontWeight: 600,
    marginLeft: "auto",
    marginRight: "auto",
    paddingTop: theme.spacing(2.5),
    paddingBottom: theme.spacing(2.5),
  },
  hr1: {
    color: theme.palette.grey[800],
    marginTop: theme.spacing(6.25),
    marginBottom: theme.spacing(2.5),
    paddingLeft: theme.spacing(2.5),
    paddingRight: theme.spacing(2.5),
    border: "solid 0.1px",
  },
});

export type JobDescriptionProps = {
  img: string;
  title: string;
  company: string;
  location: string;
  description: string;
  points: string[];
  button1: string;
  button2: string;
  saveButtonClick?: () => void;
  applyButtonClick?: () => void;
  bigButton: string;
  bigButtonClick?: () => void;
};

const JobDescription: React.FC<JobDescriptionProps> = ({
  company,
  description,
  img,
  location,
  points,
  title,
  button1,
  button2,
  saveButtonClick,
  applyButtonClick,
  bigButton,
  bigButtonClick,
}) => {
  const classes = useStyles();
  const listOfPoints = points.map((point: string) => (
    <li className={classes.point}>{point}</li>
  ));

  return (
    <div className={classes.root}>
      <div className={classes.part1}>
        <img src={img} className={classes.img}></img>
        <div className={classes.details}>
          <Typography
            variant="subtitle1"
            className={classes.title}
            children={title}
          />
          <Typography
            variant="overline"
            className={classes.company}
            children={company}
          />
          <Typography
            variant="overline"
            className={classes.location}
            children={location}
          />

          <div className={classes.buttons}>
            <Button
              onClick={saveButtonClick}
              variant="outlined"
              color="primary"
              className={classes.button1}
              name={button1}
            />
            <Button
              onClick={applyButtonClick}
              variant="contained"
              color="primary"
              className={classes.button2}
              name={button2}
            />
          </div>
        </div>
      </div>
      <hr className={classes.hr} />
      <div className={classes.part2}>
        <Typography
          variant="subtitle1"
          children="Description"
          className={classes.heading}
        />
        <Typography variant="body2" children={description} />
      </div>
      <hr className={classes.hr1} />
      <div className={classes.part3}>
        <Typography
          variant="subtitle1"
          children="What it takes"
          className={classes.heading}
        />
        <ul className={classes.list}>{listOfPoints}</ul>
        <Button
          variant="contained"
          color="primary"
          className={classes.bigButton}
          name={bigButton}
          onClick={bigButtonClick}
        />
      </div>
    </div>
  );
};

export default JobDescription;

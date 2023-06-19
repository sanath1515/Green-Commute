import React from "react";

import { makeStyles } from "@material-ui/styles";
import { Card, CardHeader, Grid, Typography } from "@material-ui/core";

import MoreHorizIcon from "@material-ui/icons/MoreHoriz";
import { Avatars } from "../../atoms/Avatar/Avatar";
import Icons1 from "../../atoms/Transporticons/icons";
import theme from "../../../theme/theme";
import { useDispatch, useSelector } from "react-redux";
import { greenState } from "../../../store/reducers";

const useStyles = makeStyles({
  card: {
    width: " 690px",
    height: "138px ",
    margin: theme.spacing(3, 0),
    borderRadius: 10,
    border: "solid 1px #e3f3f6",
  },
  cardActive: {
    width: " 690px",
    height: "138px ",
    margin: theme.spacing(3, 0),
    borderRadius: 10,
    border: "solid 2px #5ac568",
  },
  avatar: {
    marginBottom: "58px",
    position: "relative",
    top: "12px",
    width: "50px",
    height: "50px",
    display: "block",
  },
  jobRole: {
    color: "#324552",
    fontSize: "18px",
    letterSpacing: "0.2px",
    flexGrow: 0,
  },
  daysCount: {
    fontSize: "12px",
    color: "#5f7381",
    padding: "0",
    margin: "0",
    textAlign: "right",
    marginLeft: "272px",
    marginRight: "15px",
  },
  location: {
    color: "#5f7381",
  },
  companyName: {
    color: "#5f7381",
    marginBottom: "8px",
  },
  icons: {
    color: "#9bbdcb",
    marginRight: "10px",
  },
  belowIcons: {
    marginLeft: "222px",
  },
  rightIconGap: {
    color: "#9bbdcb",
    marginRight: "5px",
  },
  row: {
    display: "flex",
  },
});

type CardProps = {
  id: string;
  src: string;
  dayscount: string;
  jobRole: string;
  companyName: string;
  location: string;
  commuteRoutes: string[];
};

const JobList = ({
  id,
  src,
  dayscount,
  jobRole,
  companyName,
  location,
  commuteRoutes,
}: CardProps) => {
  const classes = useStyles();
  const jobId = useSelector<greenState, greenState["jobId"]>((state) => {
    return state.jobId;
  });

  const dispatch = useDispatch();

  const icons = commuteRoutes.map((icon) => (
    <Grid item>
      <Icons1 name={icon} className={classes.icons} />
    </Grid>
  ));

  const clickHandler = (event: any) => {
    dispatch({ type: "SET_JOB_ID", payload: id });
  };

  return (
    <Card
      className={id === jobId ? classes.cardActive : classes.card}
      elevation={0}
      onClick={clickHandler}
    >
      <CardHeader
        avatar={<Avatars src={src} className={classes.avatar} />}
        title={
          <Grid
            direction="row"
            component="span"
            container
            justifyContent="space-between"
          >
            <Grid item>
              <Typography variant="h6" className={classes.jobRole}>
                {jobRole}
              </Typography>
            </Grid>

            <Grid item className={classes.row}>
              <Grid item>
                <Typography
                  component="span"
                  variant="body2"
                  className={classes.daysCount}
                >
                  {" "}
                  {dayscount}{" "}
                </Typography>
              </Grid>

              <Grid item className={classes.rightIconGap}>
                <MoreHorizIcon />
              </Grid>
            </Grid>
          </Grid>
        }
        subheader={
          <div>
            <Typography variant="body2" className={classes.companyName}>
              {companyName}
            </Typography>

            <Grid
              direction="row"
              component="span"
              className={classes.row}
              justifyContent="space-between"
            >
              <Grid item>
                <Typography
                  component="span"
                  variant="body2"
                  className={classes.location}
                >
                  {location}
                </Typography>
              </Grid>
              <Grid
                direction="row"
                item
                component="span"
                className={classes.row}
              >
                {icons}
              </Grid>
            </Grid>
          </div>
        }
      ></CardHeader>
    </Card>
  );
};

export default JobList;

import React from "react";

import Icons1 from "../../atoms/Transporticons/icons";
import { COMMUTE_ROUTES } from "../../../Constants";
import { makeStyles } from "@material-ui/styles";
import {
  Card,
  CardActions,
  CardContent,
  CardHeader,
  IconButton,
  ListItem,
  Typography,
} from "@material-ui/core";
import MoreHorizIcon from "@material-ui/icons/MoreHoriz";
import { Avatars } from "../../atoms/Avatar/Avatar";

const useStyles = makeStyles({
  icon: {
    color: "#9bbdcb",
    paddingRight: "8px",
    marginTop: "6px",
  },
  card: {
    maxWidth: "330px",
    height: "308px",
    elevation: 2,
    border: "solid 1px #e3f3f6",
  },
  avatar: {
    width: "80px",
    height: "80px",
    marginLeft: "8px",
    marginTop: "6px",
  },
  list: {
    paddingRight: "10px",
  },
  role: {
    marginTop: "-7px",
    color: "#324552",
    marginLeft: "10px",
    paddingBottom: "8px",
  },
  company: {
    marginTop: "-4px",
    color: "#5f7381",
    marginLeft: "10px",
    marginBottom: "10px",
  },
  location: {
    marginTop: "-4px",
    color: "#5f7381",
    marginLeft: "10px",
    marginBottom: "18px",
  },
  routes: {
    color: "#19293b",
    marginLeft: "10px",
    paddingBottom: "15px",
  },

  days: {
    color: "#5f7381",
    marginBottom: "50px",
    textAlign: "right",
    marginTop: "6px",
  },
});

type CardProps = {
  src?: string;
  days?: number;
  jobRole?: string;
  companyName?: string;
  location?: string;
  commuteRoute?: Array<string>;
};

const JobCard = ({
  src,
  days,
  jobRole,
  companyName,
  location,
  commuteRoute,
}: CardProps) => {
  const classes = useStyles();
  return (
    <>
      <Card className={classes.card} elevation={0}>
        <CardHeader
          avatar={<Avatars src={src} className={classes.avatar} />}
          action={
            <IconButton>
              <MoreHorizIcon className={classes.icon} />
            </IconButton>
          }
          title={
            <Typography variant="body2" className={classes.days}>
              {days}d
            </Typography>
          }
        />
        <CardContent>
          <Typography variant="h6" className={classes.role}>
            {jobRole}
          </Typography>

          <Typography variant="body2" className={classes.company}>
            {companyName}
          </Typography>

          <Typography variant="body2" className={classes.location}>
            {location}
          </Typography>

          <Typography variant="caption" className={classes.routes}>
            {COMMUTE_ROUTES.text}
          </Typography>
          <br />

          <ListItem className={classes.list}>
            {commuteRoute!.map((item: string) => (
              <Icons1 name={item} className={classes.icon} />
            ))}
          </ListItem>
        </CardContent>
        <CardActions></CardActions>
      </Card>
    </>
  );
};

export default JobCard;

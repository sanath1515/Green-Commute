import React from "react";
import SideBar from "../../organisms/SideBar/SideBar";
import TopNavBar from "../../organisms/TopNavBar/TopNavBar";
import { makeStyles } from "@material-ui/core/styles";
import { Grid, Typography } from "@material-ui/core";
import Findjob from "../../organisms/Findjob/Findjob";
import Filters from "../../organisms/Filter/Filters";
import { COMMUTE_ROUTES, jobDataProp } from "../../../Constants";
import JobCard from "../../molecules/JobCard/JobCard";
import useJobsList from "../../customhooks/useJobsList";
import { useSelector } from "react-redux";
import { greenState } from "../../../store/reducers";

const useStyles = makeStyles((theme) => ({
  root: {
    marginLeft: "270px",
    paddingLeft: "60px",
    backgroundColor: "#fafafa",
  },
  grid: { width: "1074px" },
  heading5: {
    fontSize: "20px",
    marginTop: "30px",
    fontWeight: 600,
  },
  heading: {
    marginRight: "722px",
    display: "inline-block",
    marginTop: "30px",
    fontWeight: 600,
  },
  find: {
    marginTop: "15px",
    display: "flex",
    alignItems: "center",
    width: "1050px",
    borderRadius: "6px",
    border: "solid 1px #e3f3f6",
  },
  root1: {
    marginLeft: "260px",
  },
  text: { marginTop: "3px", marginBottom: "20px", color: "#5f7381" },
}));

function LandingJobs() {
  const { jobcards } = useJobsList();
  const location: string = useSelector<
    greenState,
    greenState["searchLocation"]
  >((state) => {
    return state.searchLocation;
  });

  const initiallocation: string = useSelector<
    greenState,
    greenState["location"]
  >((state) => {
    return state.location;
  });

  const skill: string = useSelector<greenState, greenState["searchSkill"]>(
    (state) => {
      return state.searchSkill;
    }
  );

  const classes = useStyles();
  return (
    <>
      <SideBar />
      <div className={classes.root1}>
        <TopNavBar location={initiallocation} src={COMMUTE_ROUTES.userImg} />
      </div>

      <div className={classes.root}>
        <Typography variant="h5" className={classes.heading5}>
          {COMMUTE_ROUTES.findJob}
        </Typography>

        <Findjob ClassName={classes.find} Skill={skill} Location={location} />

        <Typography variant="h5" className={classes.heading}>
          {COMMUTE_ROUTES.recommend}
        </Typography>
        <Filters button="Filter" button1="apply" button2="clear all" />
        <Typography variant="body2" className={classes.text}>
          {COMMUTE_ROUTES.recommendChild}
        </Typography>
        <Grid
          container
          spacing={5}
          justifyContent="flex-start"
          className={classes.grid}
        >
          {jobcards.map((jobs: jobDataProp) => (
            <Grid key={jobs.id} item xs={4}>
              <JobCard
                src={jobs.imageSource}
                days={Math.abs(
                  Math.ceil(
                    (new Date(jobs.dateAdded).getTime() -
                      new Date(Date.now()).getTime()) /
                      (1000 * 3600 * 24)
                  )
                )}
                jobRole={jobs.jobProfile}
                companyName={jobs.companyName}
                location={jobs.city}
                commuteRoute={jobs.commuteRoutes}
              ></JobCard>
            </Grid>
          ))}
        </Grid>
      </div>
    </>
  );
}

export default LandingJobs;

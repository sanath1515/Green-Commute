import React, { useEffect, useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import theme from "../../../theme/theme";
import SideBar from "../../organisms/SideBar/SideBar";
import TopNavBar from "../../organisms/TopNavBar/TopNavBar";
import JobDescription from "../../organisms/JobDescription/JobDescription";
import Findjob from "../../organisms/Findjob/Findjob";
import JobList from "../../molecules/Job-List/JobList";
import { Typography } from "@material-ui/core";
import Filters from "../../organisms/Filter/Filters";
import {
  APPLY,
  BASED_ON_YOUR_SEARCH,
  calculateDays,
  CLEARALL,
  cost,
  FILTER,
  FIND_JOBS,
  GREENCOMMUTEROUTES,
  imgMap,
  jobDataProp,
  JOBS_LIST,
  routePoints,
  topnavbarimage,
  COMMUTE_ROUTES,
  OPTIONS_HEADINGS,
  SAVE,
  UNSAVE,
  JOBCITY,
} from "../../../Constants";
import { useDispatch, useSelector } from "react-redux";
import { greenState } from "../../../store/reducers";
import Chips from "../../molecules/Chips/chips";
import useAdvancedFilterSearch from "../../../customhooks/useAdvancedSearch";
import Routes from "../../organisms/Routes/Routes";
import { Button } from "../../atoms/Button/Button";
import useJobDescription from "../../customhooks/useJobDescription";

const useStyles = makeStyles({
  root: { display: "flex", maxWidth: 1440, width: "100%" },
  inner: {
    display: "flex",
  },
  jobdescription: {
    width: 360,
    marginTop: theme.spacing(9),
    marginRight: theme.spacing(3),
  },
  search: {
    marginLeft: "auto",
    marginRight: "auto",
    backgroundColor: "#fafafa",
    paddingLeft: theme.spacing(10),
    paddingRight: theme.spacing(0),
  },
  findjob: {
    fontWeight: 600,
    marginTop: theme.spacing(9),
    marginBottom: theme.spacing(4),
  },
  row: {
    display: "flex",
    justifyContent: "space-between",
    marginTop: theme.spacing(8),
    marginRight: theme.spacing(2),
  },
  based: {
    color: theme.palette.grey["200"],
  },
  joblist: {
    fontWeight: 600,
  },
  findjobclass: {
    display: "flex",
    alignItems: "center",
    width: 700,
    backgroundColor: "white",
    padding: theme.spacing(0, 0),
    borderRadius: 10,
    border: "solid 1px #e3f3f6",
  },
  chips: {
    display: "flex",
    justifyContent: "flex-start",
    maxWidth: 500,
    height: "auto",
    flexWrap: "wrap",
  },
  chip: {
    marginRight: theme.spacing(2.5),
    display: "flex",
    justifyContent: "flex-start",
    flexDirection: "row",
    alignItems: "center",
    marginBottom: theme.spacing(2),
  },
  clearall: {
    textTransform: "none",
    fontFamily: "Montserrat",
    fontSize: 14,
    fontWeight: 600,
    fontStretch: "normal",
    fontStyle: "normal",
    lineHeight: 1.29,
    letterSpacing: 0.2,
    textAlign: "left",
    color: theme.palette.grey["600"],
    float: "right",
    marginRight: theme.spacing(3),
  },
  part: {
    marginTop: theme.spacing(2),
    display: "flex",
    justifyContent: "space-between",
    flexWrap: "wrap",
    alignItems: "flex-start",
  },
});

const SearchPage: React.FC = () => {
  const classes = useStyles();
  const [route, setRoute] = useState<boolean>(false);
  const {
    saveValue,
    savealertGeneration,
    applyValue,
    applyalertGeneration,
    stepbarindex,
    savedJobsList,
  } = useJobDescription();

  const dispatch = useDispatch();

  const jobId = useSelector<greenState, greenState["jobId"]>((state) => {
    return state.jobId;
  });

  const { advancedFilteredjobs, jobIdData } = useAdvancedFilterSearch([]);

  const options: any = useSelector<greenState, greenState["options"]>(
    (state) => {
      return state.options;
    }
  );

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

  const ellipse = (input: string, length: number) => {
    if (input.length > 5) {
      return input.substring(0, length) + "...";
    }
    return input;
  };

  useEffect(() => {}, [
    options,
    stepbarindex,
    savedJobsList,
    skill,
    location,
    savedJobsList,
  ]);
  const jobslist = advancedFilteredjobs.map((temp: jobDataProp) => (
    <JobList
      id={temp.id! + ""}
      companyName={temp.companyName!}
      dayscount={calculateDays(temp.dateAdded) + "d"}
      jobRole={temp.jobProfile!}
      location={temp.city!}
      src={temp.imageSource!}
      commuteRoutes={temp.commuteRoutes!}
    />
  ));

  const savedjobs = savedJobsList.map((temp: jobDataProp) => (
    <JobList
      id={temp.id! + ""}
      companyName={temp.companyName!}
      dayscount={calculateDays(temp.dateAdded) + "d"}
      jobRole={temp.jobProfile!}
      location={temp.city!}
      src={temp.imageSource!}
      commuteRoutes={temp.commuteRoutes!}
    />
  ));

  const clickHandler = () => {
    setRoute(true);
  };

  const checkInSavedJobs = () => {
    for (let i = 0; i < savedJobsList.length; i++) {
      if (savedJobsList[i].id! + "" === jobId) return false;
    }
    return true;
  };

  const clickBackHandler = () => {
    setRoute(false);
  };

  const ClearAllHandler = () => {
    dispatch({
      type: "SET_OPTIONS",
      payload: {
        datePosted: [],
        distance: [],
        experienceLevel: [],
        jobType: [],
        transport: [],
      },
    });
  };

  const chipsData = (
    <div className={classes.part}>
      <div className={classes.chips}>
        {OPTIONS_HEADINGS.map((heading: string) =>
          options[heading]!.map((op: any) => (
            <Chips label={op} className={classes.chip} />
          ))
        )}
      </div>
      <Button
        name={CLEARALL}
        className={classes.clearall}
        onClick={ClearAllHandler}
      />
    </div>
  );

  COMMUTE_ROUTES.headings;

  return (
    <div className={classes.root}>
      <SideBar />
      <div>
        <TopNavBar location={initiallocation} src={topnavbarimage} />
        <div className={classes.inner}>
          <div className={classes.search}>
            <div>
              <Typography
                variant="h4"
                className={classes.findjob}
                children={FIND_JOBS}
              />
              <Findjob
                Skill={skill}
                Location={location}
                ClassName={classes.findjobclass}
              />
            </div>

            <div>
              <div className={classes.row}>
                <Typography
                  variant="h4"
                  className={classes.joblist}
                  children={JOBS_LIST}
                />
                <Filters button={FILTER} button1={CLEARALL} button2={APPLY} />
              </div>
              <Typography
                variant="body2"
                className={classes.based}
                children={BASED_ON_YOUR_SEARCH}
              />
            </div>

            <div>{chipsData}</div>
            {stepbarindex !== "3" && <div> {jobslist}</div>}
            {stepbarindex === "3" && savedjobs}
          </div>
          {!route && (
            <div className={classes.jobdescription}>
              {advancedFilteredjobs.length !== 0 && (
                <JobDescription
                  img={jobIdData!.imageSource!}
                  title={jobIdData!.jobProfile!}
                  company={jobIdData!.companyName!}
                  location={jobIdData!.city!}
                  description={jobIdData!.description!}
                  points={jobIdData!.requiredProficiency!.split(",")}
                  button1={checkInSavedJobs() ? SAVE : UNSAVE}
                  button2={applyValue}
                  saveButtonClick={savealertGeneration}
                  applyButtonClick={applyalertGeneration}
                  bigButton={GREENCOMMUTEROUTES}
                  bigButtonClick={clickHandler}
                />
              )}
            </div>
          )}
          {route && (
            <Routes
              img={jobIdData!.imageSource!}
              title={jobIdData!.jobProfile!}
              company={jobIdData!.companyName!}
              location={jobIdData!.city!}
              loc1={ellipse(initiallocation, 30)}
              loc2={ellipse(JOBCITY + " , " + jobIdData!.city!, 50)}
              routePoints={routePoints}
              locHead={ellipse(location, 50) + "-" + jobIdData!.city!}
              cost={cost}
              imgMap={imgMap}
              backHandler={clickBackHandler}
              applyB={checkInSavedJobs()}
            />
          )}
        </div>
      </div>
    </div>
  );
};

export default SearchPage;

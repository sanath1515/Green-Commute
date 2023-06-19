import { ThemeProvider } from "@material-ui/core";
import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import ScrollToTop from "./routing/ScrollToTop";
import { greenState } from "./store/reducers";
import theme from "./theme/theme";
import { getAllJobData } from "./axios/ApiProvider";
import { useDispatch } from "react-redux";
import JobCard from "./components/molecules/JobCard/JobCard";
import JobDescription from "./components/organisms/JobDescription/JobDescription";
import SideBar from "./components/organisms/SideBar/SideBar";
import { jobDataProp, PATHS } from "./Constants";
import LandingPage from "./components/pages/LandingPage/LandingPage";
import SearchPage from "./components/pages/SearchPage/SearchPage";
import LandingJobs from "./components/pages/LandingJobs/LandingJobs";

export const App = () => {
  // To get value from Redux Store

  // const stepId = useSelector<greenState, greenState["step"]>((state) => {
  //   console.log(state);

  //   return state.step;
  // });

  // console.log(stepId);

  // // To update Value in Redux Store
  // const dispatch = useDispatch();
  // dispatch({ type: "SET_STEP", payload: "2" });
  // console.log(stepId);

  // fetch data

  // useEffect(() => {
  //   getAllJobData((res: jobDataProp[]) => {
  //     console.log(res);
  //   });
  // }, []);

  return (
    <ThemeProvider theme={theme}>
      <Router>
        <ScrollToTop />
        <Switch>
          <Route
            path={PATHS.LANDING_PAGE}
            exact
            component={LandingPage}
          ></Route>
          <Route path={PATHS.JOB_SEARCH} exact component={LandingJobs}></Route>
          <Route
            path={PATHS.ADVANCED_SEARCH}
            exact
            component={SearchPage}
          ></Route>
        </Switch>
      </Router>
    </ThemeProvider>
  );
};

import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { ThemeProvider } from "@mui/material/styles";
import ScrollToTop from "./routing/ScrollToTop";
import { greenState } from "./store/reducers";
import theme from "./theme/theme";
import { getAllJobs } from "./axios/ApiProvider";
import { jobDataProp, PATHS } from "./Constants";
import LandingPage from "./components/pages/LandingPage/LandingPage";
import SearchPage from "./components/pages/SearchPage/SearchPage";
import LandingJobs from "./components/pages/LandingJobs/LandingJobs";

export const App = () => {
  const stepId = useSelector<greenState, greenState["step"]>((state) => state.step);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch({ type: "SET_STEP", payload: "2" });

    getAllJobs((res: jobDataProp[]) => {
      console.log("Fetched jobs:", res);
    });
  }, [dispatch]);

  return (
    <ThemeProvider theme={theme}>
        <ScrollToTop />
        <Routes>
          <Route path={PATHS.LANDING_PAGE} element={<LandingPage />} />
          <Route path={PATHS.JOB_SEARCH} element={<LandingJobs status={0} />} />
          <Route path={PATHS.ADVANCED_SEARCH} element={<SearchPage />} />
        </Routes>
    </ThemeProvider>
  );
};

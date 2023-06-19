import React, { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import { getAllJobs } from "../axios/ApiProvider";
import { jobDataProp } from "../Constants";
import { greenState } from "../store/reducers";

const useFetch = () => {
  const [jobcards, setJobcards] = useState<jobDataProp[]>([]);
  const [filteredjobs, setFilteredjobs] = React.useState<jobDataProp[]>([]);

  const locations: string[] = useSelector<
    greenState,
    greenState["worklocations"]
  >((state) => {
    return state.worklocations;
  });

  const skillSet: string[] = useSelector<greenState, greenState["skills"]>(
    (state) => {
      return state.skills;
    }
  );

  useEffect(() => {
    getAllJobs((res: jobDataProp[]) => {
      setJobcards(res);
      setFilteredjobs(
        res.filter(
          (jobs) =>
            (jobs.city === locations[0] || jobs.city === locations[1]) &&
            (jobs.jobProfile === skillSet[0] || jobs.jobProfile === skillSet[1])
        )
      );
    });
  }, []);
  return { jobcards, filteredjobs };
};

export default useFetch;

import React, { useEffect, useState } from "react";
import { jobDataProp } from "../Constants";
import { useSelector } from "react-redux";
import { greenState } from "../store/reducers";
import { getAllJobs } from "../axios/ApiProvider";

const useFilterSearch = (initialValue: jobDataProp[]) => {
  const [jobs, setJobs] = useState<jobDataProp[]>(initialValue);
  const [filteredjobs, setFilteredjobs] = React.useState<jobDataProp[]>([]);

  const location: string = useSelector<
    greenState,
    greenState["searchLocation"]
  >((state) => {
    return state.searchLocation;
  });

  const skill: string = useSelector<greenState, greenState["searchSkill"]>(
    (state) => {
      return state.searchSkill;
    }
  );

  useEffect(() => {
    getAllJobs((res: jobDataProp[]) => {
      setJobs(res);

      setFilteredjobs(
        res.filter(
          (jobs) =>
            (jobs.city === location ||
              location === undefined ||
              location === null ||
              location === "") &&
            (jobs.jobProfile === skill ||
              skill === undefined ||
              skill === null ||
              skill === "")
        )
      );
    });
  }, [skill, location]);

  return { jobs, filteredjobs };
};

export default useFilterSearch;

import React, { useEffect, useState } from "react";
import {
  calculateDays,
  dateData,
  exampleData,
  jobDataProp,
  optionsType,
} from "../Constants";
import { useSelector } from "react-redux";
import { greenState } from "../store/reducers";
import useFilterSearch from "./useFilterSearch";
import { getJobByJobId, getJobsByFilter } from "../axios/ApiProvider";
import useJobDescription from "../components/customhooks/useJobDescription";

const useAdvancedFilterSearch = (initialValue: jobDataProp[]) => {
  const [advancedFilteredjobs, setAdvancedFilteredjobs] = React.useState<
    jobDataProp[]
  >([]);

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

  const options: optionsType = useSelector<greenState, greenState["options"]>(
    (state) => {
      return state.options;
    }
  );

  const [jobIdData, setJobIdData] = useState<any>(exampleData);

  const opsValue: boolean = useSelector<greenState, greenState["optionValue"]>(
    (state) => {
      return state.optionValue;
    }
  );

  const jobId = useSelector<greenState, greenState["jobId"]>((state) => {
    return state.jobId;
  });

  const { filteredjobs } = useFilterSearch([]);

  const checkJobByDate = (dateAdded: string) => {
    const days = calculateDays(dateAdded);

    var maxDate = 0;
    options.datePosted.forEach((date) => {
      maxDate = Math.max(maxDate, dateData[date]);
    });

    if (days <= maxDate) return true;
    return false;
  };

  const check = (job: jobDataProp) => {
    return (
      (options["datePosted"]!.length === 0 &&
        options["distance"]!.length === 0 &&
        options["experienceLevel"]!.length === 0 &&
        options["jobType"]!.length === 0 &&
        options["transport"]!.length === 0) ||
      ((options["distance"].length === 0 ||
        options["distance"]!.indexOf(job.distance!) > -1) &&
        (options.experienceLevel.length === 0 ||
          job.experienceLevel!.some((item) =>
            options.experienceLevel.includes(item)
          )) &&
        (options.jobType.length === 0 ||
          job.jobType!.some((item) => options.jobType.includes(item))) &&
        (options.datePosted.length === 0 || checkJobByDate(job.dateAdded!)) &&
        (options.transport.length === 0 ||
          job.commuteRoutes!.some((item) => options.transport.includes(item))))
    );
  };

  useEffect(() => {
    getJobsByFilter(options, skill, location, (res: any) => {
      setAdvancedFilteredjobs(res);
    });

    getJobByJobId(jobId, (res: any) => {
      setJobIdData(res);
    });
  }, [opsValue, location, skill, filteredjobs, options, jobId]);

  return { advancedFilteredjobs, jobIdData };
};

export default useAdvancedFilterSearch;

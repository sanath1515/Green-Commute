import React, { useState, useEffect } from "react";
import { getAllJobs, getAllJobsPython, getJobsByFilter } from "../../axios/ApiProvider";
import { jobDataProp } from "../../Constants";

const useJobsList = () => {
  const [jobcards, setJobcards] = useState<jobDataProp[]>([]);
  const [filteredjobs, setFilteredjobs] = React.useState<jobDataProp[]>([]);

  useEffect(() => {
    getAllJobsPython((res: jobDataProp[]) => {
      setJobcards(res);
    });
  }, []);
  return { jobcards, filteredjobs };
};

export default useJobsList;

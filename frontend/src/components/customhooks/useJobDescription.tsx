import axios from "axios";
import React, { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import {
  deleteSavedJobs,
  getSavedJobs,
  putAppliedJobs,
  putSavedJobs,
} from "../../axios/ApiProvider";
import {
  ALERT_MESSAGES,
  APPLY,
  jobDataProp,
  SAVE,
  UNSAVE,
} from "../../Constants";
import { greenState } from "../../store/reducers";

const useJobDescription = () => {
  const [savedjobs, setsavedjobs] = useState<boolean>(false);
  const [saveValue, setsaveValue] = useState(SAVE);

  const [appliedjobs, setappliedjobs] = useState<boolean>(false);
  const [applyValue, setapplyvalue] = useState(APPLY);

  const [savedJobsList, setSavedJobsList] = useState<jobDataProp[]>([]);

  const jobId = useSelector<greenState, greenState["jobId"]>((state) => {
    return state.jobId;
  });

  const stepbarindex = useSelector<greenState, greenState["sidebarIndex"]>(
    (state) => {
      return state.sidebarIndex;
    }
  );
  const userId = "1";
  useEffect(() => {
    getSavedJobs(userId, (res: any) => {
      setSavedJobsList(res);
    });
  }, [saveValue, applyValue, savedjobs]);

  const handleSavedJobs = () => {
    setsavedjobs(!savedjobs);
  };

  const checkInSavedJobs = () => {
    for (let i = 0; i < savedJobsList.length; i++) {
      if (savedJobsList[i].id! + "" === jobId) return false;
    }
    return true;
  };

  const savealertGeneration = () => {
    if (!checkInSavedJobs()) {
      alert(JSON.stringify(ALERT_MESSAGES.UNSAVE));
      setsavedjobs(!savedjobs);
      setsaveValue(SAVE);
      deleteSavedJobs(jobId, userId);
    } else {
      putSavedJobs(jobId, userId);
      alert(JSON.stringify(ALERT_MESSAGES.SAVE));
      setsavedjobs(!savedjobs);
      setsaveValue(UNSAVE);
    }
  };

  const applyalertGeneration = () => {
    if (appliedjobs === false) {
      putAppliedJobs(jobId, userId);
      alert(JSON.stringify(ALERT_MESSAGES.APPLY));
      setappliedjobs(!appliedjobs);
      setapplyvalue(ALERT_MESSAGES.UNAPPLY);
    }
  };
  const applyJob = () => {};

  return {
    savedjobs,
    saveValue,
    savealertGeneration,
    appliedjobs,
    applyValue,
    applyalertGeneration,
    handleSavedJobs,
    savedJobsList,
    stepbarindex,
  };
};

export default useJobDescription;

import axios from "axios";

export const getAllJobs = async (callback?: any) => {
  try {
    const res = await axios.get(
      `${process.env.REACT_APP_UNSPLASHED_URL}api/v1/jobs/`
    );
    callback(res.data);
  } catch (err) {
    console.log(err);
  }
};

export const getJobByJobId = async (id: string, callback?: any) => {
  try {
    const res = await axios.get(
      `${process.env.REACT_APP_UNSPLASHED_URL}api/v1/jobs/${id}/`
    );
    callback(res.data);
  } catch (err) {
    console.log(err);
  }
};

export const getSavedJobs = async (userId: string, callback?: any) => {
  try {
    const res = await axios.get(
      `${process.env.REACT_APP_UNSPLASHED_URL}api/v1/users/${userId}/savedjobs`
    );
    callback(res.data);
  } catch (err) {
    console.log(err);
  }
};

export const getAppliedJobs = async (userId: string, callback?: any) => {
  try {
    const res = await axios.get(
      `${process.env.REACT_APP_UNSPLASHED_URL}api/v1/users/${userId}/appliedjobs`
    );
    callback(res.data);
  } catch (err) {
    console.log(err);
  }
};

export const putSavedJobs = async (
  jobId: string,
  userId: string,
  callback?: any
) => {
  const data = {
    jobId: jobId,
  };

  try {
    const res = await axios.post(
      `${process.env.REACT_APP_UNSPLASHED_URL}api/v1/users/${userId}/savedjobs`,
      data
    );
  } catch (err) {
    console.log(err);
  }
};

export const putAppliedJobs = async (
  jobId: string,
  userId: string,
  callback?: any
) => {
  try {
    const data = {
      jobId: jobId,
    };
    const res = await axios.post(
      `${process.env.REACT_APP_UNSPLASHED_URL}api/v1/users/${userId}/appliedjobs`,
      data
    );
  } catch (err) {
    console.log(err);
  }
};

export const deleteSavedJobs = async (
  jobId: string,
  userId: string,
  callback?: any
) => {
  try {
    const data = {
      jobId: jobId,
    };
    const res = await axios.delete(
      `${process.env.REACT_APP_UNSPLASHED_URL}api/v1/users/${userId}/savedjobs`,
      { data: data }
    );
  } catch (err) {
    console.log(err);
  }
};

export const getJobsByFilter = async (
  options: any,
  skill: string,
  location: string,
  callback?: any
) => {
  try {
    const check =
      options["datePosted"]!.length === 0 &&
      options["distance"]!.length === 0 &&
      options["experienceLevel"]!.length === 0 &&
      options["jobType"]!.length === 0 &&
      options["transport"]!.length === 0;

    let jobTypeStr =
      options["jobType"].length !== 0
        ? "jobType=" + options["jobType"].join(",")
        : "";
    let experienceLevelStr =
      options["experienceLevel"].length !== 0
        ? "experienceLevel=" + options["experienceLevel"].join(",")
        : "";
    let datePostedStr =
      options["datePosted"].length !== 0
        ? "dateAdded=" + options["datePosted"].join(",")
        : "";
    let transportStr =
      options["transport"].length !== 0
        ? "commuteRoutes=" + options["transport"].join(",")
        : "";
    let distanceStr =
      options["distance"].length !== 0
        ? "distance=" + options["distance"].join(",")
        : "";

    let skillStr = skill !== "" ? "skills=" + skill : "";
    let locationStr = location !== "" ? "location=" + location : "";

    let str = check
      ? ""
      : jobTypeStr +
        "&" +
        experienceLevelStr +
        "&" +
        datePostedStr +
        "&" +
        transportStr +
        "&" +
        distanceStr;

    str = str + "&" + skillStr + "&" + locationStr;

    const res = await axios.get(
      `${process.env.REACT_APP_UNSPLASHED_URL}api/v1/jobs/?${str}`
    );
    callback(res.data);
  } catch (err) {
    console.log(err);
  }
};

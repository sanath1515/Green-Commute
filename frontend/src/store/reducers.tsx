import { optionsType } from "../Constants";

export type greenState = {
  location: string;
  worklocations: string[];
  skills: string[];
  step: string;
  jobId: string;
  searchSkill: string;
  searchLocation: string;
  options: optionsType;
  optionValue: boolean;
  sidebarIndex: string;
};

export const initialGreenState: greenState = {
  location: "",
  worklocations: [],
  skills: ["UI/UX Designer"],
  step: "1",
  jobId: "1",
  searchSkill: "",
  searchLocation: "",
  options: {
    datePosted: [],
    distance: [],
    experienceLevel: [],
    jobType: [],
    transport: [],
  },
  optionValue: true,
  sidebarIndex: "1",
};

type Action = {
  type: string;
  payload: string | string[] | any | boolean;
};

export const greenReducer = (
  state: greenState = initialGreenState,
  action: Action
) => {
  switch (action.type) {
    case "SET_LOCATION": {
      return { ...state, location: action.payload };
    }
    case "SET_SKILLS": {
      return { ...state, skills: action.payload };
    }
    case "SET_STEP": {
      return { ...state, step: action.payload };
    }
    case "SET_WORK_LOCATIONS": {
      return { ...state, worklocations: action.payload };
    }
    case "SET_JOB_ID": {
      return { ...state, jobId: action.payload };
    }
    case "SET_SEARCH_SKILL": {
      return { ...state, searchSkill: action.payload };
    }
    case "SET_SEARCH_LOCATION": {
      return { ...state, searchLocation: action.payload };
    }
    case "SET_OPTIONS": {
      return { ...state, options: action.payload };
    }
    case "SET_OPTIONS_VALUE": {
      return { ...state, optionValue: action.payload };
    }
    case "SET_SIDEBAR_INDEX": {
      return { ...state, sidebarIndex: action.payload };
    }
    default:
      return state;
  }
};

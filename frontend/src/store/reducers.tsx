import { optionsType } from "../Constants";

// Define your application state type
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
  resumeName: string;
};

// Initial state
export const initialGreenState: greenState = {
  location: "",
  worklocations: [],
  skills: ["UI/UX Designer"],
  step: "1",
  jobId: "3903848716",
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
  resumeName: "",
};

// Define action types
type Action =
  | { type: "SET_LOCATION"; payload: string }
  | { type: "SET_SKILLS"; payload: string[] }
  | { type: "SET_STEP"; payload: string }
  | { type: "SET_WORK_LOCATIONS"; payload: string[] }
  | { type: "SET_JOB_ID"; payload: string }
  | { type: "SET_SEARCH_SKILL"; payload: string }
  | { type: "SET_SEARCH_LOCATION"; payload: string }
  | { type: "SET_OPTIONS"; payload: optionsType }
  | { type: "SET_OPTIONS_VALUE"; payload: boolean }
  | { type: "SET_SIDEBAR_INDEX"; payload: string }
  | { type: "SET_RESUME_NAME"; payload: string };

// Reducer function
export const greenReducer = (
  state: greenState = initialGreenState,
  action: Action
): greenState => {
  switch (action.type) {
    case "SET_LOCATION":
      return { ...state, location: action.payload };
    case "SET_SKILLS":
      return { ...state, skills: action.payload };
    case "SET_STEP":
      return { ...state, step: action.payload };
    case "SET_WORK_LOCATIONS":
      return { ...state, worklocations: action.payload };
    case "SET_JOB_ID":
      return { ...state, jobId: action.payload };
    case "SET_SEARCH_SKILL":
      return { ...state, searchSkill: action.payload };
    case "SET_SEARCH_LOCATION":
      return { ...state, searchLocation: action.payload };
    case "SET_OPTIONS":
      return { ...state, options: action.payload };
    case "SET_OPTIONS_VALUE":
      return { ...state, optionValue: action.payload };
    case "SET_SIDEBAR_INDEX":
      return { ...state, sidebarIndex: action.payload };
    case "SET_RESUME_NAME":
      return { ...state, resumeName: action.payload };
    default:
      return state;
  }
};

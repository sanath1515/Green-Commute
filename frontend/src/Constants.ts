import { CabCardProps } from "./components/molecules/CabCard/CabCard";
import { countProps } from "./components/molecules/Jobcount/Count";
import { SideBarItemProps } from "./components/molecules/SideBarItem/SideBarItem";
import { StepProps } from "./components/molecules/Step/Step";

export const TRANSPORT_ICONS = ["metro", "bus", "car", "bike"];
export const SAVE = "Save";
export const UNSAVE = "Unsave";
export const APPLY = "Apply";
export const VIEWINMAPS = "View in google maps";
export const GREENCOMMUTE = "Green Commute";
export const GREENCOMMUTEROUTES = "Green Commute Routes";
export const JOBCITY = "HiTech City";

export const NAV_ICONS = [
  "message",
  "notification",
  "dashboard",
  "bookmark",
  "description",
  "date",
  "help",
  "location",
  "work",
];

export const COMMUTE_ROUTES = {
  text: "Commute routes available:",
  GREEN_COMMUTE: "Green Commute",
  YES: "Yes",
  NO: "No",
  ARRAY_OF_FOUR: [0, 1, 2, 3],
  userName: "Sara Joseph",
  headings: [
    "Distance",
    "Date Posted",
    "Job Type",
    "Experience Level",
    "Transport",
  ],
  distances: ["0-10 Kms", "11-20 Kms", "21-30 Kms", "31-40 Kms"],
  postDates: ["Past 24 hours", "Past week", "Past Month", "Anytime"],
  jobTypes: ["Full-Time", "Intership", "Contract", "Remote"],
  experience: ["Fresher", "Mid-Level", "Director", "Executive"],
  transport: ["Metro", "Motor cycle", "Bus", "Car Pooling"],
  recommend: "Recommended for you",
  recommendChild: "Based on your profile, skills and search history",
  findJob: "Find Jobs",
  navLocation: "East Marredpally, Secunderabad",
  userImg:
    "https://cdn.zeplin.io/5fa28fcbff79c58958e4e1a6/assets/21469ead-aeb7-47f1-900e-6a85e9034b59-3x.png",
};

export const items1: SideBarItemProps[] = [
  {
    id: "1",
    img:
      "https://cdn.zeplin.io/5fa28fcbff79c58958e4e1a6/assets/7d41e340-f4ed-4dab-a859-d4cd943a67f4.svg",
    name: "Dashboard",
  },
  {
    id: "2",
    img:
      "https://cdn.zeplin.io/5fa28fcbff79c58958e4e1a6/assets/eea0a498-2358-4544-9efc-56a335d17006.svg",
    name: "Find Jobs",
  },
  {
    id: "3",
    img:
      "https://cdn.zeplin.io/5fa28fcbff79c58958e4e1a6/assets/6a868b4b-bcd9-4019-adf5-14a232ea57db.svg",
    name: "Saved Jobs",
  },
  {
    id: "4",
    img:
      "https://cdn.zeplin.io/5fa28fcbff79c58958e4e1a6/assets/d8625e17-f32b-475c-a555-13321bfcdcd6.svg",
    name: "Practice Test",
  },
  {
    id: "5",
    img:
      "https://cdn.zeplin.io/5fa28fcbff79c58958e4e1a6/assets/85510963-f762-4bd8-8abd-d531c7cc6613.svg",
    name: "News & Events",
  },
];

export const items2: SideBarItemProps[] = [
  {
    id: "6",
    img:
      "https://cdn.zeplin.io/5fa28fcbff79c58958e4e1a6/assets/ecff648a-124a-4cfd-866d-7b7578e31468.svg",
    name: "Need Help?",
  },
  {
    id: "7",
    img:
      "https://cdn.zeplin.io/5fa28fcbff79c58958e4e1a6/assets/3b7d251c-b0ee-46cd-b072-81d03c31391b.svg",
    name: "Contact Us",
  },
  {
    id: "8",
    img:
      "https://cdn.zeplin.io/5fa28fcbff79c58958e4e1a6/assets/261d922c-807e-47b4-9b9c-8d151c866cdc.svg",
    name: "Settings",
  },
];

export type routePointsProps = {
  desc: string;
  time: string;
  cost?: string;
};
export const routePoints: routePointsProps[] = [
  {
    desc: "  Catch a bus 38X at 3.42 PM to Secunderabad bus stand.",
    time: "2 mins late",
    cost: "10$  .  58 mins",
  },
  {
    desc: "Head north on St. Johns road.",
    time: " 2mins",
  },
  {
    desc: "Catch a blue line metro towards Raidurg.",
    time: "On time",
    cost: "55$  .  36 mins",
  },
];

export const cabCarsData: CabCardProps[] = [
  {
    name: "Ola",
    img:
      "https://cdn.zeplin.io/5fa28fcbff79c58958e4e1a6/assets/d48594a7-0574-4fc0-967e-59b8b54f0c21.png",
    cost: "$30",
  },
  {
    name: "Uber",
    img:
      "https://cdn.zeplin.io/5fa28fcbff79c58958e4e1a6/assets/0210187f-05fd-4fa7-9f45-1931b6bb7a2d.png",
    cost: "$30",
  },
];

export const JOB_CARD_ARRAY: {
  id: number;
  src: string;
  days: string;
  jobRole: string;
  companyName: string;
  location: string;
}[] = [
  {
    id: 1,
    src: "hp",
    days: "2d",
    jobRole: "User Experience Designer",
    companyName: "Hp",
    location: "Hyderabad, Telanagana ,India",
  },
  {
    id: 2,
    src: "hp",
    days: "2d",
    jobRole: "User Experience Designer",
    companyName: "Hp",
    location: "Hyderabad, Telanagana ,India",
  },
  {
    id: 3,
    src: "hp",
    days: "2d",
    jobRole: "User Experience Designer",
    companyName: "Hp",
    location: "Hyderabad, Telanagana ,India",
  },
  {
    id: 4,
    src: "hp",
    days: "2d",
    jobRole: "User Experience Designer",
    companyName: "Hp",
    location: "Hyderabad, Telanagana ,India",
  },
];

export type AqiItems = {
  img: string;
  textNoNum: string;
  textWithNum: string;
};

export const AqiData: AqiItems[] = [
  {
    img:
      "https://cdn.zeplin.io/5fa28fcbff79c58958e4e1a6/assets/ae5e266d-f03e-4732-af5b-a8ebdac94494.svg",
    textNoNum: "Enter location to know Time Air Quality Index (Aqi)",
    textWithNum: "Real - Time Air Quality Index (Aqi) in this location",
  },
  {
    img:
      "https://cdn.zeplin.io/5fa28fcbff79c58958e4e1a6/assets/b7d255bc-324e-48a6-84ab-c0c15a18b17f.svg",
    textNoNum: "Enter location to know Time Air Quality Index (Aqi)",
    textWithNum: "Real - Time Air Quality Index (Aqi) in this location",
  },
  {
    img:
      "https://cdn.zeplin.io/5fa28fcbff79c58958e4e1a6/assets/8521819a-569c-4bbe-91d4-71a6d7a77c05.svg",
    textNoNum: "Enter your skills to know how many jobs are in this location",
    textWithNum: "Jobs found in these locations",
  },
];

export const jobCountData: countProps[] = [
  {
    city: "Hyderabad",
    number: "894",
  },
  {
    city: "Mumbai",
    number: "953",
  },
];

export const StepBarData: StepProps[] = [
  {
    name: "Your Location",
    number: "1",
    completed: false,
  },
  {
    name: "Job Location",
    number: "2",
    completed: false,
  },
  {
    name: "Your Skills",
    number: "3",
    completed: false,
  },
];

export type jobDataProp = {
  id?: number;
  jobProfile?: string;
  jobType?: string[];
  experienceLevel?: string[];
  distance?: string;
  imageSource?: string;
  dateAdded: string;
  companyName?: string;
  city?: string;
  state?: string;
  country?: string;
  greenCommute?: string;
  commuteRoutes?: string[];
  isSaved?: boolean;
  isApplied?: boolean;
  description?: string;
  requiredProficiency?: string[];
};

export type jobDataProp1 = {
  id?: number;
  jobProfile?: string;
  jobType?: string;
  experienceLevel?: string;
  distance?: string;
  imageSource?: string;
  dateAdded: string;
  companyName?: string;
  city?: string;
  state?: string;
  country?: string;
  greenCommute?: string;
  commuteRoutes?: string;
  isSaved?: boolean;
  isApplied?: boolean;
  description?: string;
  requiredProficiency?: string;
};

export const LANDING_PAGE_MESSAGE = {
  LANDING_PAGE_COMMUTE_HEADING: "More than 2000 people are using Green Commute",
  USER_LOCATION_HEADING: "Where do you stay?",
  JOB_LOCATION_HEADING: "Where do you want to work?",
  JOB_SKILLS_HEADING: "What do you want to do?",
};

export const PATHS = {
  LANDING_PAGE: "/landingpage",
  ADVANCED_SEARCH: "/advancedsearch",
  JOB_SEARCH: "/searchjob",
};

export type optionsType = {
  distance: string[];
  datePosted: string[];
  jobType: string[];
  experienceLevel: string[];
  transport: string[];
};

export const topnavbarimage =
  "https://cdn.zeplin.io/5fa28fcbff79c58958e4e1a6/assets/21469ead-aeb7-47f1-900e-6a85e9034b59-3x.png";

export const imgMap =
  "https://cdn.zeplin.io/5fa28fcbff79c58958e4e1a6/assets/d8a90ae4-9dc9-4d82-aed1-f9e36cd74089.png";

export const cost = "65$  .  58 mins";

export const dateData: any = {
  "Past 24 hours": 1,
  "Past week": 7,
  "Past Month": 30,
  Anytime: 1000,
};

export const FILTER = "Filter";
export const CLEARALL = "Clear All";
export const FIND_JOBS = "Find Jobs";
export const JOBS_LIST = "Job list";
export const BASED_ON_YOUR_SEARCH = "Based on your search";

export const calculateDays = (dateAdded: string) => {
  return Math.abs(
    Math.ceil(
      (new Date(dateAdded).getTime() - new Date(Date.now()).getTime()) /
        (1000 * 3600 * 24)
    )
  );
};

export const ALERT_MESSAGES = {
  SAVE: "Job has been saved successfully!",
  UNSAVE: "The job has been unsaved successfully!",
  APPLY: "Job has been applied successfully!",
  UNAPPLY: "Applied",
};

export const OPTIONS_HEADINGS = [
  "distance",
  "datePosted",
  "jobType",
  "experienceLevel",
  "transport",
];

export const PLACEHOLDERS = {
  WORK_LOCATION: "Enter your job location",
  SKILLS: "Enter your skills",
};

export const exampleData = {
  id: 1,
  jobProfile: "User Experience Designer",
  jobType: ["Full-Time"],
  experienceLevel: ["Mid-Level"],
  distance: "0-10 Kms",
  imageSource:
    "https://cdn.zeplin.io/5fa28fcbff79c58958e4e1a6/assets/4a211710-3383-49de-9edd-ef48e3af27d1-2x.png",
  dateAdded: "2021-10-1",
  companyName: "HP",
  city: "Hyderabad",
  state: "Telangana",
  country: "India",
  greenCommute: "Yes",
  commuteRoutes: ["bike", "car"],
  isSaved: false,
  isApplied: false,
  description:
    "HP is seeking a talented, personable interaction designer who can assist the User Experience Design team by working with other designers and development teams on a variety of projects. The HP User Experience Design group is a distributed multi-disciplinary team of professionals that are responsible for enhancing the UX of the company’s collective product suites worldwide.",
  requiredProficiency:
    "3-5 years of demonstrated experience in creating and implementing UX designProficient with visual design programs such as Adobe Photoshop and othersAbility to work effectively in a collaborative environment to create top-performing interfaces for clients Experience with coding and ability to troubleshoot using HTML, CSS and comparable languages",
};

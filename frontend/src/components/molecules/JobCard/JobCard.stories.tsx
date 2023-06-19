import React from "react";
import JobCard from "./JobCard";
import hp from "../../../assests/hp.webp";

export default {
  title: "Molecules/JobCard",
  component: JobCard,
};

const Template = (args) => <JobCard {...args} />;

export const Default = Template.bind({});

Default.args = {
  src: hp,
  days: 2,
  jobRole: "User Experience Designer",
  companyName: "Hp",
  location: "Hyderabad, Telanagana ,India",
  commuteRoute: ["bus", "car"],
};

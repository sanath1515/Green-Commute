import React from "react";
import JobList from "./JobList";
import hp from "../../../assests/hp.webp";

export default {
  title: "Molecules/JobList",
  component: JobList,
};

const Template = (args) => <JobList {...args} />;

export const Default = Template.bind({});

Default.args = {
  src: hp,
  dayscount: "2d",
  jobRole: "User Experience Designer",
  companyName: "Hp",
  location: "Hyderabad, Telanagana ,India",
};

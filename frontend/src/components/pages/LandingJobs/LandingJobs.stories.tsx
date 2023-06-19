import React from "react";
import LandingJobs from "./LandingJobs";

export default {
  title: "pages/LandingJobs",
  component: LandingJobs,
};

const Template = (args) => <LandingJobs {...args} />;

export const Primary = Template.bind({});

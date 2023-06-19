import React from "react";
import TopNavBar from "./TopNavBar";

export default {
  title: "Organisms/TopNavBar",
  component: TopNavBar,
};

const Template = (args) => <TopNavBar {...args} />;

export const Primary = Template.bind({});

Primary.args = {
  location: "East Mareedpally, Secunderabad",
  src:
    "https://cdn.zeplin.io/5fa28fcbff79c58958e4e1a6/assets/21469ead-aeb7-47f1-900e-6a85e9034b59-3x.png",
};

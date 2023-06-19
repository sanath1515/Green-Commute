import React from "react";
import Filters from "./Filters";

export default {
  title: "Organisms/Filters",
  component: Filters,
};

const Template = (args) => <Filters {...args} />;

export const Primary = Template.bind({});

Primary.args = {
  button: "Filter",
  button1: "Clear all",
  button2: "Apply",
};

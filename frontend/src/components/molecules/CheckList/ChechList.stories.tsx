import React from "react";
import CheckboxList from "./CheckList";
export default {
  title: "Molecules/CheckboxList",
  component: CheckboxList,
};

const Template = (args) => <CheckboxList {...args} />;

export const Primary = Template.bind({});

Primary.args = {
  heading: "Distance",
  listNames: ["Part Time", "Full Time", "Contract", "Remote"],
};

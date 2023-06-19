import React, { ComponentProps } from "react";
import { Story } from "@storybook/react";
import Findjob, { prop1 } from "./Findjob";

export default {
  title: "Organisms/JobSearch",
  component: Findjob,
};

const Template: Story<ComponentProps<typeof Findjob>> = (args: prop1) => (
  <Findjob {...args} />
);
export const Input = Template.bind({});
Input.args = {
  Skill: "UI/UX Designer",
  Location: "Hyderabad",
};

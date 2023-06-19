import React, { ComponentProps } from "react";
import { Story } from "@storybook/react";
import Navicon, { iconProps } from "./Navicons";
export default {
  title: "Atoms/Navicons",
  component: Navicon,
};
const Template: Story<ComponentProps<typeof Navicon>> = (args: iconProps) => (
  <Navicon {...args} />
);
export const Input = Template.bind({});
Input.args = {
  name: "message",
};

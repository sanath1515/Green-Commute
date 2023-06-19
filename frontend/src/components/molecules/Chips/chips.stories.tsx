import React, { ComponentProps } from "react";
import { Story } from "@storybook/react";
import Chips, { chipProps } from "./chips";

export default {
  title: "Molecules/chips",
  component: Chips,
};
const Template: Story<ComponentProps<typeof Chips>> = (args: chipProps) => (
  <Chips {...args} />
);
export const Input = Template.bind({});
Input.args = {
  label: "Goa",
};

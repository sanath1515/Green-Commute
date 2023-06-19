import { Story } from "@storybook/react";
import React, { ComponentProps } from "react";
import Count, { countProps } from "./Count";

const CountStory = {
  title: "Molecules/Count",
  component: Count,
};
const Template: Story<ComponentProps<typeof Count>> = (args: countProps) => (
  <Count {...args} />
);
export const Input = Template.bind({});
Input.args = {
  number: "915",
  city: "Hyderabad",
};

export default CountStory;

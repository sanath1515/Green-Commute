import React, { ComponentProps } from "react";
import Step, { StepProps } from "./Step";
import { Story } from "@storybook/react";

export default {
  title: "molecules/Step",
  component: Step,
};

const Template: Story<ComponentProps<typeof Step>> = (args: StepProps) => (
  <Step {...args} />
);

export const Item = Template.bind({});

Item.args = {
  number: "1",
  name: "Your Location",
  completed: true,
};

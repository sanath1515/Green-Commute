import React, { ComponentProps } from "react";
import StepBar, { StepBarProps } from "./StepBar";
import { Story } from "@storybook/react";

export default {
  title: "molecules/StepBar",
  component: StepBar,
};

const Template: Story<ComponentProps<typeof StepBar>> = (
  args: StepBarProps
) => <StepBar {...args} />;

export const Item = Template.bind({});

Item.args = {
  status: 2,
};

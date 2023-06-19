import React, { ComponentProps } from "react";
import Aqi, { AqiProps } from "./Aqi";
import { Story } from "@storybook/react";

export default {
  title: "molecules/Aqi",
  component: Aqi,
};

const Template: Story<ComponentProps<typeof Aqi>> = (args: AqiProps) => (
  <Aqi {...args} />
);

export const Item = Template.bind({});

Item.args = {
  number: "834",
  step: 3,
};

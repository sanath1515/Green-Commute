import React, { ComponentProps } from "react";
import { Story } from "@storybook/react";
import Icons1, { iconProps } from "./icons";
export default {
  title: "Atoms/TransportIcon",
  component: Icons1,
};

const Template: Story<ComponentProps<typeof Icons1>> = (args: iconProps) => (
  <Icons1 {...args} />
);
export const Input = Template.bind({});
Input.args = {
  name: "bus",
};

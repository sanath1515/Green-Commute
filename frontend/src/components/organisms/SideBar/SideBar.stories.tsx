import React, { ComponentProps } from "react";
import { Story } from "@storybook/react";
import SideBar from "./SideBar";

export default {
  title: "Organisms/SideBar",
  component: SideBar,
};
const Template: Story<ComponentProps<typeof SideBar>> = () => <SideBar />;
export const Default = Template.bind({});


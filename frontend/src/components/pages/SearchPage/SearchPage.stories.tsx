import React, { ComponentProps } from "react";
import { Story } from "@storybook/react";
import SearchPage from "./SearchPage";

export default {
  title: "Pages/SearchPage",
  component: SearchPage,
};
const Template: Story<ComponentProps<typeof SearchPage>> = () => <SearchPage />;
export const Default = Template.bind({});

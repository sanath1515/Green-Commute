import React, { ComponentProps } from "react";
import { Story } from "@storybook/react";
import Routes from "./Routes";
import { routePoints } from "../../../Constants";

export default {
  title: "Organisms/Routes",
  component: Routes,
};

const Template: Story<ComponentProps<typeof Routes>> = () => (
  <Routes
    img="https://cdn.zeplin.io/5fa28fcbff79c58958e4e1a6/assets/5af168ed-6de9-42c9-92cd-5aa6481037cc-3x.png"
    title="User Experience Designer"
    company="BMW"
    location="Hitech City, Telangana"
    loc1="East Marredpally, E Marredpal..."
    loc2="Hitech City, Telangana, Secundera..."
    routePoints={routePoints}
    locHead="Marredpally - Hitech City"
    cost="65$  .  58 mins"
    imgMap="https://cdn.zeplin.io/5fa28fcbff79c58958e4e1a6/assets/d8a90ae4-9dc9-4d82-aed1-f9e36cd74089.png"
  />
);
export const Default = Template.bind({});

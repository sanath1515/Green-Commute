import React, { ComponentProps } from "react";
import CabCard, { CabCardProps } from "./CabCard";
import { Story } from "@storybook/react";

export default {
  title: "molecules/CabCard",
  component: CabCard,
};

const Template: Story<ComponentProps<typeof CabCard>> = (
  args: CabCardProps
) => <CabCard {...args} />;

export const Item = Template.bind({});

Item.args = {
  name: "Ola",
  img:
    "https://cdn.zeplin.io/5fa28fcbff79c58958e4e1a6/assets/d48594a7-0574-4fc0-967e-59b8b54f0c21.png",
  cost: "$30",
};

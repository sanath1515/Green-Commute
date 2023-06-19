import React, { ComponentProps } from "react";
import { Story } from "@storybook/react";
import JobDescription from "./JobDescription";

export default {
  title: "Organisms/JobDescription",
  component: JobDescription,
};

const Template: Story<ComponentProps<typeof JobDescription>> = () => (
  <JobDescription
    img="https://cdn.zeplin.io/5fa28fcbff79c58958e4e1a6/assets/5af168ed-6de9-42c9-92cd-5aa6481037cc-3x.png"
    title="User Experience Designer"
    company="BMW"
    location="Hitech City, Telangana"
    description="Open Text is seeking a talented, personable interaction designer who can assist the User Experience Design team by working with other designers and development teams on a variety of projects. The OpenText User Experience Design group is a distributed multi-disciplinary team of professionals that are responsible for enhancing the UX of the company’s collective product suites worldwide."
    points={[
      "High level of proficiency with leading UX Design software packages, such as Axure, Sketch, InVision, or Experience Design including the core Adobe Creative Suite products.",
      "Excellent written and oral communication and presentation skills",
    ]}
    button1="Save"
    button2="Apply"
    bigButton="Green Commute Routes"
  />
);
export const Default = Template.bind({});

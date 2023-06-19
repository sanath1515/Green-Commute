import React from "react";
import { Avatars } from "./Avatar";
import img from "./women.jpeg";

export default {
  title: "Atoms/Avatars",
  component: Avatars,
};

const Template = (args) => <Avatars {...args} />;

export const Letter = Template.bind({});

export const Image = Template.bind({});

export const Number = Template.bind({});

Image.args = {
  alt: "A",
  src: img,
};

Letter.args = {
  alt: "A",
  src: "img",
  valid: true,
};

Number.args = {
  alt: "1",
  src: "A",
  valid: true,
};

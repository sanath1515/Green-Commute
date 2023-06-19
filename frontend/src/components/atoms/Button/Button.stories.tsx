import React from "react";
import { Button } from "./Button";

export default {
  title: "Atoms/Button",
  component: Button,
};

const Template = (args) => <Button {...args} />;

export const Primary = Template.bind({});

Primary.args = {
  name: "hello",
  variant: "outlined",
  color: "primary",
};

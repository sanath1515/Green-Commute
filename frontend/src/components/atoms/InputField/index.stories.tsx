import React, { ComponentProps } from "react";
import { Story } from "@storybook/react";
import { action } from "@storybook/addon-actions";
import InputField, { TextFieldProps } from ".";

const InputStory = {
  title: "Atoms/Input",
  component: InputField,
};

const Template: Story<ComponentProps<typeof InputField>> = (
  args: TextFieldProps
) => <InputField {...args} />;

export const Input = Template.bind({});
Input.args = {
  size: "small",
  variant: "outlined",
  color: "primary",
};

export default InputStory;

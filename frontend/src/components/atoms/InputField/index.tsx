import TextField from "@material-ui/core/TextField";
import React from "react";

export type TextFieldProps = {
  placeholder?: string;
  value?: unknown;
  size?: "small" | "medium";
  onChange?: React.ChangeEventHandler<HTMLTextAreaElement | HTMLInputElement>;
  variant: "outlined" | "standard" | "filled";
  color?: "primary" | "secondary";
};

const InputField: React.FC<TextFieldProps> = ({
  placeholder,
  size,
  value,
  onChange,
  variant,
  color,
}) => {
  return (
    <TextField
      color={color}
      variant={variant}
      value={value}
      size={size}
      placeholder={placeholder}
      onChange={onChange}
    />
  );
};
export default InputField;

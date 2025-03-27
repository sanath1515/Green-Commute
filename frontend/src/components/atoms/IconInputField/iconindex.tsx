import React, { FocusEventHandler } from "react";
import { TextField, useTheme, Stack, Box, Theme } from "@mui/material";
import { styled } from "@mui/material/styles"; 
export type TextFieldProps = {
  icon?: React.ReactNode;
  placeholder?: string;
  value?: unknown;
  size?: "small" | "medium";
  onChange?: React.ChangeEventHandler<HTMLTextAreaElement | HTMLInputElement>;
  variant?: "outlined" | "standard" | "filled";
  color?: "primary" | "secondary";
  inputProps?: object;
  onKeyDown?: React.KeyboardEventHandler;
  onBlur?: FocusEventHandler
};

const StyledIcon = styled(Box)(({ theme }: { theme: Theme }) => ({
  marginLeft: theme.spacing(2),
  marginRight: theme.spacing(3),
  marginTop: theme.spacing(0.5),
  color: theme.palette.grey[600],
}));

export const IconInputField: React.FC<TextFieldProps> = ({
  icon,
  placeholder,
  size,
  value,
  onChange,
  variant = "outlined",
  color = "primary",
  onKeyDown,
  inputProps,
  onBlur,
}) => {
  return (
    <Stack direction="row" alignItems="center" spacing={1} sx={{ overflow: "hidden" }}>
      {icon && <StyledIcon>{icon}</StyledIcon>}
      <TextField
        fullWidth
        value={value}
        color={color}
        size={size}
        placeholder={placeholder}
        onChange={onChange}
        variant={variant}
        InputProps={inputProps}
        onKeyDown={onKeyDown}
        onBlur={onBlur}
      />
    </Stack>
  );
};

export default IconInputField;

import React from "react";
import { Typography, Avatar, useTheme } from "@mui/material";
import { styled } from "@mui/material/styles";

export type StepProps = {
  number: string;
  name: string;
  completed: boolean;
};

// Styled components using MUI's styled
const Root = styled("div")({
  display: "flex",
  alignItems: "center",
});

const StyledAvatar = styled(Avatar)({
  width: 40,
  height: 40,
});

const StepText = styled(Typography, {
  shouldForwardProp: (prop) => prop !== "completed",
})<{ completed: boolean }>(({ theme, completed }) => ({
  marginLeft: theme.spacing(2.5),
  marginTop: theme.spacing(1.5),
  color: completed ? theme.palette.primary.main : theme.palette.grey[200],
}));

const Step: React.FC<StepProps> = ({ number, name, completed }) => {
  const theme = useTheme();

  return (
    <Root>
      <StyledAvatar
        alt={number}
        sx={{
          bgcolor: completed
            ? theme.palette.primary.main
            : theme.palette.grey[100],
          color: completed
            ? theme.palette.success.light
            : theme.palette.grey[200],
        }}
      >
        {number}
      </StyledAvatar>
      <StepText variant="h6" completed={completed}>
        {name}
      </StepText>
    </Root>
  );
};

export default Step;

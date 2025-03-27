import React from "react";
import { Typography, Radio, List, ListItem } from "@mui/material";
import { styled } from "@mui/material/styles";
import { COMMUTE_ROUTES } from "../../../Constants";

// Styled components
const StyledList = styled(List)(({ theme }) => ({
  width: "100%",
  maxWidth: 360,
  borderRadius: 20,
}));

const Heading = styled(Typography)(({ theme }) => ({
  width: "122px",
  height: "24px",
  paddingTop: "5px",
  paddingLeft: 0,
  color: "#19293b",
  marginBottom: "5px",
}));

const StyledItem = styled(ListItem)(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  gap: "5px",
  padding: "1px 0",
  objectFit: "contain",
  marginBottom: "5px",
}));

const StyledRadio = styled(Radio)(({ theme }) => ({
  width: "20px",
  height: "20px",
  padding: 0,
}));

const Text = styled(Typography)(({ theme }) => ({
  width: "97px",
  height: "24px",
  paddingLeft: "5px",
  color: "#5f7381",
}));

const RadioButtons: React.FC = () => {
  return (
    <StyledList>
      <Heading variant="subtitle2">{COMMUTE_ROUTES.GREEN_COMMUTE}</Heading>
      <StyledItem>
        <StyledRadio checked size="small" color="primary" />
        <Text>{COMMUTE_ROUTES.YES}</Text>
      </StyledItem>
      <StyledItem>
        <StyledRadio size="small" color="primary" />
        <Text>{COMMUTE_ROUTES.NO}</Text>
      </StyledItem>
    </StyledList>
  );
};

export default RadioButtons;

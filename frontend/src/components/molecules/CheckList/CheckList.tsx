import React from "react";
import {
  List,
  ListItem,
  Checkbox,
  Typography,
  useTheme,
  Box,
} from "@mui/material";
import CheckBoxOutlinedIcon from "@mui/icons-material/CheckBoxOutlined";
import CheckBoxOutlineBlankOutlinedIcon from "@mui/icons-material/CheckBoxOutlineBlankOutlined";
import { styled } from "@mui/material/styles"; 

import { COMMUTE_ROUTES } from "../../../Constants";

type CheckboxProps = {
  heading: string;
  listNames: Array<string>;
  onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
  flag?: boolean;
};

// Styled components
const StyledList = styled(List)(({ theme }) => ({
  width: "100%",
  maxWidth: 360,
  backgroundColor: theme.palette.background.paper,
}));

const StyledItem = styled(ListItem)({
  display: "flex",
  flexDirection: "row",
  alignItems: "center",
  gap: "5px",
  padding: "1px 0",
  marginBottom: "5px",
  paddingLeft: "20px",
});

const CheckboxLabel = styled(Typography)({
  color: "#5f7381",
  paddingLeft: "5px",
  marginBottom: "3px",
});

const Heading = styled(Typography)({
  color: "#19293b",
  padding: "5px 0",
  marginLeft: "10px",
  marginBottom: "5px",
});

const CheckList: React.FC<CheckboxProps> = ({
  heading,
  listNames,
  onChange,
  flag,
}) => {
  const theme = useTheme();

  return (
    <StyledList>
      <Heading variant="subtitle2">{heading}</Heading>
      {COMMUTE_ROUTES.ARRAY_OF_FOUR.map((value) => (
        <StyledItem key={value}>
          <Checkbox
            edge="start"
            disableRipple
            size="small"
            value={listNames[value]}
            onChange={onChange}
            color="primary"
            icon={<CheckBoxOutlineBlankOutlinedIcon color="secondary" />}
            checkedIcon={<CheckBoxOutlinedIcon />}
          />
          <CheckboxLabel variant="body2">{listNames[value]}</CheckboxLabel>
        </StyledItem>
      ))}
    </StyledList>
  );
};

export default CheckList;

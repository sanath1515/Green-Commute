import React from "react";
import { Typography } from "@mui/material";
import { styled } from "@mui/material/styles"; 


export type CountProps = {
  number?: string;
  city?: string;
};

// Styled components
const NumberText = styled(Typography)({
  textAlign: "center",
  fontSize: "100px",
  fontWeight: 300,
});

const CityText = styled(Typography)({
  textAlign: "center",
});

export const Count: React.FC<CountProps> = ({ number, city = "" }) => {
  return (
    <>
      <NumberText variant="h2">{number}</NumberText>
      <CityText variant="h3">{city}</CityText>
    </>
  );
};

export default Count;

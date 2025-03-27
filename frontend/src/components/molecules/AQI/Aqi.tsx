import React from "react";
import { Box, Typography } from "@mui/material";
import { useSelector } from "react-redux";
import { AqiData } from "../../../Constants";
import Count from "../Jobcount/Count";
import { greenState } from "../../../store/reducers";

export type AqiProps = {
  step: number;
  number?: string;
};

const Aqi: React.FC<AqiProps> = ({ step, number }) => {
  const workLocations: string[] = useSelector<greenState, greenState["worklocations"]>(
    (state) => state.worklocations
  );

  const aqis = ["830", "920"];

  const jobs = workLocations.slice(0, 2).map((temp, index) => (
    <Box key={index} sx={{ display: "flex", justifyContent: "center" }}>
      <Count city={temp} number={aqis[index % 2]} />
    </Box>
  ));

  return (
    <Box
      sx={{
        width: 650,
        height: 850,
        backgroundColor: "#e7fce0",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
      }}
    >
      <img
        src={AqiData[step - 1].img}
        style={{
          flexGrow: 0,
          marginBottom: 20,
          objectFit: "contain",
          position: "relative",
          top: 150,
        }}
      />
      {number && step !== 2 && (
        <Typography variant="h3" sx={{ fontSize: 100, color: "#19293b", mt: 4, position: "relative", top: 175 }}>
          {number}
        </Typography>
      )}
      {number && step === 2 && (
        <Box sx={{ display: "flex", justifyContent: "space-around", width: 500, mt: 5, position: "relative", top: 150 }}>
          {jobs}
        </Box>
      )}
      <Typography
        variant="h3"
        sx={{
          mt: number ? 5 : 1,
          color: "#19293b",
          position: "relative",
          top: number ? 150 : 225,
          textAlign: "center",
          width: 500,
        }}
      >
        {number ? AqiData[step - 1].textWithNum : AqiData[step - 1].textNoNum}
      </Typography>
    </Box>
  );
};

export default Aqi;

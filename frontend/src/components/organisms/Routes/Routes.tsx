import React, { useState } from "react";
import { Typography, Box, Divider } from "@mui/material";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import FiberManualRecordIcon from "@mui/icons-material/FiberManualRecord";
import ClearIcon from "@mui/icons-material/Clear";
import LocationOnOutlinedIcon from "@mui/icons-material/LocationOnOutlined";
import DirectionsWalkIcon from "@mui/icons-material/DirectionsWalk";
import Icons1 from "../../atoms/Transporticons/icons";
import { Button } from "../../atoms/Button/Button";
import {
  APPLY,
  cabCarsData,
  routePointsProps,
  SAVE,
  TRANSPORT_ICONS,
  UNSAVE,
  VIEWINMAPS,
} from "../../../Constants";
import CabCard from "../../molecules/CabCard/CabCard";
import theme from "../../../theme/theme";

export type RoutesProps = {
  img: string;
  title: string;
  company: string;
  location: string;
  loc1: string;
  loc2: string;
  routePoints: routePointsProps[];
  locHead: string;
  cost: string;
  imgMap: string;
  backHandler?: () => void;
  applyB?: boolean;
  job_url?: string;
};

const Routes: React.FC<RoutesProps> = ({
  company,
  img,
  location,
  title,
  loc1,
  loc2,
  cost,
  routePoints,
  locHead,
  imgMap,
  backHandler,
  applyB,
}) => {
  const [transport, setTransport] = useState<string>(TRANSPORT_ICONS[0]);

  const cabs = cabCarsData.map((cab) => <CabCard key={cab.name} {...cab} />);

  const clickHandler = (event: any) => {
    if (event.target.id !== "") setTransport(event.target.id);
  };

  return (
    <Box pl={5} pr={8} mt={10} width={330} color="grey.200">
      <Box display="flex" ml={1}>
        <Box component="img" src={img} width={50} height={50} />
        <Box display="flex" flexDirection="column" ml={2}>
          <Typography variant="subtitle1" color="grey.700">
            {title}
          </Typography>
          <Typography variant="overline" color="grey.200">
            {company}
          </Typography>
          <Typography variant="overline" color="grey.200">
            {location}
          </Typography>
        </Box>
      </Box>

      <Divider sx={{ my: 6, borderColor: 'grey.800' }} />

      <Box ml={2}>
        <Box display="flex" alignItems="center">
          <ArrowBackIcon onClick={backHandler} sx={{ color: 'grey.200', cursor: 'pointer' }} />
          <Typography variant="subtitle1" ml={3} color="grey.700">
            Commute Routes
          </Typography>
        </Box>

        <Box component="img" src={imgMap} mt={5} width={300} alt="Map" />

        <Box mt={2.5} mb={2.5} bgcolor="grey.100" borderRadius={2} width={300} height={50} display="flex" alignItems="center">
          <FiberManualRecordIcon sx={{ fontSize: 12, ml: 1 }} />
          <Typography variant="body1" ml={2}>{loc1}</Typography>
          <ClearIcon fontSize="small" sx={{ ml: 'auto', mr: 2, color: 'grey.200' }} />
        </Box>

        <Box mb={2.5} bgcolor="grey.100" borderRadius={2} width={300} height={50} display="flex" alignItems="center">
          <LocationOnOutlinedIcon fontSize="small" sx={{ ml: 1 }} />
          <Typography variant="body1" ml={2}>{loc2}</Typography>
        </Box>
      </Box>

      <Divider sx={{ my: 6, borderColor: 'grey.800' }} />

      <Box ml={2}>
        <Box display="flex" justifyContent="space-between" alignItems="center" width={300} mb={1}>
          <Typography variant="subtitle1" color="grey.700">Your Options</Typography>
          <Box display="flex" justifyContent="space-evenly" width={150}>
            {TRANSPORT_ICONS.map((icon) => (
              <Icons1
                key={icon}
                name={icon}
                id={icon}
                onClick={clickHandler}
                className={transport === icon ? 'selected' : 'unselected'}
              />
            ))}
          </Box>
        </Box>

        {transport === TRANSPORT_ICONS[0] && (
          <Box mt={2}>
            <Box display="flex" justifyContent="space-between" width={300} mb={2} color="grey.700">
              <Typography variant="body2">{locHead}</Typography>
              <Typography variant="body1">{cost}</Typography>
            </Box>
            <Box display="flex" alignItems="flex-start" mt={4} mb={3}>
              <Icons1 name={TRANSPORT_ICONS[1]} />
              <Box ml={1.5}>
                <Typography variant="caption" color="grey.200">
                  {routePoints[0].desc} <span style={{ color: theme.palette.error.main }}>{routePoints[0].time}</span>
                </Typography>
                <Typography variant="caption" color="grey.600">{routePoints[0].cost}</Typography>
              </Box>
            </Box>
            <Box display="flex" alignItems="center" mt={4} mb={3}>
              <DirectionsWalkIcon fontSize="small" />
              <Typography variant="caption" ml={1.5} color="grey.200">
                {routePoints[1].desc} <span style={{ fontSize: 10 }}>{routePoints[1].time}</span>
              </Typography>
            </Box>
            <Box display="flex" alignItems="flex-start" mt={4} mb={3}>
              <Icons1 name={TRANSPORT_ICONS[0]} />
              <Box ml={1.5}>
                <Typography variant="caption" color="grey.200">
                  {routePoints[2].desc} <span style={{ color: theme.palette.success.main }}>{routePoints[2].time}</span>
                </Typography>
                <Typography variant="caption" color="grey.600">{routePoints[2].cost}</Typography>
              </Box>
            </Box>
            <Button variant="text" name={VIEWINMAPS} sx={{ color: theme.palette.primary.main, fontFamily: 'Montserrat', fontSize: 14, fontWeight: 600, letterSpacing: 0.2, textTransform: 'none' }} />
          </Box>
        )}
      </Box>

      {transport === TRANSPORT_ICONS[2] && <Box display="flex" flexDirection="column">{cabs}</Box>}

      <Divider sx={{ my: 6, borderColor: 'grey.800' }} />

      <Box mt={2} mb={2} ml={3} display="flex">
        <Button
          variant="outlined"
          color="primary"
          name={applyB ? SAVE : UNSAVE}
          sx={{ borderRadius: 2, mr: 2, width: 140, height: 48, textTransform: 'none', fontWeight: 600, fontFamily: 'Montserrat' }}
        />
        <Button
          variant="contained"
          color="primary"
          name={APPLY}
          sx={{ borderRadius: 2, width: 140, height: 48, textTransform: 'none', fontWeight: 600, fontFamily: 'Montserrat' }}
        />
      </Box>
    </Box>
  );
};

export default Routes;
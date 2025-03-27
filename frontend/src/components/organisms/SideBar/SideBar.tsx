import React, { useState } from "react";
import {
  Typography,
  Box,
  Divider,
  IconButton,
} from "@mui/material";
import { styled, useTheme } from "@mui/material/styles";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import FiberManualRecordIcon from "@mui/icons-material/FiberManualRecord";
import ClearIcon from "@mui/icons-material/Clear";
import LocationOnOutlinedIcon from "@mui/icons-material/LocationOnOutlined";
import DirectionsWalkIcon from "@mui/icons-material/DirectionsWalk";
import Icons1 from "../../atoms/Transporticons/icons";
import CabCard from "../../molecules/CabCard/CabCard";
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

// Props
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

// Styled Components
const Root = styled(Box)(({ theme }) => ({
  paddingLeft: 20,
  paddingRight: 50,
  marginTop: theme.spacing(10),
  width: 330,
  color: theme.palette.grey[200],
}));

const PartRow = styled("div")({
  display: "flex",
  marginLeft: 10,
});

const DetailCol = styled("div")(({ theme }) => ({
  display: "flex",
  flexDirection: "column",
  marginLeft: 20,
}));

const Image = styled("img")({
  width: 50,
  height: 50,
});

const MapImage = styled("img")(({ theme }) => ({
  width: 300,
  marginTop: theme.spacing(5),
}));

const LocCard = styled(Box)(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  width: 300,
  height: 50,
  borderRadius: 10,
  backgroundColor: theme.palette.grey[100],
  margin: `${theme.spacing(2.5)}px 0`,
}));

const IconWrap = styled(Box)(({ theme }) => ({
  display: "flex",
  justifyContent: "space-evenly",
  alignItems: "center",
  width: 150,
}));

const MetroRoute = styled(Box)(({ theme }) => ({
  marginTop: theme.spacing(2),
}));

const StyledDivider = styled("hr")(({ theme }) => ({
  border: "solid 0.1px",
  color: theme.palette.grey[800],
  marginTop: theme.spacing(4.75),
  marginBottom: theme.spacing(6),
}));

const IconOption = styled("div")<{ selected: boolean }>(({ theme, selected }) => ({
  backgroundColor: selected ? theme.palette.primary.main : "transparent",
  color: selected ? "#fff" : theme.palette.grey[600],
  borderRadius: 50,
  padding: theme.spacing(3),
  cursor: "pointer",
}));

const ButtonsWrapper = styled(Box)(({ theme }) => ({
  marginTop: 15,
  marginBottom: 15,
  marginLeft: theme.spacing(3),
}));

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
  const theme = useTheme();
  const [transport, setTransport] = useState<string>(TRANSPORT_ICONS[0]);

  const cabs = cabCarsData.map((cab, idx) => <CabCard {...cab} key={idx} />);

  const clickHandler = (event: React.MouseEvent<HTMLElement>) => {
    const id = (event.target as HTMLElement).id;
    if (id) setTransport(id);
  };

  return (
    <Root>
      <PartRow>
        <Image src={img} />
        <DetailCol>
          <Typography variant="subtitle1" color={theme.palette.grey[700]}>
            {title}
          </Typography>
          <Typography variant="overline" color={theme.palette.grey[200]}>
            {company}
          </Typography>
          <Typography variant="overline" color={theme.palette.grey[200]}>
            {location}
          </Typography>
        </DetailCol>
      </PartRow>

      <StyledDivider />

      <Box ml={2}>
        <Box display="flex" alignItems="center">
          <ArrowBackIcon
            sx={{ color: theme.palette.grey[200], cursor: "pointer" }}
            onClick={backHandler}
          />
          <Typography variant="subtitle1" ml={3} color={theme.palette.grey[700]}>
            Commute Routes
          </Typography>
        </Box>

        <MapImage src={imgMap} alt="map" />

        <LocCard>
          <FiberManualRecordIcon sx={{ fontSize: 12, ml: 2 }} />
          <Typography variant="body1" sx={{ ml: 2 }}>
            {loc1}
          </Typography>
          <ClearIcon fontSize="small" sx={{ ml: "auto", mr: 2, color: theme.palette.grey[200] }} />
        </LocCard>

        <LocCard>
          <LocationOnOutlinedIcon fontSize="small" sx={{ ml: 2 }} />
          <Typography variant="body1" sx={{ ml: 2 }}>
            {loc2}
          </Typography>
        </LocCard>
      </Box>

      <StyledDivider />

      <Box ml={2}>
        <Box display="flex" justifyContent="space-between" alignItems="center" width={300}>
          <Typography variant="subtitle1" color={theme.palette.grey[700]}>
            Your Options
          </Typography>
          <IconWrap>
            {TRANSPORT_ICONS.map((icon) => (
              <IconOption
                key={icon}
                selected={transport === icon}
                id={icon}
                onClick={clickHandler}
              >
                <Icons1 name={icon} />
              </IconOption>
            ))}
          </IconWrap>
        </Box>

        {transport === TRANSPORT_ICONS[0] && (
          <MetroRoute>
            <Box display="flex" justifyContent="space-between" width={300} mb={2}>
              <Typography variant="body2">{locHead}</Typography>
              <Typography variant="body1">{cost}</Typography>
            </Box>

            <Box display="flex" alignItems="center" mt={4} mb={3}>
              <Icons1 name={TRANSPORT_ICONS[1]} />
              <Box ml={1.5}>
                <Typography variant="caption">
                  {routePoints[0].desc}{" "}
                  <span style={{ color: theme.palette.error.main }}>{routePoints[0].time}</span>
                </Typography>
                <Typography variant="caption" sx={{ fontSize: 10, color: theme.palette.grey[600] }}>
                  {routePoints[0].cost}
                </Typography>
              </Box>
            </Box>

            <Box display="flex" alignItems="center" mb={3}>
              <DirectionsWalkIcon fontSize="small" />
              <Typography variant="caption" sx={{ ml: 1.5 }}>
                {routePoints[1].desc}{" "}
                <span style={{ color: theme.palette.grey[800] }}>{routePoints[1].time}</span>
              </Typography>
            </Box>

            <Box display="flex" alignItems="center" mb={3}>
              <Icons1 name={TRANSPORT_ICONS[0]} />
              <Box ml={1.5}>
                <Typography variant="caption">
                  {routePoints[2].desc}{" "}
                  <span style={{ color: theme.palette.success.main }}>{routePoints[2].time}</span>
                </Typography>
                <Typography variant="caption" sx={{ fontSize: 10, color: theme.palette.grey[600] }}>
                  {routePoints[2].cost}
                </Typography>
              </Box>
            </Box>

            <Button variant="text" name={VIEWINMAPS} />
          </MetroRoute>
        )}

        {transport === TRANSPORT_ICONS[2] && <Box mt={3}>{cabs}</Box>}
      </Box>

      <StyledDivider />

      <ButtonsWrapper>
        <Button
          variant="outlined"
          color="primary"
          name={applyB ? SAVE : UNSAVE}
          sx={{
            borderRadius: 2,
            marginRight: 2,
            width: 140,
            height: 48,
            fontWeight: 600,
            textTransform: "none",
          }}
        />
        <Button
          variant="contained"
          color="primary"
          name={APPLY}
          sx={{
            color: "#FFF",
            borderRadius: 2,
            width: 140,
            height: 48,
            fontWeight: 600,
            textTransform: "none",
          }}
        />
      </ButtonsWrapper>
    </Root>
  );
};

export default Routes;

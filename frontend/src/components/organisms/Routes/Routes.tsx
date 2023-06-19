import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import theme from "../../../theme/theme";
import { Typography } from "@material-ui/core";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import FiberManualRecordIcon from "@mui/icons-material/FiberManualRecord";
import ClearIcon from "@mui/icons-material/Clear";
import LocationOnOutlinedIcon from "@mui/icons-material/LocationOnOutlined";
import Icons1 from "../../atoms/Transporticons/icons";
import DirectionsWalkIcon from "@mui/icons-material/DirectionsWalk";
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
};

const useStyles = makeStyles({
  root: {
    paddingLeft: 20,
    paddingRight: 50,
    marginTop: theme.spacing(10),
    width: 330,
    color: theme.palette.grey["200"],
  },
  part1: {
    display: "flex",
    marginLeft: 10,
  },
  details: {
    display: "flex",
    flexDirection: "column",
    marginLeft: 20,
  },
  img: {
    width: 50,
    height: 50,
  },
  title: {
    color: theme.palette.grey[700],
    textAlign: "left",
  },
  company: {
    color: theme.palette.grey["200"],
    textAlign: "left",
  },
  location: {
    color: theme.palette.grey["200"],
    textAlign: "left",
    textTransform: "none",
  },
  hr: {
    color: theme.palette.grey["800"],
    marginBottom: theme.spacing(6),
    marginTop: theme.spacing(4.75),
    paddingLeft: theme.spacing(2.5),
    paddingRight: theme.spacing(2.5),
  },
  part2: {
    marginLeft: theme.spacing(2),
  },
  heading: {
    display: "flex",
  },
  arrow: {
    color: theme.palette.grey["200"],
    cursor: "pointer",
  },
  text: {
    color: theme.palette.grey[700],
    marginLeft: theme.spacing(3),
  },
  locCard: {
    display: "flex",
    // justifyContent: "flex-start",
    alignItems: "center",
    width: 300,
    height: 50,
    borderRadius: 10,
    backgroundColor: theme.palette.grey[100],
    marginTop: theme.spacing(2.5),
    marginBottom: theme.spacing(2.5),
  },
  locCardText: {
    marginLeft: theme.spacing(2),
  },
  close: {
    color: theme.palette.grey[200],
    float: "right",
    marginRight: theme.spacing(2),
  },
  part3: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    width: 300,
    marginBottom: theme.spacing(1),
  },
  icons: {
    display: "flex",
    justifyContent: "space-evenly",
    alignItems: "center",
    width: 150,
  },
  options: {
    color: theme.palette.grey[700],
  },
  selected: {
    backgroundColor: theme.palette.primary.main,
    color: "#FFF",
    borderRadius: 50,
    padding: theme.spacing(3),
    cursor: "pointer",
  },
  unselected: {
    cursor: "pointer",
    color: theme.palette.grey[600],
  },
  metro: {
    marginTop: theme.spacing(2),
  },
  metroHeading: {
    display: "flex",
    justifyContent: "space-between",
    width: 300,
    color: theme.palette.grey[700],
    marginBottom: theme.spacing(2),
  },
  row: {
    display: "flex",
    justifyContent: "flex-start",
    textAlign: "left",
    marginTop: theme.spacing(4),
    marginBottom: theme.spacing(3),
  },
  rowText: {
    marginLeft: theme.spacing(1.5),
    marginRight: theme.spacing(1.5),
    color: theme.palette.grey[200],
  },
  rate: {
    fontSize: 10,
    color: theme.palette.grey[600],
    marginLeft: theme.spacing(1.5),
    marginRight: theme.spacing(1.5),
  },
  col: {
    display: "flex",
    flexDirection: "column",
    textAlign: "left",
  },
  btn: {
    color: theme.palette.primary.main,
    fontFamily: "Montserrat",
    fontSize: 14,
    fontWeight: 600,
    letterSpacing: 0.2,
    textTransform: "none",
  },
  buttons: {
    marginTop: 15,
    marginBottom: 15,
    marginLeft: theme.spacing(3),
  },
  button1: {
    borderRadius: 10,
    marginRight: 20,
    width: 140,
    height: 48,
    textTransform: "none",
    fontWeight: 600,
    fontFamily: "Montserrat",
  },
  button2: {
    color: "#FFF",
    borderRadius: 10,
    width: 140,
    height: 48,
    textTransform: "none",
    fontWeight: 600,
    fontFamily: "Montserrat",
  },
  red: {
    color: theme.palette.error.main,
    fontSize: 10,
  },
  green: {
    color: theme.palette.success.main,
    fontSize: 10,
  },
  black: {
    fontSize: 10,
  },
  car: {
    display: "flex",
    flexDirection: "column",
    textAlign: "left",
  },
  map: {
    width: 300,
    marginTop: theme.spacing(5),
  },
  part31: {
    marginLeft: theme.spacing(2),
  },
});

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
  const classes = useStyles();

  const [transport, setTransport] = useState<string>(TRANSPORT_ICONS[0]);

  const cabs = cabCarsData.map((cab) => <CabCard {...cab} />);

  const clickHandler = (event: any) => {
    if (event.target.id !== "") setTransport(event.target.id);
  };
  return (
    <div className={classes.root}>
      <div className={classes.part1}>
        <img src={img} className={classes.img}></img>
        <div className={classes.details}>
          <Typography
            variant="subtitle1"
            className={classes.title}
            children={title}
          />
          <Typography
            variant="overline"
            className={classes.company}
            children={company}
          />
          <Typography
            variant="overline"
            className={classes.location}
            children={location}
          />
        </div>
      </div>
      <hr className={classes.hr} />
      <div className={classes.part2}>
        <div className={classes.heading}>
          <div onClick={backHandler}>
            {" "}
            <ArrowBackIcon className={classes.arrow} />{" "}
          </div>
          <Typography
            className={classes.text}
            variant="subtitle1"
            children="Commute Routes"
          />
        </div>
        <div>
          <img src={imgMap} alt="" className={classes.map} />
        </div>
        <div>
          <div className={classes.locCard}>
            <FiberManualRecordIcon sx={{ fontSize: 12, marginLeft: 2 }} />
            <Typography
              children={loc1}
              variant="body1"
              className={classes.locCardText}
            />
            <ClearIcon fontSize="small" className={classes.close} />
          </div>
          <div className={classes.locCard}>
            <LocationOnOutlinedIcon fontSize="small" sx={{ marginLeft: 2 }} />
            <Typography
              children={loc2}
              variant="body1"
              className={classes.locCardText}
            />
          </div>
        </div>
      </div>
      <hr className={classes.hr} />

      <div className={classes.part31}>
        <div className={classes.part3}>
          <Typography
            children="Your Options"
            variant="subtitle1"
            className={classes.options}
          />
          <div className={classes.icons}>
            <Icons1
              name={TRANSPORT_ICONS[0]}
              className={
                transport === TRANSPORT_ICONS[0]
                  ? classes.selected
                  : classes.unselected
              }
              id={TRANSPORT_ICONS[0]}
              onClick={clickHandler}
            />
            <Icons1
              name={TRANSPORT_ICONS[1]}
              className={
                transport === TRANSPORT_ICONS[1]
                  ? classes.selected
                  : classes.unselected
              }
              onClick={clickHandler}
              id={TRANSPORT_ICONS[1]}
            />
            <Icons1
              name={TRANSPORT_ICONS[2]}
              className={
                transport === TRANSPORT_ICONS[2]
                  ? classes.selected
                  : classes.unselected
              }
              onClick={clickHandler}
              id={TRANSPORT_ICONS[2]}
            />
            <Icons1
              name={TRANSPORT_ICONS[3]}
              className={
                transport === TRANSPORT_ICONS[3]
                  ? classes.selected
                  : classes.unselected
              }
              onClick={clickHandler}
              id={TRANSPORT_ICONS[3]}
            />
          </div>
        </div>

        {transport === TRANSPORT_ICONS[0] && (
          <div className={classes.metro}>
            <div className={classes.metroHeading}>
              <Typography children={locHead} variant="body2" />
              <Typography children={cost} variant="body1" />
            </div>

            <div className={classes.row}>
              <Icons1 name={TRANSPORT_ICONS[1]} />
              <div className={classes.col}>
                <Typography className={classes.rowText} variant="caption">
                  {routePoints[0].desc}
                  <span className={classes.red}>{routePoints[0].time}</span>
                </Typography>
                <Typography
                  children={routePoints[0].cost}
                  className={classes.rate}
                  variant="caption"
                />
              </div>
            </div>
            <div className={classes.row}>
              <DirectionsWalkIcon fontSize="small" />
              <Typography className={classes.rowText} variant="caption">
                {routePoints[1].desc}

                <span className={classes.black}>{routePoints[1].time}</span>
              </Typography>
            </div>
            <div className={classes.row}>
              <Icons1 name={TRANSPORT_ICONS[0]} />
              <div className={classes.col}>
                <Typography className={classes.rowText} variant="caption">
                  {routePoints[2].desc}

                  <span className={classes.green}>{routePoints[2].time}</span>
                </Typography>
                <Typography
                  children={routePoints[2].cost}
                  className={classes.rate}
                  variant="caption"
                />
              </div>
            </div>
            <Button variant="text" name={VIEWINMAPS} className={classes.btn} />
          </div>
        )}
      </div>

      {transport === TRANSPORT_ICONS[2] && (
        <div className={classes.car}>{cabs}</div>
      )}
      <hr className={classes.hr} />
      <div className={classes.buttons}>
        <Button
          variant="outlined"
          color="primary"
          className={classes.button1}
          name={applyB ? SAVE : UNSAVE}
        />
        <Button
          variant="contained"
          color="primary"
          className={classes.button2}
          name={APPLY}
        />
      </div>
    </div>
  );
};

export default Routes;

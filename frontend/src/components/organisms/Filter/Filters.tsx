import React from "react";
import { Button } from "../../atoms/Button/Button";
import { makeStyles } from "@material-ui/core/styles";
import CheckboxList from "../../molecules/CheckList/CheckList";
import RadioButtonsGroup from "../../molecules/RadioList/RadioButtons";
import CloseOutlinedIcon from "@material-ui/icons/CloseOutlined";
import { COMMUTE_ROUTES, TRANSPORT_ICONS } from "../../../Constants";
import FilterAltOutlinedIcon from "@mui/icons-material/FilterAltOutlined";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router";

import {
  Dialog,
  DialogActions,
  DialogContent,
  Grid,
  IconButton,
} from "@material-ui/core";
import { greenState } from "../../../store/reducers";

const useStyles = makeStyles({
  root: {
    width: "1000px",
    height: "800px",
  },
  button1: {
    marginRight: 10,
    textTransform: "none",
    borderRadius: "6px",
    border: "solid 1px #e3f3f6",
    width: "101px",
    height: "38px",
  },
  button: {
    textTransform: "none",
    fontSize: "14px",
    borderRadius: "6px",
    border: "solid 1px #e3f3f6",
  },
  button2: {
    color: "#FFF",
    borderRadius: 10,
    textTransform: "none",
    width: "101px",
    height: "38px",
    marginRight: 40,
  },
  icon: {
    width: "24px",
    height: "24px",
    objectFit: "contain",
    color: "#9bbdcb",
  },
  closeIcon: {
    position: "absolute",
    right: 8,
    top: 8,
  },
});

type filterProps = {
  button: string;
  button1: string;
  button2: string;
};

const Filters = ({ button, button1, button2 }: filterProps) => {
  const [open, setOpen] = React.useState(false);
  const classes = useStyles();
  const dispatch = useDispatch();
  const history = useHistory();

  const [allFilters, setAllFilters] = React.useState<string[]>([]);
  const ops: any = useSelector<greenState, greenState["options"]>((state) => {
    return state.options;
  });

  const opsValue: boolean = useSelector<greenState, greenState["optionValue"]>(
    (state) => {
      return state.optionValue;
    }
  );

  const handleClickOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };

  const handleChange = (event: any, id: string) => {
    var filterValue: string = event.target.value;

    var temp: string[] = allFilters;

    switch (filterValue) {
      case COMMUTE_ROUTES.transport[1]:
        filterValue = TRANSPORT_ICONS[3];
        break;
      case COMMUTE_ROUTES.transport[3]:
        filterValue = TRANSPORT_ICONS[2];
        break;
      case COMMUTE_ROUTES.transport[0]:
        filterValue = TRANSPORT_ICONS[0];
        break;
      case COMMUTE_ROUTES.transport[2]:
        filterValue = TRANSPORT_ICONS[1];
        break;
    }

    if (!(ops[id].indexOf(filterValue) > -1)) ops[id].push(filterValue);

    dispatch({ type: "SET_OPTIONS", payload: ops });
    dispatch({ type: "SET_OPTIONS_VALUE", payload: !opsValue });

    if (!temp.includes(filterValue)) {
      setAllFilters(temp);
    }
  };

  const handleClearAll = () => {
    dispatch({
      type: "SET_OPTIONS",
      payload: {
        datePosted: [],
        distance: [],
        experienceLevel: [],
        jobType: [],
        transport: [],
      },
    });

    dispatch({ type: "SET_OPTIONS_VALUE", payload: !opsValue });
    setAllFilters([]);
  };

  const clickHandler = () => {
    setOpen(false);
    history.push("/advancedsearch");
  };
  return (
    <>
      <Button
        variant="outlined"
        onClick={handleClickOpen}
        startIcon={<FilterAltOutlinedIcon className={classes.icon} />}
        name={button}
        className={classes.button}
      />

      <Dialog className={classes.root} open={open} onClose={handleClose}>
        <IconButton>
          <CloseOutlinedIcon
            onClick={handleClose}
            className={classes.closeIcon}
          ></CloseOutlinedIcon>
        </IconButton>

        <DialogContent>
          <Grid container spacing={1}>
            <Grid item xs={4}>
              <CheckboxList
                listNames={COMMUTE_ROUTES.distances}
                heading={COMMUTE_ROUTES.headings[0]}
                onChange={(event) => handleChange(event, "distance")}
                // flag={check}
              />
            </Grid>
            <Grid item xs={4}>
              <CheckboxList
                listNames={COMMUTE_ROUTES.postDates}
                heading={COMMUTE_ROUTES.headings[1]}
                onChange={(event) => handleChange(event, "datePosted")}
                // flag={check}
              />
            </Grid>
            <Grid item xs={4}>
              <RadioButtonsGroup />
            </Grid>
            <Grid item xs={4}>
              <CheckboxList
                listNames={COMMUTE_ROUTES.jobTypes}
                heading={COMMUTE_ROUTES.headings[2]}
                onChange={(event) => handleChange(event, "jobType")}
                // flag={check}
              />
            </Grid>
            <Grid item xs={4}>
              <CheckboxList
                listNames={COMMUTE_ROUTES.experience}
                heading={COMMUTE_ROUTES.headings[3]}
                onChange={(event) => handleChange(event, "experienceLevel")}
                // flag={check}
              />
            </Grid>
            <Grid item xs={4}>
              <CheckboxList
                listNames={COMMUTE_ROUTES.transport}
                heading={COMMUTE_ROUTES.headings[4]}
                onChange={(event) => handleChange(event, "transport")}
                // flag={check}
              />
            </Grid>
          </Grid>
        </DialogContent>
        <DialogActions>
          <Button
            variant="outlined"
            color="primary"
            className={classes.button1}
            name={button1}
            onClick={() => handleClearAll()}
          />
          <Button
            variant="contained"
            color="primary"
            className={classes.button2}
            name={button2}
            onClick={() => clickHandler()}
          />
        </DialogActions>
      </Dialog>
    </>
  );
};

export default Filters;

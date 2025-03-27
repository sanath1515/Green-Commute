import React from "react";
import { Button } from "../../atoms/Button/Button";
import CheckboxList from "../../molecules/CheckList/CheckList";
import RadioButtonsGroup from "../../molecules/RadioList/RadioButtons";
import CloseOutlinedIcon from "@mui/icons-material/CloseOutlined";
import FilterAltOutlinedIcon from "@mui/icons-material/FilterAltOutlined";
import {
  Dialog,
  DialogActions,
  DialogContent,
  Grid,
  IconButton,
  useTheme,
  Typography,
} from "@mui/material";
import { styled } from "@mui/material/styles";
import { COMMUTE_ROUTES, TRANSPORT_ICONS } from "../../../Constants";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { greenState } from "../../../store/reducers";

// Styled Components
const StyledDialog = styled(Dialog)(({ theme }) => ({
  "& .MuiPaper-root": {
    width: "1000px",
    height: "800px",
    padding: theme.spacing(3),
  },
}));

const Icon = styled(FilterAltOutlinedIcon)(({ theme }) => ({
  width: "24px",
  height: "24px",
  color: "#9bbdcb",
}));

const CloseIcon = styled(CloseOutlinedIcon)(({ theme }) => ({
  position: "absolute",
  right: theme.spacing(1),
  top: theme.spacing(1),
}));

// Types
type FilterProps = {
  button: string;
  button1: string;
  button2: string;
};

const Filters: React.FC<FilterProps> = ({ button, button1, button2 }) => {
  const theme = useTheme();
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [open, setOpen] = React.useState(false);
  const [allFilters, setAllFilters] = React.useState<string[]>([]);

  const ops:any = useSelector<greenState, greenState["options"]>(
    (state) => state.options
  );

  const opsValue = useSelector<greenState, greenState["optionValue"]>(
    (state) => state.optionValue
  );

  const handleClickOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const handleChange = (event: any, id: string) => {
    let filterValue = event.target.value;
    const temp = [...allFilters];

    switch (filterValue) {
      case COMMUTE_ROUTES.transport[0]:
        filterValue = TRANSPORT_ICONS[0];
        break;
      case COMMUTE_ROUTES.transport[1]:
        filterValue = TRANSPORT_ICONS[3];
        break;
      case COMMUTE_ROUTES.transport[2]:
        filterValue = TRANSPORT_ICONS[1];
        break;
      case COMMUTE_ROUTES.transport[3]:
        filterValue = TRANSPORT_ICONS[2];
        break;
    }

    if (!ops[id].includes(filterValue)) {
      ops[id].push(filterValue);
      dispatch({ type: "SET_OPTIONS", payload: ops });
      dispatch({ type: "SET_OPTIONS_VALUE", payload: !opsValue });
    }

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
    navigate("/advancedsearch");
  };

  return (
    <>
      <Button
        variant="outlined"
        onClick={handleClickOpen}
        startIcon={<Icon />}
        name={button}
        sx={{
          textTransform: "none",
          fontSize: "14px",
          borderRadius: "6px",
          border: "1px solid #e3f3f6",
        }}
      />

      <StyledDialog open={open} onClose={handleClose}>
        <IconButton onClick={handleClose}>
          <CloseIcon />
        </IconButton>

        <DialogContent>
          <Grid container spacing={1}>
            <Grid item xs={4}>
              <CheckboxList
                listNames={COMMUTE_ROUTES.distances}
                heading={COMMUTE_ROUTES.headings[0]}
                onChange={(event) => handleChange(event, "distance")}
              />
            </Grid>
            <Grid item xs={4}>
              <CheckboxList
                listNames={COMMUTE_ROUTES.postDates}
                heading={COMMUTE_ROUTES.headings[1]}
                onChange={(event) => handleChange(event, "datePosted")}
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
              />
            </Grid>
            <Grid item xs={4}>
              <CheckboxList
                listNames={COMMUTE_ROUTES.experience}
                heading={COMMUTE_ROUTES.headings[3]}
                onChange={(event) => handleChange(event, "experienceLevel")}
              />
            </Grid>
            <Grid item xs={4}>
              <CheckboxList
                listNames={COMMUTE_ROUTES.transport}
                heading={COMMUTE_ROUTES.headings[4]}
                onChange={(event) => handleChange(event, "transport")}
              />
            </Grid>
          </Grid>
        </DialogContent>

        <DialogActions>
          <Button
            variant="outlined"
            color="primary"
            name={button1}
            onClick={handleClearAll}
            sx={{
              marginRight: 2,
              textTransform: "none",
              borderRadius: "6px",
              width: "101px",
              height: "38px",
              border: "1px solid #e3f3f6",
            }}
          />
          <Button
            variant="contained"
            color="primary"
            name={button2}
            onClick={clickHandler}
            sx={{
              color: "#FFF",
              borderRadius: 2,
              width: "101px",
              height: "38px",
              marginRight: "40px",
              textTransform: "none",
            }}
          />
        </DialogActions>
      </StyledDialog>
    </>
  );
};

export default Filters;

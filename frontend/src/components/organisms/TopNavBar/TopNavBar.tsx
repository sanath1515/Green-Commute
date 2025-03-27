import React from "react";
import {
  AppBar,
  Toolbar,
  Typography,
  Box,
  useTheme
} from "@mui/material";
import { styled } from "@mui/material/styles";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import { COMMUTE_ROUTES, NAV_ICONS } from "../../../Constants";
import { Avatars } from "../../atoms/Avatar/Avatar";
import { Navicons } from "../../atoms/dashboardicons/Navicons";

type NavProps = {
  location?: string;
  src?: string;
};

// Styled AppBar
const StyledAppBar = styled(AppBar)(({ theme }) => ({
  height: "80px",
  boxShadow: "none",
  paddingTop: "8px",
  paddingBottom: "26px",
  backgroundColor: "white",
  border: "1px solid #e3f3f6",
  marginTop: theme.spacing(-4.5),
  marginLeft: theme.spacing(-2),
}));

const TopNavBar: React.FC<NavProps> = ({ location, src }) => {
  const theme = useTheme();

  return (
    <StyledAppBar position="static">
      <Toolbar>
        <Navicons
          name={NAV_ICONS[7]}
          className="icon"
          sx={{
            width: "24px",
            height: "24px",
            pt: "33px",
            pb: "28px",
            pr: "28px",
            pl: "10px",
            color: "#9bbdcb",
          }}
        />
        <Typography
          variant="subtitle1"
          sx={{
            width: "265px",
            height: "24px",
            color: "#19293b",
            ml: "-18px",
            pt: "1px",
            flexGrow: 1,
          }}
        >
          {location}
        </Typography>
        <Navicons
          name={NAV_ICONS[0]}
          sx={{
            width: "24px",
            height: "24px",
            pt: "33px",
            pb: "28px",
            pr: "28px",
            pl: "10px",
            color: "#9bbdcb",
          }}
        />
        <Navicons
          name={NAV_ICONS[1]}
          sx={{
            width: "24px",
            height: "24px",
            pt: "33px",
            pb: "28px",
            pr: "28px",
            pl: "10px",
            color: "#9bbdcb",
          }}
        />
        <Avatars src={src} />
        <Typography
          variant="subtitle2"
          sx={{
            width: "87px",
            height: "18px",
            color: "#19293b",
            pl: "10px",
          }}
        >
          {COMMUTE_ROUTES.userName}
        </Typography>
        <KeyboardArrowDownIcon
          sx={{
            color: "black",
            width: "20px",
            height: "20px",
            ml: "5px",
          }}
        />
      </Toolbar>
    </StyledAppBar>
  );
};

export default TopNavBar;

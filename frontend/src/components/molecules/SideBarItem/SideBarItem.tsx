import React from "react";
import { Typography, useTheme } from "@mui/material";
import { styled } from "@mui/material/styles"; 
import DashboardOutlinedIcon from "@mui/icons-material/DashboardOutlined";
import WorkOutlineOutlinedIcon from "@mui/icons-material/WorkOutlineOutlined";
import BookmarkBorderOutlinedIcon from "@mui/icons-material/BookmarkBorderOutlined";
import DescriptionOutlinedIcon from "@mui/icons-material/DescriptionOutlined";
import DateRangeOutlinedIcon from "@mui/icons-material/DateRangeOutlined";
import HelpOutlineOutlinedIcon from "@mui/icons-material/HelpOutlineOutlined";
import SettingsOutlinedIcon from "@mui/icons-material/SettingsOutlined";

export type SideBarItemProps = {
  id: string;
  img: string;
  name: string;
  handleClick?: (key: string) => void;
  class1?: string;
};

// Styled components
const Container = styled("div")(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  cursor: "pointer",
}));

const IconWrapper = styled("div")(({ theme }) => ({
  marginLeft: theme.spacing(4),
  display: "flex",
  alignItems: "center",
}));

const Text = styled(Typography)(({ theme }) => ({
  fontFamily: "Montserrat",
  marginLeft: theme.spacing(4),
}));

const ImageIcon = styled("img")(({ theme }) => ({
  marginLeft: theme.spacing(4),
}));

const SideBarItem: React.FC<SideBarItemProps> = ({
  id,
  img,
  name,
  handleClick,
  class1,
}) => {
  const clickHandler = () => {
    handleClick?.(id);
  };

  const icons: Record<string, JSX.Element> = {
    "1": <DashboardOutlinedIcon />,
    "2": <WorkOutlineOutlinedIcon />,
    "3": <BookmarkBorderOutlinedIcon />,
    "4": <DescriptionOutlinedIcon />,
    "5": <DateRangeOutlinedIcon />,
    "6": <HelpOutlineOutlinedIcon />,
    "8": <SettingsOutlinedIcon />, // fallback
  };

  return (
    <Container className={class1} onClick={clickHandler}>
      <IconWrapper>
        {id !== "7" ? icons[id] || icons["8"] : <ImageIcon src={img} alt="sidebar-icon" />}
      </IconWrapper>
      <Text variant="subtitle1">{name}</Text>
    </Container>
  );
};

export default SideBarItem;

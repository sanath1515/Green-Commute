import React from "react";
import {
  Card,
  CardActions,
  CardContent,
  CardHeader,
  IconButton,
  ListItem,
  Typography,
  useTheme,
} from "@mui/material";
import MoreHorizIcon from "@mui/icons-material/MoreHoriz";
import { Avatars } from "../../atoms/Avatar/Avatar";
import Icons1 from "../../atoms/Transporticons/icons";
import { COMMUTE_ROUTES } from "../../../Constants";
import { styled } from "@mui/material/styles";

type CardProps = {
  src?: string;
  days?: number;
  jobRole?: string;
  companyName?: string;
  location?: string;
  commuteRoute?: Array<string>;
};

// Styled components
const StyledCard = styled(Card)(({ theme }) => ({
  maxWidth: "330px",
  height: "308px",
  border: "solid 1px #e3f3f6",
}));

const StyledAvatar = styled(Avatars)(({ theme }) => ({
  width: "80px",
  height: "80px",
  marginLeft: "8px",
  marginTop: "6px",
}));

const Icon = styled(MoreHorizIcon)(({ theme }) => ({
  color: "#9bbdcb",
  paddingRight: "8px",
  marginTop: "6px",
}));

const StyledList = styled(ListItem)(({ theme }) => ({
  paddingRight: "10px",
}));

const RoleText = styled(Typography)(({ theme }) => ({
  marginTop: "-7px",
  color: "#324552",
  marginLeft: "10px",
  paddingBottom: "8px",
}));

const CompanyText = styled(Typography)(({ theme }) => ({
  marginTop: "-4px",
  color: "#5f7381",
  marginLeft: "10px",
  marginBottom: "10px",
}));

const LocationText = styled(Typography)(({ theme }) => ({
  marginTop: "-4px",
  color: "#5f7381",
  marginLeft: "10px",
  marginBottom: "18px",
}));

const RoutesText = styled(Typography)(({ theme }) => ({
  color: "#19293b",
  marginLeft: "10px",
  paddingBottom: "15px",
}));

const DaysText = styled(Typography)(({ theme }) => ({
  color: "#5f7381",
  marginBottom: "50px",
  textAlign: "right",
  marginTop: "6px",
}));

const JobCard: React.FC<CardProps> = ({
  src,
  days,
  jobRole,
  companyName,
  location,
  commuteRoute = [],
}) => {
  return (
    <StyledCard elevation={0}>
      <CardHeader
        avatar={<StyledAvatar src={src} />}
        action={
          <IconButton>
            <Icon />
          </IconButton>
        }
        title={<DaysText variant="body2">{days}d</DaysText>}
      />
      <CardContent>
        <RoleText variant="h6">{jobRole}</RoleText>
        <CompanyText variant="body2">{companyName}</CompanyText>
        <LocationText variant="body2">{location}</LocationText>
        <RoutesText variant="caption">{COMMUTE_ROUTES.text}</RoutesText>
        <StyledList>
          {commuteRoute.map((item) => (
            <Icons1 key={item} name={item} />
          ))}
        </StyledList>
      </CardContent>
      <CardActions />
    </StyledCard>
  );
};

export default JobCard;

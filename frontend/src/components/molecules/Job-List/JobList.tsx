// JobList.tsx (Part 1: Imports & Styled Components)

import React from "react";
import {
  Card,
  Typography,
  CircularProgress,
  Box,
  useTheme,
  Stack,
} from "@mui/material";
import { styled } from "@mui/material/styles";
import { useDispatch, useSelector } from "react-redux";
import { greenState } from "../../../store/reducers";
import { Avatars } from "../../atoms/Avatar/Avatar";
import Icons1 from "../../atoms/Transporticons/icons";

// Styled components
const StyledCard = styled(Card)<{ active?: boolean }>(({ theme, active }) => ({
  height: "138px",
  margin: theme.spacing(2, 0),
  borderRadius: 10,
  border: active ? "2px solid #5ac568" : "1px solid #e3f3f6",
  flex: "1 1 500px",
  maxWidth: "500px",
  boxSizing: "border-box",
  display: "flex",
  flexDirection: "column",
  padding: theme.spacing(2),
}));

const AvatarImage = styled("div")(({ theme }) => ({
  width: "50px",
  height: "50px",
}));

const JobTitle = styled(Typography)(({ theme }) => ({
  fontSize: "16px",
  fontWeight: 600,
  color: "#324552",
}));

const CompanyName = styled(Typography)(({ theme }) => ({
  fontSize: "14px",
  color: "#5f7381",
}));

const InfoText = styled(Typography)(({ theme }) => ({
  fontSize: "12px",
  color: "#5f7381",
}));

const Row = styled("div")(({ theme }) => ({
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
  gap: theme.spacing(2),
  marginBottom: theme.spacing(1),
}));

const IconWrapper = styled("div")(({ theme }) => ({
  marginTop: theme.spacing(1),
  display: "flex",
  alignItems: "center",
  gap: theme.spacing(1),
}));

const Circle = styled(CircularProgress)(({ theme }) => ({
  width: "30px !important",
  height: "30px !important",
}));

// JobList.tsx (Part 2: Component)

type CardProps = {
  id: string;
  src?: string;
  jobRole?: string;
  companyName?: string;
  location?: string;
  commuteRoutes?: string[];
  description?: string;
  requiredProficiency?: string[];
  jobPostingUrl?: string;
  salary?: number;
  sponsored?: boolean;
  percentage?: number;
};

const JobList: React.FC<CardProps> = ({
  id,
  src,
  jobRole,
  companyName,
  location,
  commuteRoutes,
  salary,
  sponsored,
  percentage,
}) => {
  const dispatch = useDispatch();
  const theme = useTheme();

  const jobId = useSelector<greenState, greenState["jobId"]>(
    (state) => state.jobId
  );

  const icons = commuteRoutes?.map((icon) => (
    <Icons1 key={icon} name={icon} />
  ));

  const clickHandler = () => {
    dispatch({ type: "SET_JOB_ID", payload: id });
  };

  const modifyCompanyName = (name: string) =>
    name.replace(/[^a-zA-Z0-9]/g, "").replace(/\s+/g, "");

  const adjustedPercentage = percentage
    ? parseFloat((percentage * 0.85).toFixed(1))
    : 0;

  const imageUrl = `https://img.logo.dev/${modifyCompanyName(
    companyName ?? "google"
  )}.com?token=pk_a9Df6OvsTXGmVKiozucqRg`;

  return (
    <StyledCard onClick={clickHandler} active={id === jobId} elevation={0}>
      <Row>
        <Avatars src={imageUrl} className="avatar" />
        <Box sx={{ ml: 2, flex: 1 }}>
          <Row>
            <JobTitle variant="h6">{jobRole}</JobTitle>
            {percentage && (
              <Box position="relative" display="inline-flex">
                <Circle
                  variant="determinate"
                  value={adjustedPercentage}
                  size={40}
                  thickness={2}
                />
                <Box
                  position="absolute"
                  top="50%"
                  left="50%"
                  sx={{ transform: "translate(-50%, -50%)" }}
                >
                  <Typography variant="caption" color="textSecondary">
                    {adjustedPercentage}%
                  </Typography>
                </Box>
              </Box>
            )}
          </Row>
          <Row>
            <CompanyName>{companyName}</CompanyName>
            <Typography>Salary: {salary ? `${salary}$` : "N/A"}</Typography>
          </Row>
          <Row>
            <InfoText>{location}</InfoText>
            <InfoText>{sponsored ? "Sponsored" : "Not Sponsored"}</InfoText>
          </Row>
        </Box>
      </Row>
      <IconWrapper>{icons}</IconWrapper>
    </StyledCard>
  );
};

export default JobList;

import React from "react";
import { Typography } from "@mui/material";
import { styled } from "@mui/material/styles"; 

export type CabCardProps = {
  img: string;
  name: string;
  cost: string;
};

const Root = styled("div")({
  display: "flex",
  alignItems: "center",
});

const Col = styled("div")(({ theme }) => ({
  display: "flex",
  flexDirection: "column",
  marginLeft: theme.spacing(2.5),
  marginRight: theme.spacing(20),
  textAlign: "left",
}));

const NameText = styled(Typography)(({ theme }) => ({
  textTransform: "none",
  color: theme.palette.grey[700],
}));

const CostText = styled(Typography)(({ theme }) => ({
  textTransform: "none",
  color: theme.palette.grey[500], // 💡 changed from [200] for better contrast
}));

const BookNow = styled(Typography)(({ theme }) => ({
  color: theme.palette.primary.main,
  fontWeight: 600,
  marginLeft: "auto",
}));

const CabCard: React.FC<CabCardProps> = ({ cost, img, name }) => {
  return (
    <Root>
      <img src={img} alt={name} />
      <Col>
        <NameText variant="body1">{name}</NameText>
        <CostText variant="overline">{`Approx ${cost}`}</CostText>
      </Col>
      <BookNow variant="body1">Book now</BookNow>
    </Root>
  );
};

export default CabCard;

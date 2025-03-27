import React from "react";
import { Typography, Divider, Box } from "@mui/material";
import { styled } from "@mui/material/styles";
import { Button } from "../../atoms/Button/Button";

export type JobDescriptionProps = {
  img: string;
  title: string;
  company: string;
  location: string;
  description: string;
  points: string[];
  button1: string;
  button2: string;
  saveButtonClick?: () => void;
  applyButtonClick?: () => void;
  bigButton: string;
  bigButtonClick?: () => void;
  job_url: string;
};

// Styled Components
const Root = styled(Box)(({ theme }) => ({
  paddingLeft: 20,
  paddingRight: 40,
  width: 300,
  float: "right",
}));

const Part1 = styled("div")({
  display: "flex",
  marginLeft: 10,
});

const Details = styled("div")(({ theme }) => ({
  display: "flex",
  flexDirection: "column",
  marginLeft: 20,
}));

const Image = styled("img")({
  width: 50,
  height: 50,
});

const TextGrey = (color: string) =>
  styled(Typography)(({ theme }) => ({
    color,
    textAlign: "left",
  }));

const Title = TextGrey("#324552");
const Company = TextGrey("#5f7381");
const Location = TextGrey("#5f7381");

const Heading = styled(Typography)(({ theme }) => ({
  textAlign: "left",
  marginBottom: theme.spacing(2),
  color: theme.palette.grey[700],
}));

const Point = styled("li")(({ theme }) => ({
  textAlign: "left",
  color: theme.palette.grey[200],
  fontFamily: "Montserrat",
  fontSize: 14,
  lineHeight: 1.57,
  letterSpacing: 0.1,
}));

const Hr = styled("hr")(({ theme }) => ({
  color: theme.palette.grey[800],
  margin: `${theme.spacing(3.75)} 0`,
  paddingLeft: theme.spacing(2.5),
  paddingRight: theme.spacing(2.5),
  border: "solid 0.1px",
}));

const HrBottom = styled(Hr)(({ theme }) => ({
  marginTop: theme.spacing(6.25),
  marginBottom: theme.spacing(2.5),
}));

const ButtonRow = styled(Box)({
  marginTop: 15,
  marginBottom: 15,
});

const BigButton = styled(Button)(({ theme }) => ({
  color: "#FFF",
  borderRadius: 5,
  width: "auto",
  textTransform: "none",
  fontFamily: "Montserrat",
  fontWeight: 600,
  marginLeft: "auto",
  marginRight: "auto",
  paddingTop: theme.spacing(2.5),
  paddingBottom: theme.spacing(2.5),
}));

const JobDescription: React.FC<JobDescriptionProps> = ({
  company,
  description,
  img,
  location,
  points,
  title,
  button1,
  button2,
  saveButtonClick,
  applyButtonClick,
  bigButton,
  bigButtonClick,
  job_url,
}) => {
  const openUrl = () => {
    window.open(job_url, "_blank");
  };

  const modifyCompanyName = (companyName: string) =>
    companyName.replace(/[^a-zA-Z0-9]/g, "").replace(/\s+/g, "");

  const imageUrl = `https://img.logo.dev/${modifyCompanyName(company)}.com?token=pk_a9Df6OvsTXGmVKiozucqRg`;

  return (
    <Root>
      <Part1>
        <Image src={imageUrl} />
        <Details>
          <Title variant="subtitle1">{title}</Title>
          <Company variant="overline">{company}</Company>
          <Location variant="overline">{location}</Location>
          <ButtonRow>
            <Button
              onClick={saveButtonClick}
              variant="outlined"
              color="primary"
              name={button1}
              sx={{
                borderRadius: 2,
                marginRight: 2,
                fontWeight: 600,
                fontFamily: "Montserrat",
                width: 98,
              }}
            />
            <Button
              onClick={openUrl}
              variant="contained"
              color="primary"
              name={button2}
              sx={{
                color: "#FFF",
                borderRadius: 2,
                fontWeight: 600,
                fontFamily: "Montserrat",
                width: 98,
              }}
            />
          </ButtonRow>
        </Details>
      </Part1>

      <Hr />

      <Box ml={2}>
        <Heading variant="subtitle1">Description</Heading>
        <Typography variant="body2">{description}</Typography>
      </Box>

      <HrBottom />

      <Box ml={2}>
        <Heading variant="subtitle1">What it takes</Heading>
        <ul>
          {points.map((point, idx) => (
            <Point key={idx}>{point}</Point>
          ))}
        </ul>
        <BigButton
          variant="contained"
          color="primary"
          name={bigButton}
          onClick={bigButtonClick}
        />
      </Box>
    </Root>
  );
};

export default JobDescription;

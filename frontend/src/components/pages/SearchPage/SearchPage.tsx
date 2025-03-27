import React, { useEffect, useState } from "react";
import { styled } from "@mui/material/styles";
import {
  Typography,
  Box,
} from "@mui/material";
import SideBar from "../../organisms/SideBar/SideBar";
import TopNavBar from "../../organisms/TopNavBar/TopNavBar";
import JobDescription from "../../organisms/JobDescription/JobDescription";
import Findjob from "../../organisms/Findjob/Findjob";
import JobList from "../../molecules/Job-List/JobList";
import Filters from "../../organisms/Filter/Filters";
import {
  APPLY,
  BASED_ON_YOUR_SEARCH,
  CLEARALL,
  cost,
  FILTER,
  FIND_JOBS,
  GREENCOMMUTEROUTES,
  imgMap,
  jobDataProp,
  JOBS_LIST,
  routePoints,
  topnavbarimage,
  COMMUTE_ROUTES,
  OPTIONS_HEADINGS,
  SAVE,
  UNSAVE,
  JOBCITY,
  optionsType,
} from "../../../Constants";
import { useDispatch, useSelector } from "react-redux";
import { greenState } from "../../../store/reducers";
import Chips from "../../molecules/Chips/chips";
import useAdvancedFilterSearch from "../../../customhooks/useAdvancedSearch";
import Routes from "../../organisms/Routes/Routes";
import { Button } from "../../atoms/Button/Button";
import useJobDescription from "../../customhooks/useJobDescription";
import FileUploadMUI from "../../organisms/FileUpload/FileUpload";

const SearchWrapper = styled("div")({
  display: "flex",
  width: "100%",
});

const InnerWrapper = styled("div")({
  display: "flex",
  width: "100%",
});

const SearchContent = styled("div")(({ theme }) => ({
  marginLeft: "auto",
  marginRight: "auto",
  backgroundColor: "#fafafa",
  paddingLeft: theme.spacing(10),
  paddingRight: theme.spacing(0),
  width: "100%",
}));

const FindJobHeader = styled(Typography)(({ theme }) => ({
  fontWeight: 600,
  marginTop: theme.spacing(9),
  marginBottom: theme.spacing(4),
}));

const ChipsWrapper = styled("div")(({ theme }) => ({
  display: "flex",
  justifyContent: "flex-start",
  maxWidth: 500,
  flexWrap: "wrap",
}));

const ChipBox = styled("div")(({ theme }) => ({
  marginRight: theme.spacing(2.5),
  marginBottom: theme.spacing(2),
}));

const Container = styled("div")(({ theme }) => ({
  display: "flex",
  flexWrap: "wrap",
  gap: "16px",
  justifyContent: "flex-start",
  overflow: "auto",
  height: "500px",
  "&::-webkit-scrollbar": {
    width: "12px",
  },
  "&::-webkit-scrollbar-thumb": {
    backgroundColor: "white",
    borderRadius: "10px",
    border: "3px solid white",
  },
  "&::-webkit-scrollbar-track": {
    backgroundColor: "white",
  },
}));

const SearchPage: React.FC = () => {
  const [route, setRoute] = useState(false);
  const { saveValue, savealertGeneration, applyValue, applyalertGeneration, stepbarindex, savedJobsList } = useJobDescription();
  const dispatch = useDispatch();
  const jobId = useSelector<greenState, greenState["jobId"]>((state) => state.jobId);
  const { advancedFilteredjobs, jobIdData } = useAdvancedFilterSearch([]);
  const [jobs, setJobs] = useState<jobDataProp[]>(advancedFilteredjobs);
  const options:optionsType = useSelector((state: greenState) => state.options);
  const location = useSelector((state: greenState) => state.searchLocation);
  const initiallocation = useSelector((state: greenState) => state.location);
  const skill = useSelector((state: greenState) => state.searchSkill);

  useEffect(() => {
    setJobs(advancedFilteredjobs);
  }, [advancedFilteredjobs]);

  const ellipse = (input: string, length: number) =>
    input.length > length ? input.substring(0, length) + "..." : input;

  const jobslist = jobs.map((temp: jobDataProp) => (
    <JobList
      key={temp.id}
      id={temp.id + ""}
      companyName={temp.companyName}
      jobRole={temp.jobProfile}
      location={temp.city}
      description={temp.description}
      salary={temp.salary}
      sponsored={temp.sponsored}
      jobPostingUrl={temp.jobPostingUrl}
      percentage={temp.percentageMatch}
    />
  ));

  const savedjobs = savedJobsList.map((temp: jobDataProp) => (
    <JobList
      key={temp.id}
      id={temp.id + ""}
      companyName={temp.companyName!}
      jobRole={temp.jobProfile!}
      location={temp.city!}
      src={temp.imageSource!}
      commuteRoutes={temp.commuteRoutes!}
    />
  ));

  const clickHandler = () => setRoute(true);
  const clickBackHandler = () => setRoute(false);

  const checkInSavedJobs = () => !savedJobsList.some(job => job.id! + "" === jobId);

  const chipsData = (
    <Box display="flex" justifyContent="space-between" flexWrap="wrap" mt={2}>
      <ChipsWrapper>
        {OPTIONS_HEADINGS.map((heading) =>
          options[heading]?.map((op: string) => (
            <ChipBox key={op}>
              <Chips label={op} />
            </ChipBox>
          ))

        )}
      </ChipsWrapper>
    </Box>
  );

  return (
    <SearchWrapper>
      <SideBar img={""} title={""} company={""} location={""} loc1={""} loc2={""} routePoints={[]} locHead={""} cost={""} imgMap={""} />
      <Box width="100%">
        <TopNavBar location={initiallocation} src={topnavbarimage} />
        <InnerWrapper>
          <SearchContent>
            <FindJobHeader variant="h4">Upload Resume</FindJobHeader>
            <FileUploadMUI setJobs={setJobs} />
            <FindJobHeader variant="h4">{FIND_JOBS}</FindJobHeader>
            <Findjob Skill={skill} Location={location} ClassName="findjobclass" OnClick={setJobs} />
            <Box display="flex" justifyContent="space-between" mt={8}>
              <Typography variant="h4">{JOBS_LIST}</Typography>
            </Box>
            <Typography variant="body2">{BASED_ON_YOUR_SEARCH}</Typography>
            {chipsData}
            {stepbarindex !== "3" && <Container>{jobslist}</Container>}
            {stepbarindex === "3" && savedjobs}
          </SearchContent>
          {!route ? (
            <Box width="360px" mt={9} mr={3}>
              {jobs.length !== 0 && (
                <JobDescription
                  img={jobIdData!.imageSource!}
                  title={jobIdData!.jobProfile!}
                  company={jobIdData!.companyName!}
                  location={jobIdData!.city!}
                  description={jobIdData!.description!}
                  points={jobIdData!.requiredProficiency!.split(",")}
                  button1={checkInSavedJobs() ? SAVE : UNSAVE}
                  button2={applyValue}
                  saveButtonClick={savealertGeneration}
                  applyButtonClick={applyalertGeneration}
                  bigButton={GREENCOMMUTEROUTES}
                  bigButtonClick={clickHandler}
                  job_url={jobIdData.jobPostingUrl}
                />
              )}
            </Box>
          ) : (
            <Routes
              img={jobIdData!.imageSource!}
              title={jobIdData!.jobProfile!}
              company={jobIdData!.companyName!}
              location={jobIdData!.city!}
              loc1={ellipse(initiallocation, 30)}
              loc2={ellipse(JOBCITY + " , " + jobIdData!.city!, 50)}
              routePoints={routePoints}
              locHead={ellipse(location, 50) + "-" + jobIdData!.city!}
              cost={cost}
              imgMap={imgMap}
              backHandler={clickBackHandler}
              applyB={checkInSavedJobs()}
              job_url={jobIdData.jobPostingUrl}
            />
          )}
        </InnerWrapper>
      </Box>
    </SearchWrapper>
  );
};

export default SearchPage;

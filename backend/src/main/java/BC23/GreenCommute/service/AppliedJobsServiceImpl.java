package BC23.GreenCommute.service;

import BC23.GreenCommute.dto.JobDto;
import BC23.GreenCommute.entity.AppliedJobs;
import BC23.GreenCommute.entity.Jobs;
import BC23.GreenCommute.entity.SavedJobs;
import BC23.GreenCommute.entity.User;
import BC23.GreenCommute.exception.UserNotFoundException;
import BC23.GreenCommute.exception.DataNotFoundException;
import BC23.GreenCommute.helper.Helper;
import BC23.GreenCommute.jparepository.AppliedJobsJpa;
import BC23.GreenCommute.jparepository.JobsJpa;
import BC23.GreenCommute.jparepository.UserJpa;
import BC23.GreenCommute.mapper.JobMapper;
import BC23.GreenCommute.mockentities.ApplyAndSaveRequest;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import lombok.extern.slf4j.Slf4j;

import java.sql.Timestamp;
import java.util.ArrayList;
import java.util.List;
import java.util.Optional;

@Slf4j
@Service
public class AppliedJobsServiceImpl implements AppliedJobsService {

    @Autowired
    private JobService jobService;


    @Autowired
    private Helper helper;

    @Autowired
    private AppliedJobsJpa appliedJobsJpa;

    @Autowired
    private UserJpa userJpa;

    @Autowired
    private JobsJpa jobsJpa;

    @Autowired
    private JobMapper jobMapper;

    public void saveToAppliedJobs(int userId, ApplyAndSaveRequest applyAndSaveRequest) {
        int jobId = applyAndSaveRequest.getJobId();
        Optional<User> tempUser = userJpa.findById(userId);
        Optional<Jobs> tempJob = jobsJpa.findById(jobId);
        if (tempUser.isPresent() && tempJob.isPresent()) {
            List<AppliedJobs> tempSavedJobs = appliedJobsJpa.findByUserAndJobs(tempUser.get(), tempJob.get());
            long count = tempSavedJobs.size();
            if (count == 0) {

                AppliedJobs appliedJobs = new AppliedJobs(new Timestamp(System.currentTimeMillis()), userId, new Timestamp(System.currentTimeMillis()), userId, tempUser.get(), tempJob.get());
                appliedJobsJpa.save(appliedJobs);
            } else {
                throw new IllegalArgumentException("The value is already in the list.");
            }
        } else {
            throw new UserNotFoundException("user or job not found");
        }


    }

    @Override
    public List<JobDto> getAppliedJobsbyUserID(int id) {
        Optional<User> user = userJpa.findById(id);
        if (!user.isPresent()) {
            String logvalue = String.format("Invalid User Id provided as %x", id);
            log.debug(logvalue);
            throw new DataNotFoundException("No data there with id : " + id);
        }
        List<Jobs> jobsList = new ArrayList<>();
        List<AppliedJobs> appliedjobList = user.get().getAppliedJobsList();
        for (AppliedJobs i : appliedjobList) {
            jobsList.add(i.getJobs());
        }
        List<JobDto> jobDtoList = jobMapper.toJobDtoList(jobsList);
        for (JobDto i : jobDtoList) {
            Optional<Jobs> jobs = jobService.getJobById(i.getId());
            if (jobs.isPresent()) {
                i.setCommuteRoutes(helper.getCommuteRoutes(jobs.get()));
            }

        }

        return jobDtoList;
    }


}

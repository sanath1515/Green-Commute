package BC23.GreenCommute.service;


import BC23.GreenCommute.dto.JobDto;
import BC23.GreenCommute.entity.Jobs;
import BC23.GreenCommute.entity.SavedJobs;
import BC23.GreenCommute.entity.User;
import BC23.GreenCommute.exception.UserNotFoundException;
import BC23.GreenCommute.exception.DataNotFoundException;
import BC23.GreenCommute.helper.Helper;
import BC23.GreenCommute.jparepository.JobsJpa;
import BC23.GreenCommute.jparepository.SavedJobsJpa;
import BC23.GreenCommute.jparepository.UserJpa;
import BC23.GreenCommute.mapper.JobMapper;
import BC23.GreenCommute.mockentities.ApplyAndSaveRequest;
import lombok.extern.slf4j.Slf4j;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.sql.Timestamp;
import java.util.ArrayList;
import java.util.List;
import java.util.Optional;

@Slf4j
@Service
public class SavedJobsServiceImpl implements SavedJobsService {

    @Autowired
    private SavedJobsJpa savedJobsJpa;

    @Autowired
    private JobService jobService;

    @Autowired
    private UserJpa userJpa;

    @Autowired
    private JobsJpa jobsJpa;

    @Autowired
    private JobMapper jobMapper;

    @Autowired
    private Helper helper;


    @Override
    public void saveToSavedJobs(int userId, ApplyAndSaveRequest applyAndSaveRequest) {
        int jobId = applyAndSaveRequest.getJobId();
        Optional<User> tempUser = userJpa.findById(userId);
        Optional<Jobs> tempJob = jobsJpa.findById(jobId);
        if (tempUser.isPresent() && tempJob.isPresent()) {
            List<SavedJobs> tempSavedJobs = savedJobsJpa.findByUserAndJobs(tempUser.get(), tempJob.get());
            long count = tempSavedJobs.size();
            if (count == 0) {

                SavedJobs savedJobs = new SavedJobs(new Timestamp(System.currentTimeMillis()), userId, new Timestamp(System.currentTimeMillis()), userId, tempUser.get(), tempJob.get());
                savedJobsJpa.save(savedJobs);

            } else {
                throw new IllegalArgumentException("The value is already in the list.");
            }
        } else {
            throw new UserNotFoundException("user or job not found");
        }


    }

    @Override
    public void deleteSavedJobs(int userId, ApplyAndSaveRequest applyAndSaveRequest) {
        int jobId = applyAndSaveRequest.getJobId();
        Optional<User> tempUser = userJpa.findById(userId);
        Optional<Jobs> tempJob = jobsJpa.findById(jobId);

        if (tempUser.isPresent() && tempJob.isPresent()) {
            List<SavedJobs> tempSavedJobs = savedJobsJpa.findByUserAndJobs(tempUser.get(), tempJob.get());
            if (tempSavedJobs.isEmpty()) {
                throw new IllegalStateException("User does not have any jobs saved");
            } else {
                SavedJobs jobToDelete = tempSavedJobs.get(0);
                savedJobsJpa.delete(jobToDelete);

            }
        } else {
            throw new UserNotFoundException("user or job not found");
        }
    }


    public List<JobDto> getSavedJobsbyUserID(int id) {
        Optional<User> user = userJpa.findById(id);
        if (!user.isPresent()) {
            String logvalue = String.format("Invalid User Id provided as %x", id);
            log.debug(logvalue);
            throw new DataNotFoundException("No data there with id : " + id);
        }
        List<Jobs> jobsList = new ArrayList<>();
        List<SavedJobs> savedjobList = user.get().getSavedJobsList();
        for (SavedJobs i : savedjobList) {
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

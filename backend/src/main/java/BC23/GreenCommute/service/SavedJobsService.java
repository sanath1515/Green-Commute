package BC23.GreenCommute.service;

import BC23.GreenCommute.dto.JobDto;
import BC23.GreenCommute.entity.Jobs;
import BC23.GreenCommute.mockentities.ApplyAndSaveRequest;

import java.util.List;

public interface SavedJobsService {

    void saveToSavedJobs(int userId, ApplyAndSaveRequest applyAndSaveRequest);
    List<JobDto> getSavedJobsbyUserID(int id);

    void deleteSavedJobs(int userId, ApplyAndSaveRequest applyAndSaveRequest);

}

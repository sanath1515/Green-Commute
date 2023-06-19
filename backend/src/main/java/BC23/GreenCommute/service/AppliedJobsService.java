package BC23.GreenCommute.service;

import BC23.GreenCommute.dto.JobDto;
import BC23.GreenCommute.mockentities.ApplyAndSaveRequest;

import java.util.List;

public interface AppliedJobsService {
    void saveToAppliedJobs(int userId, ApplyAndSaveRequest appliedApplyAndSaveRequest);
    public List<JobDto> getAppliedJobsbyUserID(int id);
}

package BC23.GreenCommute.controller;


import BC23.GreenCommute.dto.JobDto;
import BC23.GreenCommute.entity.Jobs;
import BC23.GreenCommute.mockentities.ApplyAndSaveRequest;
import BC23.GreenCommute.service.AppliedJobsServiceImpl;
import BC23.GreenCommute.service.SavedJobsServiceImpl;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController()
@RequestMapping("api/v1")
@CrossOrigin(origins = "*")
public class UserJobsController {

    @Autowired
    private SavedJobsServiceImpl savedJobsServiceImpl;

    @Autowired
    private AppliedJobsServiceImpl appliedJobsServiceImpl;


    @PostMapping("users/{id}/savedjobs")
    public void savedJob(@PathVariable("id") int userId, @RequestBody ApplyAndSaveRequest savedJob) {
        savedJobsServiceImpl.saveToSavedJobs(userId, savedJob);
    }

    @PostMapping("users/{id}/appliedjobs")
    public void appliedJob(@PathVariable("id") int userId, @RequestBody ApplyAndSaveRequest appliedJob) {
        appliedJobsServiceImpl.saveToAppliedJobs(userId, appliedJob);
    }


    @DeleteMapping("users/{id}/savedjobs")
    public void deleteSavedJobByJobId(@PathVariable("id") int userId, @RequestBody ApplyAndSaveRequest deleteJob) {
        savedJobsServiceImpl.deleteSavedJobs(userId, deleteJob);
    }

    @GetMapping("users/{id}/savedjobs")
    public ResponseEntity<List<JobDto>> getSavedJobsbyUserID(@PathVariable(value = "id") int id) {
        List<JobDto> job = savedJobsServiceImpl.getSavedJobsbyUserID(id);
        return ResponseEntity.ok().body(job);
    }
  
    @GetMapping("users/{id}/appliedjobs")
    public ResponseEntity<List<JobDto>> getAppliedJobByUserId(@PathVariable(value = "id") int id) {
        List<JobDto> job = appliedJobsServiceImpl.getAppliedJobsbyUserID(id);
        return ResponseEntity.ok().body(job);
    }


}

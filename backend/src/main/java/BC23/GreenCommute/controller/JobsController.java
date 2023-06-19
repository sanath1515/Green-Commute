package BC23.GreenCommute.controller;

import BC23.GreenCommute.dto.JobDto;
import BC23.GreenCommute.entity.Jobs;
import BC23.GreenCommute.exception.DataNotFoundException;
import BC23.GreenCommute.helper.Helper;
import BC23.GreenCommute.mapper.JobMapper;
import BC23.GreenCommute.service.JobService;
import lombok.extern.slf4j.Slf4j;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import javax.servlet.http.HttpServletRequest;
import java.util.*;

@Slf4j
@RestController
@RequestMapping("api/v1")
@CrossOrigin(origins = "*")
public class JobsController {
    @Autowired
    private JobService jobService;

    @Autowired
    private JobMapper jobMapper;

    @Autowired
    private Helper helper;

    @GetMapping("jobs/{id}")
    public ResponseEntity<JobDto> getJobById(@PathVariable(value = "id") int id) {
        Optional<Jobs> job = jobService.getJobById(id);
        if (!job.isPresent()) {
            String logvalue = String.format("Invalid Job Id provided as %x", id);
            log.debug(logvalue);
            throw new DataNotFoundException("No data there with id : " + id);
        }
        JobDto jobDto = jobMapper.toJobDto(job.get());
        jobDto.setCommuteRoutes(helper.getCommuteRoutes(job.get()));
        return ResponseEntity.ok().body(jobDto);
    }

    @GetMapping("jobs")
    public ResponseEntity<List<JobDto>> getAllJobs(HttpServletRequest httpServletRequest) {
        List<Jobs> jobsList = jobService.getAllJobs();
        Map<String, String[]> map = httpServletRequest.getParameterMap();
        List<JobDto> jobDtoList = jobMapper.toJobDtoList(jobsList);
        if (map.size() != 0) {
            List<Jobs> filteredJobs = helper.jobFilter(jobsList, map);
            jobDtoList = jobMapper.toJobDtoList(filteredJobs);
        }
        for (JobDto dto : jobDtoList) {
            Jobs job = jobService.getJobById(dto.getId()).get();
            List<String> transports = helper.getCommuteRoutes(job);
            dto.setCommuteRoutes(transports);
        }
        return ResponseEntity.ok().body(jobDtoList);
    }
}

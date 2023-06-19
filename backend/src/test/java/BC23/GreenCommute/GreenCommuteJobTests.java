package BC23.GreenCommute;

import BC23.GreenCommute.entity.Company;
import BC23.GreenCommute.entity.Jobs;
import BC23.GreenCommute.service.JobService;
import org.junit.jupiter.api.Assertions;
import org.junit.jupiter.api.Test;
import org.junit.runner.RunWith;
import org.mockito.Mock;
import org.mockito.Mockito;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.test.context.junit4.SpringRunner;

import java.util.*;

@RunWith(SpringRunner.class)
@SpringBootTest
public class GreenCommuteJobTests {

    @Mock
    private JobService jobService;

    @Test
    public void getJobByIdTest() {
        int id = 1;
        Jobs job = new Jobs(1, "This is a job description", "Software Engineer", "Full Time", null, true, "Fresher", null, Collections.emptyList(), new Company());
        Optional<Jobs> jobsOptional = Optional.of(job);
        Mockito.when(jobService.getJobById(id)).thenReturn(jobsOptional);
        Assertions.assertEquals(jobsOptional, jobService.getJobById(id));
        Mockito.verify(jobService).getJobById(id);
    }

    @Test
    public void getAllJobsTest() {
        List<Jobs> jobsList = Collections.emptyList();
        List<Jobs> testjobs = jobService.getAllJobs();
        Mockito.when(jobService.getAllJobs()).thenReturn(jobsList);
        Assertions.assertEquals(jobsList, testjobs);
        Mockito.verify(jobService).getAllJobs();
    }
}

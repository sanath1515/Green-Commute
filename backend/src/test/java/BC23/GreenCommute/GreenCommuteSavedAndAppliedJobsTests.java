package BC23.GreenCommute;

import BC23.GreenCommute.dto.JobDto;
import BC23.GreenCommute.service.AppliedJobsService;
import BC23.GreenCommute.service.SavedJobsService;
import org.junit.Test;
import org.junit.jupiter.api.Assertions;
import org.junit.runner.RunWith;
import org.mockito.Mock;
import org.mockito.Mockito;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.test.context.junit4.SpringRunner;

import java.util.Collections;
import java.util.List;

@RunWith(SpringRunner.class)
public class GreenCommuteSavedAndAppliedJobsTests {
    @Mock
    private SavedJobsService savedJobsService;

    @Mock
    private AppliedJobsService appliedJobsService;

    @Test
    public void getSavedJobTest() {
        List<JobDto> jobsList = Collections.emptyList();
        List<JobDto> testjobs = savedJobsService.getSavedJobsbyUserID(1);
        Mockito.when(savedJobsService.getSavedJobsbyUserID(1)).thenReturn(jobsList);
        Assertions.assertEquals(jobsList, testjobs);
        Mockito.verify(savedJobsService).getSavedJobsbyUserID(1);
    }

    @Test
    public void getAppliedJobTest() {
        List<JobDto> jobsList = Collections.emptyList();
        List<JobDto> testjobs = appliedJobsService.getAppliedJobsbyUserID(1);
        Mockito.when(appliedJobsService.getAppliedJobsbyUserID(1)).thenReturn(jobsList);
        Assertions.assertEquals(jobsList, testjobs);
        Mockito.verify(appliedJobsService).getAppliedJobsbyUserID(1);
    }
}

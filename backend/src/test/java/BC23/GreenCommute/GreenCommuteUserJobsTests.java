package BC23.GreenCommute;


import BC23.GreenCommute.mockentities.ApplyAndSaveRequest;
import BC23.GreenCommute.service.AppliedJobsService;
import BC23.GreenCommute.service.SavedJobsService;
import org.junit.jupiter.api.Test;
import org.junit.runner.RunWith;
import org.mockito.Mock;
import org.mockito.Mockito;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.test.context.junit4.SpringRunner;


import static org.mockito.Mockito.*;

@RunWith(SpringRunner.class)
@SpringBootTest
class GreenCommuteUserJobsTests {

    @Mock
    private SavedJobsService mockSavedJobsService;

    @Mock
    private AppliedJobsService mockAppliedJobsService;


    @Test
    void SavedJobs() {
        int userId = 1;
        ApplyAndSaveRequest applyAndSaveRequest = new ApplyAndSaveRequest(1);
        doNothing().when(mockSavedJobsService).saveToSavedJobs(userId, applyAndSaveRequest);
        mockSavedJobsService.saveToSavedJobs(userId, applyAndSaveRequest);
        Mockito.verify(mockSavedJobsService).saveToSavedJobs(1, new ApplyAndSaveRequest(1));

    }

    @Test
    void appliedJobs() {
        int userId = 1;
        ApplyAndSaveRequest applyAndSaveRequest = new ApplyAndSaveRequest(1);
        doNothing().when(mockAppliedJobsService).saveToAppliedJobs(userId, applyAndSaveRequest);
        mockAppliedJobsService.saveToAppliedJobs(userId, applyAndSaveRequest);
        Mockito.verify(mockAppliedJobsService).saveToAppliedJobs(1, new ApplyAndSaveRequest(1));
    }

    @Test
    void deletedFromSavedJobs() {
        int userId = 1;
        ApplyAndSaveRequest applyAndSaveRequest = new ApplyAndSaveRequest(1);
        doNothing().when(mockSavedJobsService).deleteSavedJobs(userId, applyAndSaveRequest);
        mockSavedJobsService.deleteSavedJobs(userId, applyAndSaveRequest);
        Mockito.verify(mockSavedJobsService).deleteSavedJobs(1, new ApplyAndSaveRequest(1));
    }


}

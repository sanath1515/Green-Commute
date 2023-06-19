package BC23.GreenCommute.jparepository;

import BC23.GreenCommute.entity.Jobs;
import BC23.GreenCommute.entity.SavedJobs;
import BC23.GreenCommute.entity.User;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface SavedJobsJpa extends JpaRepository<SavedJobs, Integer> {

    List<SavedJobs> findByUserAndJobs(User user, Jobs jobs);
  //  List<SavedJobs> findByUserId(int id);


}

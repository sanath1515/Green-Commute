package BC23.GreenCommute.jparepository;

import BC23.GreenCommute.entity.AppliedJobs;
import BC23.GreenCommute.entity.Jobs;
import BC23.GreenCommute.entity.User;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface AppliedJobsJpa extends JpaRepository<AppliedJobs, Integer> {

    List<AppliedJobs> findByUserAndJobs(User user, Jobs jobs);
}

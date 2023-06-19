package BC23.GreenCommute.service;

import BC23.GreenCommute.entity.Jobs;
import BC23.GreenCommute.jparepository.JobsJpa;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;


@Service
public class JobService {
    @Autowired
    private JobsJpa jobsJpa;

    public Optional<Jobs> getJobById(int id) {
        return jobsJpa.findById(id);
    }

    public List<Jobs> getAllJobs() {
        return jobsJpa.findAll();
    }
}

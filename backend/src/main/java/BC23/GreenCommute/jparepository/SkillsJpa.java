package BC23.GreenCommute.jparepository;

import BC23.GreenCommute.entity.Skills;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface SkillsJpa extends JpaRepository<Skills,Integer> {
}

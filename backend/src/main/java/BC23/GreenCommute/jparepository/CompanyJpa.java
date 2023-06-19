package BC23.GreenCommute.jparepository;

import BC23.GreenCommute.entity.Company;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface CompanyJpa extends JpaRepository<Company,Integer> {
}

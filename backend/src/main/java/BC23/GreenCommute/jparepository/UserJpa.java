package BC23.GreenCommute.jparepository;

import BC23.GreenCommute.entity.User;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface UserJpa extends JpaRepository<User, Integer> {
}

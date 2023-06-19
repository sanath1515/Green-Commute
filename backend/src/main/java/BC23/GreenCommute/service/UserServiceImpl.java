package BC23.GreenCommute.service;

import BC23.GreenCommute.entity.User;
import BC23.GreenCommute.jparepository.UserJpa;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.Optional;

@Service
public class UserServiceImpl {

    @Autowired
    private UserJpa userJpa;

    public Optional<User> getUserById(int userId) {
        return userJpa.findById(userId);
    }
}
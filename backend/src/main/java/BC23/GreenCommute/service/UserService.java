package BC23.GreenCommute.service;

import BC23.GreenCommute.entity.User;

import java.util.Optional;

public interface UserService {
    Optional<User> getUserById(int userId);
}

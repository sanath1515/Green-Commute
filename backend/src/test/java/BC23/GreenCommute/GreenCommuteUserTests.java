package BC23.GreenCommute;

import BC23.GreenCommute.entity.User;
import BC23.GreenCommute.service.UserServiceImpl;
import org.junit.jupiter.api.Assertions;
import org.junit.jupiter.api.Test;
import org.junit.runner.RunWith;
import org.mockito.Mock;
import org.mockito.Mockito;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.test.context.junit4.SpringRunner;

import java.util.Optional;

@RunWith(SpringRunner.class)
@SpringBootTest
public class GreenCommuteUserTests {

    @Mock
    private UserServiceImpl userService;

    @Test
    public void getUserByIdTest() {
        int id = 1;
        User user = new User(1, "admin", "123", null, null, null);
        Optional<User> usersOptional = Optional.of(user);
        Mockito.when(userService.getUserById(id)).thenReturn(usersOptional);
        Assertions.assertEquals(usersOptional, userService.getUserById(id));
        Mockito.verify(userService).getUserById(id);
    }
}

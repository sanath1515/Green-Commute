package BC23.GreenCommute.controller;

import BC23.GreenCommute.dto.UserDto;
import BC23.GreenCommute.entity.User;
import BC23.GreenCommute.exception.DataNotFoundException;
import BC23.GreenCommute.mapper.UserMapper;
import BC23.GreenCommute.service.UserServiceImpl;
import lombok.extern.slf4j.Slf4j;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.Optional;

@Slf4j
@RestController
@RequestMapping("api/v1/users")
@CrossOrigin(origins = "*")
public class UserController {
    @Autowired
    private UserServiceImpl userService;

    @Autowired
    private UserMapper userMapper;

    @GetMapping("/{id}")
    public ResponseEntity<UserDto> getUserById(@PathVariable(value = "id") int id) {
        Optional<User> user = userService.getUserById(id);
        if (!user.isPresent()) {
            String logvalue = String.format("Invalid Job Id provided as %x", id);
            log.debug(logvalue);
            throw new DataNotFoundException("No data there with id : " + id);
        }
        UserDto userDto = UserMapper.INSTANCE.toUserDto(user.get());
        return ResponseEntity.ok().body(userDto);
    }
}
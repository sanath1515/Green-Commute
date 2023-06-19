package BC23.GreenCommute.mapper;

import BC23.GreenCommute.dto.UserDto;
import BC23.GreenCommute.entity.User;
import org.mapstruct.Mapper;
import org.mapstruct.Mapping;
import org.mapstruct.factory.Mappers;


@Mapper(componentModel = "spring")
public interface UserMapper {
    UserMapper INSTANCE = Mappers.getMapper(UserMapper.class);

    @Mapping(source = "userId", target = "userId")
    UserDto toUserDto(User optionalUser);


}
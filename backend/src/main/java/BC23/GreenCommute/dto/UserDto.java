package BC23.GreenCommute.dto;


import BC23.GreenCommute.entity.Skills;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.util.List;

@Data
@NoArgsConstructor
@AllArgsConstructor
public class UserDto {

    private int userId;

    private String userName;


    private List<Skills> skillList;

}

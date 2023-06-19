package BC23.GreenCommute.dto;

import lombok.*;

import java.time.LocalDate;
import java.util.List;

@Data
@NoArgsConstructor
@AllArgsConstructor
public class JobDto {
    private int id;

    private String description;

    private String jobProfile;

    private String jobType;

    private LocalDate dateAdded;

    private boolean greenCommute;

    private String experienceLevel;

    private String companyName;

    private String imageSource;

    private String city;

    private List<String> commuteRoutes;

    private String requiredProficiency;

    private String distance;
}

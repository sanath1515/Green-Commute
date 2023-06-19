package BC23.GreenCommute.dto;

import lombok.*;

@Data
@NoArgsConstructor
@AllArgsConstructor
public class CompanyDto {
    private int companyId;

    private String companyName;

    private String companyImage;

    private String location;

    private String transportAvailable;
}

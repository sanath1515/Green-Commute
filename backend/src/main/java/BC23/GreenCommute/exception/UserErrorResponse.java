package BC23.GreenCommute.exception;


import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@AllArgsConstructor
@NoArgsConstructor
@Data
public class UserErrorResponse {

    private String message;
    private long timeStamp;


}
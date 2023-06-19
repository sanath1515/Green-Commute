package BC23.GreenCommute.entity;

import com.fasterxml.jackson.annotation.JsonBackReference;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
import lombok.ToString;

import javax.persistence.*;
import java.util.List;

@Data
@NoArgsConstructor
@AllArgsConstructor
@Entity
@Table(name = "transport")
public class Transport {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int transportId;

    @Column(name = "transport_name")
    private String transportName;

    @ToString.Exclude
    @ManyToMany(mappedBy = "transportList", cascade = CascadeType.ALL)
    @JsonBackReference
    private List<Company> companyList;
}

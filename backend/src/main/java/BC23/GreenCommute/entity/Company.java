package BC23.GreenCommute.entity;

import com.fasterxml.jackson.annotation.JsonBackReference;
import com.fasterxml.jackson.annotation.JsonManagedReference;
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
@Table(name = "company")
public class Company {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int companyId;

    @Column(name = "company_name")
    private String companyName;

    @Column(name = "company_image")
    private String companyImage;

    @Column(name = "location")
    private String location;

    @Column(name = "distance")
    private String distance;

    @ToString.Exclude
    @OneToMany(mappedBy = "company", cascade = {CascadeType.DETACH, CascadeType.MERGE, CascadeType.PERSIST, CascadeType.REFRESH})
    private List<Jobs> JobsList;

    @ToString.Exclude
    @ManyToMany
    @JoinColumn(name = "transport_id")
    @JsonBackReference
    private List<Transport> transportList;
}

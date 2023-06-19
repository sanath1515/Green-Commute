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
@Table(name = "skills")
public class Skills {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int skillId;

    @Column(name = "skill_name")
    private String skillName;

    @ToString.Exclude
    @ManyToMany(mappedBy = "skillList", cascade = CascadeType.ALL)
    private List<User> userList;

    @ToString.Exclude
    @ManyToMany(mappedBy = "skillList", cascade = CascadeType.ALL)
    @JsonBackReference
    private List<Jobs> jobsList;
}

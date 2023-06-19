package BC23.GreenCommute.entity;

import com.fasterxml.jackson.annotation.JsonBackReference;
import com.fasterxml.jackson.annotation.JsonManagedReference;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
import lombok.ToString;

import javax.persistence.*;
import java.time.LocalDate;
import java.util.List;

@Data
@NoArgsConstructor
@AllArgsConstructor
@Entity
@Table(name = "jobs")
public class Jobs {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "job_id")
    private int jobId;

    @Lob
    @Column(name = "job_description")
    private String jobDescription;

    @Column(name = "job_title")
    private String jobTitle;

    @Column(name = "job_type")
    private String jobType;

    @Column(name = "posted_date")
    private LocalDate postedDate;

    @Column(name = "is_green_commute")
    private boolean isGreenCommute;

    @Column(name = "experience_level")
    private String experienceLevel;

    @Lob
    @Column(name = "required_proficiency")
    private String requiredProficiency;

    @ToString.Exclude
    @ManyToMany
    @JoinColumn(name = "skill_id")
    @JsonManagedReference
    private List<Skills> skillList;

    @ToString.Exclude
    @ManyToOne(cascade = {CascadeType.DETACH, CascadeType.MERGE, CascadeType.PERSIST, CascadeType.REFRESH})
    @JoinColumn(name = "company_id")
    @JsonBackReference
    private Company company;


}

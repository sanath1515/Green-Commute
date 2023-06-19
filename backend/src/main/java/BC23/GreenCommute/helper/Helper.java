package BC23.GreenCommute.helper;

import BC23.GreenCommute.entity.Jobs;
import BC23.GreenCommute.entity.Skills;
import BC23.GreenCommute.entity.Transport;
import org.springframework.stereotype.Component;

import java.util.ArrayList;
import java.util.Iterator;
import java.util.List;
import java.util.Map;

@Component
public class Helper {

    private static final String[] params = {"distance", "greenCommute", "jobType", "experienceLevel", "commuteRoutes", "location", "jobProfile", "dateAdded", "skills"};

    public List<String> getCommuteRoutes(Jobs job) {
        List<Transport> transportList = job.getCompany().getTransportList();
        List<String> transports = new ArrayList<>();
        for (Transport transport : transportList) {
            transports.add(transport.getTransportName());
        }
        return transports;
    }

    public List<String> getSkills(List<Skills> skillsList) {
        List<String> jobSkills = new ArrayList<>();
        for (Skills skills : skillsList) {
            jobSkills.add(skills.getSkillName());
        }
        return jobSkills;
    }

    public List<Jobs> jobFilter(List<Jobs> jobsList, Map<String, String[]> map) {
        Iterator itr = map.entrySet().iterator();
        while (itr.hasNext()) {
            Map.Entry<String, String[]> entry = (Map.Entry<String, String[]>) itr.next();
            String key = entry.getKey();
            String[] value = entry.getValue()[0].split(",");
            if (key.equals(params[0])) {
                jobsList = jobsList.stream().filter(job -> {
                    String distance = job.getCompany().getDistance();
                    for (String distanceValue : value) {
                        if (distance.equalsIgnoreCase(distanceValue)) {
                            return true;
                        }
                    }
                    return false;
                }).toList();
            } else if (key.equals(params[1])) {
                jobsList = jobsList.stream().filter(jobs -> String.valueOf(jobs.isGreenCommute()).equalsIgnoreCase(value[0])).toList();
            } else if (key.equals(params[2])) {
                jobsList = jobsList.stream().filter(job -> {
                    String jobType = job.getJobType();
                    for (String jobtype : value) {
                        if (jobType.equalsIgnoreCase(jobtype))
                            return true;
                    }
                    return false;
                }).toList();
            } else if (key.equals(params[3])) {
                jobsList = jobsList.stream().filter(job -> {
                    String experience = job.getExperienceLevel();
                    for (String experiencelevel : value) {
                        if (experience.equalsIgnoreCase(experiencelevel))
                            return true;
                    }
                    return false;
                }).toList();
            } else if (key.equals(params[4])) {
                jobsList = jobsList.stream().filter(jobs -> {
                    List<String> commuteRoutes = getCommuteRoutes(jobs);
                    for (String commute : value) {
                        if (commuteRoutes.indexOf(commute) != -1) {
                            return true;
                        }
                    }
                    return false;
                }).toList();
            } else if (key.equals(params[5])) {
                jobsList = jobsList.stream().filter(job -> {
                    String joblocation = job.getCompany().getLocation();
                    for (String location : value) {
                        if (location.equalsIgnoreCase(joblocation))
                            return true;
                    }
                    return false;
                }).toList();
            } else if (key.equals(params[6])) {
                jobsList = jobsList.stream().filter(jobs -> {
                    String jobTitle = jobs.getJobTitle();
                    for (String title : value) {
                        if (title.equalsIgnoreCase(jobTitle))
                            return true;
                    }
                    return false;
                }).toList();
            } else if (key.equals(params[7])) {
                jobsList = jobsList.stream().filter(job -> {
                    String postedDate = job.getPostedDate().toString();
                    for (String date : value) {
                        if (date.equalsIgnoreCase(postedDate))
                            return true;
                    }
                    return false;
                }).toList();
            } else if (key.equals(params[8])) {
                jobsList = jobsList.stream().filter(job -> {
                    List<Skills> skill = job.getSkillList();
                    List<String> skillNames = getSkills(skill);
                    for (String skillName : value) {
                        if (skillNames.indexOf(skillName) != -1)
                            return true;
                    }
                    return false;
                }).toList();
            }
        }
        return jobsList;
    }
}

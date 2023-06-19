package BC23.GreenCommute.mapper;


import BC23.GreenCommute.dto.JobDto;

import BC23.GreenCommute.entity.Jobs;
import org.mapstruct.Mapper;
import org.mapstruct.Mapping;
import org.mapstruct.factory.Mappers;

import java.util.List;


@Mapper(componentModel = "spring", uses = {Jobs.class, JobDto.class})
public interface JobMapper {
    JobMapper INSTANCE = Mappers.getMapper(JobMapper.class);

    @Mapping(source = "jobId", target = "id")
    @Mapping(source = "company.companyName", target = "companyName")
    @Mapping(source = "company.companyImage", target = "imageSource")
    @Mapping(source = "company.location", target = "city")
    @Mapping(source = "company.distance", target = "distance")
    @Mapping(source = "jobDescription", target = "description")
    @Mapping(source = "jobType", target = "jobType")
    @Mapping(source = "jobTitle", target = "jobProfile")
    @Mapping(target = "commuteRoutes", ignore = true)
    @Mapping(source = "postedDate", target = "dateAdded")
    @Mapping(source = "experienceLevel", target = "experienceLevel")
    @Mapping(source = "requiredProficiency", target = "requiredProficiency")
    JobDto toJobDto(Jobs optionalJobs);

    List<JobDto> toJobDtoList(List<Jobs> jobsList) ;

}

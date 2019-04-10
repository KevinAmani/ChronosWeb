package com.bigdata.jpa_respository;

import com.bigdata.hibernate_model.TheProject;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

public interface TheProjectJpaRepository extends JpaRepository<TheProject,Long> {
    @Query(value="select * from the_project where the_project.project_id = ?1",nativeQuery = true)
    TheProject findProjectByID(Integer project_id);
}

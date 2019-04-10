package com.bigdata.jpa_respository;

import com.bigdata.hibernate_model.ProjectLabels;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import java.util.List;

public interface LabelsJpaRepository  extends JpaRepository<ProjectLabels,Long> {
    @Query(value="select * from project_labels as label where label.label_name= ?1",nativeQuery = true)
    ProjectLabels findByLabelName(String label_name);
}

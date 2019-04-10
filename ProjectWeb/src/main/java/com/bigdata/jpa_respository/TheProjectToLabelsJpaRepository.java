package com.bigdata.jpa_respository;

import com.bigdata.hibernate_model.TheProjectToLabels;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import java.util.List;

public interface TheProjectToLabelsJpaRepository extends JpaRepository<TheProjectToLabels,Long> {
    @Query(value="select * from the_project_to_labels as tp where tp.the_project_project_id = ?1", nativeQuery = true)
    List<TheProjectToLabels> findLabelByProjectID(Integer project_id);
}

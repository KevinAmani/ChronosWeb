package com.bigdata.jpa_respository;

import com.bigdata.hibernate_model.Profile;
import org.springframework.data.jpa.repository.JpaRepository;

public interface ProfileJpaRepository extends JpaRepository<Profile,Long> {

}

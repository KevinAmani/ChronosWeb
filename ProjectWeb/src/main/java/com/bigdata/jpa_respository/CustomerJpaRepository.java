package com.bigdata.jpa_respository;

import com.bigdata.hibernate_model.Customer;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import java.util.List;

public interface CustomerJpaRepository  extends JpaRepository<Customer,Long> {
    @Query(value="select * from customer as c where c.user_email= ?1",nativeQuery = true)
    Customer findByEmail(String email);
}

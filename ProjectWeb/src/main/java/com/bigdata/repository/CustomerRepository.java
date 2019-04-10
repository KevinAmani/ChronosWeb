package com.bigdata.repository;

import com.bigdata.hibernate_model.Customer;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.Repository;
import org.springframework.data.repository.query.Param;

import java.util.List;

public interface CustomerRepository  extends Repository<Customer, Long> {


}

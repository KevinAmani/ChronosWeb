package com.bigdata.service;

import com.bigdata.hibernate_model.*;
import com.bigdata.model.servicemodel.ProjectAbstract;

import java.util.List;

public interface MainPageService {

    public List<Profile> findAll();

    public Customer findCustomerByEmail(String email);

    public ProjectAbstract getProjectAbstractByProjectID(Integer project_id);
}

package com.bigdata.service_impl;

import com.bigdata.hibernate_model.*;
import com.bigdata.jpa_respository.*;
import com.bigdata.model.servicemodel.ProjectAbstract;
import com.bigdata.repository.CustomerRepository;
import com.bigdata.repository.ProfileRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import javax.transaction.Transactional;
import java.text.SimpleDateFormat;
import java.util.ArrayList;
import java.util.List;

@Service
@Transactional
public class MainPageServiceImpl {

    @Autowired
    private ProfileJpaRepository profileJpaRepository;

    @Autowired
    private CustomerJpaRepository customerJpaRepository;

    @Autowired
    private LabelsJpaRepository labelsJpaRepository;

    @Autowired
    private TheProjectJpaRepository theProjectJpaRepository;

    @Autowired
    private  TheProjectToLabelsJpaRepository theProjectToLabelsJpaRepository;

    @Autowired
    private ProfileRepository profileRepository;

    @Autowired
    private CustomerRepository customerRepository;


    //Find all profile
    public List<Profile> findAll(){
        return profileJpaRepository.findAll();
    }


    //Find customer by email
    public Customer findCustomerByEmail(String email) {return customerJpaRepository.findByEmail(email);}

    //Find Label Name by project name
    public ProjectAbstract getProjectAbstractByProjectID(Integer project_id){

        ProjectAbstract projectAbstract = new ProjectAbstract();

        TheProject project_list = theProjectJpaRepository.findProjectByID(project_id);
        List<TheProjectToLabels> projecttolabels_list=theProjectToLabelsJpaRepository.findLabelByProjectID((project_id));
        List<ProjectLabels> label_list= new ArrayList<>();
        for(int i=0;i<projecttolabels_list.size();i++){
            label_list.add(labelsJpaRepository.findByLabelName(projecttolabels_list.get(i).getProjectLabelsLabelName()));
        }


        SimpleDateFormat dateFormate = new SimpleDateFormat("yyyy-mm-dd");
        projectAbstract.setProject_description(project_list.getProjectDescription());
        projectAbstract.setProject_image(project_list.getProjectImage());
        projectAbstract.setProject_name(project_list.getProjectName());
        projectAbstract.setProject_meta(dateFormate.format(project_list.getProjectStartTime()));
        projectAbstract.setProject_tab(label_list);


        return projectAbstract;
    }
}

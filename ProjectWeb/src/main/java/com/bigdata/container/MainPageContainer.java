package com.bigdata.container;

import com.bigdata.hibernate_model.Customer;
import com.bigdata.hibernate_model.Profile;
import com.bigdata.model.MessageWrapper;
import com.bigdata.model.servicemodel.DeveloperProfile;
import com.bigdata.model.servicemodel.ProjectAbstract;
import com.bigdata.service_impl.MainPageServiceImpl;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.ArrayList;
import java.util.List;

@RestController
public class MainPageContainer {

    @Autowired
    private MainPageServiceImpl mainPageServiceImpl;


    @CrossOrigin
    @GetMapping(value = "developer_profile")
    public @ResponseBody MessageWrapper getDeveloperProfile(){

        List<Profile> profile_list = mainPageServiceImpl.findAll();

        Customer customer_list = mainPageServiceImpl.findCustomerByEmail(profile_list.get(0).getTheCustomerEmail());

        DeveloperProfile dp = new DeveloperProfile();

        List<DeveloperProfile> dp_list = new ArrayList<>();

        dp.setEmail(profile_list.get(0).getTheCustomerEmail());
        dp.setDescription(profile_list.get(0).getDescription());
        dp.setHeader(customer_list.getUserFirstName()+customer_list.getUserLastName());
        dp.setImage(profile_list.get(0).getImg());
        dp.setMeta(profile_list.get(0).getPostition());

        dp_list.add(dp);

        MessageWrapper<DeveloperProfile> message = new MessageWrapper<DeveloperProfile>();
        message.setObjects(dp_list);

        return message;
    }


    @CrossOrigin
    @GetMapping(value = "my_project")
    public @ResponseBody MessageWrapper getMyProject(@RequestParam("project_id") Integer project_id){
        MessageWrapper<ProjectAbstract> message = new MessageWrapper<ProjectAbstract>();

        List<ProjectAbstract> projectAbstract = new ArrayList<>();
        projectAbstract.add(mainPageServiceImpl.getProjectAbstractByProjectID(project_id));

        message.setObjects(projectAbstract);

        return message;
    }
}

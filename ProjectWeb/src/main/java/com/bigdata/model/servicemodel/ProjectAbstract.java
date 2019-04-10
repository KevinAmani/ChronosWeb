package com.bigdata.model.servicemodel;

import com.bigdata.hibernate_model.ProjectLabels;
import com.bigdata.hibernate_model.TheProjectToLabels;

import java.util.List;

public class ProjectAbstract {
    private List<ProjectLabels> project_tab;
    private String project_name;
    private String project_meta;
    private String project_description;
    private String project_image;

    public List<ProjectLabels> getProject_tab() {
        return project_tab;
    }

    public void setProject_tab(List<ProjectLabels> project_tab) {
        this.project_tab = project_tab;
    }

    public String getProject_name() {
        return project_name;
    }

    public void setProject_name(String project_name) {
        this.project_name = project_name;
    }

    public String getProject_meta() {
        return project_meta;
    }

    public void setProject_meta(String project_meta) {
        this.project_meta = project_meta;
    }

    public String getProject_description() {
        return project_description;
    }

    public void setProject_description(String project_description) {
        this.project_description = project_description;
    }

    public String getProject_image() {
        return project_image;
    }

    public void setProject_image(String project_image) {
        this.project_image = project_image;
    }
}

package com.bigdata.hibernate_model;

import javax.persistence.*;
import java.sql.Date;

@Entity
@Table(name = "the_project", schema = "mydb", catalog = "")
public class TheProject {
    private String projectName;
    private String projectDescription;
    private Date projectStartTime;
    private String projectEndTime;
    private int projectId;
    private String projectImage;

    @Basic
    @Column(name = "project_name", nullable = false, length = 200)
    public String getProjectName() {
        return projectName;
    }

    public void setProjectName(String projectName) {
        this.projectName = projectName;
    }

    @Basic
    @Column(name = "project_description", nullable = false, length = 500)
    public String getProjectDescription() {
        return projectDescription;
    }

    public void setProjectDescription(String projectDescription) {
        this.projectDescription = projectDescription;
    }

    @Basic
    @Column(name = "project_start_time", nullable = false)
    public Date getProjectStartTime() {
        return projectStartTime;
    }

    public void setProjectStartTime(Date projectStartTime) {
        this.projectStartTime = projectStartTime;
    }

    @Basic
    @Column(name = "project_end_time", nullable = true, length = 45)
    public String getProjectEndTime() {
        return projectEndTime;
    }

    public void setProjectEndTime(String projectEndTime) {
        this.projectEndTime = projectEndTime;
    }

    @Id
    @Column(name = "project_id", nullable = false)
    public int getProjectId() {
        return projectId;
    }

    public void setProjectId(int projectId) {
        this.projectId = projectId;
    }

    @Basic
    @Column(name = "project_image", nullable = false, length = 45)
    public String getProjectImage() {
        return projectImage;
    }

    public void setProjectImage(String projectImage) {
        this.projectImage = projectImage;
    }

    @Override
    public boolean equals(Object o) {
        if (this == o) return true;
        if (o == null || getClass() != o.getClass()) return false;

        TheProject that = (TheProject) o;

        if (projectId != that.projectId) return false;
        if (projectName != null ? !projectName.equals(that.projectName) : that.projectName != null) return false;
        if (projectDescription != null ? !projectDescription.equals(that.projectDescription) : that.projectDescription != null)
            return false;
        if (projectStartTime != null ? !projectStartTime.equals(that.projectStartTime) : that.projectStartTime != null)
            return false;
        if (projectEndTime != null ? !projectEndTime.equals(that.projectEndTime) : that.projectEndTime != null)
            return false;
        if (projectImage != null ? !projectImage.equals(that.projectImage) : that.projectImage != null) return false;

        return true;
    }

    @Override
    public int hashCode() {
        int result = projectName != null ? projectName.hashCode() : 0;
        result = 31 * result + (projectDescription != null ? projectDescription.hashCode() : 0);
        result = 31 * result + (projectStartTime != null ? projectStartTime.hashCode() : 0);
        result = 31 * result + (projectEndTime != null ? projectEndTime.hashCode() : 0);
        result = 31 * result + projectId;
        result = 31 * result + (projectImage != null ? projectImage.hashCode() : 0);
        return result;
    }
}

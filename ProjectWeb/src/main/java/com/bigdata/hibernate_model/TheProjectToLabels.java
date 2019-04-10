package com.bigdata.hibernate_model;

import javax.persistence.*;

@Entity
@Table(name = "the_project_to_labels", schema = "mydb", catalog = "")
@IdClass(TheProjectToLabelsPK.class)
public class TheProjectToLabels {
    private int theProjectProjectId;
    private String projectLabelsLabelName;

    @Id
    @Column(name = "the_project_project_id", nullable = false)
    public int getTheProjectProjectId() {
        return theProjectProjectId;
    }

    public void setTheProjectProjectId(int theProjectProjectId) {
        this.theProjectProjectId = theProjectProjectId;
    }

    @Id
    @Column(name = "project_labels_label_name", nullable = false, length = 50)
    public String getProjectLabelsLabelName() {
        return projectLabelsLabelName;
    }

    public void setProjectLabelsLabelName(String projectLabelsLabelName) {
        this.projectLabelsLabelName = projectLabelsLabelName;
    }

    @Override
    public boolean equals(Object o) {
        if (this == o) return true;
        if (o == null || getClass() != o.getClass()) return false;

        TheProjectToLabels that = (TheProjectToLabels) o;

        if (theProjectProjectId != that.theProjectProjectId) return false;
        if (projectLabelsLabelName != null ? !projectLabelsLabelName.equals(that.projectLabelsLabelName) : that.projectLabelsLabelName != null)
            return false;

        return true;
    }

    @Override
    public int hashCode() {
        int result = theProjectProjectId;
        result = 31 * result + (projectLabelsLabelName != null ? projectLabelsLabelName.hashCode() : 0);
        return result;
    }
}

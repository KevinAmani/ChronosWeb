package com.bigdata.hibernate_model;

import javax.persistence.*;

@Entity
@Table(name = "project_labels", schema = "mydb", catalog = "")
public class ProjectLabels {
    private String labelName;
    private String labelColor;

    @Id
    @Column(name = "label_name", nullable = false, length = 50)
    public String getLabelName() {
        return labelName;
    }

    public void setLabelName(String labelName) {
        this.labelName = labelName;
    }

    @Basic
    @Column(name = "label_color", nullable = false, length = 45)
    public String getLabelColor() {
        return labelColor;
    }

    public void setLabelColor(String labelColor) {
        this.labelColor = labelColor;
    }

    @Override
    public boolean equals(Object o) {
        if (this == o) return true;
        if (o == null || getClass() != o.getClass()) return false;

        ProjectLabels that = (ProjectLabels) o;

        if (labelName != null ? !labelName.equals(that.labelName) : that.labelName != null) return false;
        if (labelColor != null ? !labelColor.equals(that.labelColor) : that.labelColor != null) return false;

        return true;
    }

    @Override
    public int hashCode() {
        int result = labelName != null ? labelName.hashCode() : 0;
        result = 31 * result + (labelColor != null ? labelColor.hashCode() : 0);
        return result;
    }
}

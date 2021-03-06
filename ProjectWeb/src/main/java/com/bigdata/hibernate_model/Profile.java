package com.bigdata.hibernate_model;

import javax.persistence.Basic;
import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.Id;

@Entity
public class Profile {
    private String theCustomerEmail;
    private String description;
    private String postition;
    private String img;

    @Id
    @Column(name = "the_customer_email", nullable = false, length = 50)
    public String getTheCustomerEmail() {
        return theCustomerEmail;
    }

    public void setTheCustomerEmail(String theCustomerEmail) {
        this.theCustomerEmail = theCustomerEmail;
    }

    @Basic
    @Column(name = "description", nullable = true, length = 300)
    public String getDescription() {
        return description;
    }

    public void setDescription(String description) {
        this.description = description;
    }

    @Basic
    @Column(name = "postition", nullable = true, length = 45)
    public String getPostition() {
        return postition;
    }

    public void setPostition(String postition) {
        this.postition = postition;
    }

    @Basic
    @Column(name = "img", nullable = true, length = 200)
    public String getImg() {
        return img;
    }

    public void setImg(String img) {
        this.img = img;
    }

    @Override
    public boolean equals(Object o) {
        if (this == o) return true;
        if (o == null || getClass() != o.getClass()) return false;

        Profile profile = (Profile) o;

        if (theCustomerEmail != null ? !theCustomerEmail.equals(profile.theCustomerEmail) : profile.theCustomerEmail != null)
            return false;
        if (description != null ? !description.equals(profile.description) : profile.description != null) return false;
        if (postition != null ? !postition.equals(profile.postition) : profile.postition != null) return false;
        if (img != null ? !img.equals(profile.img) : profile.img != null) return false;

        return true;
    }

    @Override
    public int hashCode() {
        int result = theCustomerEmail != null ? theCustomerEmail.hashCode() : 0;
        result = 31 * result + (description != null ? description.hashCode() : 0);
        result = 31 * result + (postition != null ? postition.hashCode() : 0);
        result = 31 * result + (img != null ? img.hashCode() : 0);
        return result;
    }
}

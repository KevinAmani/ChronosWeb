package com.bigdata.hibernate_model;

import javax.persistence.Basic;
import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.Id;

@Entity
public class Customer {
    private String userEmail;
    private String userFirstName;
    private String userLastName;
    private String userSex;

    @Id
    @Column(name = "user_email", nullable = false, length = 50)
    public String getUserEmail() {
        return userEmail;
    }

    public void setUserEmail(String userEmail) {
        this.userEmail = userEmail;
    }

    @Basic
    @Column(name = "user_first_name", nullable = true, length = 40)
    public String getUserFirstName() {
        return userFirstName;
    }

    public void setUserFirstName(String userFirstName) {
        this.userFirstName = userFirstName;
    }

    @Basic
    @Column(name = "user_last_name", nullable = true, length = 40)
    public String getUserLastName() {
        return userLastName;
    }

    public void setUserLastName(String userLastName) {
        this.userLastName = userLastName;
    }

    @Basic
    @Column(name = "user_sex", nullable = true, length = 30)
    public String getUserSex() {
        return userSex;
    }

    public void setUserSex(String userSex) {
        this.userSex = userSex;
    }

    @Override
    public boolean equals(Object o) {
        if (this == o) return true;
        if (o == null || getClass() != o.getClass()) return false;

        Customer customer = (Customer) o;

        if (userEmail != null ? !userEmail.equals(customer.userEmail) : customer.userEmail != null) return false;
        if (userFirstName != null ? !userFirstName.equals(customer.userFirstName) : customer.userFirstName != null)
            return false;
        if (userLastName != null ? !userLastName.equals(customer.userLastName) : customer.userLastName != null)
            return false;
        if (userSex != null ? !userSex.equals(customer.userSex) : customer.userSex != null) return false;

        return true;
    }

    @Override
    public int hashCode() {
        int result = userEmail != null ? userEmail.hashCode() : 0;
        result = 31 * result + (userFirstName != null ? userFirstName.hashCode() : 0);
        result = 31 * result + (userLastName != null ? userLastName.hashCode() : 0);
        result = 31 * result + (userSex != null ? userSex.hashCode() : 0);
        return result;
    }
}

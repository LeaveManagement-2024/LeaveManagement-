package com.LeaveManagement.Entity;


import jakarta.persistence.*;

@Entity
@Table(name = "Profiles")
public class Profilee {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long IdProfile;

    private String profileName;

    public Long getIdProfile() {
        return IdProfile;
    }

    public void setIdProfile(Long idProfile) {
        IdProfile = idProfile;
    }

    public String getProfileName() {
        return profileName;
    }

    public void setProfileName(String profileName) {
        this.profileName = profileName;
    }
}
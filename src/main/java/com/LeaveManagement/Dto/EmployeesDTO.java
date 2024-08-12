package com.LeaveManagement.Dto;

import org.springframework.web.multipart.MultipartFile;

import java.time.LocalDate;

public class EmployeesDTO{
    private Long idE;
    private String firstNameFr;
    private String firstNameAr;
    private String lastNameFr;
    private String lastNameAr;
    private String email;
    private String password;
    private String phone;
    private String ppr;
    private String cin;
    private String addressFr;
    private String addressAr;
    private LocalDate hireDate;
    private String workLocationFr;
    private String workLocationAr;
    private MultipartFile image;
    private Long profileId;
    private Long gradeId;
    private Long filiereId;
    private Long postId;

    public EmployeesDTO() {
    }

    public EmployeesDTO(Long idE, String firstNameFr, String firstNameAr, String lastNameFr, String lastNameAr, String email, String password, String phone, String ppr, String cin, String addressFr, String addressAr, LocalDate hireDate, String workLocationFr, String workLocationAr, MultipartFile image, Long profileId, Long gradeId, Long filiereId, Long postId) {
        this.idE = idE;
        this.firstNameFr = firstNameFr;
        this.firstNameAr = firstNameAr;
        this.lastNameFr = lastNameFr;
        this.lastNameAr = lastNameAr;
        this.email = email;
        this.password = password;
        this.phone = phone;
        this.ppr = ppr;
        this.cin = cin;
        this.addressFr = addressFr;
        this.addressAr = addressAr;
        this.hireDate = hireDate;
        this.workLocationFr = workLocationFr;
        this.workLocationAr = workLocationAr;
        this.image = image;
        this.profileId = profileId;
        this.gradeId = gradeId;
        this.filiereId = filiereId;
        this.postId = postId;
    }

    public Long getIdE() {
        return idE;
    }

    public void setIdE(Long idE) {
        this.idE = idE;
    }

    public String getFirstNameFr() {
        return firstNameFr;
    }

    public void setFirstNameFr(String firstNameFr) {
        this.firstNameFr = firstNameFr;
    }

    public String getFirstNameAr() {
        return firstNameAr;
    }

    public void setFirstNameAr(String firstNameAr) {
        this.firstNameAr = firstNameAr;
    }

    public String getLastNameFr() {
        return lastNameFr;
    }

    public void setLastNameFr(String lastNameFr) {
        this.lastNameFr = lastNameFr;
    }

    public String getLastNameAr() {
        return lastNameAr;
    }

    public void setLastNameAr(String lastNameAr) {
        this.lastNameAr = lastNameAr;
    }

    public String getEmail() {
        return email;
    }

    public void setEmail(String email) {
        this.email = email;
    }

    public String getPassword() {
        return password;
    }

    public void setPassword(String password) {
        this.password = password;
    }

    public String getPhone() {
        return phone;
    }

    public void setPhone(String phone) {
        this.phone = phone;
    }

    public String getPpr() {
        return ppr;
    }

    public void setPpr(String ppr) {
        this.ppr = ppr;
    }

    public String getCin() {
        return cin;
    }

    public void setCin(String cin) {
        this.cin = cin;
    }

    public String getAddressFr() {
        return addressFr;
    }

    public void setAddressFr(String addressFr) {
        this.addressFr = addressFr;
    }

    public String getAddressAr() {
        return addressAr;
    }

    public void setAddressAr(String addressAr) {
        this.addressAr = addressAr;
    }

    public LocalDate getHireDate() {
        return hireDate;
    }

    public void setHireDate(LocalDate hireDate) {
        this.hireDate = hireDate;
    }

    public String getWorkLocationFr() {
        return workLocationFr;
    }

    public void setWorkLocationFr(String workLocationFr) {
        this.workLocationFr = workLocationFr;
    }

    public String getWorkLocationAr() {
        return workLocationAr;
    }

    public void setWorkLocationAr(String workLocationAr) {
        this.workLocationAr = workLocationAr;
    }

    public MultipartFile getImage() {
        return image;
    }

    public void setImage(MultipartFile image) {
        this.image = image;
    }

    public Long getProfileId() {
        return profileId;
    }

    public void setProfileId(Long profileId) {
        this.profileId = profileId;
    }

    public Long getGradeId() {
        return gradeId;
    }

    public void setGradeId(Long gradeId) {
        this.gradeId = gradeId;
    }

    public Long getFiliereId() {
        return filiereId;
    }

    public void setFiliereId(Long filiereId) {
        this.filiereId = filiereId;
    }

    public Long getPostId() {
        return postId;
    }

    public void setPostId(Long postId) {
        this.postId = postId;
    }
}
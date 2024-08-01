package com.LeaveManagement.Entity;

import com.fasterxml.jackson.annotation.JsonIdentityInfo;
import com.fasterxml.jackson.annotation.JsonManagedReference;
import com.fasterxml.jackson.annotation.ObjectIdGenerators;
import jakarta.persistence.*;
import java.time.LocalDate;
import java.util.List;

@Entity
@JsonIdentityInfo(generator = ObjectIdGenerators.PropertyGenerator.class, property = "idE")
public class Employees {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long idE;
    @Column(columnDefinition = "NVARCHAR(255)")
    private String firstNameFr;
    @Column(columnDefinition = "NVARCHAR(255)")
    private String firstNameAr;
    @Column(columnDefinition = "NVARCHAR(255)")
    private String lastNameFr;
    @Column(columnDefinition = "NVARCHAR(255)")
    private String lastNameAr;
    @Column(columnDefinition = "NVARCHAR(255)")
    private String email;
    @Column(columnDefinition = "NVARCHAR(255)")
    private String password;
    @Column(columnDefinition = "NVARCHAR(255)")
    private String phone;
    @Column(columnDefinition = "NVARCHAR(255)")
    private String ppr;
    @Column(columnDefinition = "NVARCHAR(255)")
    private String cin;
    @Column(columnDefinition = "NVARCHAR(255)")
    private String addressFr;
    @Column(columnDefinition = "NVARCHAR(255)")
    private String addressAr;
    private LocalDate hireDate;
    @Column(columnDefinition = "NVARCHAR(255)")
    private String workLocationFr;
    @Column(columnDefinition = "NVARCHAR(255)")
    private String workLocationAr;
    @Column(columnDefinition = "NVARCHAR(MAX)")
    private String image;

    @ManyToOne
    @JoinColumn(name = "managerId")
    private Employees manager;
    @ManyToOne
    @JoinColumn(name = "responsibleId")
    private Employees responsible;

    @ManyToOne
    @JoinColumn(name = "IdProfile")
    private Profiles profile;

    @ManyToOne
    @JoinColumn(name = "IdGrade")
    private Grades grade;

    @ManyToOne
    @JoinColumn(name = "IdPost")
    private Posts post;
    @ManyToOne
    @JoinColumn(name = "IdFiliere")
    private Filiere filiere;
    @JsonManagedReference
    @OneToMany(mappedBy = "employee")
    private List<AnnualLeaveLine> annualLeaveLines;
    @JsonManagedReference
    @OneToMany(mappedBy = "employee")
    private List<Leave> leaves;

    public Employees() {
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

    public String getImage() {
        return image;
    }

    public void setImage(String image) {
        this.image = image;
    }

    public Employees getManager() {
        return manager;
    }

    public void setManager(Employees manager) {
        this.manager = manager;
    }

    public Employees getResponsible() {
        return responsible;
    }

    public void setResponsible(Employees responsible) {
        this.responsible = responsible;
    }

    public Profiles getProfile() {
        return profile;
    }

    public void setProfile(Profiles profile) {
        this.profile = profile;
    }

    public Grades getGrade() {
        return grade;
    }

    public void setGrade(Grades grade) {
        this.grade = grade;
    }

    public Posts getPost() {
        return post;
    }

    public void setPost(Posts post) {
        this.post = post;
    }

    public Filiere getFiliere() {
        return filiere;
    }

    public void setFiliere(Filiere filiere) {
        this.filiere = filiere;
    }

    public List<AnnualLeaveLine> getAnnualLeaveLines() {
        return annualLeaveLines;
    }

    public void setAnnualLeaveLines(List<AnnualLeaveLine> annualLeaveLines) {
        this.annualLeaveLines = annualLeaveLines;
    }

    public List<Leave> getLeaves() {
        return leaves;
    }

    public void setLeaves(List<Leave> leaves) {
        this.leaves = leaves;
    }

    public Employees(Long idE, String firstNameFr, String firstNameAr, String lastNameFr, String lastNameAr, String email, String password, String phone, String ppr, String cin, String addressFr, String addressAr, LocalDate hireDate, String workLocationFr, String workLocationAr, String image, Employees manager, Employees responsible, Profiles profile, Grades grade, Posts post, Filiere filiere, List<AnnualLeaveLine> annualLeaveLines, List<Leave> leaves) {
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
        this.manager = manager;
        this.responsible = responsible;
        this.profile = profile;
        this.grade = grade;
        this.post = post;
        this.filiere = filiere;
        this.annualLeaveLines = annualLeaveLines;
        this.leaves = leaves;
    }
}

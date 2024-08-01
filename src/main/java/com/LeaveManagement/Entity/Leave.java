package com.LeaveManagement.Entity;

import com.fasterxml.jackson.annotation.JsonBackReference;
import com.fasterxml.jackson.annotation.JsonManagedReference;
import jakarta.persistence.*;

import java.util.Date;

@Entity
public class Leave {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long leaveId;
    private Date startDate;
    private Date endDate;
    @Column(columnDefinition = "NVARCHAR(255)")
    private Boolean remplecementVisa;
    private Date remplecementVisaDate;
    @Column(columnDefinition = "NVARCHAR(255)")
    private Boolean responsibleVisa;
    private Date responsibleVisaDate;
    @Column(columnDefinition = "NVARCHAR(255)")
    private Boolean managerVisa;
    private Date managerVisaDate;

    @JsonBackReference
    @ManyToOne
    @JoinColumn(name = "employee_id")
    private Employees employee;

    @JsonBackReference
    @ManyToOne
    @JoinColumn(name = "annualLeaveId")
    private AnnualLeave annualLeave;

    @JsonManagedReference
    @ManyToOne
    @JoinColumn(name = "leaveTypeId")
    private LeaveType leaveType;

    @JsonManagedReference
    @ManyToOne
    @JoinColumn(name = "replacementId")
    private Employees replacement;

    // Removed duplicate 'idE' column mapping
    @JsonManagedReference
    @ManyToOne
    @JoinColumn(name = "lmanagerId")
    private Employees lmanager;
    @JsonManagedReference
    @ManyToOne
    @JoinColumn(name = "responsibleId")
    private Employees responsible;

    public Leave() {
    }

    public Leave(Long leaveId, Date startDate, Date endDate, Boolean remplecementVisa, Date remplecementVisaDate, Boolean responsibleVisa, Date responsibleVisaDate, Boolean managerVisa, Date managerVisaDate, Employees employee, AnnualLeave annualLeave, LeaveType leaveType, Employees replacement, Employees lmanager, Employees responsible) {
        this.leaveId = leaveId;
        this.startDate = startDate;
        this.endDate = endDate;
        this.remplecementVisa = remplecementVisa;
        this.remplecementVisaDate = remplecementVisaDate;
        this.responsibleVisa = responsibleVisa;
        this.responsibleVisaDate = responsibleVisaDate;
        this.managerVisa = managerVisa;
        this.managerVisaDate = managerVisaDate;
        this.employee = employee;
        this.annualLeave = annualLeave;
        this.leaveType = leaveType;
        this.replacement = replacement;
        this.lmanager = lmanager;
        this.responsible = responsible;
    }

    public Long getLeaveId() {
        return leaveId;
    }

    public void setLeaveId(Long leaveId) {
        this.leaveId = leaveId;
    }

    public Date getStartDate() {
        return startDate;
    }

    public void setStartDate(Date startDate) {
        this.startDate = startDate;
    }

    public Date getEndDate() {
        return endDate;
    }

    public void setEndDate(Date endDate) {
        this.endDate = endDate;
    }

    public Boolean getRemplecementVisa() {
        return remplecementVisa;
    }

    public void setRemplecementVisa(Boolean remplecementVisa) {
        this.remplecementVisa = remplecementVisa;
    }

    public Date getRemplecementVisaDate() {
        return remplecementVisaDate;
    }

    public void setRemplecementVisaDate(Date remplecementVisaDate) {
        this.remplecementVisaDate = remplecementVisaDate;
    }

    public Boolean getResponsibleVisa() {
        return responsibleVisa;
    }

    public void setResponsibleVisa(Boolean responsibleVisa) {
        this.responsibleVisa = responsibleVisa;
    }

    public Date getResponsibleVisaDate() {
        return responsibleVisaDate;
    }

    public void setResponsibleVisaDate(Date responsibleVisaDate) {
        this.responsibleVisaDate = responsibleVisaDate;
    }

    public Boolean getManagerVisa() {
        return managerVisa;
    }

    public void setManagerVisa(Boolean managerVisa) {
        this.managerVisa = managerVisa;
    }

    public Date getManagerVisaDate() {
        return managerVisaDate;
    }

    public void setManagerVisaDate(Date managerVisaDate) {
        this.managerVisaDate = managerVisaDate;
    }

    public Employees getEmployee() {
        return employee;
    }

    public void setEmployee(Employees employee) {
        this.employee = employee;
    }

    public AnnualLeave getAnnualLeave() {
        return annualLeave;
    }

    public void setAnnualLeave(AnnualLeave annualLeave) {
        this.annualLeave = annualLeave;
    }

    public LeaveType getLeaveType() {
        return leaveType;
    }

    public void setLeaveType(LeaveType leaveType) {
        this.leaveType = leaveType;
    }

    public Employees getReplacement() {
        return replacement;
    }

    public void setReplacement(Employees replacement) {
        this.replacement = replacement;
    }

    public Employees getLmanager() {
        return lmanager;
    }

    public void setLmanager(Employees lmanager) {
        this.lmanager = lmanager;
    }

    public Employees getResponsible() {
        return responsible;
    }

    public void setResponsible(Employees responsible) {
        this.responsible = responsible;
    }
}

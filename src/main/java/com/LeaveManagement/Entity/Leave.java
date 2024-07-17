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
    private Boolean supervisorVisa;
    private Date visaDate;

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

    public Leave() {
    }

    public Leave(Long leaveId) {
        this.leaveId = leaveId;
    }

    public Leave(Long leaveId, Date startDate, Date endDate, Boolean supervisorVisa, Date visaDate, Employees employee,
                 AnnualLeave annualLeave, LeaveType leaveType, Employees replacement, Employees lmanager) {
        this.leaveId = leaveId;
        this.startDate = startDate;
        this.endDate = endDate;
        this.supervisorVisa = supervisorVisa;
        this.visaDate = visaDate;
        this.employee = employee;
        this.annualLeave = annualLeave;
        this.leaveType = leaveType;
        this.replacement = replacement;
        this.lmanager = lmanager;
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

    public Boolean getSupervisorVisa() {
        return supervisorVisa;
    }

    public void setSupervisorVisa(Boolean supervisorVisa) {
        this.supervisorVisa = supervisorVisa;
    }

    public Date getVisaDate() {
        return visaDate;
    }

    public void setVisaDate(Date visaDate) {
        this.visaDate = visaDate;
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
}

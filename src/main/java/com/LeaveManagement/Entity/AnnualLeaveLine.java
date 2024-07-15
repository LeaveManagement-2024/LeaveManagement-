package com.LeaveManagement.Entity;

import jakarta.persistence.*;
@Entity
@IdClass(AnnualLeaveLineId.class)
public class AnnualLeaveLine {
    @Id
    private Long idE;
    @Id
    private Long annualLeaveId;

    private int declaredDays;
    private int remainingDays;

    @ManyToOne
    @JoinColumn(name = "idE")
    private Employees employee;

    @ManyToOne
    @JoinColumn(name = "annualLeaveId")
    private AnnualLeave annualLeave;

    public AnnualLeaveLine() {
    }

    public AnnualLeaveLine(Long idE, Long annualLeaveId) {
        this.idE = idE;
        this.annualLeaveId = annualLeaveId;
    }

    public AnnualLeaveLine(Long idE, Long annualLeaveId, int declaredDays, int remainingDays, Employees employee, AnnualLeave annualLeave) {
        this.idE = idE;
        this.annualLeaveId = annualLeaveId;
        this.declaredDays = declaredDays;
        this.remainingDays = remainingDays;
        this.employee = employee;
        this.annualLeave = annualLeave;
    }

    public Long getIdE() {
        return idE;
    }

    public void setIdE(Long idE) {
        this.idE = idE;
    }

    public Long getAnnualLeaveId() {
        return annualLeaveId;
    }

    public void setAnnualLeaveId(Long annualLeaveId) {
        this.annualLeaveId = annualLeaveId;
    }

    public int getDeclaredDays() {
        return declaredDays;
    }

    public void setDeclaredDays(int declaredDays) {
        this.declaredDays = declaredDays;
    }

    public int getRemainingDays() {
        return remainingDays;
    }

    public void setRemainingDays(int remainingDays) {
        this.remainingDays = remainingDays;
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
}

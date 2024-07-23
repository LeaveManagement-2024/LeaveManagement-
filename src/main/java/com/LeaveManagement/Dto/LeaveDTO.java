package com.LeaveManagement.Dto;

import jakarta.persistence.Column;

import java.util.Date;

public class LeaveDTO {

    private Long leaveId;
    private Date startDate;
    private Date endDate;
    private Boolean remplecementVisa;
    private Date remplecementVisaDate;
    private Boolean responsibleVisa;
    private Date responsibleVisaDate;
    private Boolean managerVisa;
    private Date managerVisaDate;

    private Long employeeId;
    private Long annualLeaveId;
    private Long leaveTypeId;
    private Long replacementId;
    private Long lmanagerId;
    private Long responsible;

    public LeaveDTO() {
    }

    public LeaveDTO(Long leaveId, Date startDate, Date endDate, Boolean remplecementVisa, Date remplecementVisaDate, Boolean responsibleVisa, Date responsibleVisaDate, Boolean managerVisa, Date managerVisaDate, Long employeeId, Long annualLeaveId, Long leaveTypeId, Long replacementId, Long lmanagerId, Long responsible) {
        this.leaveId = leaveId;
        this.startDate = startDate;
        this.endDate = endDate;
        this.remplecementVisa = remplecementVisa;
        this.remplecementVisaDate = remplecementVisaDate;
        this.responsibleVisa = responsibleVisa;
        this.responsibleVisaDate = responsibleVisaDate;
        this.managerVisa = managerVisa;
        this.managerVisaDate = managerVisaDate;
        this.employeeId = employeeId;
        this.annualLeaveId = annualLeaveId;
        this.leaveTypeId = leaveTypeId;
        this.replacementId = replacementId;
        this.lmanagerId = lmanagerId;
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

    public Long getEmployeeId() {
        return employeeId;
    }

    public void setEmployeeId(Long employeeId) {
        this.employeeId = employeeId;
    }

    public Long getAnnualLeaveId() {
        return annualLeaveId;
    }

    public void setAnnualLeaveId(Long annualLeaveId) {
        this.annualLeaveId = annualLeaveId;
    }

    public Long getLeaveTypeId() {
        return leaveTypeId;
    }

    public void setLeaveTypeId(Long leaveTypeId) {
        this.leaveTypeId = leaveTypeId;
    }

    public Long getReplacementId() {
        return replacementId;
    }

    public void setReplacementId(Long replacementId) {
        this.replacementId = replacementId;
    }

    public Long getLmanagerId() {
        return lmanagerId;
    }

    public void setLmanagerId(Long lmanagerId) {
        this.lmanagerId = lmanagerId;
    }

    public Long getResponsible() {
        return responsible;
    }

    public void setResponsible(Long responsible) {
        this.responsible = responsible;
    }
}

package com.LeaveManagement.Dto;

import java.util.Date;

public class LeaveDTO {

    private Long leaveId;
    private Date startDate;
    private Date endDate;
    private Boolean  supervisorVisa;
    private Date visaDate;
    private Long employeeId;
    private Long annualLeaveId;
    private Long leaveTypeId;
    private Long replacementId;
    private Long lmanagerId;

    public LeaveDTO() {
    }

    public LeaveDTO(Long leaveId, Date startDate, Date endDate, Boolean supervisorVisa, Date visaDate,
                    Long employeeId, Long annualLeaveId, Long leaveTypeId, Long replacementId, Long lmanagerId) {
        this.leaveId = leaveId;
        this.startDate = startDate;
        this.endDate = endDate;
        this.supervisorVisa = supervisorVisa;
        this.visaDate = visaDate;
        this.employeeId = employeeId;
        this.annualLeaveId = annualLeaveId;
        this.leaveTypeId = leaveTypeId;
        this.replacementId = replacementId;
        this.lmanagerId = lmanagerId;
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
}

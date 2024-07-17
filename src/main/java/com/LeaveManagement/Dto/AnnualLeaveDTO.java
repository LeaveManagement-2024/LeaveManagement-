package com.LeaveManagement.Dto;

import java.util.Date;
import java.util.List;

public class AnnualLeaveDTO {
    private Long annualLeaveId;
    private Date startDate;
    private Date endDate;
    private String label;
    private String status;


    public AnnualLeaveDTO() {
    }

    public AnnualLeaveDTO(Long annualLeaveId, Date startDate, Date endDate, String label, String status) {
        this.annualLeaveId = annualLeaveId;
        this.startDate = startDate;
        this.endDate = endDate;
        this.label = label;
        this.status = status;

    }

    public Long getAnnualLeaveId() {
        return annualLeaveId;
    }

    public void setAnnualLeaveId(Long annualLeaveId) {
        this.annualLeaveId = annualLeaveId;
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

    public String getLabel() {
        return label;
    }

    public void setLabel(String label) {
        this.label = label;
    }

    public String getStatus() {
        return status;
    }

    public void setStatus(String status) {
        this.status = status;
    }
}

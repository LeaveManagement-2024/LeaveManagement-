package com.LeaveManagement.Entity;

import jakarta.persistence.*;

import java.util.List;
@Entity
public class AnnualLeave {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long annualLeaveId;
    private int year;
    @Column(columnDefinition = "NVARCHAR(255)")
    private String label;
    @Column(columnDefinition = "NVARCHAR(255)")
    private String status;

    @OneToMany(mappedBy = "annualLeave")
    private List<AnnualLeaveLine> annualLeaveLines;
    @OneToMany(mappedBy = "annualLeave")
    private List<Leave> leaves;

    public AnnualLeave(Long annualLeaveId, int year, String label, String status, List<AnnualLeaveLine> annualLeaveLines, List<Leave> leaves) {
        this.annualLeaveId = annualLeaveId;
        this.year = year;
        this.label = label;
        this.status = status;
        this.annualLeaveLines = annualLeaveLines;

        this.leaves = leaves;
    }

    public AnnualLeave() {
    }

    public Long getAnnualLeaveId() {
        return annualLeaveId;
    }

    public void setAnnualLeaveId(Long annualLeaveId) {
        this.annualLeaveId = annualLeaveId;
    }

    public int getYear() {
        return year;
    }

    public void setYear(int year) {
        this.year = year;
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

}

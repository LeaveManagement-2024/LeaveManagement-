package com.LeaveManagement.Entity;

import jakarta.persistence.*;

public class AnnualLeave {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long annualLeaveId;
    private int year;
    private String label;
    private String status;

    @OneToMany(mappedBy = "annualLeave")
    private List<AnnualLeaveLine> annualLeaveLines;

    @OneToMany(mappedBy = "annualLeave")
    private List<Absence> absences;

    @OneToMany(mappedBy = "annualLeave")
    private List<Leave> leaves;

}

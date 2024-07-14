package com.LeaveManagement.Entity;

import jakarta.persistence.*;
@Entity
@IdClass(AnnualLeaveLineId.class)
public class AnnualLeaveLine {
    @Id
    private Long employeeId;
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
}

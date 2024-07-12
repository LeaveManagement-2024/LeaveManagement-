package com.LeaveManagement.Entity;

import jakarta.persistence.*;

public class AnnualLeaveLine {
    @Id
    private Long employeeId;
    @Id
    private Long annualLeaveId;

    private int declaredDays;
    private int remainingDays;

    @ManyToOne
    private Employee employee;

    @ManyToOne
    private AnnualLeave annualLeave;
}

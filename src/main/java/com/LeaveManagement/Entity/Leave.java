package com.LeaveManagement.Entity;

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
    private String supervisorVisa;
    private Date visaDate;

    @ManyToOne
    @JoinColumn(name = "employeeId")
    private Employees employee;

    @ManyToOne
    @JoinColumn(name = "annualLeaveId")
    private AnnualLeave annualLeave;

    @ManyToOne
    @JoinColumn(name = "leaveTypeId")
    private LeaveType leaveType;

    @ManyToOne
    @JoinColumn(name = "replacementId")
    private Employees replacement;
}


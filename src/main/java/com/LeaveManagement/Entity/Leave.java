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
    private String supervisorVisa;
    private Date visaDate;

    @ManyToOne
    private Employees employee;

    @ManyToOne
    private AnnualLeave annualLeave;

    @ManyToOne
    private Employees replacement;


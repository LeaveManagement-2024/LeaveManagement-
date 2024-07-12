package com.LeaveManagement.Entity;

import jakarta.persistence.*;

import java.util.Date;

public class Absence {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long absenceId;
    private String status;
    private Date startDate;
    private Date endDate;

    @ManyToOne
    private Employees employee;

    @ManyToOne
    private AnnualLeave annualLeave;

}

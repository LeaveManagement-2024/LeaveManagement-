package com.LeaveManagement.Entity;
import jakarta.persistence.*;
import java.util.List;

@Entity
public class LeaveType {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long leaveTypeId;
    private String name;

    @OneToMany(mappedBy = "leaveType")
    private List<Leave> leaves;

}
package com.LeaveManagement.Service.impl;


import com.LeaveManagement.Entity.Employees;
import com.LeaveManagement.Repo.LeaveRepo;
import com.LeaveManagement.Repo.EmployeeRepo;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.time.LocalDate;
import java.util.List;

@Service
public class StatistiqueService {

    @Autowired
    private LeaveRepo leaveRepository;

    @Autowired
    private EmployeeRepo employeesRepository;

    public long getNewLeaveRequests() {
        return leaveRepository.countNewLeaveRequests();
    }

    public long getTotalEmployees() {
        return employeesRepository.count();
    }

    public long getUnconfirmedLeavesByResponsible() {
        return leaveRepository.countUnconfirmedLeavesByResponsible();
    }

    public long getUnconfirmedLeavesByManager() {
        return leaveRepository.countUnconfirmedLeavesByManager();
    }

    @Autowired
    private EmployeeRepo employeeRepo;

    public long countNewEmployees() {
        LocalDate oneYearAgo = LocalDate.now().minusMonths(12);
        return employeeRepo.findNewEmployees(oneYearAgo).size();
    }

    public long countOldEmployees() {
        LocalDate oneYearAgo = LocalDate.now().minusMonths(12);
        return employeeRepo.findOldEmployees(oneYearAgo).size();
    }
    public List<Employees> newEmployees() {
        LocalDate oneYearAgo = LocalDate.now().minusMonths(12);
        return employeeRepo.findNewEmployees(oneYearAgo);
    }

    public List<Employees> oldEmployees() {
        LocalDate oneYearAgo = LocalDate.now().minusMonths(12);
        return employeeRepo.findOldEmployees(oneYearAgo);
    }

}


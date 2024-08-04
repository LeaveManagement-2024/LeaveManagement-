package com.LeaveManagement.Service.impl;


import com.LeaveManagement.Repo.LeaveRepo;
import com.LeaveManagement.Repo.EmployeeRepo;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

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

}


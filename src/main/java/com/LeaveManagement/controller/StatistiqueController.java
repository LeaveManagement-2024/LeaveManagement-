package com.LeaveManagement.controller;

import com.LeaveManagement.Entity.Employees;
import com.LeaveManagement.Entity.Leave;
import com.LeaveManagement.Service.LeaveService;
import com.LeaveManagement.Service.impl.StatistiqueService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
@RequestMapping("/api/statistics")
public class StatistiqueController {

    @Autowired
    private StatistiqueService statistiqueService;
    @Autowired
    private LeaveService leaveService;

    @GetMapping("/newLeaveRequests")
    public long getNewLeaveRequests() {
        return statistiqueService.getNewLeaveRequests();
    }

    @GetMapping("/totalEmployees")
    public long getTotalEmployees() {
        return statistiqueService.getTotalEmployees();
    }

    @GetMapping("/unconfirmedLeavesByResponsible")
    public long getUnconfirmedLeavesByResponsible() {
        return statistiqueService.getUnconfirmedLeavesByResponsible();
    }

    @GetMapping("/unconfirmedLeavesByManager")
    public long getUnconfirmedLeavesByManager() {
        return statistiqueService.getUnconfirmedLeavesByManager();
    }

    @GetMapping("/leaves-today")
    public Long getNumberOfEmployeesOnLeaveToday() {
        return leaveService.getNumberOfEmployeesOnLeaveToday();
    }

    @GetMapping(path = "/getLeaveToday")
    public List<Leave> getLeaveToday() {
        return leaveService.getLeaveToday();
    }

    @GetMapping("/countNewEmp")
    public long countNewEmployees() {
        return statistiqueService.countNewEmployees();
    }

    @GetMapping("/countOldEmp")
    public long countOldEmployees() {
        return statistiqueService.countOldEmployees();
    }

    @GetMapping("/newEmp")
    public List<Employees> newEmployees() {
        return statistiqueService.newEmployees();
    }

    @GetMapping("/oldEmp")
    public List<Employees> oldEmployees() {
        return statistiqueService.oldEmployees();
    }

}

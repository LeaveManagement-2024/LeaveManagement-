package com.LeaveManagement.controller;

import com.LeaveManagement.Service.impl.StatistiqueService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/api/statistics")
public class StatistiqueController {

    @Autowired
    private StatistiqueService statistiqueService;

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
}

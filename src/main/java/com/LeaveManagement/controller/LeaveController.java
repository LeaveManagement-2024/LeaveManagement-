package com.LeaveManagement.controller;

import com.LeaveManagement.Dto.LeaveDTO;
import com.LeaveManagement.Entity.Leave;
import com.LeaveManagement.Entity.Projects;
import com.LeaveManagement.Service.LeaveService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@CrossOrigin("*")
@RequestMapping("leave")
public class LeaveController {

    @Autowired
    private LeaveService leaveService;

    @PostMapping(path = "/save")
    public Long saveLeave(@RequestBody LeaveDTO leaveDTO) {
        Long id = leaveService.addLeave(leaveDTO);
        return id;
    }

    @GetMapping(path = "/getAll")
    public List<Leave> getAllLeaves() {
        return leaveService.getAllLeaves();
    }

    @GetMapping(path = "/getById/{id}")
    public Leave getLeaveById(@PathVariable Long id) {
        return leaveService.getLeaveById(id);
    }

    @PutMapping(path = "/update/{id}")
    public ResponseEntity<String> updateLeave(@PathVariable Long id, @RequestBody LeaveDTO leaveDTO) {
        leaveService.updateLeave(id, leaveDTO);
        return ResponseEntity.ok("Leave updated successfully");
    }

    @DeleteMapping(path = "/delete/{id}")
    public ResponseEntity<String> deleteLeave(@PathVariable Long id) {
        leaveService.deleteLeave(id);
        return ResponseEntity.ok("Leave deleted successfully");
    }
    @GetMapping(path="/LeavesByEmpId/{Id}")
    public List<Leave> getLeavesByEmpId(@PathVariable Long Id) {
        return leaveService.getLeavesByEmpId(Id);
    }
}

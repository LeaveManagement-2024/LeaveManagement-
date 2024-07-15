package com.LeaveManagement.controller;

import com.LeaveManagement.Entity.AnnualLeave;
import com.LeaveManagement.Service.AnnualLeaveService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@CrossOrigin("*")
@RequestMapping("annualLeave")
public class AnnualLeaveController {

    @Autowired
    private AnnualLeaveService annualLeaveService;

    @PostMapping(path = "/save")
    public Long saveAnnualLeave(@RequestBody AnnualLeave annualLeave) {
        Long id = annualLeaveService.addAnnualLeave(annualLeave);
        return id;
    }

    @GetMapping(path = "/getAll")
    public List<AnnualLeave> getAllAnnualLeaves() {
        return annualLeaveService.getAllAnnualLeaves();
    }

    @GetMapping(path = "/getById/{id}")
    public AnnualLeave getAnnualLeaveById(@PathVariable Long id) {
        return annualLeaveService.GetAnnualLeaveById(id);
    }

    @PutMapping(path = "/update/{id}")
    public ResponseEntity<String> updateAnnualLeave(@PathVariable Long id, @RequestBody AnnualLeave annualLeave) {
        annualLeaveService.updateAnnualLeave(id, annualLeave);
        return ResponseEntity.ok("AnnualLeave updated successfully");
    }

    @DeleteMapping(path = "/delete/{id}")
    public ResponseEntity<String> deleteAnnualLeave(@PathVariable Long id) {
        annualLeaveService.deleteAnnualLeave(id);
        return ResponseEntity.ok("AnnualLeave deleted successfully");
    }
}

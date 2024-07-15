package com.LeaveManagement.controller;

import com.LeaveManagement.Entity.AnnualLeaveLine;
import com.LeaveManagement.Service.AnnualLeaveLineService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@CrossOrigin("*")
@RequestMapping("annualLeaveLine")
public class AnnualLeaveLineController {

    @Autowired
    private AnnualLeaveLineService annualLeaveLineService;

    @PostMapping(path = "/save")
    public Long saveAnnualLeaveLine(@RequestBody AnnualLeaveLine annualLeaveLine) {
        annualLeaveLineService.addAnnualLeaveLine(annualLeaveLine);
        return null;
    }

    @GetMapping(path = "/getAll")
    public List<AnnualLeaveLine> getAllAnnualLeaveLines() {
        return annualLeaveLineService.getAllAnnualLeaveLines();
    }

    @GetMapping(path = "/getById/{idE}/{idAl}")
    public AnnualLeaveLine getAnnualLeaveLineById(@PathVariable Long idE,Long idAl) {
        return annualLeaveLineService.getAnnualLeaveLineById(idE,idAl);
    }

    @PutMapping(path = "/update/{id}")
    public ResponseEntity<String> updateAnnualLeaveLine(@PathVariable Long idE,@PathVariable Long idal, @RequestBody AnnualLeaveLine annualLeaveLine) {
        annualLeaveLineService.updateAnnualLeaveLine(idE,idal, annualLeaveLine);
        return ResponseEntity.ok("AnnualLeaveLine updated successfully");
    }

    @DeleteMapping(path = "/delete/{id}")
    public ResponseEntity<String> deleteAnnualLeaveLine(@PathVariable Long idE,@PathVariable Long idal) {
        annualLeaveLineService.deleteAnnualLeaveLine(idE,idal);
        return ResponseEntity.ok("AnnualLeaveLine deleted successfully");
    }
}

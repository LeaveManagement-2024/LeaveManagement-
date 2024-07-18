package com.LeaveManagement.controller;

import com.LeaveManagement.Dto.AnnualLeaveLineDTO;
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
    public Long saveAnnualLeaveLine(@RequestBody AnnualLeaveLineDTO annualLeaveLineDTO) {
        annualLeaveLineService.addAnnualLeaveLine(annualLeaveLineDTO);
        return null;
    }

    @GetMapping(path = "/getAll")
    public List<AnnualLeaveLine> getAllAnnualLeaveLines() {
        return annualLeaveLineService.getAllAnnualLeaveLines();
    }

    @GetMapping(path = "/getById/{idE}/{idal}")
    public AnnualLeaveLine getAnnualLeaveLineById(@PathVariable Long idE,@PathVariable Long idal) {
        return annualLeaveLineService.getAnnualLeaveLineById(idE,idal);
    }

    @PutMapping(path = "/update/{idE}/{idal}")
    public ResponseEntity<String> updateAnnualLeaveLine(@PathVariable Long idE,@PathVariable Long idal, @RequestBody AnnualLeaveLineDTO annualLeaveLineDTO) {
        annualLeaveLineService.updateAnnualLeaveLine(idE,idal, annualLeaveLineDTO);
        return ResponseEntity.ok("AnnualLeaveLine updated successfully");
    }

    @DeleteMapping(path = "/delete/{idE}/{idal}")
    public ResponseEntity<String> deleteAnnualLeaveLine(@PathVariable Long idE,@PathVariable Long idal) {
        annualLeaveLineService.deleteAnnualLeaveLine(idE,idal);
        return ResponseEntity.ok("AnnualLeaveLine deleted successfully");
    }
}

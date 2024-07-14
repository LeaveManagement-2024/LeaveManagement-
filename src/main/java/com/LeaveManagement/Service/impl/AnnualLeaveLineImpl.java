package com.LeaveManagement.Service.impl;

import com.LeaveManagement.Entity.AnnualLeaveLine;
import com.LeaveManagement.Entity.AnnualLeaveLineId;
import com.LeaveManagement.Repo.AnnualLeaveLineRepo;
import com.LeaveManagement.Service.AnnualLeaveLineService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import java.util.List;

@Service
public class AnnualLeaveLineImpl implements AnnualLeaveLineService {
    @Autowired
    private AnnualLeaveLineRepo annualLeaveLineRepo;

    @Override
    public void addAnnualLeaveLine(AnnualLeaveLine annualLeaveLine) {
        annualLeaveLineRepo.save(annualLeaveLine);
    }

    @Override
    public List<AnnualLeaveLine> getAllAnnualLeaveLines() {
        return annualLeaveLineRepo.findAll();
    }

    @Override
    public AnnualLeaveLine getAnnualLeaveLineById(Long idE, Long annualLeaveId) {
        return annualLeaveLineRepo.findById(new AnnualLeaveLineId(idE, annualLeaveId))
                .orElseThrow(() -> new IllegalArgumentException("Annual Leave Line not found"));
    }

    @Override
    public void updateAnnualLeaveLine(Long idE, Long annualLeaveId, AnnualLeaveLine annualLeaveLine) {
        AnnualLeaveLine annualLeaveLineToUpdate = annualLeaveLineRepo.findById(new AnnualLeaveLineId(idE, annualLeaveId))
                .orElseThrow(() -> new IllegalArgumentException("Annual Leave Line not found"));
        annualLeaveLineToUpdate.setDeclaredDays(annualLeaveLine.getDeclaredDays());
        annualLeaveLineToUpdate.setRemainingDays(annualLeaveLine.getRemainingDays());
        annualLeaveLineRepo.save(annualLeaveLineToUpdate);
    }

    @Override
    public void deleteAnnualLeaveLine(Long idE, Long annualLeaveId) {
        annualLeaveLineRepo.deleteById(new AnnualLeaveLineId(idE, annualLeaveId));
    }
}

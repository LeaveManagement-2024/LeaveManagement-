package com.LeaveManagement.Service.impl;

import com.LeaveManagement.Entity.AnnualLeave;
import com.LeaveManagement.Repo.AnnualLeaveRepo;
import com.LeaveManagement.Service.AnnualLeaveService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class AnnualLeaveImpl implements AnnualLeaveService {
    @Autowired
    private AnnualLeaveRepo annualLeaveRepo;

    @Override
    public Long addAnnualLeave(AnnualLeave annualLeave) {
        annualLeaveRepo.save(annualLeave);
        return annualLeave.getAnnualLeaveId();
    }

    @Override
    public List<AnnualLeave> getAllAnnualLeaves() {
        return annualLeaveRepo.findAll();
    }

    @Override
    public AnnualLeave GetAnnualLeaveById(Long id) {
        return annualLeaveRepo.findById(id).orElseThrow(() -> new IllegalArgumentException("Annual Leave not found"));
    }

    @Override
    public void updateAnnualLeave(Long id, AnnualLeave annualLeave) {
        AnnualLeave annualLeaveToUpdate = annualLeaveRepo.findById(id).orElseThrow(() -> new IllegalArgumentException("Annual Leave not found"));
        annualLeaveToUpdate.setYear(annualLeave.getYear());
        annualLeaveToUpdate.setLabel(annualLeave.getLabel());
        annualLeaveToUpdate.setStatus(annualLeave.getStatus());
        annualLeaveRepo.save(annualLeaveToUpdate);
    }

    @Override
    public void deleteAnnualLeave(Long id) {
        annualLeaveRepo.deleteById(id);
    }
}
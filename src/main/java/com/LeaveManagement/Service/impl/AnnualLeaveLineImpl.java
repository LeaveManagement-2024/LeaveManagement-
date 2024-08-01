package com.LeaveManagement.Service.impl;

import com.LeaveManagement.Dto.AnnualLeaveLineDTO;
import com.LeaveManagement.Entity.*;
import com.LeaveManagement.Repo.AnnualLeaveLineRepo;
import com.LeaveManagement.Repo.AnnualLeaveRepo;
import com.LeaveManagement.Repo.EmployeeRepo;
import com.LeaveManagement.Service.AnnualLeaveLineService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.Collections;
import java.util.List;


@Service
public class AnnualLeaveLineImpl implements AnnualLeaveLineService {
    @Autowired
    private AnnualLeaveLineRepo annualLeaveLineRepo;

    @Autowired
    private EmployeeRepo  employeeRepo;
    @Autowired
    private AnnualLeaveRepo annualLeaveRepo;

    @Override
    public void addAnnualLeaveLine(AnnualLeaveLineDTO annualLeaveLineDTO) {
        Employees employee = employeeRepo.findById(annualLeaveLineDTO.getIdE()).orElseThrow(() -> new IllegalArgumentException("Employee not found"));
        AnnualLeave annualLeave=annualLeaveRepo.findById(annualLeaveLineDTO.getAnnualLeaveId()).orElseThrow(() -> new IllegalArgumentException("Annual Leave not found"));
        AnnualLeaveLine annualLeaveLine=new AnnualLeaveLine();
        annualLeaveLine.setDeclaredDays(annualLeaveLineDTO.getDeclaredDays());
        annualLeaveLine.setRemainingDays(annualLeaveLineDTO.getRemainingDays());
        annualLeaveLine.setEmployee(employee);
        annualLeaveLine.setAnnualLeave(annualLeave);
        annualLeaveLineRepo.save(annualLeaveLine);
        System.out.println("dsf");
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
    public void updateAnnualLeaveLine(Long idE, Long annualLeaveId, AnnualLeaveLineDTO annualLeaveLineDTO) {
        AnnualLeaveLine annualLeaveLineToUpdate = annualLeaveLineRepo.findById(new AnnualLeaveLineId(idE, annualLeaveId))
                .orElseThrow(() -> new IllegalArgumentException("Annual Leave Line not found"));
        Employees employee = employeeRepo.findById(annualLeaveLineDTO.getIdE()).orElseThrow(() -> new IllegalArgumentException("Employee not found"));
        AnnualLeave annualLeave=annualLeaveRepo.findById(annualLeaveLineDTO.getAnnualLeaveId()).orElseThrow(() -> new IllegalArgumentException("Annual Leave not found"));
        annualLeaveLineToUpdate.setDeclaredDays(annualLeaveLineDTO.getDeclaredDays());
        annualLeaveLineToUpdate.setRemainingDays(annualLeaveLineDTO.getRemainingDays());
        annualLeaveLineToUpdate.setEmployee(employee);
        annualLeaveLineToUpdate.setAnnualLeave(annualLeave);
        annualLeaveLineRepo.save(annualLeaveLineToUpdate);

    }

    @Override
    public void deleteAnnualLeaveLine(Long idE, Long annualLeaveId) {
        annualLeaveLineRepo.deleteById(new AnnualLeaveLineId(idE, annualLeaveId));
    }
    @Override
    public List<AnnualLeaveLine> getAnnualLeaveLineByEmpId(Long ide) {

        Employees employee = employeeRepo.findById(ide).orElse(null);

        if (employee != null) {

            return employee.getAnnualLeaveLines();
        } else {

            return Collections.emptyList();
        }
    }
}

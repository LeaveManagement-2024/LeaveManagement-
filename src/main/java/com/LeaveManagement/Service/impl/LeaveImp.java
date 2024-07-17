package com.LeaveManagement.Service.impl;

import com.LeaveManagement.Dto.LeaveDTO;
import com.LeaveManagement.Entity.*;
import com.LeaveManagement.Repo.*;
import com.LeaveManagement.Service.LeaveService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class LeaveImp implements LeaveService {

    @Autowired
    private LeaveRepo leaveRepo;

    @Autowired
    private EmployeeRepo employeeRepo;

    @Autowired
    private AnnualLeaveRepo annualLeaveRepo;

    @Autowired
    private LeaveTypeRepo leaveTypeRepo;

    @Override
    public Long addLeave(LeaveDTO leaveDTO) {
        Employees employee = employeeRepo.findById(leaveDTO.getEmployeeId()).orElse(null);
        AnnualLeave annualLeave = annualLeaveRepo.findById(leaveDTO.getAnnualLeaveId()).orElse(null);
        LeaveType leaveType = leaveTypeRepo.findById(leaveDTO.getLeaveTypeId()).orElse(null);
        Employees replacement = employeeRepo.findById(leaveDTO.getReplacementId()).orElse(null);
        Employees lmanager = employeeRepo.findById(leaveDTO.getLmanagerId()).orElse(null);
        Leave leave = new Leave();
        leave.setStartDate(leaveDTO.getStartDate());
        leave.setEndDate(leaveDTO.getEndDate());
        leave.setSupervisorVisa(leaveDTO.getSupervisorVisa());
        leave.setVisaDate(leaveDTO.getVisaDate());
        leave.setEmployee(employee);
        leave.setAnnualLeave(annualLeave);
        leave.setLeaveType(leaveType);
        leave.setReplacement(replacement);
        leave.setLmanager(lmanager);
        leaveRepo.save(leave);
        return leave.getLeaveId();
    }

    @Override
    public List<Leave> getAllLeaves() {
        return leaveRepo.findAll();
    }

    @Override
    public Leave getLeaveById(Long id) {
        return leaveRepo.findById(id).orElseThrow(() -> new IllegalArgumentException("Leave not found"));
    }

    @Override
    public void updateLeave(Long id, LeaveDTO leaveDTO) {
        Employees employee = employeeRepo.findById(leaveDTO.getEmployeeId()).orElse(null);
        AnnualLeave annualLeave = annualLeaveRepo.findById(leaveDTO.getAnnualLeaveId()).orElse(null);
        LeaveType leaveType = leaveTypeRepo.findById(leaveDTO.getLeaveTypeId()).orElse(null);
        Employees replacement = employeeRepo.findById(leaveDTO.getReplacementId()).orElse(null);
        Employees lmanager = employeeRepo.findById(leaveDTO.getLmanagerId()).orElse(null);
        Leave leaveToUpdate = leaveRepo.findById(id).orElseThrow(() -> new IllegalArgumentException("Leave not found"));
        leaveToUpdate.setStartDate(leaveDTO.getStartDate());
        leaveToUpdate.setEndDate(leaveDTO.getEndDate());
        leaveToUpdate.setSupervisorVisa(leaveDTO.getSupervisorVisa());
        leaveToUpdate.setVisaDate(leaveDTO.getVisaDate());
        leaveToUpdate.setEmployee(employee);
        leaveToUpdate.setAnnualLeave(annualLeave);
        leaveToUpdate.setLeaveType(leaveType);
        leaveToUpdate.setReplacement(replacement);
        leaveToUpdate.setLmanager(lmanager);
        leaveRepo.save(leaveToUpdate);
    }

    @Override
    public void deleteLeave(Long id) {
        leaveRepo.deleteById(id);
    }
}

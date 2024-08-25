package com.LeaveManagement.Service.impl;

import com.LeaveManagement.Dto.LeaveDTO;
import com.LeaveManagement.Entity.*;
import com.LeaveManagement.Repo.*;
import com.LeaveManagement.Service.LeaveService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.time.LocalDate;
import java.util.Collections;
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
        Employees responsible = employeeRepo.findById(leaveDTO.getResponsible()).orElse(null);
        Employees lmanager = employeeRepo.findById(leaveDTO.getLmanagerId()).orElse(null);
        Leave leave = new Leave();
        leave.setStartDate(leaveDTO.getStartDate());
        leave.setEndDate(leaveDTO.getEndDate());
        leave.setEmployee(employee);
        leave.setAnnualLeave(annualLeave);
        leave.setLeaveType(leaveType);
        leave.setReplacement(replacement);
        leave.setResponsible(responsible);
        leave.setLmanager(lmanager);
        leave.setManagerVisa("false");
        leave.setRemplecementVisa("false");
        leave.setResponsibleVisa("false");
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
        Employees responsible = employeeRepo.findById(leaveDTO.getResponsible()).orElse(null);
        Leave leaveToUpdate = leaveRepo.findById(id).orElseThrow(() -> new IllegalArgumentException("Leave not found"));
        leaveToUpdate.setStartDate(leaveDTO.getStartDate());
        leaveToUpdate.setEndDate(leaveDTO.getEndDate());
        leaveToUpdate.setRemplecementVisa("false");
        leaveToUpdate.setRemplecementVisaDate(leaveDTO.getRemplecementVisaDate());
        leaveToUpdate.setManagerVisa("false");
        leaveToUpdate.setManagerVisaDate(leaveDTO.getManagerVisaDate());
        leaveToUpdate.setResponsibleVisa("false");
        leaveToUpdate.setResponsibleVisaDate(leaveDTO.getResponsibleVisaDate());
        leaveToUpdate.setEmployee(employee);
        leaveToUpdate.setAnnualLeave(annualLeave);
        leaveToUpdate.setLeaveType(leaveType);
        leaveToUpdate.setReplacement(replacement);
        leaveToUpdate.setLmanager(lmanager);
        leaveToUpdate.setResponsible(responsible);
        leaveRepo.save(leaveToUpdate);
    }

    @Override
    public void deleteLeave(Long id) {
        leaveRepo.deleteById(id);
    }

    @Override
    public List<Leave> getLeavesByEmpId(Long ide) {

        Employees employee = employeeRepo.findById(ide).orElse(null);

        if (employee != null) {

            return employee.getLeaves();
        } else {

            return Collections.emptyList();
        }
    }
    public Long getNumberOfEmployeesOnLeaveToday() {
        LocalDate today = LocalDate.now();
        List<Leave> leavesToday = leaveRepo.findLeavesByDate(today);
        return leavesToday.stream().map(Leave::getEmployee).distinct().count();
    }
    public List<Leave> getLeaveToday() {
        LocalDate today = LocalDate.now();
        List<Leave> leavesToday = leaveRepo.findLeavesByDate(today);
        return leavesToday;
    }
    public Long getNumberOfEmployeesOnLeaveTomorrow() {
        LocalDate tomorrow = LocalDate.now().plusDays(1);
        List<Leave> leavestomorrow = leaveRepo.findLeavesByDate(tomorrow);
        return leavestomorrow.stream().map(Leave::getEmployee).distinct().count();
    }
    public List<Leave> getLeaveTomorrow() {
        LocalDate tomorrow = LocalDate.now().plusDays(1);
        List<Leave> leavestomorrow = leaveRepo.findLeavesByDate(tomorrow);
        return leavestomorrow;
    }
    public List<Leave> findEmployeesReturningToWorkTomorrow (){

        LocalDate yesterday = LocalDate.now().minusDays(1);

        List<Leave> leaveyes = leaveRepo.findEmployeesReturningToWorkTomorrow(yesterday);
        return  leaveyes;
    }
    public Long NumberfindEmployeesReturningToWorkTomorrow (){
        LocalDate yesterday = LocalDate.now().minusDays(1);
        List<Leave> leaveyes = leaveRepo.findEmployeesReturningToWorkTomorrow(yesterday);
        return leaveyes.stream().map(Leave::getEmployee).distinct().count();
    }

    public List<Leave> getLeavesById(Long id) {
        return leaveRepo.findLeavesById(id);
    }



}

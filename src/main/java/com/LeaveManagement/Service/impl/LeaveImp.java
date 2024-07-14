package com.LeaveManagement.Service.impl;
import com.LeaveManagement.Entity.Leave;
import com.LeaveManagement.Repo.LeaveRepo;
import com.LeaveManagement.Service.LeaveService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import java.util.List;
@Service
public class LeaveImp implements LeaveService{
    @Autowired
    private LeaveRepo leaveRepo;

    @Override
    public Long addLeave(Leave leave) {
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
    public void updateLeave(Long id, Leave leave) {
        Leave leaveToUpdate = leaveRepo.findById(id).orElseThrow(() -> new IllegalArgumentException("Leave not found"));
        leaveToUpdate.setStartDate(leave.getStartDate());
        leaveToUpdate.setEndDate(leave.getEndDate());
        leaveToUpdate.setSupervisorVisa(leave.getSupervisorVisa());
        leaveToUpdate.setVisaDate(leave.getVisaDate());
        leaveRepo.save(leaveToUpdate);
    }

    @Override
    public void deleteLeave(Long id) {
        leaveRepo.deleteById(id);
    }


    }





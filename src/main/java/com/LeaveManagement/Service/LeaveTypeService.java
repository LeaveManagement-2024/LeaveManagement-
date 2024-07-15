package com.LeaveManagement.Service;

import com.LeaveManagement.Entity.LeaveType;

import java.util.List;

public interface LeaveTypeService {
    Long addLeaveType(LeaveType leaveType);
    List<LeaveType> getAllLeaveTypes();
    LeaveType getLeaveTypeById(Long id);
    void updateLeaveType(Long id, LeaveType leaveType);
    void deleteLeaveType(Long id);
}

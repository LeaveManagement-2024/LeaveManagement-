package com.LeaveManagement.Service;

import com.LeaveManagement.Entity.Leave;
import java.util.List;

public interface LeaveService {
    Long addLeave(Leave leave);
    List<Leave> getAllLeaves();
    Leave getLeaveById(Long id);
    void updateLeave(Long id, Leave leave);
    void deleteLeave(Long id);
}

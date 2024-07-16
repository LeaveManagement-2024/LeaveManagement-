package com.LeaveManagement.Service;

import com.LeaveManagement.Dto.LeaveDTO;
import com.LeaveManagement.Entity.Leave;
import java.util.List;

public interface LeaveService {
    Long addLeave(LeaveDTO leave);
    List<Leave> getAllLeaves();
    Leave getLeaveById(Long id);
    void updateLeave(Long id, LeaveDTO leave);
    void deleteLeave(Long id);
}

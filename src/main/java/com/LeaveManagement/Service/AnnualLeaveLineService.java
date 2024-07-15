package com.LeaveManagement.Service;

import com.LeaveManagement.Entity.AnnualLeaveLine;
import java.util.List;
import java.util.Optional;

public interface AnnualLeaveLineService {
   Optional<AnnualLeaveLine> addAnnualLeaveLine(AnnualLeaveLine annualLeaveLine);
    List<AnnualLeaveLine> getAllAnnualLeaveLines();
    AnnualLeaveLine getAnnualLeaveLineById(Long idE, Long annualLeaveId);
    void updateAnnualLeaveLine(Long idE, Long annualLeaveId, AnnualLeaveLine annualLeaveLine);
    void deleteAnnualLeaveLine(Long idE, Long annualLeaveId);
}

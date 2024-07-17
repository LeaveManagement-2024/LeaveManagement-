package com.LeaveManagement.Service;

import com.LeaveManagement.Dto.AnnualLeaveDTO;
import com.LeaveManagement.Entity.AnnualLeave;


import java.util.List;

public interface AnnualLeaveService {
    Long addAnnualLeave(AnnualLeaveDTO annualLeave);
    public List<AnnualLeave> getAllAnnualLeaves();
    public AnnualLeave GetAnnualLeaveById(Long  id);
    void updateAnnualLeave(Long id, AnnualLeaveDTO annualLeave);
    void deleteAnnualLeave(Long id);

}

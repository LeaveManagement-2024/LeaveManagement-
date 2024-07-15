package com.LeaveManagement.Service;

import com.LeaveManagement.Entity.AnnualLeave;


import java.util.List;

public interface AnnualLeaveService {
    Long addAnnualLeave(AnnualLeave annualLeave);
    public List<AnnualLeave> getAllAnnualLeaves();
    public AnnualLeave GetAnnualLeaveById(Long  id);
    void updateAnnualLeave(Long id, AnnualLeave annualLeave);
    void deleteAnnualLeave(Long id);

}

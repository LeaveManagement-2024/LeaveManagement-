package com.LeaveManagement.Entity;

import java.io.Serializable;

public class AnnualLeaveLineId implements Serializable {
    private Long idE;
    private Long annualLeaveId;

    public AnnualLeaveLineId(Long idE, Long annualLeaveId) {
        this.idE = idE;
        this.annualLeaveId = annualLeaveId;
    }
}

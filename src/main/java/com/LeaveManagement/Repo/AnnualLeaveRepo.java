package com.LeaveManagement.Repo;

import com.LeaveManagement.Entity.AnnualLeave;
import org.springframework.data.jpa.repository.JpaRepository;

public interface AnnualLeaveRepo extends JpaRepository<AnnualLeave,Long> {
}

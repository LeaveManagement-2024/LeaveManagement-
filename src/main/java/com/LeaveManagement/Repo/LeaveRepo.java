package com.LeaveManagement.Repo;

import com.LeaveManagement.Entity.Leave;
import org.springframework.data.jpa.repository.JpaRepository;

public interface LeaveRepo extends JpaRepository<Leave,Long> {
}

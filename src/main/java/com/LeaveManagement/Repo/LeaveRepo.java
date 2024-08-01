package com.LeaveManagement.Repo;

import com.LeaveManagement.Entity.Leave;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

public interface LeaveRepo extends JpaRepository<Leave,Long> {
    @Query("SELECT COUNT(l) FROM Leave l WHERE l.startDate >= CURRENT_DATE")
    long countNewLeaveRequests();

    @Query("SELECT COUNT(l) FROM Leave l WHERE l.responsibleVisa = False")
    long countUnconfirmedLeavesByResponsible();

    @Query("SELECT COUNT(l) FROM Leave l WHERE l.managerVisa = False")
    long countUnconfirmedLeavesByManager();

}

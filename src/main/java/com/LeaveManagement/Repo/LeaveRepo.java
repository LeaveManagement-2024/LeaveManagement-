package com.LeaveManagement.Repo;

import com.LeaveManagement.Entity.Leave;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import java.time.LocalDate;
import java.util.List;

public interface LeaveRepo extends JpaRepository<Leave,Long> {
    @Query("SELECT COUNT(l) FROM Leave l WHERE l.startDate >= CURRENT_DATE")
    long countNewLeaveRequests();

    @Query("SELECT COUNT(l) FROM Leave l WHERE l.responsibleVisa = False")
    long countUnconfirmedLeavesByResponsible();

    @Query("SELECT COUNT(l) FROM Leave l WHERE l.managerVisa = False")
    long countUnconfirmedLeavesByManager();
    @Query("SELECT l FROM Leave l WHERE :currentDate BETWEEN l.startDate AND l.endDate")
    List<Leave> findLeavesByDate(LocalDate currentDate);


}

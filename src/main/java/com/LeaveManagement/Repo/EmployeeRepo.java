package com.LeaveManagement.Repo;

import com.LeaveManagement.Entity.Employees;
import com.LeaveManagement.Entity.User;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.config.EnableJpaRepositories;
import org.springframework.stereotype.Repository;

import java.util.Optional;

@EnableJpaRepositories
@Repository
public interface EmployeeRepo extends JpaRepository<Employees, Long> {

    Optional<Employees> findOneByEmailAndPassword(String email, String password);

    Employees findByEmail(String email);
}

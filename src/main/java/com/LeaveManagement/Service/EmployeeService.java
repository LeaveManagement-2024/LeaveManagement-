package com.LeaveManagement.Service;

import com.LeaveManagement.Entity.Employees;
import org.springframework.stereotype.Service;

import java.util.List;


public interface EmployeeService {

    Long addEmployee(Employees employee);
    public List<Employees> getAllEmployees();
    public Employees GetEmployeeById(Long  id);
    void updateEmployee(Long id, Employees employee);
    void deleteEmployee(Long id);


}

package com.LeaveManagement.Service;

import com.LeaveManagement.Dto.EmployeesDTO;
import com.LeaveManagement.Entity.Employees;

import java.util.List;


public interface EmployeeService {

    Long addEmployee(EmployeesDTO employeeDTO);
    public List<Employees> getAllEmployees();
    public Employees GetEmployeeById(Long  id);
    void updateEmployee(Long id, EmployeesDTO employeeDTO );
    void deleteEmployee(Long id);


}

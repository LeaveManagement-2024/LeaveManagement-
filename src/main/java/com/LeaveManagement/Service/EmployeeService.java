package com.LeaveManagement.Service;

import com.LeaveManagement.Dto.EmployeesDTO;
import com.LeaveManagement.Entity.Employees;

import java.io.IOException;
import java.util.List;


public interface EmployeeService {

    Long addEmployee(EmployeesDTO employeeDTO) throws IOException;
    public List<Employees> getAllEmployees();
    public Employees GetEmployeeById(Long  id);
    void updateEmployee(Long id, EmployeesDTO employeeDTO ) throws IOException;
    void deleteEmployee(Long id);


}

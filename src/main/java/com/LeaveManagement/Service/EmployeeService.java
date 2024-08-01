package com.LeaveManagement.Service;

import com.LeaveManagement.Dto.EmployeesDTO;
import com.LeaveManagement.Dto.LogInDTO;
import com.LeaveManagement.Entity.Employees;
import com.LeaveManagement.response.LogInResponse;

import java.io.IOException;
import java.util.List;


public interface EmployeeService {

    LogInResponse loginEmployee(LogInDTO logInDTO);
    Long addEmployee(EmployeesDTO employeeDTO) throws IOException;
    public List<Employees> getAllEmployees();
    public Employees GetEmployeeById(Long  id);
    void updateEmployee(Long id, EmployeesDTO employeeDTO ) throws IOException;
    void deleteEmployee(Long id);
    public Employees GetManagerByIdEmp(Long id);
    public Employees GetResponsibleByIdEmp(Long id);


    }

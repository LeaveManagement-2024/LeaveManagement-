package com.LeaveManagement.controller;

import com.LeaveManagement.Entity.Employees;
import com.LeaveManagement.Service.EmployeeService;
import com.LeaveManagement.Service.impl.EmployeeImp;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

public class AnnualLeaveController {
    @Autowired
    private EmployeeService employeeService;
    @Autowired
    private EmployeeImp employeeImp;

    @PostMapping(path = "/saveEmp")
    public  Long saveEmployee(@RequestBody Employees employees){

        Long id =employeeService.addEmployee(employees);
        return id;

    }
    @GetMapping(path="/getEmployee")
    public List<Employees> getAllEmployee(){
        return  employeeService.getAllEmployees();
    }

    @GetMapping(path="/getEmployeeById/{Id}")
    public Employees getEmployeeById(@PathVariable Long Id){
        return employeeService.GetEmployeeById(Id);
    }
    @PutMapping(path = "/updateEmp/{id}")
    public ResponseEntity<String> updateUser(@PathVariable Long id, @RequestBody Employees employee) {
        employeeService.updateEmployee(id,employee);
        return ResponseEntity.ok("Employee updated successfully");
    }

    @DeleteMapping(path = "/deleteEmp/{id}")
    public ResponseEntity<String> deleteEmployee(@PathVariable Long id) {
        employeeService.deleteEmployee(id);
        return ResponseEntity.ok("Employee deleted successfully");
    }


}



package com.LeaveManagement.controller;

import com.LeaveManagement.Entity.Employees;
import com.LeaveManagement.Service.EmployeeService;
import com.LeaveManagement.Service.impl.EmployeeImp;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@CrossOrigin("*")
@RequestMapping("employee")
public class EmployeeController {

    @Autowired
    private EmployeeService employeeService;
    @Autowired
    private EmployeeImp employeeImp;

    @PostMapping(path = "/save")
    public  Long saveEmployee(@RequestBody Employees employees){

        Long id =employeeService.addEmployee(employees);
        return id;

    }
    @GetMapping(path="/getAll")
    public List<Employees> getAllEmployee(){
        return  employeeService.getAllEmployees();
    }

    @GetMapping(path="/getById/{Id}")
    public Employees getEmployeeById(@PathVariable Long Id){
        return employeeService.GetEmployeeById(Id);
    }
    @PutMapping(path = "/update/{id}")
    public ResponseEntity<String> updateUser(@PathVariable Long id, @RequestBody Employees employee) {
        employeeService.updateEmployee(id,employee);
        return ResponseEntity.ok("Employee updated successfully");
    }

    @DeleteMapping(path = "/delete/{id}")
    public ResponseEntity<String> deleteEmployee(@PathVariable Long id) {
        employeeService.deleteEmployee(id);
        return ResponseEntity.ok("Employee deleted successfully");
    }


}

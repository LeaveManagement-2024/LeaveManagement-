package com.LeaveManagement.Service.impl;

import com.LeaveManagement.Entity.Employees;
import com.LeaveManagement.Repo.EmployeeRepo;
import com.LeaveManagement.Service.EmployeeService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;

import java.util.List;
@Service
public class EmployeeImp implements EmployeeService {
    @Autowired
    private EmployeeRepo employeeRep;


    @Autowired
    private PasswordEncoder passwordEncoder;
    @Override
    public Long addEmployee(Employees employee) {
       employee.setPassword(passwordEncoder.encode(employee.getPassword()));
       employeeRep.save(employee);
       return  employee.getIdE();


    }

    @Override
    public List<Employees> getAllEmployees() {
        return employeeRep.findAll();
    }

    @Override
    public Employees GetEmployeeById(Long id) {
        return employeeRep.findById(id).get();

    }

    @Override
    public void updateEmployee(Long id, Employees employee) {

        Employees employeesToUpdate = employeeRep.findById(id).orElseThrow(() ->new IllegalArgumentException("Employee not found"));
        employeesToUpdate.setFirstNameFr(employee.getFirstNameFr());
        employeesToUpdate.setFirstNameAr(employee.getFirstNameAr());
        employeesToUpdate.setLastNameFr(employee.getLastNameFr());
        employeesToUpdate.setLastNameAr(employee.getLastNameAr());
        employeesToUpdate.setEmail(employee.getEmail());
        employeesToUpdate.setPhone(employee.getPhone());
        employeesToUpdate.setPpr(employee.getPpr());
        employeesToUpdate.setCin(employee.getCin());
        employeesToUpdate.setAddressFr(employee.getAddressFr());
        employeesToUpdate.setAddressAr(employee.getAddressAr());
        employeesToUpdate.setHireDate(employee.getHireDate());
        employeesToUpdate.setWorkLocation(employee.getWorkLocation());
        employeesToUpdate.setImage(employee.getImage());
    }

    @Override
    public void deleteEmployee(Long id) {
        employeeRep.deleteById(id);

    }
}

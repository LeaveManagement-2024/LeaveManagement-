package com.LeaveManagement.Service.impl;

import com.LeaveManagement.Dto.EmployeesDTO;
import com.LeaveManagement.Entity.*;
import com.LeaveManagement.Repo.*;
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
    private PostsRepo postsRepo;
    @Autowired
    private ProfileRepo profileRepo;
    @Autowired
    private GradesRepo gradesRepo;
    @Autowired
    private FiliereRepo filiereRepo;


    @Autowired
    private PasswordEncoder passwordEncoder;
    @Override
    public Long addEmployee(EmployeesDTO employeeDTO) {
        Posts post = postsRepo.findById(employeeDTO.getPostId()).orElse(null);
        Grades grade = gradesRepo.findById(employeeDTO.getGradeId()).orElse(null);
        Profiles profile = profileRepo.findById(employeeDTO.getProfileId()).orElse(null);
        Employees manager=employeeRep.findById(employeeDTO.getManagerId()).orElse(null);
        Filiere filiere= filiereRepo.findById(employeeDTO.getFiliereId()).orElse(null);
        Employees employee = new Employees();
        employee.setFirstNameFr(employeeDTO.getFirstNameFr());
        employee.setFirstNameAr(employeeDTO.getFirstNameAr());
        employee.setLastNameFr(employeeDTO.getLastNameFr());
        employee.setLastNameAr(employeeDTO.getLastNameAr());
        employee.setEmail(employeeDTO.getEmail());
        employee.setPassword(passwordEncoder.encode(employeeDTO.getPassword()));
        employee.setPhone(employeeDTO.getPhone());
        employee.setPpr(employeeDTO.getPpr());
        employee.setCin(employeeDTO.getCin());
        employee.setAddressFr(employeeDTO.getAddressFr());
        employee.setAddressAr(employeeDTO.getAddressAr());
        employee.setHireDate(employeeDTO.getHireDate());
        employee.setWorkLocationFr(employeeDTO.getWorkLocationFr());
        employee.setWorkLocationAr(employeeDTO.getWorkLocationAr());
        employee.setImage(employeeDTO.getImage());
        employee.setGrade(grade);
        employee.setPost(post);
        employee.setProfile(profile);
        employee.setManager(manager);
        employee.setFiliere(filiere);
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
    public void updateEmployee(Long id, EmployeesDTO employeeDTO) {
        Posts post = postsRepo.findById(employeeDTO.getPostId()).orElse(null);
        Grades grade = gradesRepo.findById(employeeDTO.getGradeId()).orElse(null);
        Profiles profile = profileRepo.findById(employeeDTO.getProfileId()).orElse(null);
        Filiere filiere= filiereRepo.findById(employeeDTO.getFiliereId()).orElse(null);
        Employees manager=employeeRep.findById(employeeDTO.getManagerId()).orElse(null);
        Employees employeesToUpdate = employeeRep.findById(id).orElseThrow(() ->new IllegalArgumentException("Employee not found"));
        employeesToUpdate.setFirstNameFr(employeeDTO.getFirstNameFr());
        employeesToUpdate.setFirstNameAr(employeeDTO.getFirstNameAr());
        employeesToUpdate.setLastNameFr(employeeDTO.getLastNameFr());
        employeesToUpdate.setLastNameAr(employeeDTO.getLastNameAr());
        employeesToUpdate.setEmail(employeeDTO.getEmail());
        employeesToUpdate.setPhone(employeeDTO.getPhone());
        employeesToUpdate.setPpr(employeeDTO.getPpr());
        employeesToUpdate.setCin(employeeDTO.getCin());
        employeesToUpdate.setAddressFr(employeeDTO.getAddressFr());
        employeesToUpdate.setAddressAr(employeeDTO.getAddressAr());
        employeesToUpdate.setHireDate(employeeDTO.getHireDate());
        employeesToUpdate.setWorkLocationFr(employeeDTO.getWorkLocationFr());
        employeesToUpdate.setWorkLocationAr(employeeDTO.getWorkLocationAr());
        employeesToUpdate.setImage(employeeDTO.getImage());
        employeesToUpdate.setManager(manager);
        employeesToUpdate.setProfile(profile);
        employeesToUpdate.setGrade(grade);
        employeesToUpdate.setPost(post);
        employeesToUpdate.setFiliere(filiere);
        employeeRep.save(employeesToUpdate);
    }

    @Override
    public void deleteEmployee(Long id) {
        employeeRep.deleteById(id);

    }
}

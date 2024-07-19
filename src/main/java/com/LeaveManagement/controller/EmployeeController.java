package com.LeaveManagement.controller;

import com.LeaveManagement.Dto.EmployeesDTO;
import com.LeaveManagement.Entity.Employees;
import com.LeaveManagement.Service.EmployeeService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.multipart.MultipartFile;

import java.io.IOException;
import java.time.LocalDate;
import java.util.List;

@RestController
@CrossOrigin("*")
@RequestMapping("employee")
public class EmployeeController {

    @Autowired
    private EmployeeService employeeService;

    @PostMapping(path = "/save", consumes = {"multipart/form-data"})
    public Long saveEmployee(
            @RequestParam("firstNameFr") String firstNameFr,
            @RequestParam("firstNameAr") String firstNameAr,
            @RequestParam("lastNameFr") String lastNameFr,
            @RequestParam("lastNameAr") String lastNameAr,
            @RequestParam("email") String email,
            @RequestParam("password") String password,
            @RequestParam("phone") String phone,
            @RequestParam("ppr") String ppr,
            @RequestParam("cin") String cin,
            @RequestParam("addressFr") String addressFr,
            @RequestParam("addressAr") String addressAr,
            @RequestParam("hireDate") String hireDate, // Format: "yyyy-MM-dd"
            @RequestParam("workLocationFr") String workLocationFr,
            @RequestParam("workLocationAr") String workLocationAr,
            @RequestParam("image") MultipartFile image,
            @RequestParam("postId") Long postId,
            @RequestParam("gradeId") Long gradeId,
            @RequestParam("profileId") Long profileId,
            @RequestParam("managerId") Long managerId,
            @RequestParam("filiereId") Long filiereId) throws IOException {

        EmployeesDTO employeesDTO = new EmployeesDTO();
        employeesDTO.setFirstNameFr(firstNameFr);
        employeesDTO.setFirstNameAr(firstNameAr);
        employeesDTO.setLastNameFr(lastNameFr);
        employeesDTO.setLastNameAr(lastNameAr);
        employeesDTO.setEmail(email);
        employeesDTO.setPassword(password);
        employeesDTO.setPhone(phone);
        employeesDTO.setPpr(ppr);
        employeesDTO.setCin(cin);
        employeesDTO.setAddressFr(addressFr);
        employeesDTO.setAddressAr(addressAr);
        employeesDTO.setHireDate(LocalDate.parse(hireDate));
        employeesDTO.setWorkLocationFr(workLocationFr);
        employeesDTO.setWorkLocationAr(workLocationAr);
        employeesDTO.setImage(image);
        employeesDTO.setPostId(postId);
        employeesDTO.setGradeId(gradeId);
        employeesDTO.setProfileId(profileId);
        employeesDTO.setManagerId(managerId);
        employeesDTO.setFiliereId(filiereId);

        Long id = employeeService.addEmployee(employeesDTO);
        return id;
    }

    @GetMapping(path="/getAll")
    public List<Employees> getAllEmployee() {
        return employeeService.getAllEmployees();
    }

    @GetMapping(path="/getById/{Id}")
    public Employees getEmployeeById(@PathVariable Long Id) {
        return employeeService.GetEmployeeById(Id);
    }

    @PutMapping(path = "/update/{id}", consumes = {"multipart/form-data"})
    public ResponseEntity<String> updateUser(
            @PathVariable Long id,
            @RequestParam("firstNameFr") String firstNameFr,
            @RequestParam("firstNameAr") String firstNameAr,
            @RequestParam("lastNameFr") String lastNameFr,
            @RequestParam("lastNameAr") String lastNameAr,
            @RequestParam("email") String email,
            @RequestParam("phone") String phone,
            @RequestParam("ppr") String ppr,
            @RequestParam("cin") String cin,
            @RequestParam("addressFr") String addressFr,
            @RequestParam("addressAr") String addressAr,
            @RequestParam("hireDate") String hireDate, // Format: "yyyy-MM-dd"
            @RequestParam("workLocationFr") String workLocationFr,
            @RequestParam("workLocationAr") String workLocationAr,
            @RequestParam("image") MultipartFile image,
            @RequestParam("postId") Long postId,
            @RequestParam("gradeId") Long gradeId,
            @RequestParam("profileId") Long profileId,
            @RequestParam("managerId") Long managerId,
            @RequestParam("filiereId") Long filiereId) throws IOException {

        EmployeesDTO employeesDTO = new EmployeesDTO();
        employeesDTO.setFirstNameFr(firstNameFr);
        employeesDTO.setFirstNameAr(firstNameAr);
        employeesDTO.setLastNameFr(lastNameFr);
        employeesDTO.setLastNameAr(lastNameAr);
        employeesDTO.setEmail(email);
        employeesDTO.setPhone(phone);
        employeesDTO.setPpr(ppr);
        employeesDTO.setCin(cin);
        employeesDTO.setAddressFr(addressFr);
        employeesDTO.setAddressAr(addressAr);
        employeesDTO.setHireDate(LocalDate.parse(hireDate));
        employeesDTO.setWorkLocationFr(workLocationFr);
        employeesDTO.setWorkLocationAr(workLocationAr);
        employeesDTO.setImage(image);
        employeesDTO.setPostId(postId);
        employeesDTO.setGradeId(gradeId);
        employeesDTO.setProfileId(profileId);
        employeesDTO.setManagerId(managerId);
        employeesDTO.setFiliereId(filiereId);

        employeeService.updateEmployee(id, employeesDTO);
        return ResponseEntity.ok("Employee updated successfully");
    }
    @DeleteMapping(path = "/delete/{id}")
    public ResponseEntity<String> deleteEmployee(@PathVariable Long id) {
        employeeService.deleteEmployee(id);
        return ResponseEntity.ok("Employee deleted successfully");
    }
}

package com.LeaveManagement.controller;

import com.LeaveManagement.Dto.EmployeesDTO;
import com.LeaveManagement.Dto.LogInDTO;
import com.LeaveManagement.Dto.UpdatePassword;
import com.LeaveManagement.Entity.Employees;
import com.LeaveManagement.Entity.Filiere;
import com.LeaveManagement.Entity.Leave;
import com.LeaveManagement.Service.EmployeeService;
import com.LeaveManagement.response.LogInResponse;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
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


    @PostMapping(path="/login")
    public ResponseEntity<?> loginUser(@RequestBody LogInDTO logInDTO) {
        LogInResponse logInResponse = employeeService.loginEmployee(logInDTO);
        return ResponseEntity.ok(logInResponse);
    }

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
            @RequestParam(value = "image",required = false) MultipartFile image,
            @RequestParam("postId") Long postId,
            @RequestParam("gradeId") Long gradeId,
            @RequestParam("profileId") Long profileId,
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

        employeesDTO.setFiliereId(filiereId);

        Long id  = employeeService.addEmployee(employeesDTO);
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
    @GetMapping(path="/getFiliere/{Id}")
    public Filiere getFiliere(@PathVariable Long Id) {
        return employeeService.getFiliereByIdEmployee(Id);
    }
    @PutMapping(path = "/update/{id}", consumes = {"multipart/form-data"})
    public ResponseEntity<String> updateUser(
            @PathVariable Long id,
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
            @RequestParam(value = "image",required = false) MultipartFile image,
            @RequestParam("postId") Long postId,
            @RequestParam("gradeId") Long gradeId,
            @RequestParam("profileId") Long profileId,
            @RequestParam(value = "filiereId",required = false) Long filiereId) throws IOException {

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
        employeesDTO.setFiliereId(filiereId);
        employeeService.updateEmployee(id, employeesDTO);
        return ResponseEntity.ok("Employee updated successfully");
    }
    @DeleteMapping(path = "/delete/{id}")
    public ResponseEntity<String> deleteEmployee(@PathVariable Long id) {
        employeeService.deleteEmployee(id);
        return ResponseEntity.ok("Employee deleted successfully");
    }
    @PostMapping(path="/updatePassword/{id}")
    public ResponseEntity<String> updatePassword(@PathVariable Long id,@RequestBody UpdatePassword updatePassword) {
        try {
            employeeService.updatePassword(id, updatePassword);
            return ResponseEntity.ok("تم تحديث كلمة المرور بنجاح");
        } catch (IllegalArgumentException e) {
            return ResponseEntity.badRequest().body(e.getMessage());
        } catch (Exception e) {
            return ResponseEntity.status(500).body("Une erreur est survenue");
        }
    }



    @PostMapping("/image/{id}")
    public ResponseEntity<String> updateImage(
            @PathVariable Long id,
            @RequestParam("image") MultipartFile imageFile) {

        try {
            // Crée un DTO pour transporter l'image
            EmployeesDTO employeeDTO = new EmployeesDTO();
            employeeDTO.setImage(imageFile);

            // Appelle le service pour mettre à jour l'image
            employeeService.updateImage(id, employeeDTO);
            return ResponseEntity.ok("Image mise à jour avec succès");

        } catch (IOException e) {
            return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).body("Erreur lors de la mise à jour de l'image");
        } catch (IllegalArgumentException e) {
            return ResponseEntity.status(HttpStatus.NOT_FOUND).body(e.getMessage());
        } catch (Exception e) {
            return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).body("Une erreur est survenue");
        }
    }
    @GetMapping(path="/AllLeaveE/{Id}")
    public List<Leave>AllLeaveE(@PathVariable Long Id) {
        return employeeService.AllLeaveE(Id);
    }
    @GetMapping(path="/ConfermedLeaveE/{Id}")
    public List<Leave>ConfermedLeaveE(@PathVariable Long Id) {
        return employeeService.ConfermedLeaveE(Id);
    }
    @GetMapping(path="/getLeavesToConfirm/{Id}")
    public List<Leave>getLeavesToConfirm(@PathVariable Long Id) {
        return employeeService.getLeavesToConfirm(Id);
    }
    @GetMapping(path="/UnconfermedLeaveE/{Id}")
    public List<Leave>UnconfermedLeaveE(@PathVariable Long Id) {
        return employeeService.UnconfermedLeaveE(Id);
    }
    @GetMapping(path="/UnconfermedLeaveByManagerE/{Id}")
    public List<Leave>UnconfermedLeaveByManagerE(@PathVariable Long Id) {
        return employeeService.UnconfermedLeaveByManagerE(Id);
    }
    @GetMapping(path="/UnconfermedLeaveByResponsibleE/{Id}")
    public List<Leave>UnconfermedLeaveByResponsibleE(@PathVariable Long Id) {
        return employeeService.UnconfermedLeaveByResponsibleE(Id);
    }
    @GetMapping(path="/UnconfermedLeaveByRemplacmentE/{Id}")
    public List<Leave>UnconfermedLeaveByRemplacmentE(@PathVariable Long Id) {
        return employeeService.UnconfermedLeaveByRemplacmentE(Id);
    }


}
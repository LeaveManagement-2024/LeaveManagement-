package com.LeaveManagement.Service.impl;

import com.LeaveManagement.Dto.EmployeesDTO;
import com.LeaveManagement.Dto.LogInDTO;
import com.LeaveManagement.Entity.*;
import com.LeaveManagement.Repo.*;
import com.LeaveManagement.Service.EmployeeService;
import com.LeaveManagement.response.LogInResponse;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;
import org.springframework.util.StringUtils;
import org.springframework.web.multipart.MultipartFile;

import java.io.IOException;
import java.nio.file.Files;
import java.nio.file.Path;
import java.nio.file.Paths;
import java.util.List;
import java.util.Optional;

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
    private final String storageDirectoryPath = Paths.get("uploaded-images").toAbsolutePath().toString();
    String baseUrl = "http://localhost:8093/uploaded-images/";


    @Override
    public LogInResponse loginEmployee(LogInDTO logInDTO) {
        String msg ="";
        Employees user1 = employeeRep.findByEmail(logInDTO.getEmail());
        if (user1 != null) {
            String password = logInDTO.getPassword();
            String encodedPassword = user1.getPassword();
            Boolean isPwdRight = passwordEncoder.matches(password, encodedPassword);
            if (isPwdRight) {
                Optional<Employees> employee = employeeRep.findOneByEmailAndPassword(logInDTO.getEmail(), encodedPassword);
                if (employee.isPresent()) {
                    return new LogInResponse("login Success",true,user1.getIdE());
                }else {
                    return new LogInResponse("login Failed",false,null);
                }
            }else {
                return new LogInResponse("Password not match",false,null);
            }
        }else {
            return new LogInResponse("Email Not Exist",false,null);
        }
    }



    @Override
    public Long addEmployee(EmployeesDTO employeeDTO) throws IOException {
        Posts post = postsRepo.findById(employeeDTO.getPostId()).orElse(null);
        Grades grade = gradesRepo.findById(employeeDTO.getGradeId()).orElse(null);
        Profiles profile = profileRepo.findById(employeeDTO.getProfileId()).orElse(null);
        Employees manager=employeeRep.findById(employeeDTO.getManagerId()).orElse(null);
        Filiere filiere= filiereRepo.findById(employeeDTO.getFiliereId()).orElse(null);
        Employees responsible =employeeRep.findById(employeeDTO.getResponsibleId()).orElse(null);
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
        MultipartFile file = employeeDTO.getImage();

        if (file != null && !file.isEmpty()) {
            String filename = StringUtils.cleanPath(file.getOriginalFilename());
            Path storageDirectory = Paths.get(storageDirectoryPath);
            if (!Files.exists(storageDirectory)) {
                Files.createDirectories(storageDirectory);
            }
            Path destinationPath = storageDirectory.resolve(Path.of(filename));
            file.transferTo(destinationPath);
            employee.setImage(baseUrl + filename);
        }
        employee.setGrade(grade);
        employee.setPost(post);
        employee.setProfile(profile);
        employee.setManager(manager);
        employee.setResponsible(responsible);
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
    public void updateEmployee(Long id, EmployeesDTO employeeDTO) throws IOException {
        Posts post = postsRepo.findById(employeeDTO.getPostId()).orElse(null);
        Grades grade = gradesRepo.findById(employeeDTO.getGradeId()).orElse(null);
        Profiles profile = profileRepo.findById(employeeDTO.getProfileId()).orElse(null);
        Filiere filiere= filiereRepo.findById(employeeDTO.getFiliereId()).orElse(null);
        Employees manager=employeeRep.findById(employeeDTO.getManagerId()).orElse(null);
        Employees responsible =employeeRep.findById(employeeDTO.getResponsibleId()).orElse(null);
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
        MultipartFile file = employeeDTO.getImage();
        if (file != null && !file.isEmpty()) {
            String filename = StringUtils.cleanPath(file.getOriginalFilename());
            Path storageDirectory = Paths.get(storageDirectoryPath);
            if (!Files.exists(storageDirectory)) {
                Files.createDirectories(storageDirectory);
            }            Path destinationPath = storageDirectory.resolve(Path.of(filename));
            file.transferTo(destinationPath);
            employeesToUpdate.setImage(baseUrl + filename);
        }
        employeesToUpdate.setManager(manager);
        employeesToUpdate.setResponsible(responsible);
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

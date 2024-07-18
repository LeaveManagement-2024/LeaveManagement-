package com.LeaveManagement.controller;

import com.LeaveManagement.Entity.Departement;
import com.LeaveManagement.Entity.Grades;
import com.LeaveManagement.Service.DepartementService;
import com.LeaveManagement.Service.GradeService;
import com.LeaveManagement.Service.impl.DepartementImp;
import com.LeaveManagement.Service.impl.GradesImp;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@CrossOrigin("*")
@RequestMapping("departments")
public class DepartmentController {
    @Autowired
    private DepartementService departementService;
    @PostMapping(path = "/save")
    public  Long saveDepartment(@RequestBody Departement departement){

        Long id =departementService.addDepartement(departement);
        return id;

    }
    @GetMapping(path="/getAll")
    public List<Departement> getAllDepartments(){
        return  departementService.getAllDepartements();
    }

    @GetMapping(path="/getById/{Id}")
    public Departement getDepartmentById(@PathVariable Long Id){
        return departementService.GetDepartementById(Id);
    }

    @PutMapping(path = "/update/{id}")
    public ResponseEntity<String> updateDepartment(@PathVariable Long id, @RequestBody Departement departement) {
        departementService.updateDepartement(id,departement);
        return ResponseEntity.ok("Grade updated successfully");
    }

    @DeleteMapping(path = "/delete/{id}")
    public ResponseEntity<String> deleteDepartment(@PathVariable Long id) {
        departementService.deleteDepartement(id);
        return ResponseEntity.ok("Grade deleted successfully");
    }
}

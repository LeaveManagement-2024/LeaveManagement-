package com.LeaveManagement.controller;

import com.LeaveManagement.Entity.Grades;
import com.LeaveManagement.Service.GradeService;
import com.LeaveManagement.Service.impl.GradesImp;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;
@RestController
@CrossOrigin("*")
@RequestMapping("grades")
public class GradesController {
    @Autowired
    private GradeService gradesService;
    @Autowired
    private GradesImp gradesImp;

    @PostMapping(path = "/saveGrades")
    public  Long saveGrades(@RequestBody Grades grades){

        Long id =gradesService.addGrade(grades);
        return id;

    }
    @GetMapping(path="/getGrades")
    public List<Grades> getAllGrades(){
        return  gradesService.getAllGrades();
    }

    @GetMapping(path="/getGradeById/{Id}")
    public Grades getGradesById(@PathVariable Long Id){
        return gradesService.GetGradesById(Id);
    }

    @PutMapping(path = "/updateGrade/{id}")
    public ResponseEntity<String> updateUser(@PathVariable Long id, @RequestBody Grades grades) {
       gradesService.updateGrades(id,grades);
        return ResponseEntity.ok("Grade updated successfully");
    }

    @DeleteMapping(path = "/deleteGrade/{id}")
    public ResponseEntity<String> deleteGrades(@PathVariable Long id) {
       gradesService.deleteGrades(id);
        return ResponseEntity.ok("Grade deleted successfully");
    }


}



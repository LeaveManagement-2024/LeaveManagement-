package com.LeaveManagement.Service.impl;

import com.LeaveManagement.Entity.Grades;
import com.LeaveManagement.Repo.EmployeeRepo;
import com.LeaveManagement.Repo.GradesRepo;
import com.LeaveManagement.Service.GradeService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class GradesImp implements GradeService {

    @Autowired
    private GradesRepo gradesRepo;



    @Override
    public Long addGrade(Grades grade) {

        gradesRepo.save(grade);
        return grade.getIdGrade();
    }

    @Override
    public List<Grades> getAllGrades() {
        return gradesRepo.findAll();
    }

    @Override
    public Grades GetGradesById(Long id) {
        return gradesRepo.findById(id).get();
    }

    @Override
    public void updateGrades(Long id, Grades grades) {
        Grades gradesToUpdate = gradesRepo.findById(id).orElseThrow(()->new IllegalArgumentException("Grade not found"));
    }

    @Override
    public void deleteGrades(Long id) {

    }
}

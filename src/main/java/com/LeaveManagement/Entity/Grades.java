package com.LeaveManagement.Entity;

import jakarta.persistence.*;

@Entity
@Table(name = "Grades")
public class Grades {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long IdGrade;

    private String gradeNameEn;
    private String gradeNameAr;

    public Long getIdGrade() {
        return IdGrade;
    }

    public void setIdGrade(Long idGrade) {
        IdGrade = idGrade;
    }

    public String getGradeNameEn() {
        return gradeNameEn;
    }

    public void setGradeNameEn(String gradeNameEn) {
        this.gradeNameEn = gradeNameEn;
    }

    public String getGradeNameAr() {
        return gradeNameAr;
    }

    public void setGradeNameAr(String gradeNameAr) {
        this.gradeNameAr = gradeNameAr;
    }
}

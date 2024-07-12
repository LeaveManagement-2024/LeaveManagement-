package com.LeaveManagement.Service;

import com.LeaveManagement.Entity.Grades;
import com.LeaveManagement.Entity.Profiles;

import java.util.List;

public interface GradeService {
    Long addGrade(Grades grade);

    public List<Grades> getAllGrades();
    public Grades GetGradesById(Long  id);
    void updateGrades(Long id, Grades grades);
    void deleteGrades(Long id);

    interface ProfileService {
        Long addProfile(Profiles profile);
        public List<Profiles> getAllProfile();
        public Profiles GetProfileById(Long  id);
        void updateProfile(Long id, Profiles profile);
        void deleteProfile(Long id);
    }
}

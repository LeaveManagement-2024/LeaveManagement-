package com.LeaveManagement.Service.impl;

import com.LeaveManagement.Entity.Departement;
import com.LeaveManagement.Entity.Grades;
import com.LeaveManagement.Repo.DepartementRepo;
import com.LeaveManagement.Repo.GradesRepo;
import com.LeaveManagement.Service.DepartementService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
@Service
public class DepartementImp implements DepartementService {
    @Autowired
    private DepartementRepo departementRepo;

    @Override
    public Long addDepartement(Departement departement) {
        departementRepo.save(departement);
        return departement.getIdDepartement();
    }

    @Override
    public List<Departement> getAllDepartements() {
        return departementRepo.findAll();
    }

    @Override
    public Departement GetDepartementById(Long id) {
        return departementRepo.findById(id).get();
    }

    @Override
    public void updateDepartement(Long id, Departement departement) {
        Departement departementToUpdate = departementRepo.findById(id).orElseThrow(()->new IllegalArgumentException("Departement not found"));
       departementToUpdate.setDepartementNameAr(departement.getDepartementNameAr());
       departementToUpdate.setDepartementNameFr(departement.getDepartementNameFr());
        departementRepo.save(departementToUpdate);
    }

    @Override
    public void deleteDepartement(Long id) {
        departementRepo.deleteById(id);

    }
}



package com.LeaveManagement.Service.impl;

import com.LeaveManagement.Dto.FiliereDTO;
import com.LeaveManagement.Entity.Departement;
import com.LeaveManagement.Entity.Filiere;
import com.LeaveManagement.Repo.DepartementRepo;
import com.LeaveManagement.Repo.FiliereRepo;
import com.LeaveManagement.Service.FiliereService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
@Service
public class FiliereImp implements FiliereService {
    @Autowired
    private FiliereRepo filiereRepo;
    @Autowired
    private DepartementRepo departementRepo;

    @Override
    public Long addFiliere(FiliereDTO filiereDTO)
    {
        Departement departement = departementRepo.findById(filiereDTO.getIdDepartment()).orElseThrow(()->new IllegalArgumentException("Department not found"));
        Filiere filiere = new Filiere();
        filiere.setFiliereNameFr(filiereDTO.getFiliereNameFr());
        filiere.setFiliereNameAr(filiereDTO.getFiliereNameAr());
        filiere.setDepartement(departement);
        filiereRepo.save(filiere);
        return filiere.getIdFiliere();
    }

    @Override
    public List<Filiere> getAllFiliere() {
        return filiereRepo.findAll();
    }

    @Override
    public Filiere GetFiliereById(Long id) {
        return filiereRepo.findById(id).get();
    }

    @Override
    public void updateFiliere(Long id, FiliereDTO filiereDTO) {
        Filiere filiereToUpdate = filiereRepo.findById(id).orElseThrow(()->new IllegalArgumentException("Filiere not found"));
        Departement departement = departementRepo.findById(filiereDTO.getIdDepartment()).orElseThrow(()->new IllegalArgumentException("Department not found"));
        filiereToUpdate.setFiliereNameAr(filiereDTO.getFiliereNameAr());
        filiereToUpdate.setFiliereNameFr(filiereDTO.getFiliereNameFr());
        filiereToUpdate.setDepartement(departement);
        filiereRepo.save(filiereToUpdate);
    }

    @Override
    public void deleteFiliere(Long id) {
        filiereRepo.deleteById(id);

    }
}





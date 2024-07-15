package com.LeaveManagement.Service.impl;

import com.LeaveManagement.Entity.Departement;
import com.LeaveManagement.Entity.Filiere;
import com.LeaveManagement.Repo.DepartementRepo;
import com.LeaveManagement.Repo.FiliereRepo;
import com.LeaveManagement.Service.FiliereService;
import org.springframework.beans.factory.annotation.Autowired;

import java.util.List;

public class FiliereImp implements FiliereService {
    @Autowired
    private FiliereRepo filiereRepo;

    @Override
    public Long addFiliere(Filiere filiere) {
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
    public void updateFiliere(Long id, Filiere filiere) {
        Filiere filiereToUpdate = filiereRepo.findById(id).orElseThrow(()->new IllegalArgumentException("Filiere not found"));
        filiereToUpdate.setFiliereNameAr(filiere.getFiliereNameAr());
        filiereToUpdate.setFiliereNameFr(filiere.getFiliereNameFr());
        filiereRepo.save(filiereToUpdate);
    }

    @Override
    public void deleteFiliere(Long id) {
        filiereRepo.deleteById(id);

    }
}





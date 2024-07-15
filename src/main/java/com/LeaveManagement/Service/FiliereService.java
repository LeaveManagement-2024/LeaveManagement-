package com.LeaveManagement.Service;

import com.LeaveManagement.Entity.Filiere;

import java.util.List;

public interface FiliereService {
    Long addFiliere(Filiere filiere);
    public List<Filiere> getAllFiliere();
    public Filiere GetFiliereById(Long  id);
    void updateFiliere(Long id, Filiere filiere);
    void deleteFiliere(Long id);
}


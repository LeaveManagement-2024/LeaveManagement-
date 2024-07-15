package com.LeaveManagement.Service;

import com.LeaveManagement.Entity.Departement;

import java.util.List;

public interface DepartementService {
    Long addDepartement(Departement departement);
    public List<Departement> getAllDepartements();
    public Departement GetDepartementById(Long  id);
    void updateDepartement(Long id, Departement departement);
    void deleteDepartement(Long id);
}


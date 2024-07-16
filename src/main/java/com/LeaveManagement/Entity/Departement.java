package com.LeaveManagement.Entity;

import jakarta.persistence.*;

@Entity
public class Departement {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private long IdDepartement;
    @Column(columnDefinition = "NVARCHAR(255)")
    private String departementNameFr;
    @Column(columnDefinition = "NVARCHAR(255)")
    private String departementNameAr;

    public Departement() {
    }

    public Departement(long idDepartement, String departementNameFr, String departementNameAr) {
        IdDepartement = idDepartement;
        this.departementNameFr = departementNameFr;
        this.departementNameAr = departementNameAr;
    }

    public long getIdDepartement() {
        return IdDepartement;
    }

    public String getDepartementNameFr() {
        return departementNameFr;
    }

    public String getDepartementNameAr() {
        return departementNameAr;
    }

    public void setIdDepartement(long idDepartement) {
        IdDepartement = idDepartement;
    }

    public void setDepartementNameFr(String departementNameFr) {
        this.departementNameFr = departementNameFr;
    }

    public void setDepartementNameAr(String departementNameAr) {
        this.departementNameAr = departementNameAr;
    }
}


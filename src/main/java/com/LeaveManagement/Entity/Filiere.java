package com.LeaveManagement.Entity;

import jakarta.persistence.*;
@Entity
public class Filiere {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long IdFiliere;
    @Column(columnDefinition = "NVARCHAR(255)")
    private String filiereNameFr;
    @Column(columnDefinition = "NVARCHAR(255)")
    private String filiereNameAr;

    public Filiere() {
    }

    public Filiere(Long idFiliere, String filiereNameFr, String filiereNameAr) {
        IdFiliere = idFiliere;
        this.filiereNameFr = filiereNameFr;
        this.filiereNameAr = filiereNameAr;
    }

    public Long getIdFiliere() {
        return IdFiliere;
    }

    public void setIdFiliere(Long idFiliere) {
        IdFiliere = idFiliere;
    }

    public String getFiliereNameFr() {
        return filiereNameFr;
    }

    public void setFiliereNameFr(String filiereNameFr) {
        this.filiereNameFr = filiereNameFr;
    }

    public String getFiliereNameAr() {
        return filiereNameAr;
    }

    public void setFiliereNameAr(String filiereNameAr) {
        this.filiereNameAr = filiereNameAr;
    }
}

package com.LeaveManagement.Dto;

public class FiliereDTO {
    private String FiliereNameFr;
    private String FiliereNameAr;
    private long idDepartment;

    public FiliereDTO() {
    }

    public FiliereDTO(String filiereNameFr, String filiereNameAr, long idDepartment) {
        FiliereNameFr = filiereNameFr;
        FiliereNameAr = filiereNameAr;
        this.idDepartment = idDepartment;
    }

    public String getFiliereNameFr() {
        return FiliereNameFr;
    }

    public void setFiliereNameFr(String filiereNameFr) {
        FiliereNameFr = filiereNameFr;
    }

    public String getFiliereNameAr() {
        return FiliereNameAr;
    }

    public void setFiliereNameAr(String filiereNameAr) {
        FiliereNameAr = filiereNameAr;
    }

    public long getIdDepartment() {
        return idDepartment;
    }

    public void setIdDepartment(long idDepartment) {
        this.idDepartment = idDepartment;
    }
}

package com.LeaveManagement.Dto;

public class FiliereDTO {
    private String FiliereNameFr;
    private String FiliereNameAr;
    private long idService;

    public FiliereDTO() {
    }

    public FiliereDTO(String filiereNameFr, String filiereNameAr, long idService) {
        FiliereNameFr = filiereNameFr;
        FiliereNameAr = filiereNameAr;
        this.idService = idService;
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

    public long getIdService() {
        return idService;
    }

    public void setIdService(long idService) {
        this.idService = idService;
    }
}

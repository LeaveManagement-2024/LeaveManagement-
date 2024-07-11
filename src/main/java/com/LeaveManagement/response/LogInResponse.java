package com.LeaveManagement.response;

public class LogInResponse {
    String message;
    Boolean status;
    int id;

    public int getId() {
        return id;
    }

    public void setId(int id) {
        this.id = id;
    }

    public LogInResponse(String message, Boolean status, int id ) {
        this.message = message;
        this.status = status;
        this.id=id;

    }

    public LogInResponse() {
    }

    public String getMessage() {
        return message;
    }

    public void setMessage(String message) {
        this.message = message;
    }

    public Boolean getStatus() {
        return status;
    }

    public void setStatus(Boolean status) {
        this.status = status;
    }

    @Override
    public String toString() {
        return "LogInResponse{" +
                "message='" + message + '\'' +
                ", status=" + status +
                ", status=" + id +
                '}';
    }
}

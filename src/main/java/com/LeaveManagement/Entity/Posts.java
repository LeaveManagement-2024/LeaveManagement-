package com.LeaveManagement.Entity;


import jakarta.persistence.*;

@Entity
@Table(name = "Posts")
public class Posts {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long IdPost;

    private String postNameFr;
    private String postNameAr;

    public Long getIdPost() {
        return IdPost;
    }

    public void setIdPost(Long idPost) {
        IdPost = idPost;
    }

    public String getPostNameFr() {
        return postNameFr;
    }

    public void setPostNameFr(String postNameFr) {
        this.postNameFr = postNameFr;
    }

    public String getPostNameAr() {
        return postNameAr;
    }

    public void setPostNameAr(String postNameAr) {
        this.postNameAr = postNameAr;
    }
}

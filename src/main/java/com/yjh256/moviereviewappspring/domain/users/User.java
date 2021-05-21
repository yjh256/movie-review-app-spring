package com.yjh256.moviereviewappspring.domain.users;

import lombok.Builder;
import lombok.Getter;
import lombok.NoArgsConstructor;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.Id;


@Getter
@NoArgsConstructor
@Entity
public class User {
    @Id
    @Column(nullable = false)
    private String id;

    @Column(nullable = false)
    private String name;

    @Column(nullable = false)
    private String email;

    @Column
    private String imageUrl;

    @Column(columnDefinition = "TEXT")
    private String token;

    @Builder
    public User(String id, String name, String email, String imageUrl, String token) {
        this.id = id;
        this.name = name;
        this.email = email;
        this.imageUrl = imageUrl;
        this.token = token;
    }
}

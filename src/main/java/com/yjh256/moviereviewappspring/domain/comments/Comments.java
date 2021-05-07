package com.yjh256.moviereviewappspring.domain.comments;

import lombok.Builder;
import lombok.Getter;
import lombok.NoArgsConstructor;

import javax.persistence.*;

@Entity
@Getter
@NoArgsConstructor
public class Comments extends BaseTimeEntity {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Column(nullable = false)
    private String content;

    @Column(nullable = false)
    private String author;

    @Column(nullable = false)
    private String movie_key;

    @Column(columnDefinition = "integer default 0")
    private Long likes;

    @Column(columnDefinition = "integer default 0")
    private int rating;

    @Builder
    public Comments(String content, String author, String movie_key, int rating) {
        this.content = content;
        this.author = author;
        this.movie_key = movie_key;
        this.rating = rating;
    }

    public void update(String content, int rating) {
        this.content = content;
        this.rating = rating;
    }

}

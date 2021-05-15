package com.yjh256.moviereviewappspring.web.dto.comments;

import lombok.Builder;
import lombok.Getter;

@Getter
public class CommentsUpdateRequestDto {
    private String content;
    private String author;
    private String movie_key;
    private int likes;
    private int rating;

    @Builder
    public CommentsUpdateRequestDto(String content, String author, String movie_key, int likes, int rating) {
        this.content = content;
        this.author = author;
        this.movie_key = movie_key;
        this.likes = likes;
        this.rating = rating;
    }
}

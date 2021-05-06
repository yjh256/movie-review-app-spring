package com.yjh256.moviereviewappspring.web.dto.comments;

import lombok.Builder;
import lombok.Getter;
import lombok.NoArgsConstructor;

@Getter
@NoArgsConstructor
public class CommentSaveRequestDto {
    private String content;
    private String author;
    private String movie_key;
    private int rating;

    @Builder
    public CommentSaveRequestDto(String content, String author, String movie_key, int rating) {
        this.content = content;
        this.author = author;
        this.movie_key = movie_key;
        this.rating = rating;
    }
}

package com.yjh256.moviereviewappspring.web.dto.comments;

import com.yjh256.moviereviewappspring.domain.comments.Comments;
import lombok.Getter;

import java.time.LocalDateTime;
import java.time.format.DateTimeFormatter;

@Getter
public class CommentsListResponseDto {
    private Long id;
    private String content;
    private String author;
    private int rating;
    private int likes;
    private String modifiedDate;

    public CommentsListResponseDto(Comments entity) {
        this.id = entity.getId();
        this.author = entity.getAuthor();
        this.content = entity.getContent();
        this.rating = entity.getRating();
        this.likes = entity.getLikes();
        DateTimeFormatter formatter = DateTimeFormatter.ofPattern("yyyy-MM-dd HH:mm:ss");
        this.modifiedDate = entity.getModifiedDate().format(formatter);
    }
}

package com.yjh256.moviereviewappspring.domain.comments;

import org.junit.jupiter.api.AfterEach;
import org.junit.jupiter.api.Test;
import org.junit.jupiter.api.extension.ExtendWith;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.test.context.junit.jupiter.SpringExtension;

import java.util.List;

import static org.assertj.core.api.Assertions.assertThat;

@ExtendWith(SpringExtension.class)
@SpringBootTest
public class CommentsRepositoryTest {

    @Autowired
    CommentsRepository commentsRepository;

    @AfterEach
    public void cleanup() {
        commentsRepository.deleteAll();
    }

    @Test
    public void save() {
        String content = "테스트 댓글 본문";
        String author = "사용자 이름";
        String movie_key = "테스트 영화 링크";

        commentsRepository.save(Comments.builder()
                .content(content)
                .author(author)
                .movie_key(movie_key)
                .build());

        List<Comments> commentsList = commentsRepository.findByMovieKey(movie_key);

        Comments comments = commentsList.get(0);
        assertThat(comments.getContent()).isEqualTo(content);
    }
}

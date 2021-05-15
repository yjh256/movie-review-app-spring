package com.yjh256.moviereviewappspring.web;

import com.yjh256.moviereviewappspring.service.CommentsService;
import com.yjh256.moviereviewappspring.web.dto.comments.CommentSaveRequestDto;
import com.yjh256.moviereviewappspring.web.dto.comments.CommentsListResponseDto;
import com.yjh256.moviereviewappspring.web.dto.comments.CommentsUpdateRequestDto;
import lombok.RequiredArgsConstructor;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RequiredArgsConstructor
@RestController
public class CommentsApiController {

    private final CommentsService commentsService;

    @PostMapping("/api/v1/comments")
    public Long createComment(@RequestBody CommentSaveRequestDto requestDto) {
        return commentsService.createComment(requestDto);
    }

    @PutMapping("/api/v1/comments/{id}")
    public Long update(@PathVariable Long id, @RequestBody CommentsUpdateRequestDto requestDto) {
        return commentsService.modifyComments(id, requestDto);
    }

    @GetMapping("/comments/{movieKey}")
    public List<CommentsListResponseDto> ListComments(@PathVariable String movieKey) {
        return commentsService.listsComments(movieKey);
    }

    @DeleteMapping("/api/v1/comments/{id}")
    public Long delete(@PathVariable Long id) {
        commentsService.deleteComments(id);
        return id;
    }

}

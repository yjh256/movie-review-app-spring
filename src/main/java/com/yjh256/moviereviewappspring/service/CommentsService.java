package com.yjh256.moviereviewappspring.service;

import com.yjh256.moviereviewappspring.domain.comments.Comments;
import com.yjh256.moviereviewappspring.domain.comments.CommentsRepository;
import com.yjh256.moviereviewappspring.web.dto.comments.CommentSaveRequestDto;
import com.yjh256.moviereviewappspring.web.dto.comments.CommentsListResponseDto;
import com.yjh256.moviereviewappspring.web.dto.comments.CommentsUpdateRequestDto;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;
import java.util.stream.Collectors;

@Service
@RequiredArgsConstructor
public class CommentsService {

    private final CommentsRepository commentsRepository;

    // 댓글 등록
    @Transactional
    public Long createComment(CommentSaveRequestDto requestDto) {
        Comments comment = Comments.builder()
                .content(requestDto.getContent())
                .author(requestDto.getAuthor())
                .movie_key(requestDto.getMovie_key())
                .rating(requestDto.getRating())
                .build();
        return commentsRepository.save(comment).getId();
    }

    // 댓글 리스트
    @Transactional
    public List<CommentsListResponseDto> listsComments(String movieKey) {
        return commentsRepository.findByMovieKey(movieKey).stream()
                .map(CommentsListResponseDto::new)
                .collect(Collectors.toList());
    }

    // 댓글 수정
    @Transactional
    public Long modifyComments(Long id, CommentsUpdateRequestDto requestDto) {
        Comments modifyComment = commentsRepository.findById(id)
                .orElseThrow(() -> new IllegalArgumentException("해당 댓글이 없습니다. commentNo = " + id));
        modifyComment.update(requestDto.getContent(), requestDto.getRating());
        return id;
    }

    // 댓글 삭제
    public void deleteComments(Long id) {
        Comments comment = commentsRepository.findById(id)
                .orElseThrow(() -> new IllegalArgumentException("해당 댓글이 없습니다. commentNo = " + id));
        commentsRepository.delete(comment);
    }
}

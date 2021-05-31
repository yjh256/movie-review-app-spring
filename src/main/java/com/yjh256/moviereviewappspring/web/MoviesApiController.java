package com.yjh256.moviereviewappspring.web;

import com.yjh256.moviereviewappspring.service.MoviesService;
import com.yjh256.moviereviewappspring.web.dto.MoviesResponseDto;
import lombok.RequiredArgsConstructor;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RestController;

@RequiredArgsConstructor
@RestController
public class MoviesApiController {
    private final MoviesService moviesService;

    @GetMapping("/api/v1/movies/{keyword}")
    public MoviesResponseDto get(@PathVariable String keyword) {
        return moviesService.findByKeyword(keyword);
    }
}

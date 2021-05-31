package com.yjh256.moviereviewappspring.service;

import com.yjh256.moviereviewappspring.api.MovieApiClient;
import com.yjh256.moviereviewappspring.web.dto.MoviesResponseDto;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

@RequiredArgsConstructor
@Service
public class MoviesService {
    private final MovieApiClient movieApiClient;

    @Transactional(readOnly = true)
    public MoviesResponseDto findByKeyword(String keyword) {
        return movieApiClient.requestMovie(keyword);
    }
}

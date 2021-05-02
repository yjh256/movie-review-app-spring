package com.yjh256.moviereviewappspring.api;

import com.yjh256.moviereviewappspring.web.dto.MoviesResponseDto;
import lombok.RequiredArgsConstructor;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpEntity;
import org.springframework.http.HttpHeaders;
import org.springframework.http.HttpMethod;
import org.springframework.stereotype.Service;
import org.springframework.web.client.RestTemplate;



@RequiredArgsConstructor
@Service
public class MovieApiClient {

    @Autowired
    RestTemplate restTemplate;

    private final String CLIENT_ID = "rqrSvoQGkSvTUJp0yaQC";
    private final String CLIENT_SECRET = "SkksIxbjKL";

    private final String OpenNaverMovieUrl_getMovies = "https://openapi.naver.com/v1/search/movie.json?query={keyword}";

    public MoviesResponseDto requestMovie(String keyword) {
        final HttpHeaders headers = new HttpHeaders();
        headers.set("X-Naver-Client-Id", CLIENT_ID);
        headers.set("X-Naver-Client-Secret", CLIENT_SECRET);

        final HttpEntity<String> entity = new HttpEntity<>(headers);

        return restTemplate.exchange(OpenNaverMovieUrl_getMovies, HttpMethod.GET, entity, MoviesResponseDto.class, keyword).getBody();
    }

}

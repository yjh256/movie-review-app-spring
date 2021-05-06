package com.yjh256.moviereviewappspring.domain.comments;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

import java.util.List;

public interface CommentsRepository extends JpaRepository<Comments, Long> {

    @Query("SELECT c from Comments c where c.movie_key=:movie_key order by c.id DESC")
    public List<Comments> findByMovieKey(@Param("movie_key") String movieKey);
}

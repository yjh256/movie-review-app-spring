package com.yjh256.moviereviewappspring;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.data.jpa.repository.config.EnableJpaAuditing;

@EnableJpaAuditing
@SpringBootApplication
public class MovieReviewAppSpringApplication {

	public static void main(String[] args) {
		SpringApplication.run(MovieReviewAppSpringApplication.class, args);
	}

}

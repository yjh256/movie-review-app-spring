package com.yjh256.moviereviewappspring.web.dto;

import lombok.Getter;

import java.util.Date;

@Getter
public class MoviesResponseDto {
    private int display = 20;
    private Item[] items;

    static class Item {
        public String title;
        public String link;
        public String image;
        public String subtitle;
        public String pubDate;
        public String director;
        public String actor;
        public float userRating;
    }
}

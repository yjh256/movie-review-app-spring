package com.yjh256.moviereviewappspring.web.dto;

import com.yjh256.moviereviewappspring.domain.users.User;
import lombok.Builder;
import lombok.Getter;
import lombok.NoArgsConstructor;

@Getter
@NoArgsConstructor
public class UserSaveRequestDto {
    private String id;
    private String name;
    private String email;
    private String imageUrl;
    private String token;

    @Builder
    public UserSaveRequestDto(String id, String name, String email, String imageUrl, String token) {
        this.id = id;
        this.name = name;
        this.email = email;
        this.imageUrl = imageUrl;
        this.token = token;
    }

    public User toEntity() {
        return User.builder()
                .id(id)
                .name(name)
                .email(email)
                .imageUrl(imageUrl)
                .token(token)
                .build();
    }
}

package com.yjh256.moviereviewappspring.web;

import com.yjh256.moviereviewappspring.service.UserService;
import com.yjh256.moviereviewappspring.web.dto.UserSaveRequestDto;
import lombok.RequiredArgsConstructor;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

@RequiredArgsConstructor
@RestController
public class UserController {

    private final UserService userService;

    @CrossOrigin("http://localhost:8080")
    @PostMapping(value = "/api/v1/user", consumes = "application/json")
    public String save(@RequestBody UserSaveRequestDto userSaveRequestDto) {
        return userService.save(userSaveRequestDto);
    }
}

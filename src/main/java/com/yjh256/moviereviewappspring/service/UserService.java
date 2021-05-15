package com.yjh256.moviereviewappspring.service;

import com.yjh256.moviereviewappspring.domain.users.UserRepository;
import com.yjh256.moviereviewappspring.web.dto.UserSaveRequestDto;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

@RequiredArgsConstructor
@Service
public class UserService {

    private final UserRepository userRepository;

    @Transactional
    public String save(UserSaveRequestDto userSaveRequestDto) {
        return userRepository.save(userSaveRequestDto.toEntity()).getId();
    }
}

package com.fatec.team1.TeachingPlatform.application.http.controllers;

import com.fatec.team1.TeachingPlatform.application.repositories.SessionRepository;
import com.fatec.team1.TeachingPlatform.domain.Sessions;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.servlet.config.annotation.WebMvcConfigurer;

@CrossOrigin
@RestController
public class SessionController  implements WebMvcConfigurer {

    private final SessionRepository repository;


    public SessionController(SessionRepository repository) {
        this.repository = repository;
    }

    @PostMapping("/session/new")
    Sessions newCurso(@RequestBody Sessions session) throws Exception {
        return repository.save(session);
    }
}

package com.fatec.team1.TeachingPlatform.application.services;

import com.fatec.team1.TeachingPlatform.application.repositories.SessionRepository;
import com.fatec.team1.TeachingPlatform.domain.Curso;
import com.fatec.team1.TeachingPlatform.domain.Sessions;
import org.springframework.stereotype.Service;

@Service
public class SessionService {

    private final SessionRepository sessionRepository;

    public SessionService(SessionRepository sessionRepository) {
        this.sessionRepository = sessionRepository;
    }

    public Sessions findById(Long id){
        return sessionRepository.findById(id).get();
    }

    public void save(Sessions sessions) {
        sessionRepository.save(sessions);
    }
}

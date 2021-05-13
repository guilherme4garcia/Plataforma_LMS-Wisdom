package com.fatec.team1.TeachingPlatform.application.repositories;

import com.fatec.team1.TeachingPlatform.domain.Image;
import com.fatec.team1.TeachingPlatform.domain.Sessions;
import org.springframework.data.jpa.repository.JpaRepository;

public interface SessionRepository  extends JpaRepository<Sessions,Long> {
}

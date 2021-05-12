package com.fatec.team1.TeachingPlatform.application.repositories;

import com.fatec.team1.TeachingPlatform.domain.Image;
import org.springframework.data.jpa.repository.JpaRepository;

public interface ImageDbRepository extends JpaRepository<Image,Long> {
}

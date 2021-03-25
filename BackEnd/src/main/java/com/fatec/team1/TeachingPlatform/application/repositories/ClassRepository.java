package com.fatec.team1.TeachingPlatform.application.repositories;

import com.fatec.team1.TeachingPlatform.domain.Class;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.Optional;

@Repository
public interface ClassRepository extends JpaRepository<Class, Long> {
    Optional<Class> findByProfessor(Long professor);
}

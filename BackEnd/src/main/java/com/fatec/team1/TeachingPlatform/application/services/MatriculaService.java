package com.fatec.team1.TeachingPlatform.application.services;

import com.fatec.team1.TeachingPlatform.application.repositories.MatriculaRepository;
import com.fatec.team1.TeachingPlatform.domain.Matricula;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.stream.Collectors;

@Service
public class MatriculaService {

    private final MatriculaRepository repository;

    public MatriculaService(MatriculaRepository repository) {
        this.repository = repository;
    }

    public List<Matricula> listAll() {
        return repository.findAll()
                .stream()
                .map(Matricula::new)
                .collect(Collectors.toList());
    }

    public List<Matricula> listUser(Long idUsuarioFk) {
        return repository.findAll()
                .stream()
                .filter(matricula -> (matricula.getIdUsuarioFk()) == (idUsuarioFk))
                .collect(Collectors.toList());
    }

    public Matricula findById(Long id) {
        return repository.findById(id).get();
    }

    public void save(Matricula matricula) {
        repository.save(matricula);
    }

    public void delete(Long id) {
        repository.deleteById(id);
    }
}

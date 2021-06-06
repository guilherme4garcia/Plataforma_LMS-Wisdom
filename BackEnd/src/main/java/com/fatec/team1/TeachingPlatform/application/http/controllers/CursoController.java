package com.fatec.team1.TeachingPlatform.application.http.controllers;

import com.fatec.team1.TeachingPlatform.application.repositories.CursoRepository;
import com.fatec.team1.TeachingPlatform.application.services.CursoService;
import com.fatec.team1.TeachingPlatform.domain.Curso;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.multipart.MultipartFile;
import org.springframework.web.servlet.config.annotation.WebMvcConfigurer;

import java.util.List;

@CrossOrigin
@RestController
public class CursoController implements WebMvcConfigurer {

    private final CursoRepository repository;

    private final CursoService cursoService;

    public CursoController(CursoRepository repository, CursoService cursoService) {
        this.repository = repository;
        this.cursoService = cursoService;
    }

    @GetMapping("/curso/categoria")
    List<Curso> categoriaList(@RequestBody Curso categoria){
            return cursoService.findCourseByCategory(categoria.getCategoriaCurso());
//            return cursoService.listCategory(categoria.getCategoriaCurso());
        }

    @PostMapping("/curso/new")
    Curso newCurso(@RequestBody Curso curso, MultipartFile image) throws Exception {
        return repository.save(curso);
    }
}
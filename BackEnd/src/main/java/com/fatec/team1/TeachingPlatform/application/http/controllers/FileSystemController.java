package com.fatec.team1.TeachingPlatform.application.http.controllers;

import com.fatec.team1.TeachingPlatform.application.services.CursoService;
import com.fatec.team1.TeachingPlatform.application.services.FileLocationService;
import com.fatec.team1.TeachingPlatform.domain.Curso;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.core.io.FileSystemResource;
import org.springframework.http.MediaType;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.multipart.MultipartFile;

@RestController
@RequestMapping("curso")
public class FileSystemController {

    @Autowired
    FileLocationService fileLocationService;
    @Autowired
    CursoService cursoService;

    @PatchMapping("{idCurso}/image")
    Long uploadImage(@RequestParam MultipartFile image,@PathVariable Long idCurso) throws Exception {
        Long imagemID = fileLocationService.save(image.getBytes(), image.getOriginalFilename());
        Curso updatecCurso = cursoService.findById(idCurso);
        updatecCurso.setImagemCursoId(imagemID);
        cursoService.save(updatecCurso);
        return imagemID;
    }

    @GetMapping(value = "image/{imageId}", produces = MediaType.IMAGE_PNG_VALUE)
    FileSystemResource downloadImage(@PathVariable Long imageId) throws Exception {
        return fileLocationService.find(imageId);
    }
}

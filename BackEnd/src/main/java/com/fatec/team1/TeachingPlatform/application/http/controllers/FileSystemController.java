package com.fatec.team1.TeachingPlatform.application.http.controllers;

import com.fatec.team1.TeachingPlatform.application.services.CursoService;
import com.fatec.team1.TeachingPlatform.application.services.FileLocationService;
import com.fatec.team1.TeachingPlatform.application.services.SessionService;
import com.fatec.team1.TeachingPlatform.domain.Curso;
import com.fatec.team1.TeachingPlatform.domain.Sessions;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.core.io.FileSystemResource;
import org.springframework.http.MediaType;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.multipart.MultipartFile;

@RestController
public class FileSystemController {

    @Autowired
    FileLocationService fileLocationService;
    @Autowired
    CursoService cursoService;
    @Autowired
    SessionService sessionService;

    @PatchMapping("curso/{idCurso}/image")
    Long uploadImage(@RequestParam MultipartFile image,@PathVariable Long idCurso) throws Exception {
        Long imagemID = fileLocationService.save(image.getBytes(), image.getOriginalFilename());
        Curso updatecCurso = cursoService.findById(idCurso);
        updatecCurso.setImagemCursoId(imagemID);
        cursoService.save(updatecCurso);
        return imagemID;
    }

    @PatchMapping("session/{idSession}/video")
    Long uploadVideo(@RequestParam MultipartFile video,@PathVariable Long idSession) throws Exception {
        Long videoID = fileLocationService.save(video.getBytes(), video.getOriginalFilename());
        Sessions updatedSession = sessionService.findById(idSession);
        updatedSession.setVideoId(videoID);
        sessionService.save(updatedSession);
        return videoID;
    }

    @GetMapping(value = "session/video/{videoId}")
    String retriveVideo(@PathVariable Long videoId) throws Exception {

        return fileLocationService.findLocation(videoId);
    }

    @GetMapping(value = "curso/image/{imageId}", produces = MediaType.IMAGE_PNG_VALUE)
    FileSystemResource downloadImage(@PathVariable Long imageId) throws Exception {
        return fileLocationService.find(imageId);
    }
}

package com.fatec.team1.TeachingPlatform.domain;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import javax.persistence.*;

@Entity
@Table(name = "Curso")
@Data
@AllArgsConstructor
@NoArgsConstructor
public class Curso{
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private long id;
    private String nomeCurso;
    private int usuarioIdUsuario;
    private String categoriaCurso;
    private long imagemCursoId;

    public Curso(Curso curso) {
        this.id = curso.getId();
        this.nomeCurso = curso.getNomeCurso();
        this.usuarioIdUsuario = curso.getUsuarioIdUsuario();
    }

}

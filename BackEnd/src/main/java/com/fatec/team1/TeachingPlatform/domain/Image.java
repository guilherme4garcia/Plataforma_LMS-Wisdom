package com.fatec.team1.TeachingPlatform.domain;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import javax.persistence.*;

@Entity
@Table(name = "Image")
@Data
@AllArgsConstructor
@NoArgsConstructor
public class Image {

    public Image(String name, String location) {
        this.name = name;
        this.location = location;
    }

    @Id
    @GeneratedValue
    private Long id;

    @Lob
    private byte[] content;

    private String name;

    private String location;
}

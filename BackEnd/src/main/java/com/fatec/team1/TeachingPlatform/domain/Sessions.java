package com.fatec.team1.TeachingPlatform.domain;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import javax.persistence.*;

@Entity
@Table(name = "Sessions")
@Data
@AllArgsConstructor
@NoArgsConstructor
public class Sessions {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private long id;
    private String description;
    private long videoId;
    private String informations;

    public Sessions(Sessions sessions){
        this.id = sessions.getId();
        this.description = sessions.getDescription();
        this.videoId = sessions.getVideoId();
        this.informations = sessions.getInformations();
    }
}

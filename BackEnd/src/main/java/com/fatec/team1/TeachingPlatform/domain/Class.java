package com.fatec.team1.TeachingPlatform.domain;


import lombok.AllArgsConstructor;
import lombok.Data;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.ManyToMany;
import javax.persistence.Table;
import java.util.Collections;
import java.util.Set;

@Entity
@Table(name = "class", schema = "teachingplatform")
@Data
@AllArgsConstructor
//@Audited
public class Class {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private long id;

    private String name;

    private long professor;

    private long totalHours;

    @ManyToMany(mappedBy = "enrolledClasses")
    private Set<UserAccount> students;

    public Class() {
        this.students = Collections.emptySet();
    }

}

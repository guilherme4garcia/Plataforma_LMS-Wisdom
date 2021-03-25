package com.fatec.team1.TeachingPlatform.domain;

import lombok.AllArgsConstructor;
import lombok.Data;

import javax.persistence.CascadeType;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.JoinTable;
import javax.persistence.ManyToMany;
import javax.persistence.Table;
import java.util.Collections;
import java.util.Set;

import static com.fatec.team1.TeachingPlatform.domain.AccountRole.PROFESSOR;
import static com.fatec.team1.TeachingPlatform.domain.AccountRole.STUDENT;

@Entity
@Table(name = "user_account", schema = "teachingplatform")
@Data
@AllArgsConstructor
//@Audited
public class UserAccount {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private long id;
    private String name;
    private String email;
    private String password;
    private AccountRole role;

    public UserAccount() {
        this.enrolledClasses = Collections.emptySet();
    }

    @ManyToMany(cascade = {CascadeType.ALL})
    @JoinTable(
        name = "user_account_class",
        joinColumns = {@JoinColumn(name = "user_account_id")},
        inverseJoinColumns = {@JoinColumn(name = "class_id")}
    )
    private Set<Class> enrolledClasses;

    public boolean isStudent() {
        return role.equals(STUDENT);
    }

    public boolean isProfessor() {
        return role.equals(PROFESSOR);
    }
}

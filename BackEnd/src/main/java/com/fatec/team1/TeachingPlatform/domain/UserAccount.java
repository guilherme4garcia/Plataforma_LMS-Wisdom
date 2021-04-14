package com.fatec.team1.TeachingPlatform.domain;

import com.fatec.team1.TeachingPlatform.application.audit.Auditable;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
import org.hibernate.envers.Audited;


import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;

import static com.fatec.team1.TeachingPlatform.domain.AccountRole.PROFESSOR;
import static com.fatec.team1.TeachingPlatform.domain.AccountRole.STUDENT;

@Entity
@Table(name = "user_account")
@Data
@Audited
@AllArgsConstructor
@NoArgsConstructor
public class UserAccount extends Auditable<String>{
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private long id;
    private String name;
    private String email;
    private String password;
    private AccountRole role;

    public boolean isStudent() {
        return role.equals(STUDENT);
    }

    public boolean isProfessor() {
        return role.equals(PROFESSOR);
    }
}

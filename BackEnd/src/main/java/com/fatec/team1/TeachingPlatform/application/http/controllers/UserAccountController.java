package com.fatec.team1.TeachingPlatform.application.http.controllers;

import com.fatec.team1.TeachingPlatform.application.repositories.UserAccountRepository;
import com.fatec.team1.TeachingPlatform.application.services.UserAccountService;
import com.fatec.team1.TeachingPlatform.domain.UserAccount;
import org.springframework.context.annotation.Lazy;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.servlet.config.annotation.WebMvcConfigurer;

import java.util.List;

@CrossOrigin
@RestController
public class UserAccountController implements WebMvcConfigurer {

    private final UserAccountRepository repository;

    private final UserAccountService accountService;

    public UserAccountController(UserAccountRepository repository, @Lazy UserAccountService accountService) {
        this.repository = repository;
        this.accountService = accountService;
    }

    @GetMapping("/user-account/list")
    List<UserAccount> all(){
        return repository.findAll();
    }

    @PostMapping("/user-account/new")
    UserAccount newAccount(@RequestBody UserAccount newAccount){
        return accountService.save(newAccount);
    }

    @PutMapping("/user-account/edit/{id}")
    UserAccount editAccount(@RequestBody UserAccount newAccount,@PathVariable Long id){
        return repository.findById(id)
                .map(userAccount -> {
                    userAccount.setName(newAccount.getName());
                    userAccount.setEmail(newAccount.getEmail());
                    return repository.save(userAccount);
                })
                .orElseGet(() -> {
                    newAccount.setId(id);
                    return repository.save(newAccount);
                });
    }

    @DeleteMapping("user-account/delete/{id}")
    void deleteAccount(@PathVariable Long id){
        repository.deleteById(id);
    }
}

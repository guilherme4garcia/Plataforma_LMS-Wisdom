package com.fatec.team1.TeachingPlatform.application.audit;

import com.fatec.team1.TeachingPlatform.application.http.authentication.ProjectUserDetails;
import org.springframework.data.domain.AuditorAware;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.context.SecurityContextHolder;

import java.util.Optional;

public class AuditorAwareImpl implements AuditorAware<String>{

    @Override
    public Optional<String> getCurrentAuditor(){
        Authentication authentication = SecurityContextHolder.getContext().getAuthentication();
        String username = ((ProjectUserDetails) authentication.getPrincipal()).getUsername();
        if(username.isEmpty()){
            return Optional.of("admin");
        }
        return Optional.of(username);
    }
}

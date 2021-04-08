package com.fatec.team1.TeachingPlatform;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.annotation.Bean;
import org.springframework.data.domain.AuditorAware;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;

@SpringBootApplication
public class TeachingPlatformApplication {

	public static void main(String[] args) {
		SpringApplication.run(TeachingPlatformApplication.class, args);
	}

	//*@Bean
	//public AuditorAware<String> auditorAware() {
	//	return new AuditorAwareImpl();
	//}

	@Bean
	public BCryptPasswordEncoder getBCryptPasswordEncoder() {
		return new BCryptPasswordEncoder();
	}

}

package com.example.demo.config;

import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.web.servlet.config.annotation.CorsRegistry;
import org.springframework.web.servlet.config.annotation.WebMvcConfigurer;

@Configuration
public class CorsConfig {

    @Bean
    public WebMvcConfigurer corsConfigurer() {
        return new WebMvcConfigurer() {
            @Override
            public void addCorsMappings(CorsRegistry registry) {
                registry.addMapping("/**")
                        .allowedOrigins(
                                // "https://seudominio.com"
                        )
                        .allowedMethods("GET", "POST", "PUT", "PATCH", "DELETE")
                        .allowedHeaders("Authorization", "Content-Type")
                        .allowCredentials(false)
                        .maxAge(3600);          // ← cache preflight 1 hora
            }
        };
    }
}
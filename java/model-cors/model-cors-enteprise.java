package com.example.demo.config;

import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.web.servlet.config.annotation.CorsRegistry;
import org.springframework.web.servlet.config.annotation.WebMvcConfigurer;

@Configuration
public class CorsConfig {

    private static final String[] WHITELIST = {
            // "https://seudominio.com",
            // "https://app.seudominio.com"
    };

    @Bean
    public WebMvcConfigurer corsConfigurer() {
        return new WebMvcConfigurer() {
            @Override
            public void addCorsMappings(CorsRegistry registry) {
                registry.addMapping("/**")
                        .allowedOrigins(WHITELIST)
                        .allowedMethods("GET", "POST", "PUT", "PATCH", "DELETE", "OPTIONS")
                        .allowedHeaders(
                                "Authorization",
                                "Content-Type",
                                "X-Requested-With",
                                "Accept",
                                "Origin"
                        )
                        .exposedHeaders("X-Total-Count")    // ← frontend pode acessar
                        .allowCredentials(true)
                        .maxAge(86400);                     // ← cache preflight 24 horas
            }
        };
    }
}
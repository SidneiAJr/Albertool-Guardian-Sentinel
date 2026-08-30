package com.backend.config;

import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.web.cors.CorsConfiguration;
import org.springframework.web.cors.CorsConfigurationSource;
import org.springframework.web.cors.UrlBasedCorsConfigurationSource;
import java.util.List;

@Configuration
public class CorsConfig {

    /* ========== CORS ========== */
    @Bean
    public CorsConfigurationSource corsConfigurationSource() {
        CorsConfiguration config = new CorsConfiguration();
        config.setAllowedOrigins(List.of(
                // "https://seudominio.com"
        ));
        config.setAllowedMethods(List.of(
                "GET", "POST", "PUT", "PATCH", "DELETE"
        ));
        config.setAllowedHeaders(List.of(
                "Authorization", "Content-Type"
        ));
        config.setAllowCredentials(false);
        config.setMaxAge(3600L);        // ← cache preflight 1 hora

        UrlBasedCorsConfigurationSource source = new UrlBasedCorsConfigurationSource();
        source.registerCorsConfiguration("/**", config);
        return source;
    }
}
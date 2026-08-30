package com.backend.config;

import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.web.cors.CorsConfiguration;
import org.springframework.web.cors.CorsConfigurationSource;
import org.springframework.web.cors.UrlBasedCorsConfigurationSource;
import java.util.Arrays;
import java.util.List;

@Configuration
public class CorsConfig {

    private static final List<String> WHITELIST = Arrays.asList(
            // "https://seudominio.com",
            // "https://app.seudominio.com"
    );

    /* ========== CORS ========== */
    @Bean
    public CorsConfigurationSource corsConfigurationSource() {
        CorsConfiguration config = new CorsConfiguration();

        // ← só origens da whitelist passam
        config.setAllowedOrigins(WHITELIST);

        config.setAllowedMethods(List.of(
                "GET", "POST", "PUT", "PATCH", "DELETE", "OPTIONS"
        ));
        config.setAllowedHeaders(List.of(
                "Authorization",
                "Content-Type",
                "X-Requested-With",
                "Accept",
                "Origin"
        ));
        config.setExposedHeaders(List.of(
                "X-Total-Count"         // ← headers que o frontend pode acessar
        ));
        config.setAllowCredentials(true);
        config.setMaxAge(86400L);       // ← cache preflight 24 horas

        UrlBasedCorsConfigurationSource source = new UrlBasedCorsConfigurationSource();
        source.registerCorsConfiguration("/**", config);
        return source;
    }
}
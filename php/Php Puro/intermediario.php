<?php

require_once __DIR__ . '/../vendor/autoload.php';

use Dotenv\Dotenv;

$dotenv = Dotenv::createImmutable(__DIR__);
$dotenv->load();

/* ========== HEADERS DE SEGURANÇA ========== */
header('X-Content-Type-Options: nosniff');
header('X-Frame-Options: DENY');
header('X-XSS-Protection: 1; mode=block');
header('Strict-Transport-Security: max-age=31536000; includeSubDomains');
header('Content-Security-Policy: default-src \'self\'');

/* ========== CORS ========== */
header('Access-Control-Allow-Origin: ');
header('Access-Control-Allow-Methods: ');
header('Access-Control-Allow-Headers: ');
header('Access-Control-Allow-Credentials: ');

/* ========== RATE LIMIT ========== */
session_start();

function rateLimit(int $max, int $windowSeconds): void {}
function loginRateLimit(): void {}
function registerRateLimit(): void {}

/* ========== BCRYPT ========== */
function hashPassword(string $password): string {}
function comparePassword(string $password, string $hash): bool {}

/* ========== ROTAS ========== */
$method = $_SERVER['REQUEST_METHOD'];
$path = $_SERVER['PATH_INFO'] ?? '/';

match(true) {
    $method === 'GET'    && $path === '/'        => null, // listar
    $method === 'GET'    && $path === '/:id'     => null, // buscar
    $method === 'POST'   && $path === '/'        => null, // criar
    $method === 'POST'   && $path === '/login'   => null, // login
    $method === 'POST'   && $path === '/register'=> null, // registro
    $method === 'PUT'    && $path === '/:id'     => null, // atualizar
    $method === 'PATCH'  && $path === '/:id'     => null, // parcial
    $method === 'DELETE' && $path === '/:id'     => null, // deletar
    default => http_response_code(404)
};
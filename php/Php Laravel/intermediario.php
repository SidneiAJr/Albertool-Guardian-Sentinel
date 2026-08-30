<?php

// routes/api.php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use Illuminate\Support\Facades\Hash;
use Illuminate\Support\Facades\RateLimiter;

/* ========== CORS (config/cors.php) ========== */
// 'allowed_origins' => [],
// 'allowed_methods' => [],
// 'allowed_headers' => [],
// 'supports_credentials' => false,

/* ========== RATE LIMIT ========== */
RateLimiter::for('login', function (Request $request) {});
RateLimiter::for('register', function (Request $request) {});
RateLimiter::for('api', function (Request $request) {});

/* ========== BCRYPT ========== */
// Hash::make($password);
// Hash::check($password, $hash);

/* ========== AUTENTICAÇÃO (sanctum) ========== */
// composer require laravel/sanctum

/* ========== ROTAS PÚBLICAS ========== */
Route::post('/login', )->middleware('throttle:login');
Route::post('/register', )->middleware('throttle:register');

/* ========== ROTAS PROTEGIDAS ========== */
Route::middleware('auth:sanctum')->group(function () {
    Route::get('/', );
    Route::get('/{id}', );
    Route::post('/', );
    Route::put('/{id}', );
    Route::patch('/{id}', );
    Route::delete('/{id}', );
});
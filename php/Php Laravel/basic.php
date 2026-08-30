<?php

// routes/api.php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

/* ========== CORS (config/cors.php) ========== */
// 'allowed_origins' => [],
// 'allowed_methods' => [],
// 'allowed_headers' => [],
// 'supports_credentials' => false,

/* ========== RATE LIMIT ========== */
// Definido em App\Providers\RouteServiceProvider
// RateLimiter::for('api', function (Request $request) {});

/* ========== ROTAS ========== */
Route::get('/', );          // listar
Route::get('/{id}', );      // buscar
Route::post('/', );         // criar
Route::put('/{id}', );      // atualizar
Route::patch('/{id}', );    // parcial
Route::delete('/{id}', );   // deletar
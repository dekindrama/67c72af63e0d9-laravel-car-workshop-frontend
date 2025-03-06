<?php

use App\Http\Controllers\Auth\AuthController;
use App\Http\Controllers\Dashboard\DashboardController;
use App\Http\Controllers\IndexController;
use App\Http\Middleware\AuthMiddleware;
use App\Http\Middleware\GuestMiddleware;
use Illuminate\Support\Facades\Route;

Route::middleware([GuestMiddleware::class])->group(function() {
    Route::get('/', IndexController::class);
    Route::get('/login', [AuthController::class, 'create'])->name('auth.create');
    Route::post('/login', [AuthController::class, 'login'])->name('auth.login');
});

Route::middleware([AuthMiddleware::class])->group(function() {
    Route::get('/dashboard', [DashboardController::class, 'index'])->name('dashboard.index');
    Route::post('/logout', [AuthController::class, 'logout'])->name('auth.logout');
});

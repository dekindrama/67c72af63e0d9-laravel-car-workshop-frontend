<?php

use App\Http\Controllers\Admin;
use App\Http\Controllers\Auth\AuthController;
use App\Http\Controllers\Dashboard\DashboardController;
use App\Http\Controllers\IndexController;
use App\Http\Middleware\AdminOnlyMiddleware;
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

Route::middleware([AuthMiddleware::class, AdminOnlyMiddleware::class])->prefix('/admin')->name('admin.')->group(function() {
    //* service
    Route::get('/services', [Admin\Service\ServiceController::class, 'index'])->name('service.index');
    Route::get('/services/create', [Admin\Service\ServiceController::class, 'create'])->name('service.create');
    Route::post('/services', [Admin\Service\ServiceController::class, 'store'])->name('service.store');
    Route::get('/services/{id}', [Admin\Service\ServiceController::class, 'edit'])->name('service.edit');
    Route::put('/services/{id}', [Admin\Service\ServiceController::class, 'update'])->name('service.update');
    Route::delete('/services/{id}', [Admin\Service\ServiceController::class, 'destroy'])->name('service.destroy');
});

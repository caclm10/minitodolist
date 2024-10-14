<?php

use App\Http\Controllers\ProfileController;
use App\Http\Controllers\TaskCompleteController;
use App\Http\Controllers\TaskController;
use App\Http\Controllers\TodoController;
use Illuminate\Support\Facades\Route;

Route::middleware(['auth', 'auth.session'])->group(function () {
    Route::patch('profile', [ProfileController::class, 'update'])->name('profile.update');
    Route::resource('todos', TodoController::class)->except(['show', 'edit']);
    Route::resource('todos.tasks', TaskController::class)->except(['show', 'edit']);
    Route::patch('todos/{todo}/tasks/{task}/complete', TaskCompleteController::class)->name('tasks.complete.update');
});

Route::fallback(function () {
    return redirect(route('login'));
});

require __DIR__ . '/auth.php';

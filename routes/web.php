<?php

use App\Http\Controllers\FeedbackController;
use App\Http\Controllers\ProfileController;
use Illuminate\Foundation\Application;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;


Route::get('/', [FeedbackController::class, 'index'])->name('home');
Route::post('/feedback', [FeedbackController::class, 'store'])->name('feedback.store');

Route::get('/profile', function () {
    return inertia('Profile/Profile');
})->name('profile');

require __DIR__ . '/auth.php';

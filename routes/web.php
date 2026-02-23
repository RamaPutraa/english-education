<?php

use Illuminate\Support\Facades\Route;
use Inertia\Inertia;
use Laravel\Fortify\Features;

Route::get('/', function () {
    return Inertia::render('welcome', [
        'canRegister' => Features::enabled(Features::registration()),
    ]);
})->name('home');

Route::get('dashboard', function () {
    return Inertia::render('dashboard');
})->middleware(['auth', 'verified'])->name('dashboard');

// ── Service Pages ──────────────────────────────────────────────────────────────
Route::get('services/study-abroad', function () {
    return Inertia::render('services/study-abroad-consultation');
})->name('services.study-abroad');

Route::get('services/visa-guidance', function () {
    return Inertia::render('services/visa-guidance');
})->name('services.visa-guidance');

Route::get('services/scholarship-mentoring', function () {
    return Inertia::render('services/scholarship-mentoring');
})->name('services.scholarship-mentoring');

Route::get('services/course-career', function () {
    return Inertia::render('services/course-career-pathway');
})->name('services.course-career');

Route::get('services/english-ielts', function () {
    return Inertia::render('services/english-ielts-preparation');
})->name('services.english-ielts');

// ── About Page ─────────────────────────────────────────────────────────────────
Route::get('about', function () {
    return Inertia::render('about');
})->name('about');

require __DIR__.'/settings.php';

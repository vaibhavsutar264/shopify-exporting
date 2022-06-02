<?php

use App\Http\Controllers\FrontPageController;
use App\Http\Controllers\MessageController;
use App\Http\Controllers\PageController;
use Illuminate\Support\Facades\Route;

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/

Route::get('/', FrontPageController::class);
Route::get('/{slug}', PageController::class)->where('slug', implode('|', array_keys(config('pages'))))->name('page');
Route::any('greet', [ MessageController::class, 'incomingReq' ]);
Route::get('greet/done', [ MessageController::class, 'msgSent' ])->name('greet.send');
Route::get('greet/{id}', [ MessageController::class, 'show' ])->name('greet.show');
Route::get('greet/{id}/preview', [ MessageController::class, 'previewEmail' ]);
Route::post('send-message', [ MessageController::class, 'sendMessage' ])->name('send_msg');
// Route::get('/demo', FrontPageController::class);

Route::get('/dashboard', function () {
   return redirect()->route('admin.dashboard');
})->middleware(['auth'])->name('dashboard');

require __DIR__.'/auth.php';
require __DIR__.'/auth-jwt.php';


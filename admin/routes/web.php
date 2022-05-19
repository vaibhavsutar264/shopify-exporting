<?php

use Illuminate\Support\Facades\Route;
use \Admin\Http\Controllers\{
   DashboardController,
   UserController,
   RoleController,
   PermissionController,
   CategoryController,
   SettingController,
   StorageController,
   BroadcastController,
    MessageController,
    TaxonomyController,
    TeamController,
};
use Admin\Http\Controllers\User\NotificationController;
use Admin\Http\Controllers\User\ProfileController;
use Admin\Http\Middleware\AdminMiddleware;

Route::group([
   'middleware' => [ 'web', 'auth', AdminMiddleware::class, ],
   'prefix' => 'cp',
   'as' => 'admin.',

], function () {
   Route::get('/', [DashboardController::class, 'index'])->name('dashboard');
   Route::get('/profile', [ProfileController::class, '__invoke'])->name('profile');
   Route::post('/profile', [ProfileController::class, 'update'])->name('profile.update');
   Route::get('/inbox', [NotificationController::class, '__invoke'])->name('inbox');
   Route::get('/notifications', [NotificationController::class, '__invoke'])->name('notifications');
   Route::get('settings', [SettingController::class, 'index'])->name('settings');
   Route::get('storage', [StorageController::class, 'index'])->name('index');
   Route::get('broadcast', [BroadcastController::class, 'index'])->name('index');
   // Access control list
   Route::get('acl', [RoleController::class, 'acl'])->name('acl');
   Route::resource('roles', RoleController::class)->names('roles');
   Route::resource('roles.permissions', PermissionController::class)->names('permissions');
   Route::resource('permissions', PermissionController::class)->names('permissions');
   Route::resource('categories', CategoryController::class)->names('categories');
   Route::resource('taxonomies', TaxonomyController::class)->names('taxonomies');
   Route::resource('users', UserController::class)->names('users');
   Route::resource('teams', TeamController::class)->names('teams');
   Route::delete('messages/delete_many', [MessageController::class, 'deleteMany'])->name('messages.delete_many');
   Route::any('messages/{id}/make_pdf', [MessageController::class, 'makePdf'])->name('messages.make_pdf');
   Route::post('messages/{id}/send_mail', [MessageController::class, 'sendMail'])->name('messages.send_mail');
   Route::resource('messages', MessageController::class)->names('messages');

});


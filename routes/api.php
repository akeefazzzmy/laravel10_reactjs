<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\ToDoListController;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider and all of them will
| be assigned to the "api" middleware group. Make something great!
|
*/

Route::middleware('auth:sanctum')->get('/user', function (Request $request) {
    return $request->user();
});

Route::post('/createTodo', [ToDoListController::class, 'create'])->name('todo.create');
Route::post('/updateTodo', [ToDoListController::class, 'update'])->name('todo.update');
Route::get('/getTodo', [ToDoListController::class, 'getTodos'])->name('todo.get');
Route::get('/getTodoById/{id}', [ToDoListController::class, 'getTodoById'])->name('todo.getTodoById');
Route::delete('/deleteTodo/{id}', [ToDoListController::class, 'deleteTodo'])->name('todo.delete');
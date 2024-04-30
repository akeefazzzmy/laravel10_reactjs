<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\ToDo;

class ToDoListController extends Controller
{
    public function getTodos()
    {
        return ToDo::orderBy('created_at', 'desc')->get();
    }

    public function getTodoById($id)
    {
        return ToDo::find($id);
    }

    public function create(Request $request)
    {
        $request->validate([
            'name' => 'required',
            'desc' => 'required',
            'date' => 'required'
        ]);
        $createTodo = ToDo::create([
            'name' => $request->name,
            'description' => $request->desc,
            'date_time' => $request->date
        ]);
        if ($createTodo) {
            return true;
        } else {
            return false;
        }
    }
}

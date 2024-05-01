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

    public function update(Request $request)
    {
        $request->validate([
            'todoId' => 'required',
            'name' => 'required',
            'desc' => 'required',
            'date' => 'required'
        ]);
        $findTodo = ToDo::findOrFail($request->todoId);
        $updateTodo = $findTodo->update([
            'name' => $request->name,
            'description' => $request->desc,
            'date_time' => $request->date
        ]);
        return true;
    }

    public function deleteTodo($id)
    {
        $todo = Todo::findOrFail($id);
        if ($todo) {
            $todo->delete();
            return response()->json(['message' => 'Todo deleted successfully']);
        }else{
            return response()->json(['message' => 'Something went wrong']);
        }
    }
}

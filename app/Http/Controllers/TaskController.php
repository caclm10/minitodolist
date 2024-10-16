<?php

namespace App\Http\Controllers;

use App\Models\Task;
use App\Models\Todo;
use Illuminate\Http\RedirectResponse;
use Illuminate\Http\Request;
use Inertia\Response;

class TaskController extends Controller
{
    public function index(Todo $todo): Response
    {
        \Gate::authorize('view', $todo);

        $tasks = fn() => $todo->tasks;

        return inertia('tasks/index', compact('todo', 'tasks'));
    }

    public function store(Request $request, Todo $todo): RedirectResponse
    {
        \Gate::authorize('update', $todo);

        $request->validate(['content' => ['required', 'string', 'max:255']]);

        $todo->tasks()->create($request->only('content'));

        return back();
    }

    public function update(Request $request, Todo $todo, Task $task): RedirectResponse
    {
        \Gate::authorize('update', $todo);

        $request->validate(['content' => ['required', 'string', 'max:255']]);

        $task->update($request->only('content'));

        return back();
    }

    public function destroy(Todo $todo, Task $task): RedirectResponse
    {
        \Gate::authorize('update', $todo);

        $task->delete();

        return back();
    }
}

<?php

namespace App\Http\Controllers;

use App\Models\Todo;
use Illuminate\Http\RedirectResponse;
use Illuminate\Http\Request;
use Inertia\Response;

class TodoController extends Controller
{
    public function index(): Response
    {
        $todos = fn() => \Auth::user()->todos()->withCount('tasks')->get();

        return inertia('todos/index', compact('todos'));
    }

    public function store(Request $request): RedirectResponse
    {
        $request->validate(['title' => ['required', 'string', 'max:255']]);

        \Auth::user()->todos()->create($request->only('title'));

        return back();
    }

    public function update(Request $request, Todo $todo): RedirectResponse
    {
        $request->validate(['title' => ['required', 'string', 'max:255']]);

        $todo->update($request->only('title'));

        return back();
    }

    public function destroy(Todo $todo): RedirectResponse
    {
        $todo->delete();

        return back();
    }
}

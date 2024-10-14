<?php

namespace App\Http\Controllers;

use App\Models\Task;
use App\Models\Todo;
use Illuminate\Http\RedirectResponse;
use Illuminate\Http\Request;

class TaskCompleteController extends Controller
{
    /**
     * Handle the incoming request.
     */
    public function __invoke(Todo $todo, Task $task): RedirectResponse
    {
        $task->completeOrNull()->save();

        return back();
    }
}

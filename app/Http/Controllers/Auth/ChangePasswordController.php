<?php

namespace App\Http\Controllers\Auth;

use App\Http\Controllers\Controller;
use Illuminate\Http\RedirectResponse;
use Illuminate\Http\Request;

class ChangePasswordController extends Controller
{
    public function update(Request $request): RedirectResponse
    {
        $request->validate([
            'current_password' => ['required', 'string', 'current_password'],
            'password' => ['required', 'string', 'min:6', 'max:20']
        ]);

        $password = $request->input('password');

        \Auth::user()->update([
            'password' => bcrypt($password)
        ]);

        \Auth::logoutOtherDevices($password);

        return back();
    }
}

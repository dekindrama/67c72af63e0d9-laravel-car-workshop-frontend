<?php

namespace App\Http\Controllers\Auth;

use App\Helpers\AuthApiHelper;
use App\Helpers\TokenHelper;
use App\Http\Controllers\Controller;
use App\Http\Requests\Auth\LoginRequest;
use Illuminate\Http\RedirectResponse;
use Illuminate\Http\Request;
use Inertia\Inertia;
use Inertia\Response;

class AuthController extends Controller
{
    function create() : Response {
        return Inertia::render('Auth/Login');
    }

    function login(LoginRequest $request) : RedirectResponse {
        $token = AuthApiHelper::login(
            $request->email,
            $request->password,
        );

        return to_route('dashboard.index');
    }

    function logout() : RedirectResponse {
        $token = TokenHelper::get();
        AuthApiHelper::logout($token);

        return to_route('auth.login');
    }
}

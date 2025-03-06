<?php

namespace App\Http\Middleware;

use App\Enums\RoleEnum;
use App\Helpers\AuthApiHelper;
use App\Helpers\TokenHelper;
use Closure;
use Illuminate\Http\Request;
use Symfony\Component\HttpFoundation\Response;

class AuthMiddleware
{
    /**
     * Handle an incoming request.
     *
     * @param  \Closure(\Illuminate\Http\Request): (\Symfony\Component\HttpFoundation\Response)  $next
     */
    public function handle(Request $request, Closure $next): Response
    {
        $token = TokenHelper::get();
        if ($token == null) {
            abort(Response::HTTP_UNAUTHORIZED, 'unauthenticated');
        }

        $check = AuthApiHelper::check($token);
        if ($check == false) {
            abort(Response::HTTP_UNAUTHORIZED, 'unauthenticated');
        }

        return $next($request);
    }
}

<?php

namespace App\Http\Middleware;

use App\Enums\RoleEnum;
use App\Helpers\AuthApiHelper;
use App\Helpers\TokenHelper;
use Closure;
use Illuminate\Http\Request;
use Illuminate\Http\Response as HttpResponse;
use Symfony\Component\HttpFoundation\Response;

class AdminOnlyMiddleware
{
    /**
     * Handle an incoming request.
     *
     * @param  \Closure(\Illuminate\Http\Request): (\Symfony\Component\HttpFoundation\Response)  $next
     */
    public function handle(Request $request, Closure $next): Response
    {
        $token = TokenHelper::get();
        $user = AuthApiHelper::user($token);
        if ($user->role !== RoleEnum::ADMIN) {
            abort(HttpResponse::HTTP_FORBIDDEN, 'role is unauthorized');
        }

        return $next($request);
    }
}

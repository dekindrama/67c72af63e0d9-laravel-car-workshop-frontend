<?php

namespace App\Http\Middleware;

use App\Helpers\AuthApiHelper;
use App\Helpers\TokenHelper;
use Closure;
use Illuminate\Http\Request;
use Symfony\Component\HttpFoundation\Response;

class GuestMiddleware
{
    /**
     * Handle an incoming request.
     *
     * @param  \Closure(\Illuminate\Http\Request): (\Symfony\Component\HttpFoundation\Response)  $next
     */
    public function handle(Request $request, Closure $next): Response
    {
        $token = TokenHelper::get();
        $check = AuthApiHelper::check($token);
        if ($token && $check) {
            return redirect(route('dashboard.index'));
        }

        return $next($request);
    }
}

<?php

namespace App\Http\Middleware;

use App\Helpers\AuthApiHelper;
use App\Helpers\TokenHelper;
use Illuminate\Http\Request;
use Inertia\Middleware;
use Tighten\Ziggy\Ziggy;

class HandleInertiaRequests extends Middleware
{
    /**
     * The root template that is loaded on the first page visit.
     *
     * @var string
     */
    protected $rootView = 'app';

    /**
     * Determine the current asset version.
     */
    public function version(Request $request): ?string
    {
        return parent::version($request);
    }

    /**
     * Define the props that are shared by default.
     *
     * @return array<string, mixed>
     */
    public function share(Request $request): array
    {
        $token = TokenHelper::get();

        return [
            ...parent::share($request),
            'auth' => [
                'user' => AuthApiHelper::user($token),
            ],
            'ziggy' => fn () => [
                ...(new Ziggy)->toArray(),
                'location' => $request->url(),
            ],
            'appVersion' => config('app.version'),
            'appName' => config('app.name'),
        ];
    }
}

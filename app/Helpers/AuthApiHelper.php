<?php

namespace App\Helpers;

use App\Entities\UserEntity;
use App\Helpers\TokenHelper;
use Illuminate\Http\Response;
use Illuminate\Support\Facades\Http;
use Illuminate\Support\Facades\Session;
use Symfony\Component\HttpKernel\Exception\HttpException;

class AuthApiHelper
{
    static function login(string $email, string $password) : string {
        $response = ApiHelper::request()
            ->post(config('app.base_url_api').'/login', [
                'email' => $email,
                'password' => $password,
            ]);

        if ($response->status() !== Response::HTTP_OK) {
            abort($response->status(), $response->json()['message']);
        }

        TokenHelper::put($response->json()['data']['token']);

        return $response->json()['data']['token'];
    }

    static function user(string $token = null) : ?UserEntity {
        $response = ApiHelper::request($token)->get(config('app.base_url_api').'/logged-user');

        if ($response->status() !== Response::HTTP_OK) {
            return null;
        }

        return UserEntity::make()->fromArray($response->json()['data']['user']);
    }

    static function check(string $token = null) : bool {
        $response = ApiHelper::request($token)->get(config('app.base_url_api').'/logged-user');

        if ($response->status() !== Response::HTTP_OK) {
            return false;
        }

        return true;
    }

    static function logout(string $token) : void {
        $response = ApiHelper::request($token)->post(config('app.base_url_api').'/logout');

        if ($response->status() !== Response::HTTP_OK) {
            abort($response->status(), $response->json()['message']);
        }
    }
}

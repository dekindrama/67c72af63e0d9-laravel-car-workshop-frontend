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
    const BASE_URL = 'http://localhost:8000/api';
    static function login(string $email, string $password) : string {
        $response = ApiHelper::request()
            ->post(Self::BASE_URL.'/login', [
                'email' => $email,
                'password' => $password,
            ]);

        if ($response->status() !== Response::HTTP_OK) {
            abort($response->status(), $response->json()['message']);
        }

        TokenHelper::put($response->json()['data']['token']);

        return $response->json()['data']['token'];
    }

    static function user(string $token) : UserEntity {
        $response = ApiHelper::request($token)->get(Self::BASE_URL.'/logged-user');

        if ($response->status() !== Response::HTTP_OK) {
            abort($response->status(), $response->json()['message']);
        }

        return UserEntity::make()->fromArray($response->json()['data']['user']);
    }

    static function check(string $token) : bool {
        $response = ApiHelper::request($token)->get(Self::BASE_URL.'/logged-user');

        if ($response->status() !== Response::HTTP_OK) {
            return true;
        }

        return true;
    }

    static function logout(string $token) : void {
        $response = ApiHelper::request($token)->post(Self::BASE_URL.'/logout');

        if ($response->status() !== Response::HTTP_OK) {
            abort($response->status(), $response->json()['message']);
        }
    }
}

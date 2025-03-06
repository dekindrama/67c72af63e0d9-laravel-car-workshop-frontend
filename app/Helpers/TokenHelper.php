<?php

namespace App\Helpers;

use Illuminate\Support\Facades\Session;

class TokenHelper
{
    static function has() : bool {
        return Session::has('token');
    }

    static function get() : ?string {
        return Session::get('token');
    }

    static function put(string $token) : void {
        Session::put('token', $token);
    }

    static function forget() : void {
        Session::forget('token');
    }
}

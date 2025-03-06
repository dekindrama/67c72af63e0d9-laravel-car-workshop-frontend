<?php

namespace App\Enums;

class RoleEnum
{
    const ADMIN = "ADMIN";
    const MECHANIC = "MECHANIC";
    const CAR_OWNER = "CAR_OWNER";

    static function get() : array {
        return [
            Self::ADMIN,
            Self::MECHANIC,
            Self::CAR_OWNER,
        ];
    }

    static function getObject() : object {
        return (object)[
            'ADMIN' => Self::ADMIN,
            'MECHANIC' => Self::MECHANIC,
            'CAR_OWNER' => Self::CAR_OWNER,
        ];
    }
}

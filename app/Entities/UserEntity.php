<?php

namespace App\Entities;

class UserEntity
{
    public string $id;
    public string $name;
    public string $email;
    public string $role;

    static function make() : Self {
        return new Self();
    }

    function fromArray(array $data) : Self {
        $this->id = $data['id'];
        $this->name = $data['name'];
        $this->email = $data['email'];
        $this->role = $data['role'];

        return $this;
    }
}

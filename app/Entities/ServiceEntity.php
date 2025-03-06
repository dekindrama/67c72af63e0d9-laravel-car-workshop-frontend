<?php

namespace App\Entities;

class ServiceEntity
{
    public string $id;
    public string $name;
    public int $price;

    static function make() : Self {
        return new Self();
    }

    function fromArray(array $data) : Self {
        $this->id = $data['id'];
        $this->name = $data['name'];
        $this->price = $data['price'];

        return $this;
    }
}

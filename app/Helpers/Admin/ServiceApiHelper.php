<?php

namespace App\Helpers\Admin;

use App\Entities\ServiceEntity;
use App\Helpers\ApiHelper;
use App\Http\Requests\Admin\Service\ServiceStoreRequest;
use App\Http\Requests\Admin\Service\ServiceUpdateRequest;
use Illuminate\Http\Response;
use Illuminate\Support\Collection;

class ServiceApiHelper
{
    static function getServices(?string $token) : Collection {
        $response = ApiHelper::request($token)->get(config('app.base_url_api').'/admin/services');

        if ($response->status() !== Response::HTTP_OK) {
            abort($response->status(), $response->json()['message']);
        }

        $datas = [];
        foreach ($response->json()['data']['services'] as $index => $service) {
            $datas[$index] = ServiceEntity::make()->fromArray($service);
        }
        return collect($datas);
    }

    static function getService(?string $token, int $serviceId) : ServiceEntity {
        $response = ApiHelper::request($token)->get(config('app.base_url_api').'/admin/services/'.$serviceId);

        if ($response->status() !== Response::HTTP_OK) {
            abort($response->status(), $response->json()['message']);
        }

        return ServiceEntity::make()->fromArray($response->json()['data']['service']);
    }

    static function storeService(?string $token, ServiceStoreRequest $request) : ServiceEntity {
        $response = ApiHelper::request($token)->post(config('app.base_url_api').'/admin/services', $request->validated());

        if ($response->status() !== Response::HTTP_CREATED) {
            abort($response->status(), $response->json()['message']);
        }

        return ServiceEntity::make()->fromArray($response->json()['data']['service']);
    }

    static function updateService(?string $token, int $serviceId, ServiceUpdateRequest $request) : ServiceEntity {
        $response = ApiHelper::request($token)->put(config('app.base_url_api').'/admin/services/'.$serviceId, $request->validated());

        if ($response->status() !== Response::HTTP_OK) {
            abort($response->status(), $response->json()['message']);
        }

        return ServiceEntity::make()->fromArray($response->json()['data']['service']);
    }

    static function deleteService(?string $token, int $serviceId) : void {
        $response = ApiHelper::request($token)->delete(config('app.base_url_api').'/admin/services/'.$serviceId);

        if ($response->status() !== Response::HTTP_OK) {
            abort($response->status(), $response->json()['message']);
        }
    }
}

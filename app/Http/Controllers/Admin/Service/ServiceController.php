<?php

namespace App\Http\Controllers\Admin\Service;

use App\Helpers\Admin\ServiceApiHelper;
use App\Helpers\TokenHelper;
use App\Http\Controllers\Controller;
use App\Http\Requests\Admin\Service\ServiceStoreRequest;
use App\Http\Requests\Admin\Service\ServiceUpdateRequest;
use Illuminate\Http\RedirectResponse;
use Illuminate\Http\Request;
use Inertia\Inertia;
use Inertia\Response;

class ServiceController extends Controller
{
    function index() : Response {
        $token = TokenHelper::get();
        $services = ServiceApiHelper::getServices($token);

        return Inertia::render('Admin/Service/Index', [
            'services' => $services,
        ]);
    }

    function create() : Response {
        return Inertia::render('Admin/Service/Create');
    }

    function store(ServiceStoreRequest $request) : RedirectResponse {
        $token = TokenHelper::get();
        $storedService = ServiceApiHelper::storeService($token, $request);

        return to_route('admin.service.index');
    }

    function edit(int $id) : Response {
        $token = TokenHelper::get();
        $service = ServiceApiHelper::getService($token, $id);

        return Inertia::render('Admin/Service/Edit', [
            'service' => $service,
        ]);
    }

    function update(ServiceUpdateRequest $request) : RedirectResponse {
        $token = TokenHelper::get();
        $service = ServiceApiHelper::updateService($token, $request->id, $request);

        return to_route('admin.service.index');
    }

    function destroy(int $id) : RedirectResponse {
        $token = TokenHelper::get();
        ServiceApiHelper::deleteService($token, $id);

        return to_route('admin.service.index');
    }
}

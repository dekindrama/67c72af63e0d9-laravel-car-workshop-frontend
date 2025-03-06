import DashboardLayout from '@/Layouts/DashboardLayout';
import { Head, Link, useForm, usePage } from '@inertiajs/react';
import { FaSave, FaTimes } from 'react-icons/fa';

const Page = () => {
    const titlePage = 'Edit Service';
    const titleNavigation = 'Service';

    return (
        <DashboardLayout>
            <>
                <Head title={titlePage} />

                <h1>{titleNavigation}</h1>

                <div className="card bg-base-100 w-full shadow-xl">
                    <div className="card-body">
                        <h2 className="card-title">{titlePage}</h2>
                        <EditForm />
                    </div>
                </div>
            </>
        </DashboardLayout>
    );
};

const EditForm = () => {
    const { service } = usePage().props;

    const { processing, put, data, setData, errors } = useForm({
        name: service.name,
        price: service.price,
    });

    function onSubmit(e) {
        e.preventDefault();

        put(route('admin.service.update', { id: service.id }));
    }

    return (
        <>
            <div className="flex w-full flex-col gap-5">
                <label className="form-control w-full">
                    <div className="label">
                        <span className="label-text font-bold">Name</span>
                    </div>
                    <input
                        type="text"
                        className="input input-bordered w-full"
                        value={data.name}
                        onChange={(e) => setData('name', e.target.value)}
                    />
                    {errors.name && (
                        <div className="label">
                            <span className="label-text-alt">
                                {errors.name}
                            </span>
                        </div>
                    )}
                </label>
                <label className="form-control w-full">
                    <div className="label">
                        <span className="label-text font-bold">Price</span>
                    </div>
                    <input
                        type="number"
                        className="input input-bordered w-full"
                        value={data.price}
                        onChange={(e) => setData('price', e.target.value)}
                    />
                    {errors.price && (
                        <div className="label">
                            <span className="label-text-alt">
                                {errors.price}
                            </span>
                        </div>
                    )}
                </label>
            </div>
            <div className="card-actions justify-end">
                <button
                    onClick={onSubmit}
                    className="btn btn-primary text-primary-content"
                    disabled={processing}
                >
                    {processing && (
                        <span className="loading loading-spinner"></span>
                    )}
                    {processing == false && <FaSave />}
                    Simpan
                </button>
                <Link
                    href={route('admin.service.index')}
                    className="btn btn-error text-error-content"
                    disabled={processing}
                >
                    {processing && (
                        <span className="loading loading-spinner"></span>
                    )}
                    {processing == false && <FaTimes />}
                    Kembali
                </Link>
            </div>
        </>
    );
};

export default Page;

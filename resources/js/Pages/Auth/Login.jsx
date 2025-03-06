import { Head, useForm } from '@inertiajs/react';

const Page = () => {
    const { data, setData, errors, processing, post } = useForm({
        email: '',
        password: '',
    });

    console.log(data, errors);

    function onLogin(e) {
        console.log('hit login');
        e.preventDefault();

        post(route('auth.login'));
    }

    return (
        <>
            <Head title={'Login'} />

            <div className="bg-primary flex h-screen w-screen items-center justify-center">
                <div className="card bg-base-100 w-96 shadow-lg">
                    <div className="card-body">
                        <div className="flex flex-col gap-4">
                            <fieldset className="fieldset">
                                <legend className="fieldset-legend">
                                    Email
                                </legend>
                                <input
                                    type="email"
                                    className="input w-full"
                                    value={data.email}
                                    onChange={(e) =>
                                        setData('email', e.target.value)
                                    }
                                />
                                {errors.email && (
                                    <p className="fieldset-label">
                                        {errors.email}
                                    </p>
                                )}
                            </fieldset>
                            <fieldset className="fieldset">
                                <legend className="fieldset-legend">
                                    Password
                                </legend>
                                <input
                                    type="password"
                                    className="input w-full"
                                    value={data.password}
                                    onChange={(e) =>
                                        setData('password', e.target.value)
                                    }
                                />
                                {errors.password && (
                                    <p className="fieldset-label">
                                        {errors.password}
                                    </p>
                                )}
                            </fieldset>
                        </div>
                        <div className="card-actions justify-end">
                            <button
                                className="btn btn-primary"
                                disabled={processing}
                                onClick={onLogin}
                            >
                                Login
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Page;

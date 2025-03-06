import DashboardLayout from '@/Layouts/DashboardLayout';
import { Head, Link, usePage } from '@inertiajs/react';
import { FaPen, FaPlus, FaTrash } from 'react-icons/fa';

const Page = () => {
    const { services } = usePage().props;
    const titlePage = 'List Service';
    const titleNavigation = 'Service';

    console.log(services);

    return (
        <DashboardLayout>
            <>
                <Head title={titlePage} />

                <div className="flex flex-col items-center justify-between md:flex-row">
                    <h1>{titleNavigation}</h1>
                    <div className="flex w-full flex-col gap-5 md:w-fit md:flex-row">
                        <Link
                            href={route('admin.service.create')}
                            className="btn btn-primary text-primary-content"
                        >
                            <FaPlus />
                            Add
                        </Link>
                    </div>
                </div>

                <div className="mb-10"></div>

                <div className="card bg-base-100 w-full shadow-xl">
                    <div className="card-body">
                        <h2 className="card-title">{titlePage}</h2>
                        <div className="w-full">
                            <ListItem items={services} />
                        </div>
                    </div>
                </div>
            </>
        </DashboardLayout>
    );
};

const ListItem = ({ items }) => {
    return (
        <div>
            <div className="overflow-x-auto">
                <table className="table">
                    <thead>
                        <tr>
                            <th>Name</th>
                            <th>Price</th>
                        </tr>
                    </thead>
                    <tbody>
                        {items.length > 0 &&
                            items.map((item) => (
                                <Item item={item} key={item.id} />
                            ))}
                        {items.length <= 0 && (
                            <tr>
                                <td colSpan={2}>
                                    <p className="text-center">
                                        data not found
                                    </p>
                                </td>
                            </tr>
                        )}
                    </tbody>
                    <tfoot>
                        <tr>
                            <th>Name</th>
                            <th>Price</th>
                        </tr>
                    </tfoot>
                </table>
            </div>
        </div>
    );
};

const Item = ({ item }) => {
    return (
        <tr className="hover">
            <td>{item.name}</td>
            <td>{item.price}</td>
            <td>
                <div className="join join-vertical lg:join-horizontal">
                    <Link
                        href={route('admin.service.edit', {
                            id: item.id,
                        })}
                        className="btn btn-primary join-item text-primary-content"
                        disabled={false}
                    >
                        <FaPen />
                        Edit
                    </Link>
                    <Link
                        className="btn btn-error join-item text-error-content"
                        disabled={false}
                        method="delete"
                        href={route('admin.service.destroy', {
                            id: item.id,
                        })}
                        as="button"
                    >
                        <FaTrash />
                        Delete
                    </Link>
                </div>
            </td>
        </tr>
    );
};

export default Page;

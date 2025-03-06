import DashboardLayout from '@/Layouts/DashboardLayout';
import { Head } from '@inertiajs/react';

const Page = () => {
    const titlePage = 'Dashboard';
    const titleNavigation = 'Dashboard';

    return (
        <DashboardLayout>
            <>
                <Head title={titlePage} />

                <h1>{titleNavigation}</h1>
            </>
        </DashboardLayout>
    );
};

export default Page;

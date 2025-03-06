import { usePage } from '@inertiajs/react';

const ApplicationName = (props) => {
    const { appName } = usePage().props;
    return <span {...props}>{appName}</span>;
};

export default ApplicationName;

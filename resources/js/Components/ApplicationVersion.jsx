import { usePage } from '@inertiajs/react';

const ApplicationVersion = (props) => {
    const { appVersion } = usePage().props;
    return <span {...props}>version: {appVersion}</span>;
};

export default ApplicationVersion;

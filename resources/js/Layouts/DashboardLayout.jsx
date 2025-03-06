import ApplicationLogo from '@/Components/ApplicationLogo';
import ApplicationName from '@/Components/ApplicationName';
import ApplicationVersion from '@/Components/ApplicationVersion';
import { Link, usePage } from '@inertiajs/react';
import { FaBars, FaUserCircle } from 'react-icons/fa';
import { GrStatusUnknown } from 'react-icons/gr';

const DashboardLayout = ({ children }) => {
    const { user } = usePage().props.auth;
    const { roles } = usePage().props;
    const roleName = user.role;
    const userName = user.name;

    return (
        <>
            <div className="drawer lg:drawer-open">
                <input
                    id="my-drawer"
                    type="checkbox"
                    className="drawer-toggle"
                />

                {/* drawer content */}
                <div className="drawer-content">
                    {/* navbar */}
                    <div className="bg-base-100 text-base-content sticky top-0 z-30 flex h-16 w-full justify-center bg-opacity-90 shadow-sm backdrop-blur transition-shadow duration-100 [transform:translate3d(0,0,0)]">
                        <nav className="navbar w-full">
                            <div className="flex flex-1 md:gap-1 lg:gap-2">
                                <span
                                    className="tooltip tooltip-bottom before:text-xs before:content-[attr(data-tip)]"
                                    data-tip="Menu"
                                >
                                    <label
                                        aria-label="Open menu"
                                        htmlFor="my-drawer"
                                        className="btn btn-square btn-ghost drawer-button lg:hidden"
                                    >
                                        <FaBars />
                                    </label>
                                </span>

                                <div className="flex items-center gap-2 lg:hidden">
                                    <a
                                        href="/"
                                        aria-current="page"
                                        aria-label="logo"
                                        className="flex-0 btn btn-ghost gap-1 px-2 md:gap-2"
                                    >
                                        <span className="font-title text-base-content text-lg md:text-2xl">
                                            <ApplicationLogo className="h-10 w-auto" />
                                        </span>
                                    </a>
                                </div>
                            </div>

                            <div className="flex-0">
                                <div className="dropdown dropdown-end">
                                    <div
                                        tabIndex={0}
                                        role="button"
                                        className="avatar btn btn-circle btn-ghost"
                                    >
                                        <div className="w-10 rounded-full">
                                            <FaUserCircle className="text-secondary h-full w-full" />
                                        </div>
                                    </div>
                                    <ul
                                        tabIndex={0}
                                        className="menu dropdown-content menu-sm rounded-box bg-base-100 z-[1] mt-3 w-52 p-2 shadow"
                                    >
                                        <div className="px-3 py-1">
                                            <span>{userName}</span>
                                            <br />
                                            <span className="font-bold">
                                                {roleName}
                                            </span>
                                        </div>
                                        <div className="divider px-3 py-1"></div>
                                        <li>
                                            <Link
                                                href={route('auth.logout')}
                                                method="post"
                                                as="button"
                                            >
                                                Logout
                                            </Link>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </nav>
                    </div>

                    {/* content */}
                    <div className="max-w-[100vw] px-6 pb-16 xl:pr-2">
                        <div className="flex flex-col-reverse justify-between gap-6 xl:flex-row">
                            <div className="prose prose-sm md:prose-base w-full max-w-4xl flex-grow pt-10">
                                {children}
                                <Footer />
                            </div>
                            <div></div>
                        </div>
                    </div>
                </div>

                {/* drawer side */}
                <div
                    className="drawer-side z-40"
                    style={{
                        scrollBehavior: 'smooth',
                        scrollPaddingTop: '5rem',
                    }}
                >
                    <label
                        htmlFor="my-drawer"
                        aria-label="close sidebar"
                        className="drawer-overlay"
                    ></label>
                    <aside className="bg-base-100 min-h-screen w-80">
                        <div className="bg-base-100 sticky top-0 z-20 flex items-center gap-2 bg-opacity-90 px-4 py-2 backdrop-blur">
                            <a
                                href="/"
                                aria-current="page"
                                aria-label="Homepage"
                                className="flex-0 btn btn-ghost w-full px-2"
                            >
                                <div className="font-title inline-flex w-full text-lg md:text-2xl">
                                    <ApplicationLogo className="h-10 w-auto" />
                                </div>
                            </a>
                        </div>
                        <div className="h-4"></div>
                        <ul className="menu bg-base-100 text-base-content min-h-full w-80 px-4 py-0">
                            {user.role == roles.ADMIN && (
                                <>
                                    <li>
                                        <Link
                                            href={route('admin.service.index')}
                                        >
                                            <span className="text-base-content">
                                                <GrStatusUnknown />
                                            </span>{' '}
                                            Services
                                        </Link>
                                    </li>
                                    <li>
                                        <Link href={'#'}>
                                            <span className="text-base-content">
                                                <GrStatusUnknown />
                                            </span>{' '}
                                            Users
                                        </Link>
                                    </li>
                                    <li>
                                        <Link href={'#'}>
                                            <span className="text-base-content">
                                                <GrStatusUnknown />
                                            </span>{' '}
                                            Repairs
                                        </Link>
                                    </li>
                                </>
                            )}
                        </ul>
                    </aside>
                </div>
            </div>
        </>
    );
};

const Footer = () => {
    return (
        <footer className="footer footer-center bg-base-200 text-base-content p-4">
            <aside>
                <p>
                    <ApplicationVersion /> | Copyright ©{' '}
                    {new Date().getFullYear()} - <ApplicationName />
                </p>
            </aside>
        </footer>
    );
};

export default DashboardLayout;

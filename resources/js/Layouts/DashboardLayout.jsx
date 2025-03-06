import ApplicationLogo from '@/Components/ApplicationLogo';
import ApplicationName from '@/Components/ApplicationName';
import ApplicationVersion from '@/Components/ApplicationVersion';
import { Link } from '@inertiajs/react';
import { FaBars, FaUserCircle, FaUserCog } from 'react-icons/fa';
import { GrStatusUnknown } from 'react-icons/gr';

const DashboardLayout = ({ children }) => {
    const roleName = 'Role Name';
    const userName = 'User Name';

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
                            <div>hello world side</div>
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
                            <li>
                                <details id="disclosure-components" open="">
                                    <summary className="group">
                                        <span>
                                            <FaUserCog />
                                        </span>{' '}
                                        Pengaturan Akun
                                    </summary>
                                    <ul>
                                        <h2 className="menu-title flex items-center gap-4 px-1.5">
                                            <span className="text-base-content">
                                                <FaUserCog />
                                            </span>{' '}
                                            Actions
                                        </h2>
                                        <ul>
                                            <li>
                                                <Link href={'#'}>
                                                    <span className="text-base-content">
                                                        <FaUserCog />
                                                    </span>{' '}
                                                    Manage User
                                                </Link>
                                            </li>
                                            <li>
                                                <Link href={'#'}>
                                                    <span className="text-base-content">
                                                        <FaUserCog />
                                                    </span>{' '}
                                                    Manage Role
                                                </Link>
                                            </li>
                                        </ul>
                                    </ul>
                                </details>
                            </li>
                            {/* Nav 1 */}
                            <li>
                                <details id="disclosure-components" open="">
                                    <summary className="group">
                                        <span>
                                            <GrStatusUnknown />
                                        </span>{' '}
                                        Parent Nav 1
                                    </summary>
                                    <ul>
                                        <li>
                                            <h2 className="menu-title flex items-center gap-4 px-1.5">
                                                <span className="text-base-content">
                                                    <GrStatusUnknown />
                                                </span>{' '}
                                                Group Nav 1
                                            </h2>
                                            <ul>
                                                <li>
                                                    <Link href={'#'}>
                                                        <span className="text-base-content">
                                                            <GrStatusUnknown />
                                                        </span>{' '}
                                                        Sub Nav 1
                                                    </Link>
                                                </li>
                                                <li>
                                                    <Link href={'#'}>
                                                        <span className="text-base-content">
                                                            <GrStatusUnknown />
                                                        </span>{' '}
                                                        Sub Nav 2
                                                    </Link>
                                                </li>
                                            </ul>
                                        </li>
                                        <li>
                                            <h2 className="menu-title flex items-center gap-4 px-1.5">
                                                <span className="text-base-content">
                                                    <GrStatusUnknown />
                                                </span>{' '}
                                                Group Nav 1
                                            </h2>
                                            <ul>
                                                <li>
                                                    <Link href={'#'}>
                                                        <span className="text-base-content">
                                                            <GrStatusUnknown />
                                                        </span>{' '}
                                                        Sub Nav 1
                                                    </Link>
                                                </li>
                                                <li>
                                                    <Link href={'#'}>
                                                        <span className="text-base-content">
                                                            <GrStatusUnknown />
                                                        </span>{' '}
                                                        Sub Nav 2
                                                    </Link>
                                                </li>
                                            </ul>
                                        </li>
                                        <li>
                                            <h2 className="menu-title flex items-center gap-4 px-1.5">
                                                <span className="text-base-content">
                                                    <GrStatusUnknown />
                                                </span>{' '}
                                                Group Nav 1
                                            </h2>
                                            <ul>
                                                <li>
                                                    <Link href={'#'}>
                                                        <span className="text-base-content">
                                                            <GrStatusUnknown />
                                                        </span>{' '}
                                                        Sub Nav 1
                                                    </Link>
                                                </li>
                                                <li>
                                                    <Link href={'#'}>
                                                        <span className="text-base-content">
                                                            <GrStatusUnknown />
                                                        </span>{' '}
                                                        Sub Nav 2
                                                    </Link>
                                                </li>
                                            </ul>
                                        </li>
                                    </ul>
                                </details>
                            </li>
                            {/* Nav 2 */}
                            <li>
                                <details id="disclosure-components" open="">
                                    <summary className="group">
                                        <span>
                                            <GrStatusUnknown />
                                        </span>{' '}
                                        Parent Nav 2
                                    </summary>
                                    <ul>
                                        <li>
                                            <h2 className="menu-title flex items-center gap-4 px-1.5">
                                                <span className="text-base-content">
                                                    <GrStatusUnknown />
                                                </span>{' '}
                                                Group Nav 1
                                            </h2>
                                            <ul>
                                                <li>
                                                    <Link href={'#'}>
                                                        <span className="text-base-content">
                                                            <GrStatusUnknown />
                                                        </span>{' '}
                                                        Sub Nav 1
                                                    </Link>
                                                </li>
                                                <li>
                                                    <h2 className="menu-title flex items-center gap-4 px-1.5">
                                                        <span className="text-base-content">
                                                            <GrStatusUnknown />
                                                        </span>{' '}
                                                        Nested 1
                                                    </h2>
                                                    <ul>
                                                        <li>
                                                            <Link href={'#'}>
                                                                <span className="text-base-content">
                                                                    <GrStatusUnknown />
                                                                </span>{' '}
                                                                Sub Nav 1
                                                            </Link>
                                                        </li>
                                                        <li>
                                                            <h2 className="menu-title flex items-center gap-4 px-1.5">
                                                                <span className="text-base-content">
                                                                    <GrStatusUnknown />
                                                                </span>{' '}
                                                                Group Nav 1
                                                            </h2>
                                                            <ul>
                                                                <li>
                                                                    <Link
                                                                        href={
                                                                            '#'
                                                                        }
                                                                    >
                                                                        <span className="text-base-content">
                                                                            <GrStatusUnknown />
                                                                        </span>{' '}
                                                                        Sub Nav
                                                                        1
                                                                    </Link>
                                                                </li>
                                                                <li>
                                                                    <Link
                                                                        href={
                                                                            '#'
                                                                        }
                                                                    >
                                                                        <span className="text-base-content">
                                                                            <GrStatusUnknown />
                                                                        </span>{' '}
                                                                        Sub Nav
                                                                        2
                                                                    </Link>
                                                                </li>
                                                            </ul>
                                                        </li>
                                                    </ul>
                                                </li>
                                            </ul>
                                        </li>
                                    </ul>
                                </details>
                            </li>
                            <li>
                                <details id="disclosure-docs" open="">
                                    <summary className="group">
                                        <span>
                                            <svg
                                                width="18"
                                                height="18"
                                                viewBox="0 0 48 48"
                                                className="h-5 w-5 text-orange-400"
                                                fill="none"
                                                xmlns="http://www.w3.org/2000/svg"
                                            >
                                                <path
                                                    d="M5 7H16C20.4183 7 24 10.5817 24 15V42C24 38.6863 21.3137 36 18 36H5V7Z"
                                                    fill="none"
                                                    stroke="currentColor"
                                                    strokeWidth="4"
                                                    strokeLinejoin="bevel"
                                                ></path>
                                                <path
                                                    d="M43 7H32C27.5817 7 24 10.5817 24 15V42C24 38.6863 26.6863 36 30 36H43V7Z"
                                                    fill="none"
                                                    stroke="currentColor"
                                                    strokeWidth="4"
                                                    strokeLinejoin="bevel"
                                                ></path>
                                            </svg>
                                        </span>
                                        Docs
                                    </summary>
                                    <ul>
                                        <li>
                                            <a
                                                href="/docs/install/"
                                                className="group"
                                            >
                                                <span>Install</span>
                                            </a>
                                        </li>
                                        <li>
                                            <a
                                                href="/docs/use/"
                                                className="group"
                                            >
                                                <span>Use</span>
                                            </a>
                                        </li>
                                        <li>
                                            <a
                                                href="/docs/customize/"
                                                className="active active group"
                                            >
                                                <span>
                                                    Customize components
                                                </span>
                                            </a>
                                        </li>
                                        <li>
                                            <a
                                                href="/docs/config/"
                                                className="group"
                                            >
                                                <span>Config</span>
                                            </a>
                                        </li>
                                        <li>
                                            <a
                                                href="/docs/colors/"
                                                className="group"
                                            >
                                                <span>Colors</span>
                                            </a>
                                        </li>
                                        <li>
                                            <a
                                                href="/docs/themes/"
                                                className="bg-primary text-primary-content group"
                                            >
                                                <span>Themes</span>
                                            </a>
                                        </li>
                                        <li>
                                            <a
                                                href="/docs/utilities/"
                                                className="group"
                                            >
                                                <span>Utilities</span>
                                            </a>
                                        </li>
                                        <li>
                                            <a
                                                href="/docs/layout-and-typography/"
                                                className="group"
                                            >
                                                <span>
                                                    Layout &amp; Typography
                                                </span>
                                            </a>
                                        </li>
                                    </ul>
                                </details>
                            </li>
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

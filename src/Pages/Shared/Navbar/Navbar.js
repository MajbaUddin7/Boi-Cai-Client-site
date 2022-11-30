import React, { Fragment, useContext, useEffect, useState } from 'react';
import { Disclosure, Menu, Transition } from '@headlessui/react'
import { Bars3Icon, BellIcon, XMarkIcon } from '@heroicons/react/24/outline'
import { Link } from 'react-router-dom';
import { AuthContext } from "../../Contexts/AuthProvider/AuthProvider";
import logo from "../../../assets/images/logo.png"


const Navbar = () => {

    const { user, logOut } = useContext(AuthContext);
    // console.log(user);

    const [adminRole, setAdminRole] = useState([]);
    useEffect(() => {
        // fetch(`http://localhost:5000/users/admin/${user?.email}`)
        fetch(`https://swap-station-server.vercel.app/users/admin/${user?.email}`)
            .then(res => res.json())
            .then(data => setAdminRole(data))
    }, [user?.email]);

    const [sellerRole, setSellerRole] = useState([]);
    useEffect(() => {
        // fetch(`http://localhost:5000/users/seller/${user?.email}`)
        fetch(`https://swap-station-server.vercel.app/users/seller/${user?.email}`)
            .then(res => res.json())
            .then(data => setSellerRole(data))
    }, [user?.email]);


    const [buyerRole, setBuyerRole] = useState([]);
    useEffect(() => {
        // fetch(`http://localhost:5000/users/buyer/${user?.email}`)
        fetch(`https://swap-station-server.vercel.app/users/buyer/${user?.email}`)
            .then(res => res.json())
            .then(data => setBuyerRole(data))
    }, [user?.email]);

    // console.log(buyerRole);

    function classNames(...classes) {
        return classes.filter(Boolean).join(' ')
    }

    const handleLogOut = () => {
        logOut()
            .then(() => { })
            .catch(error => console.error(error))
    }

    // const navigation = [
    //     {
    //         name: 'Home',
    //         href: '/'
    //     },
    //     {
    //         name: 'Log In',
    //         href: '/login'
    //     }
    // ]

    const navClass = 'text-white  hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium';

    const navList = (
        <>
            <li>
                <Link to='/' className={navClass}>Home</Link>
            </li>
            <li>
                <Link to='/blog' className={navClass}>Blog</Link>
            </li>

            {
                user && adminRole.isAdmin && <>
                    <Link to='/dashboard/admin' className={navClass}>Dashbord Admin</Link>
                    {/* <li><Link to='/dashboard/seller' className={navClass}>Add a product</Link></li> */}
                </>
            }
            {
                user && sellerRole.isSeller && <>
                    <li><Link to='/dashboard/seller' className={navClass}>Dashbord Seller</Link></li>
                    {/* <li><Link to='/dashboard/seller' className={navClass}>Add a product</Link></li> */}
                </>
            }
            {
                user && buyerRole.isBuyer && <>
                    <li><Link to='/dashboard/buyer' className={navClass}>Dashbord Buyer</Link></li>
                    {/* <li><Link to='/dashboard/seller' className={navClass}>My Orders</Link></li> */}
                </>
            }

            <li>
                {
                    user?.email ? <button onClick={handleLogOut}><Link to="/login" className={navClass}>Log Out</Link></button> : <Link to="/login" className={navClass}>Log In</Link>
                }
            </li>
        </>
    )

    return (
        <div className=' bg-gray-800'>

            <Disclosure as="nav" className="md:w-10/12 w-full mx-auto">
                {({ open }) => (
                    <>
                        <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
                            <div className="relative flex h-16 items-center justify-between">
                                <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">

                                    {/* Mobile menu button*/}
                                    <Disclosure.Button className="inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-gray-700 hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white">
                                        <span className="sr-only">Open main menu</span>
                                        {open ? (
                                            <XMarkIcon className="block h-6 w-6" aria-hidden="true" />
                                        ) : (
                                            <Bars3Icon className="block h-6 w-6" aria-hidden="true" />
                                        )}
                                    </Disclosure.Button>
                                </div>

                                <div className="flex flex-1 items-center justify-center sm:items-stretch sm:justify-start">
                                    <div className="flex flex-shrink-0 items-center">
                                        <img
                                            className="block h-8 w-auto lg:hidden"
                                            src={logo}
                                            // src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=500"
                                            alt="Your Company"
                                        />
                                        <img
                                            className="hidden h-8 w-auto lg:block"
                                            src={logo}
                                            alt="Your Company"
                                        />
                                    </div>
                                    <div className="hidden sm:ml-6 sm:block">
                                        <div className="flex space-x-4">
                                            {/* {navigation.map((item) => (
                                                <a
                                                    key={item.name}
                                                    href={item.href}
                                                    className={classNames(
                                                        item.current ? 'bg-gray-900 text-white' : 'text-gray-300 hover:bg-gray-700 hover:text-white',
                                                        'px-3 py-2 rounded-md text-sm font-medium'
                                                    )}
                                                    aria-current={item.current ? 'page' : undefined}
                                                >
                                                    {item.name}
                                                </a>
                                            ))} */}
                                            <ul className="flex space-x-4 items-center justify-center">
                                                {
                                                    navList
                                                }
                                            </ul>

                                        </div>
                                    </div>
                                </div>

                                <div className="absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">
                                    <button
                                        type="button"
                                        className="rounded-full bg-gray-800 p-1 text-gray-400 hover:text-white focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800"
                                    >
                                        <span className="sr-only">View notifications</span>
                                        <BellIcon className="h-6 w-6" aria-hidden="true" />
                                    </button>

                                    {/* Profile dropdown */}
                                    <Menu as="div" className="relative ml-3">
                                        <div>
                                            <Menu.Button className="flex rounded-full bg-gray-800 text-sm focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800">
                                                <span className="sr-only">Open user menu</span>
                                                <img
                                                    className="h-8 w-8 rounded-full"
                                                    src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                                                    alt=""
                                                />
                                            </Menu.Button>
                                        </div>
                                        <Transition
                                            as={Fragment}
                                            enter="transition ease-out duration-100"
                                            enterFrom="transform opacity-0 scale-95"
                                            enterTo="transform opacity-100 scale-100"
                                            leave="transition ease-in duration-75"
                                            leaveFrom="transform opacity-100 scale-100"
                                            leaveTo="transform opacity-0 scale-95"
                                        >
                                            <Menu.Items className="absolute right-0 z-10 mt-2 w-48 origin-top-right rounded-md bg-white py-1 shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
                                                <Menu.Item>
                                                    {({ active }) => (
                                                        <a
                                                            href="/"
                                                            className={classNames(active ? 'bg-gray-100' : '', 'block px-4 py-2 text-sm text-gray-700')}
                                                        >
                                                            Your Profile
                                                        </a>
                                                    )}
                                                </Menu.Item>
                                                <Menu.Item>
                                                    {({ active }) => (
                                                        <a
                                                            href="/"
                                                            className={classNames(active ? 'bg-gray-100' : '', 'block px-4 py-2 text-sm text-gray-700')}
                                                        >
                                                            Settings
                                                        </a>
                                                    )}
                                                </Menu.Item>
                                                <Menu.Item>
                                                    {({ active }) => (
                                                        <a
                                                            href="/"
                                                            className={classNames(active ? 'bg-gray-100' : '', 'block px-4 py-2 text-sm text-gray-700')}
                                                        >
                                                            Sign out
                                                        </a>
                                                    )}
                                                </Menu.Item>
                                            </Menu.Items>
                                        </Transition>
                                    </Menu>
                                </div>
                            </div>
                        </div>

                        <Disclosure.Panel className="sm:hidden">
                            <div className="space-y-1 px-2 pt-2 pb-3">
                                {/* {navigation.map((item) => (
                                    <Disclosure.Button
                                        key={item.name}
                                        as="a"
                                        href={item.href}
                                        className={classNames(
                                            item.current ? 'bg-gray-900 text-white' : 'text-gray-300 hover:bg-gray-700 hover:text-white',
                                            'block px-3 py-2 rounded-md text-base font-medium'
                                        )}
                                        aria-current={item.current ? 'page' : undefined}
                                    >
                                        {item.name}
                                    </Disclosure.Button>
                                ))} */}

                                <ul className="flex flex-col space-x-4 items-center justify-center">
                                    {
                                        navList
                                    }
                                </ul>

                            </div>
                        </Disclosure.Panel>
                    </>
                )}
            </Disclosure>



        </div>

    );
};

export default Navbar;
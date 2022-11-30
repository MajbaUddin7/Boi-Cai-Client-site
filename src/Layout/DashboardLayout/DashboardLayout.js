import React, { useContext, useEffect, useState } from 'react';
import { Link, Outlet } from 'react-router-dom';
// import useAdmin from '../../hooks/useAdmin';
import { AuthContext } from '../../Pages/Contexts/AuthProvider/AuthProvider';
import Footer from '../../Pages/Shared/Footer/Footer';
import Navbar from '../../Pages/Shared/Navbar/Navbar';

const DashboardLayout = () => {
    const { user } = useContext(AuthContext);
    // const [isAdmin] = useAdmin(user?.email)


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
    return (
        <div>
            <Navbar></Navbar>

            <div className="w-10/12 mx-auto">
                <div className="flex md:flex-row flex-col">
                    <div className="md:w-1/5 w-full bg-red-400">
                        <ul className='text-center'>
                            {
                                user && adminRole.isAdmin && <>
                                    <li><Link to="/dashboard/admin/allsellers">All Sellers</Link></li>
                                    <li><Link to="/dashboard/admin/allbuyers">All Buyers</Link></li>
                                </>
                            }
                            {
                                user && sellerRole.isSeller && <>
                                    <li className='border-2 border-amber-200 p-2 m-5'><Link to="/dashboard/seller/addproduct" >Add Product</Link></li>
                                </>
                            }
                            {
                                user && buyerRole.isBuyer && <>
                                    <li><Link to="/dashboard/addproduct">My Orders</Link></li>
                                </>
                            }
                        </ul>
                    </div>
                    <div className="md:w-4/5 sm:w-full bg-amber-200">
                        <Outlet></Outlet>
                    </div>
                </div>


            </div>

            <Footer></Footer>




            {/* <div className="drawer drawer-mobile">
                <input id="dashboard-drawer" type="checkbox" className="drawer-toggle" />
                <div className="drawer-content">
                    <Outlet></Outlet>
                </div>
                <div className="drawer-side">
                    <label htmlFor="dashboard-drawer" className="drawer-overlay"></label>
                    <ul className="menu p-4 w-80 text-base-content">
                        <li><Link to="/dashboard">My Appointments</Link></li>
                        {
                            isAdmin && <>
                                <li><Link to="/dashboard/allusers">All users</Link></li>
                                <li><Link to="/dashboard/adddoctor">Add A Doctor</Link></li>
                                <li><Link to="/dashboard/managedoctors">Manage Doctors</Link></li>
                            </>
                        }

                    </ul>

                </div>
            </div> */}
        </div>
    );
};

export default DashboardLayout;
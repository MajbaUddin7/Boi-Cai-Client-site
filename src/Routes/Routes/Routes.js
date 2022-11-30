import { createBrowserRouter } from "react-router-dom";
import DashboardLayout from "../../Layout/DashboardLayout/DashboardLayout";
import Main from "../../Layout/Main/Main";
import Error from "../../Pages/404/Error";
import AddProducts from "../../Pages/AddProducts/AddProducts";
import AllBuyers from "../../Pages/AllBuyers/AllBuyers";
import AllSellers from "../../Pages/AllSellers/AllSellers";
import Blogs from "../../Pages/Blog/Blogs";
import SingleCategory from "../../Pages/Home/Categories/SingleCategory/SingleCategory";
import Home from "../../Pages/Home/Home/Home";
import LogIn from "../../Pages/Join/LogIn/LogIn";
import Register from "../../Pages/Join/Register/Register";
import Test from "../../Pages/Test.js/Test";
import PrivateRoute from "../PrivateRoute/PrivateRoute";

const router = createBrowserRouter([
    {
        path: '/',
        element: <Main></Main>,
        children: [
            {
                path: '/',
                element: <Home></Home>
            },
            {
                path: '/blog',
                element: <Blogs></Blogs>
            },
            // {
            //     path: '/blog/:id',
            //     element: <Home></Home>,
            //     loader: () => fetch('blogs.json')
            // },
            {
                path: '/category/:id',
                element: <SingleCategory></SingleCategory>,
                // loader: ({ params }) => fetch(`http://localhost:5000/category?category_id=${params.id}`)
                loader: ({ params }) => fetch(`https://swap-station-server.vercel.app/category?category_id=${params.id}`)
            },
            {
                path: '/login',
                element: <LogIn></LogIn>
            },
            {
                path: '/register',
                element: <Register></Register>
            },
            {
                path: "/test",
                element: <Test></Test>
            }
        ]
    },
    {
        path: '/dashboard',
        element: <PrivateRoute><DashboardLayout></DashboardLayout></PrivateRoute>,
        errorElement: <Error></Error>,
        children: [
            {
                path: '/dashboard/admin',
                element: <p>Hello, I am Admin.</p>
            },
            {
                path: '/dashboard/seller',
                element: <p>Hello, I am Seller.</p>
            },
            {
                path: '/dashboard/seller/addproduct',
                element: <AddProducts></AddProducts>
            },
            {
                path: '/dashboard/buyer',
                element: <p>Hello, I am Buyer.</p>
            },
            {
                path: '/dashboard/admin/allsellers',
                // element: <AdminRoute><AllUsers></AllUsers></AdminRoute>
                element: <AllSellers></AllSellers>
            },
            {
                path: '/dashboard/admin/allbuyers',
                element: <AllBuyers></AllBuyers>
            },
            // {
            //     path: '/dashboard/managedoctors',
            //     element: <AdminRoute><ManageDoctors></ManageDoctors></AdminRoute>
            // },
            // {
            //     path: '/dashboard/payment/:id',
            //     element: <Payment></Payment>,
            //     loader: ({ params }) => fetch(`https://doctors-portal-server-rust.vercel.app/bookings/${params.id}`)
            // },
        ]
    },
    {
        path: '*',
        element: <Error></Error>
    }
])

export default router;
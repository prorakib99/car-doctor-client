import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import Home from "../pages/Home/Home/Home";
import Users from "../Layout/Users";
import Login from "../pages/Login/Login";
import Register from "../pages/Register/Register";
import BookingService from "../pages/BookingService/BookingService";
import Bookings from "../pages/Bookings/Bookings";
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
                path: 'book/:id',
                element: <BookingService></BookingService>,
                loader: ({ params }) => fetch(`http://localhost:5000/services/${params.id}`)
            },
            {
                path: 'bookings',
                element: <PrivateRoute><Bookings /></PrivateRoute>
            }
        ]
    },
    {
        path: 'user',
        element: <Users></Users>,
        children: [
            {
                path: 'login',
                element: <Login></Login>
            },
            {
                path: 'register',
                element: <Register></Register>
            }
        ]
    }
])

export default router;
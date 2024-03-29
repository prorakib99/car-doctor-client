import { Link } from "react-router-dom";
import logo from '../../../assets/logo.svg'
import { useContext } from "react";
import { AuthContext } from "../../../provider/AuthProvider";


const Header = () => {
    const { user, logOut } = useContext(AuthContext);

    const handleLogout = () => {
        logOut()
            .then(() => {
                localStorage.removeItem('car-access-token')
            })
            .catch(error => console.log(error))
    }

    const navItems = <>
        <li><Link to="/" className="text-neutral-700 text-lg font-semibold font-['Inter']">Home</Link> </li>
        <li> <Link to="/about" className="text-neutral-700 text-lg font-semibold font-['Inter']">About</Link> </li>
        {
            user ? <>
                <li> <Link to="/bookings" className="text-neutral-700 text-lg font-semibold font-['Inter']">Orders</Link> </li>
                <li> <button onClick={handleLogout} className="text-neutral-700 text-lg font-semibold font-['Inter']">Logout</button> </li>
            </> : <li> <Link to="/user/login" className="text-neutral-700 text-lg font-semibold font-['Inter']">Login</Link> </li>
        }
    </>
    return (
        <div className="navbar relative z-20 bg-base-100 flex items-center my-5">
            <div className="navbar-start">
                <div className="dropdown flex-1 lg:flex-none">
                    <label tabIndex={0} className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </label>
                    <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
                        {navItems}
                    </ul>
                </div>
                <Link to="/">
                    <img src={logo} alt="" />
                </Link>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1">
                    {navItems}
                </ul>
            </div>
            <div className="navbar-end">
                <button className="btn btn-outline hover:bg-primary text-primary lg:px-5 lg:text-lg font-semibold font-['Inter']">Appointment</button>
            </div>
        </div>
    );
};

export default Header;
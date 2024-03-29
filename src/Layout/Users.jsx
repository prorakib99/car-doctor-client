import { Outlet } from "react-router-dom";
import Header from "../pages/Shared/Header/Header";

const Users = () => {
    return (
        <div className="container mx-auto px-8">
            <Header></Header>
            <Outlet></Outlet>
        </div>
    );
};

export default Users;
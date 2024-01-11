import { Outlet } from "react-router-dom";
import Header from "../pages/Shared/Header/Header";
import Footer from "../pages/Shared/Footer/Footer";
import { ToastContainer } from "react-toastify";

const Main = () => {
    return (
        <>
            <div className="container mx-auto px-8">
                <ToastContainer />
                <Header></Header>
                <Outlet></Outlet>
            </div>
            <Footer></Footer>
        </>
    );
};

export default Main;
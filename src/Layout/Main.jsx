import { Outlet } from "react-router-dom";
import Header from "../pages/Shared/Header/Header";
import Footer from "../pages/Shared/Footer/Footer";

const Main = () => {
    return (
        <>
            <div className="container mx-auto px-8">
                <Header></Header>
                <Outlet></Outlet>
            </div>
            <Footer></Footer>
        </>
    );
};

export default Main;
import { Outlet } from "react-router-dom";
import Navbar from "../components/Navbar/Navbar";
import Footer from "../components/Footer/Footer";



const MainLayout = () => {
    return (
        <div>
            <Navbar></Navbar>
            <div className="max-w-[1700px] mx-auto">
            <Outlet></Outlet>
            </div>
            <Footer></Footer>
        </div>
    );
};

export default MainLayout;
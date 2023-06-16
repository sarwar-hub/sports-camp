import { Fade } from "react-awesome-reveal";
import useUser from "../../../hooks/useUser";
import { Helmet } from "react-helmet-async";

const DashboardHome = () => {
    const [ ,currentUser] = useUser();
    return (
        <div>
            <Helmet><title>Dashboard | Sports Camp</title></Helmet>

                
            <Fade><h1 className="text-5xl md:text-7xl text-dark dark:text-light">Welcome, {currentUser.name}</h1></Fade>
           
        </div>
    );
};

export default DashboardHome;
import { Fade } from "react-awesome-reveal";
import useUser from "../../../hooks/useUser";

const DashboardHome = () => {
    const [ ,currentUser] = useUser();
    return (
        <div>
                
            <Fade><h1 className="text-5xl md:text-7xl text-dark dark:text-light">Welcome, {currentUser.name}</h1></Fade>
           
        </div>
    );
};

export default DashboardHome;
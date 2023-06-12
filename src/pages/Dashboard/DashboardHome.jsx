import useUser from "../../hooks/useUser";

const DashboardHome = () => {
    const [currentUser] = useUser();
    return (
        <div>
            
            <h1 className="text-5xl md:text-7xl text-gray">Welcome, {currentUser.name}</h1>
        </div>
    );
};

export default DashboardHome;
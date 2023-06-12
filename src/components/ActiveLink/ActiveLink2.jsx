import { NavLink } from "react-router-dom";


const ActiveLink2 = ({to, children}) => {
    return (
        <NavLink
            to={to}
            className={({ isActive }) =>
                isActive ? "text-light" : ""
            }
        >
            {children}
        </NavLink>
    );
};

export default ActiveLink2;
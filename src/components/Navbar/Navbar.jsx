import { Link } from "react-router-dom";
import ActiveLink from "../ActiveLink/ActiveLink";
import { useContext } from "react";
import { AuthContext } from "../../context/AuthProvider";


const navItems = [
  <li className="hover:text-sec font-semibold transition"><ActiveLink to='/'>Home</ActiveLink></li>,
  <li className="hover:text-sec font-semibold transition"><ActiveLink to='/instructors'>Instructors</ActiveLink></li>,
  <li className="hover:text-sec font-semibold transition"><ActiveLink to='/courses'>Courses</ActiveLink></li>,
  <li className="hover:text-sec font-semibold transition"><ActiveLink to='/dashboard/home'>Dashboard</ActiveLink></li>,
];

const Navbar = () => {

  const {logout, user} = useContext(AuthContext);

  const handleLogout = async() => {
    await logout();
  }

  return (
    <div className="drawer bg-dark/50 fixed z-10">

      <input id="my-drawer-3" type="checkbox" className="drawer-toggle" />
      <div className="drawer-content flex flex-col">

        <div className="w-full navbar text-light max-w-[1480px] mx-auto">

          <div className="flex-none lg:hidden ">
            <label htmlFor="my-drawer-3" className="btn btn-square btn-ghost">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" className="inline-block w-6 h-6 stroke-current"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"></path></svg>
            </label>
          </div>

          <div className="flex-1 px-2 mx-2 text-3xl font-bold uppercase">Sports Camp</div>
          <div className="flex-none hidden lg:block">
            <ul className="space-x-5 menu-horizontal">

              {navItems}

            </ul>
          </div>
          {/* login button and user profile */}
          {!user
          ?
          <div className="mx-5">
            <Link to='/login'><button className="bg-transparent px-2 py-1 text-light font-semibold border-[1px] border-light hover:text-sec hover:border-sec hover:bg-sec/10">Login</button></Link>
          </div>
          :
          <div className="ml-5 dropdown dropdown-end text-light">
            <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
              <div className="w-10 rounded-full">
                <img src={user?.photoURL} />
              </div>
            </label>
            <ul tabIndex={0} className="mt-3 p-2 text-center shadow menu menu-sm dropdown-content bg-dark w-52">
              <p className="text-sec p-2">{user?.displayName}</p>
              <Link className="hover:text-sec hover:bg-dark2 p-2">Profile</Link>
              <button onClick={handleLogout} className="hover:text-red-600 hover:bg-dark2 p-2">Logout</button>
            </ul>
          </div>
          }

        </div>

        {/* drawer */}
      </div>
      <div className="drawer-side">
        <label htmlFor="my-drawer-3" className="drawer-overlay"></label>
        <ul className="space-y-5 p-4 w-60 h-full bg-dark">

          {navItems}

        </ul>

      </div>

    </div>
  );
};

export default Navbar;
import { Link } from "react-router-dom";
import ActiveLink from "../ActiveLink/ActiveLink";
import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../context/AuthProvider";
import { HiMoon, HiSun } from "react-icons/hi";


const navItems = [
  <li className="dark:text-light text-gray-400 hover:text-deepLight font-semibold transition"><ActiveLink to='/'>Home</ActiveLink></li>,
  <li className="dark:text-light text-gray-400 hover:text-deepLight font-semibold transition"><ActiveLink to='/instructors'>Instructors</ActiveLink></li>,
  <li className="dark:text-light text-gray-400 hover:text-deepLight font-semibold transition"><ActiveLink to='/courses'>Courses</ActiveLink></li>,
  <li className="dark:text-light text-gray-400 hover:text-deepLight font-semibold transition"><ActiveLink to='/dashboard/home'>Dashboard</ActiveLink></li>,
];

const Navbar = () => {

  const [theme, setTheme] = useState('light');

  useEffect(() => {
    if (theme === "dark") {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [theme])

  const switchTheme = () => {
    setTheme(theme === "dark" ? "light" : "dark");
  }

  const { logout, user } = useContext(AuthContext);

  const handleLogout = async () => {
    await logout();
  }

  return (
    <div className="drawer bg-light/20 dark:bg-dark/50 fixed z-10">

      <input id="my-drawer-3" type="checkbox" className="drawer-toggle" />
      <div className="drawer-content flex flex-col">

        <div className="w-full navbar max-w-[1480px] mx-auto">

          <div className="flex-none lg:hidden ">
            <label htmlFor="my-drawer-3" className="btn btn-square btn-ghost">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" className="inline-block w-6 h-6 stroke-current"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"></path></svg>
            </label>
          </div>

          {/* logo */}
          <div className="flex-1">
            <h1 className=" px-2 mx-2 text-3xl text-sec py-1 font-bold uppercase">SportsCamp</h1>
          </div>

          <div className="flex-none hidden lg:block">
            <ul className="space-x-5 menu-horizontal">

              {navItems}

            </ul>
          </div>

          {/* dark/light switch */}
          <div className="text-light ml-5">
            <button onClick={switchTheme} className="text-2xl hover:bg-sec/30 bg-light/50 hover:text-light p-2 text-sec dark:text-light rounded-full transition">{theme === "light" ? 
              <span className="transition"><HiMoon></HiMoon></span> :
              <span className="transition"><HiSun></HiSun></span>
            }</button>
          </div>

          {/* login button and user profile */}
          {!user
            ?
            <div className="mx-5">
              <Link to='/login'><button className="bg-sec px-2 py-1 text-light font-semibold border-[1px] border-sec hover:text-sec hover:border-sec hover:bg-transparent transition ">Login</button></Link>
            </div>
            :
            <div className="ml-5 dropdown dropdown-end text-deepDark">
              <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
                <div className="w-10 rounded-full">
                  <img src={user?.photoURL} />
                </div>
              </label>
              <ul tabIndex={0} className="mt-3 p-2 text-center shadow menu menu-sm dropdown-content bg-light dark:bg-dark dark:text-light w-52">
                <p className="text-sec p-2">{user?.displayName}</p>
                <Link className="hover:text-sec hover:bg-deepLight p-2">Profile</Link>
                <button onClick={handleLogout} className="hover:text-red-600 hover:bg-deepLight p-2">Logout</button>
              </ul>
            </div>
          }

        </div>

        {/* drawer */}
      </div>
      <div className="drawer-side">
        <label htmlFor="my-drawer-3" className="drawer-overlay"></label>
        <ul className="space-y-5 p-4 w-60 h-full bg-dark/40 dark:bg-light/40">

          {navItems}

        </ul>

      </div>

    </div>
  );
};

export default Navbar;
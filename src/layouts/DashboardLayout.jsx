//import { Outlet } from 'react-router-dom';
import ActiveLink2 from '../components/ActiveLink/ActiveLink2';
import { FaList, FaCheckSquare, FaPlusSquare, FaCogs, FaUsersCog, FaStream, FaCreditCard } from "react-icons/fa";
import { HiX } from "react-icons/hi";
import { Link, Outlet } from 'react-router-dom';
import dbbg from '../assets/dbbg.svg';
const DashboardLayout = () => {
    return (
        <div>
            <div className='bg-dark2 px-5 flex justify-between items-center'>
            <label htmlFor="my-drawer-2" className=" bg-transparent rounded-none border-light/50 text-light/50 drawer-button lg:hidden"><FaStream></FaStream></label>
            <h2 className='text-light/50 text-xl font-bold uppercase lg:hidden'>Dashboard</h2>
            </div>

            <div className="drawer lg:drawer-open">
                <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
                <div className="drawer-content flex flex-col items-center justify-center" style={{backgroundImage: `url(${dbbg})`, backgroundSize: 'cover'}}>
                    {/* Page content here */}
                    <Outlet></Outlet>

                </div>
                <div className="drawer-side">
                    <label htmlFor="my-drawer-2" className="drawer-overlay"></label>
                    <div className="p-4 w-80 h-full bg-dark2">
                        {/* Sidebar content here */}
                        <div className='flex justify-end lg:hidden'>
                            <label htmlFor="my-drawer-2" className="drawer-overlay"><HiX></HiX></label>
                        </div>
                        <div>
                            <h1 className='text-4xl mb-3 text-light/50 font-bold uppercase'>Sports Camp</h1> 
                            <Link to='/'><span className='text-sec hover:underline'>← Back to Home</span></Link>
                        </div>
                        <div className='mt-10 ml-2'>
                            <div className='text-gray hover:translate-x-3 hover:text-light transition'> <ActiveLink2 to='/dashboard/selectedCourses'><div className='flex items-center gap-x-2 py-2'><FaList></FaList> <span>Selected Courses</span></div></ActiveLink2></div>
                            <div className='text-gray hover:translate-x-3 hover:text-light transition'> <ActiveLink2 to='/dashboard/enrolledCourses'><div className='flex items-center gap-x-2 py-2'><FaCheckSquare></FaCheckSquare> <span>Enrolled Courses</span></div></ActiveLink2></div>
                            <div className='text-gray hover:translate-x-3 hover:text-light transition'> <ActiveLink2 to='/dashboard/enrolledCourses'><div className='flex items-center gap-x-2 py-2'><FaCreditCard></FaCreditCard> <span>Payment History</span></div></ActiveLink2></div>
                        </div>
                        <div className='mt-10 ml-2'>
                            <div className='text-gray hover:translate-x-3 hover:text-light transition'> <ActiveLink2 to='/dashboard/addCourse'><div className='flex items-center gap-x-2 py-2'><FaPlusSquare></FaPlusSquare> <span>Add New Course</span></div></ActiveLink2></div>
                            <div className='text-gray hover:translate-x-3 hover:text-light transition'> <ActiveLink2 to='/dashboard/myCourses'><div className='flex items-center gap-x-2 py-2'><FaList></FaList> <span>My Courses</span></div></ActiveLink2></div>
                        </div>
                        <div className='mt-10 ml-2'>
                            <div className='text-gray hover:translate-x-3 hover:text-light transition'> <ActiveLink2 to='/dashboard/manageCourses'><div className='flex items-center gap-x-2 py-2'><FaCogs></FaCogs> <span>Manage Courses</span></div></ActiveLink2></div>
                            <div className='text-gray hover:translate-x-3 hover:text-light transition'> <ActiveLink2 to='/dashboard/manageUsers'><div className='flex items-center gap-x-2 py-2'><FaUsersCog></FaUsersCog> <span>Manage Users</span></div></ActiveLink2></div>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    );
};

export default DashboardLayout;
//import { Outlet } from 'react-router-dom';
import ActiveLink2 from '../components/ActiveLink/ActiveLink2';
import { FaList, FaCheckSquare, FaPlusSquare, FaCogs, FaUsersCog, FaStream, FaCreditCard } from "react-icons/fa";
import { HiX } from "react-icons/hi";
import { Link, Outlet } from 'react-router-dom';
import useUser from '../hooks/useUser';
const DashboardLayout = () => {
    const [, currentUser, ] = useUser();
    
    return (
        <div>
            <div className=' px-5 flex justify-between items-center'>
            <label htmlFor="my-drawer-2" className=" bg-transparent rounded-none border-light  text-deepDark  drawer-button lg:hidden"><FaStream></FaStream></label>
            <h2 className='text-deepDark  text-xl font-bold uppercase lg:hidden'>Dashboard</h2>
            </div>

            <div className="drawer lg:drawer-open">
                <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
                <div className="drawer-content bg-deepLight dark:bg-dark flex flex-col items-center justify-center" >
                    {/* Page content here */}
                    <Outlet></Outlet>

                </div>
                <div className="drawer-side">
                    <label htmlFor="my-drawer-2" className="drawer-overlay"></label>
                    <div className="p-4 w-80 h-full bg-light dark:bg-deepDark">
                        {/* Sidebar content here */}
                        <div className='flex justify-end lg:hidden'>
                            <label htmlFor="my-drawer-2" className="drawer-overlay"><HiX></HiX></label>
                        </div>
                        <div>
                            <h1 className='text-4xl mb-3 text-deepDark dark:text-light font-bold uppercase'>Sports Camp</h1> 
                            <Link to='/'><span className='text-sec hover:underline'>← Back to Home</span></Link>
                        </div>
                        { currentUser?.role === 'student' &&
                        <div className='mt-10 ml-2'>
                            <div className='text-dark dark:text-light dark:hover:text-sec hover:translate-x-3 hover:text-sec transition'> <ActiveLink2 to='/dashboard/selectedCourses'><div className='flex items-center gap-x-2 py-2'><FaList></FaList> <span>Selected Courses</span></div></ActiveLink2></div>
                            <div className='text-dark dark:text-light dark:hover:text-sec hover:translate-x-3 hover:text-sec transition'> <ActiveLink2 to='/dashboard/enrolledCourses'><div className='flex items-center gap-x-2 py-2'><FaCheckSquare></FaCheckSquare> <span>Enrolled Courses</span></div></ActiveLink2></div>
                            <div className='text-dark dark:text-light dark:hover:text-sec hover:translate-x-3 hover:text-sec transition'> <ActiveLink2 to='/dashboard/paymentHistory'><div className='flex items-center gap-x-2 py-2'><FaCreditCard></FaCreditCard> <span>Payment History</span></div></ActiveLink2></div>
                        </div>
                        }
                        { currentUser?.role === 'instructor' &&
                        <div className='mt-10 ml-2'>
                            <div className='text-dark dark:text-light dark:hover:text-sec hover:translate-x-3 hover:text-sec transition'> <ActiveLink2 to='/dashboard/addCourse'><div className='flex items-center gap-x-2 py-2'><FaPlusSquare></FaPlusSquare> <span>Add New Course</span></div></ActiveLink2></div>
                            <div className='text-dark dark:text-light dark:hover:text-sec hover:translate-x-3 hover:text-sec transition'> <ActiveLink2 to='/dashboard/myCourses'><div className='flex items-center gap-x-2 py-2'><FaList></FaList> <span>My Courses</span></div></ActiveLink2></div>
                        </div>
                        }
                        { currentUser?.role === 'admin' &&
                        <div className='mt-10 ml-2'>
                            <div className='text-dark dark:text-light dark:hover:text-sec hover:translate-x-3 hover:text-sec transition'> <ActiveLink2 to='/dashboard/manageCourses'><div className='flex items-center gap-x-2 py-2'><FaCogs></FaCogs> <span>Manage Courses</span></div></ActiveLink2></div>
                            <div className='text-dark dark:text-light dark:hover:text-sec hover:translate-x-3 hover:text-sec transition'> <ActiveLink2 to='/dashboard/manageUsers'><div className='flex items-center gap-x-2 py-2'><FaUsersCog></FaUsersCog> <span>Manage Users</span></div></ActiveLink2></div>
                        </div>
                        }
                    </div>

                </div>
            </div>
        </div>
    );
};

export default DashboardLayout;
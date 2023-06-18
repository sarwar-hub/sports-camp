import { createBrowserRouter } from "react-router-dom";
import MainLayout from "./layouts/MainLayout";
import Home from "./pages/Home/Home/Home";
import Login from "./pages/Login/Login";
import Register from "./pages/Register/Register";
import Courses from "./pages/Courses/Courses";
import DashboardLayout from "./layouts/DashboardLayout";
import PrivateRoute from "./privateRoute/privateRoute";
import Instructors from "./pages/Instructors/Instructors";
import DashboardHome from "./pages/Dashboard/DashboardHome/DashboardHome";
import SelectedCourses from "./pages/Dashboard/SelectedCourses/SelectedCourses";
import AddCourse from "./pages/Dashboard/AddCourse/AddCourse";
import MyCourses from "./pages/Dashboard/MyCourses/MyCourses";
import ManageCourses from "./pages/Dashboard/ManageCourses/ManageCourses";
import ManageUsers from "./pages/Dashboard/ManageUsers/ManageUsers";
import Error404 from "./pages/Error404/Error404";
import Payment from "./pages/Dashboard/Payment/Payment";
import EnrolledCourses from "./pages/Dashboard/EnrolledCourses/EnrolledCourses";
import PaymentHistory from "./pages/Dashboard/PaymentHistory/PaymentHistory";
import Blogs from "./pages/Blogs/Blogs";


const router = createBrowserRouter([
    {
        path: '/',
        element: <MainLayout></MainLayout>,
        children: [
            {
                path: '/',
                element: <Home></Home>
            },
            {
                path: 'courses',
                element: <Courses></Courses>
            },
            {
                path: 'instructors',
                element: <Instructors></Instructors>
            },
            {
                path: 'login',
                element: <Login></Login>
            },
            {
                path: 'register',
                element: <Register></Register>
            },
            {
                path: 'blogs',
                element: <Blogs></Blogs>
            }
        ]
    },
    {
        path: 'dashboard',
        element: <PrivateRoute><DashboardLayout></DashboardLayout></PrivateRoute>,
        children: [
            {
                path: 'home',
                element: <DashboardHome></DashboardHome>
            },
            {
                path: 'selectedCourses',
                element: <SelectedCourses></SelectedCourses>
            },
            {
                path: 'enrolledCourses',
                element: <EnrolledCourses></EnrolledCourses>
            },
            {
                path: 'paymentHistory',
                element: <PaymentHistory></PaymentHistory>
            },
            {
                path: 'addCourse',
                element: <AddCourse></AddCourse>
            },
            {
                path: 'myCourses',
                element: <MyCourses></MyCourses>
            },
            {
                path: 'manageCourses',
                element: <ManageCourses></ManageCourses>
            },
            {
                path: 'manageUsers',
                element: <ManageUsers></ManageUsers>
            },
            {
                path: 'payment/:id',
                element: <Payment></Payment>,
            },
        ]
    },
    {
        path: '*',
        element: <Error404></Error404>
    }
])

export default router;
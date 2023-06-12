import { createBrowserRouter } from "react-router-dom";
import MainLayout from "./layouts/MainLayout";
import Home from "./pages/Home/Home/Home";
import Login from "./pages/Login/Login";
import Register from "./pages/Register/Register";
import Courses from "./pages/Courses/Courses";
import DashboardLayout from "./layouts/DashboardLayout";
import PrivateRoute from "./privateRoute/privateRoute";
import Instructors from "./pages/Instructors/Instructors";
import DashboardHome from "./pages/Dashboard/DashboardHome";
import SelectedCourses from "./pages/Dashboard/SelectedCourses/SelectedCourses";
import AddCourse from "./pages/Dashboard/AddCourse/AddCourse";
import MyCourses from "./pages/Dashboard/MyCourses/MyCourses";


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
            }
        ]
    },
    {
        path: '/dashboard',
        element: <PrivateRoute><DashboardLayout></DashboardLayout></PrivateRoute>,
        children: [
            {
                path: '/dashboard/home',
                element: <DashboardHome></DashboardHome>
            },
            {
                path: '/dashboard/selectedCourses',
                element: <SelectedCourses></SelectedCourses>
            },
            {
                path: '/dashboard/enrolledCourses',
                element: ''
            },
            {
                path: '/dashboard/paymentHistory',
                element: ''
            },
            {
                path: '/dashboard/addCourse',
                element: <AddCourse></AddCourse>
            },
            {
                path: '/dashboard/myCourses',
                element: <MyCourses></MyCourses>
            },
        ]
    }
])

export default router;
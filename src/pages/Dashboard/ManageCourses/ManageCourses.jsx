import { Helmet } from "react-helmet-async";
import SectionTitle from "../../../components/SectionTitle/SectionTitle";
import useCourses from "../../../hooks/useCourses";
import CourseRow from "./CourseRow/CourseRow";


const ManageCourses = () => {
    // selected courses
    const [allCourses, , , ] = useCourses();
    return (
        <div>
            <Helmet><title>Manage courses | Sports Camp</title></Helmet>

            <SectionTitle>Manage Courses</SectionTitle>
            <div className="overflow-x-auto">
                <table className="table">
                    {/* head */}
                    <thead>
                        <tr className="text-deepDark dark:text-light">
                            <th>SL</th>
                            <th>Course</th>
                            <th>Instructor</th>
                            <th>Price</th>
                            <th>Status</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            allCourses?.map((course, index) => <CourseRow key={course._id} course={course} index={index}></CourseRow>)
                        }
                    </tbody>
                </table>
            </div>

        </div>
    );
};

export default ManageCourses;
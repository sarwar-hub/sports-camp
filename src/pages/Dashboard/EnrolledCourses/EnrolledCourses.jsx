import { Helmet } from "react-helmet-async";
import SectionTitle from "../../../components/SectionTitle/SectionTitle";
import CourseRow from "./CourseRow/CourseRow";
import useEnrolled from "../../../hooks/useEnrolled";

const EnrolledCourses = () => {
    // selected courses
    const [enrolledCourses] = useEnrolled();
   
    return (
        <div>
            <Helmet><title>Enrolled courses | Sports Camp</title></Helmet>

            <SectionTitle>My Enrolled Courses</SectionTitle>
            <div className="overflow-x-auto">
                <table className="table">
                    {/* head */}
                    <thead>
                        <tr className="text-deepDark dark:text-light">
                            <th>SL</th>
                            <th>Course</th>
                            <th>Instructor</th>
                            <th>Fee</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            enrolledCourses?.map((course, index) => <CourseRow key={course?._id} course={course} index={index}></CourseRow>)
                        }
                    </tbody>
                </table>
            </div>

        </div>
    );
};

export default EnrolledCourses;
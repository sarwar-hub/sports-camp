import { Helmet } from "react-helmet-async";
import SectionTitle from "../../../components/SectionTitle/SectionTitle";
import useCourses from "../../../hooks/useCourses";
import CourseRow from "./CourseRow/CourseRow";

const MyCourses = () => {
    // selected courses
    const [, , coursesByInstructor] = useCourses();
    return (
        <div>
            <Helmet><title>My courses | Sports Camp</title></Helmet>

            <SectionTitle>My Courses</SectionTitle>
            <div className="overflow-x-auto">
                <table className="table">
                    {/* head */}
                    <thead>
                        <tr className="text-deepDark dark:text-light">
                            <th>SL</th>
                            <th>Course</th>
                            <th>Price</th>
                            <th>Students</th>
                            <th>Status</th>
                            <th>Feedback</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            coursesByInstructor?.map((course, index) => <CourseRow key={course._id} course={course} index={index}></CourseRow>)
                        }
                    </tbody>
                </table>
            </div>

        </div>
    );
};

export default MyCourses;
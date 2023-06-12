import SectionTitle from "../../../components/SectionTitle/SectionTitle";
import useCourses from "../../../hooks/useCourses";
import CourseRow from "./CourseRow/CourseRow";

const MyCourses = () => {
    // selected courses
    const [, , coursesByInstructor] = useCourses();
    return (
        <div>
            <SectionTitle>My Courses</SectionTitle>
            <div className="overflow-x-auto">
                <table className="table">
                    {/* head */}
                    <thead>
                        <tr className="text-light">
                            <th>SL</th>
                            <th>Course</th>
                            <th>Price</th>
                            <th>Students</th>
                            <th>Status</th>
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
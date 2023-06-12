import SectionTitle from "../../../components/SectionTitle/SectionTitle";
import useSelected from "../../../hooks/useSelected";
import CourseRow from "./CourseRow/CourseRow";

const SelectedCourses = () => {
    // selected courses
    const [selectedCourses] = useSelected();
    return (
        <div>
            <SectionTitle>My Selected Courses</SectionTitle>
            <div className="overflow-x-auto">
                <table className="table">
                    {/* head */}
                    <thead>
                        <tr className="text-light">
                            <th>SL</th>
                            <th>Course</th>
                            <th>Instructor</th>
                            <th>Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            selectedCourses.map((course, index) => <CourseRow key={course._id} course={course} index={index}></CourseRow>)
                        }
                    </tbody>
                </table>
            </div>

        </div>
    );
};

export default SelectedCourses;
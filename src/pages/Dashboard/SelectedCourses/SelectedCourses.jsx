import { Helmet } from "react-helmet-async";
import SectionTitle from "../../../components/SectionTitle/SectionTitle";
import useSelected from "../../../hooks/useSelected";
import CourseRow from "./CourseRow/CourseRow";

const SelectedCourses = () => {
    // selected courses
    const [selectedItems, , isLoading, ] = useSelected();
   if(isLoading) {
    return <h1 className="text-3xl md:text-9xl z-50">Loading...</h1>
   }
    return (
        <div>
            <Helmet><title>Selected courses | Sports Camp</title></Helmet>

            <SectionTitle>My Selected Courses</SectionTitle>
            <div className="overflow-x-auto">
                <table className="table">
                    {/* head */}
                    <thead>
                        <tr className="text-deepDark dark:text-light">
                            <th>SL</th>
                            <th>Course</th>
                            <th>Instructor</th>
                            <th>Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            selectedItems?.map((course, index) => <CourseRow key={course?._id} course={course} index={index}></CourseRow>)
                        }
                    </tbody>
                </table>
            </div>

        </div>
    );
};

export default SelectedCourses;
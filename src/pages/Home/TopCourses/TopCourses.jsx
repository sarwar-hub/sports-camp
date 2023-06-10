import CourseCard from "../../../components/CourseCard/CourseCard";
import PrimaryBtn from "../../../components/PrimaryBtn/PrimaryBtn";
import SectionTitle from "../../../components/SectionTitle/SectionTitle";
import useCourses from "../../../hooks/useCourses";
import { Link } from 'react-router-dom';

const TopCourses = () => {

    const [courses] = useCourses();
    console.log(courses);
    return (
        <div className="section">
            <SectionTitle>Top Courses</SectionTitle>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-7">
                {/* top courses */}
                {
                    courses.map(course => <CourseCard key={course._id} course={course}></CourseCard>)
                }
            </div>
            <div className="text-center mt-5">
                <Link to='/allCourses'><PrimaryBtn>View all Courses</PrimaryBtn></Link>
            </div>
        </div>
    );
};

export default TopCourses;
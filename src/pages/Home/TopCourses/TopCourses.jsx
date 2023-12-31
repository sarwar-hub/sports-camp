import PrimaryBtn from "../../../components/PrimaryBtn/PrimaryBtn";
import SectionTitle from "../../../components/SectionTitle/SectionTitle";
import useCourses from "../../../hooks/useCourses";
import { Link } from 'react-router-dom';

import TopCourseCard from "./TopCourseCard/TopCourseCard";

const TopCourses = () => {

    // course from useCourse hook
    const [, topCourses, ] = useCourses();
   
    return (
        <div className="">
            <SectionTitle>Top Courses</SectionTitle>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-7">
                {/* top courses */}
                {
                    topCourses.map(course => <TopCourseCard key={course._id} course={course}></TopCourseCard>)
                }
            </div>
            {/* view all button */}
            <div className="text-center mt-5">
                <Link to='/courses'><PrimaryBtn>View all Courses</PrimaryBtn></Link>
            </div>
        </div>
    );
};

export default TopCourses;
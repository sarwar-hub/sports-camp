import PageCover from "../../components/PageCover/PageCover";
import useCourses from "../../hooks/useCourses";
import CourseCard from "./CourseCard/CourseCard";



const Courses = () => {

    // course from useCourse hook
    const [allCourses] = useCourses();

    return (
        <div className="mb-16">
            <PageCover>Courses</PageCover>
            <div className="mx-2 my-5 md:mx-10 md:my-10">
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-7">
                {/* top courses */}
                {
                    allCourses.map(course => <CourseCard key={course._id} course={course}></CourseCard>)
                }
            </div>
            </div>
        </div>
    );
};

export default Courses;
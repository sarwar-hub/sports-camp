import { Fade } from "react-awesome-reveal";

const TopCourseCard = ({course}) => {
    return (
        <Fade>
        <div className="card w-full bg-dark text-light rounded-none shadow-xl">
            <div className="card-body">
                <h2 className="card-title">{course.courseName}</h2>
                <p>By {course.instructorName}</p>
            </div>
            <figure><img src={course.thumbnail} alt="course thumb" /></figure>
        </div>
        </Fade>
    );
};

export default TopCourseCard;
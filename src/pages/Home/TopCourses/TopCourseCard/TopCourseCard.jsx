
const TopCourseCard = ({course}) => {
    return (
        <div className="card w-full bg-dark text-light rounded-none shadow-xl">
            <div className="card-body">
                <h2 className="card-title">{course.courseName}</h2>
                <p>By {course.instructorName}</p>
            </div>
            <figure><img src={course.thumbnail} alt="course thumb" /></figure>
        </div>
    );
};

export default TopCourseCard;
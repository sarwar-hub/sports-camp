

const CourseCard = ({ course }) => {
    return (
        <div className="card w-full bg-dark text-light rounded-none shadow-xl">
            <figure><img src={course.thumbnail} alt="course thumb" /></figure>
            <div className="p-5 flex justify-between">
                <div>
                    <h2 className="card-title">{course.courseName}</h2>
                    <p>By {course.instructorName}</p>
                </div>
                <div>
                    <p>Available seat: {course.availableSeats}</p>
                    <p>Course fee: ${course.courseFee}</p>
                </div>
            </div>
            <div>
                <button className="w-full py-2 bg-dark2 ">Add to wishlist</button>
            </div>
        </div>
    );
};

export default CourseCard;
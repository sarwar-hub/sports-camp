
import { FaEnvelope } from "react-icons/fa";
const InstructorCard = ({ instructor }) => {

    return (
        <div className="card w-full bg-light dark:bg-dark dark:text-light text-deepDark rounded-none shadow-xl">
            <figure><img src={instructor.photo} alt="instructor photo" /></figure>
            <div className="card-body">
                <div className="space-y-5">
                    <div>
                        <h2 className="card-title">{instructor.name}</h2>
                        <p className="text-sm text-dark flex items-center gap-x-2"><div><FaEnvelope></FaEnvelope></div> <span>{instructor.email}</span></p>
                    </div>
                    <div className="flex justify-between items-center">
                        <p>Students: {instructor.numberOfStudents} </p>
                        <p>Courses: {instructor.numberOfCourses}</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default InstructorCard;
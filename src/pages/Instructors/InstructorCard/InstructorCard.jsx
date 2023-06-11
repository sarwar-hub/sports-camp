
import { FaEnvelope } from "react-icons/fa";
const InstructorCard = ({ instructor }) => {

    return (
        <div className="card w-full bg-dark text-light rounded-none shadow-xl">
            <figure><img src={instructor.photo} alt="instructor photo" /></figure>
            <div className="card-body">
                <div className="space-y-5">
                    <div>
                        <h2 className="card-title">{instructor.name}</h2>
                        <p className=" flex items-center gap-x-2"><FaEnvelope className=""></FaEnvelope> <span>{instructor.email}</span></p>
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
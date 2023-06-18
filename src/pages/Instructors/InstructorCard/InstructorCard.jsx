
import { FaEnvelope } from "react-icons/fa";
import useCourses from "../../../hooks/useCourses";
const InstructorCard = ({ instructor }) => {
    const [ , , coursesByInstructor, ] = useCourses();
    const courseCount = coursesByInstructor.length;
    return (
        <div className="card w-full bg-light dark:bg-dark dark:text-light text-deepDark rounded-none shadow-xl pt-10">
            <figure><img className="rounded-full object-cover h-[300px] w-[300px]" src={instructor?.photo} alt="instructor photo" /></figure>
            <div className="card-body">
                <div className="space-y-5">
                    <div>
                        <h2 className="card-title">{instructor?.name}</h2>
                        <p className="text-sm text-dark flex items-center gap-x-2"><div><FaEnvelope></FaEnvelope></div> <span>{instructor.email}</span></p>
                    </div>
                    <div className="flex justify-between items-center">
                        <p>Students: {instructor?.students || '0'} </p>
                        <p>Courses: {coursesByInstructor?courseCount: '0'}</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default InstructorCard;
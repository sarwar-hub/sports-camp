import { Fade } from "react-awesome-reveal";

const TopInstructorCard = ({instructor}) => {
    
    return (
        <Fade>
        <div className="card w-full bg-dark text-light rounded-none shadow-xl">
            <figure><img src={instructor.photo} alt="instructor photo" /></figure>
            <div className="card-body">
                <h2 className="card-title">{instructor.name}</h2>
                <p>Students: {instructor.numberOfStudents}</p>
            </div>
        </div>
        </Fade>
    );
};

export default TopInstructorCard;
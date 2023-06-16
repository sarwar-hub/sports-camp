import { Fade } from "react-awesome-reveal";

const TopInstructorCard = ({instructor}) => {
    
    return (
        <Fade>
        <div className="card w-full bg-light dark:bg-dark dark:text-light text-deepDark rounded-none shadow-xl">
            <figure><img src={instructor.photo} alt="instructor photo" /></figure>
            <div className="card-body">
                <h2 className="card-title">{instructor.name}</h2>
                <p>Students: {instructor.students}</p>
            </div>
        </div>
        </Fade>
    );
};

export default TopInstructorCard;
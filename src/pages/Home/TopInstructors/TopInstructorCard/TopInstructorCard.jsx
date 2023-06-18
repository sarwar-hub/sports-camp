import { Fade } from "react-awesome-reveal";

const TopInstructorCard = ({instructor}) => {
    
    return (
        <Fade>
        <div className="card w-full bg-light dark:bg-dark dark:text-light text-deepDark rounded-none shadow-xl pt-10">
            <figure><img className="rounded-full object-cover h-[300px] w-[300px]" src={instructor.photo} alt="instructor photo" /></figure>
            <div className="card-body flex-col justify-center items-center">
                <h2 className="card-title">{instructor.name}</h2>
                <p>Students: {instructor.students}</p>
            </div>
        </div>
        </Fade>
    );
};

export default TopInstructorCard;
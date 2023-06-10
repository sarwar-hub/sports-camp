
const TopInstructorCard = ({instructor}) => {
    
    return (
        <div className="card w-full bg-dark text-light rounded-none shadow-xl">
            <figure><img src={instructor.photo} alt="instructor photo" /></figure>
            <div className="card-body">
                <h2 className="card-title">{instructor.name}</h2>
                <p>{instructor.numberOfStudents} Students</p>
            </div>
        </div>
    );
};

export default TopInstructorCard;
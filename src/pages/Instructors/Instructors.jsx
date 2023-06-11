import PageCover from "../../components/PageCover/PageCover";
import useInstructors from "../../hooks/useInstructors";
import InstructorCard from "./InstructorCard/InstructorCard";



const Instructors = () => {

    // course from useCourse hook
    const [allInstructors] = useInstructors();

    return (
        <div className="mb-16">
            <PageCover>Instructors</PageCover>
            <div className="mx-2 my-5 md:mx-10 md:my-10">
            <div className="grid grid-cols-1 sm:grid-cols-3 md:grid-cols-4 gap-7">
                {/* top courses */}
                {
                    allInstructors.map(instructor => <InstructorCard key={instructor._id} instructor={instructor}></InstructorCard>)
                }
            </div>
            </div>
        </div>
    );
};

export default Instructors;
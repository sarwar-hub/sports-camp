import PrimaryBtn from "../../../components/PrimaryBtn/PrimaryBtn";
import SectionTitle from "../../../components/SectionTitle/SectionTitle";
import useInstructors from "../../../hooks/useInstructors";
import { Link } from 'react-router-dom';
import TopInstructorCard from "./TopInstructorCard/TopInstructorCard";

const TopInstructors = () => {

    // istructors from useInstrunctors hook
    const [, topInstructors] = useInstructors();

    return (
        <div className="">
            <SectionTitle>Top Instructors</SectionTitle>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-7">
                {/* top instructors */}
                {
                    topInstructors.map(instructor => <TopInstructorCard key={instructor._id} instructor={instructor}></TopInstructorCard>)
                }
            </div>
            {/* view all button */}
            <div className="text-center mt-5">
                <Link to='/instructors'><PrimaryBtn>View all Instructors</PrimaryBtn></Link>
            </div>
        </div>
    );
};

export default TopInstructors;
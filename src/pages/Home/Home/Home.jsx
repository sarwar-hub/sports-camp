import Banner from "../Banner/Banner";
import TopCourses from "../TopCourses/TopCourses";
import TopInstructors from "../TopInstructors/TopInstructors";



const Home = () => {
    return (
        <div className="mb-10">
            <Banner></Banner>
            <TopCourses></TopCourses>
            <TopInstructors></TopInstructors>
        </div>
    );
};

export default Home;
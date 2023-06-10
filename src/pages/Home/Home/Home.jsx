import Banner from "../Banner/Banner";
import Newsletter from "../Newsletter/Newsletter";
import Status from "../Status/Status";
import TopCourses from "../TopCourses/TopCourses";
import TopInstructors from "../TopInstructors/TopInstructors";



const Home = () => {
    return (
        <div className="">
            <Banner></Banner>
            <TopCourses></TopCourses>
            <TopInstructors></TopInstructors>
            <Status></Status>
            <Newsletter></Newsletter>
        </div>
    );
};

export default Home;
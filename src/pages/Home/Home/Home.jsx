import Banner from "../Banner/Banner";
import Newsletter from "../Newsletter/Newsletter";
import Status from "../Status/Status";
import TopCourses from "../TopCourses/TopCourses";
import TopInstructors from "../TopInstructors/TopInstructors";



const Home = () => {
    return (
        <div className="">
            <Banner></Banner>
            <div className="my-16">
                <div className="mx-2 my-5 md:mx-10 md:my-10">
                    <TopCourses></TopCourses>
                </div>
                <div className="mx-2 my-5 md:mx-10 md:my-10">
                    <TopInstructors></TopInstructors>
                </div>
                <div className="mx-2 my-5 md:mx-10 md:my-10">
                    <Status></Status>
                </div>
                <div className="mx-2 my-5 md:mx-10 md:my-10">
                    <Newsletter></Newsletter>
                </div>
            </div>
        </div>
    );
};

export default Home;
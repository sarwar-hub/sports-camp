import { Helmet } from "react-helmet-async";
import Banner from "../Banner/Banner";
import Newsletter from "../Newsletter/Newsletter";
import Status from "../Status/Status";
import TopCourses from "../TopCourses/TopCourses";
import TopInstructors from "../TopInstructors/TopInstructors";
import Speciality from "../Speciality/Speciality";
import Testimonial from "../Testimonial/Testimonial";



const Home = () => {
    return (
        <div className="">
            <Helmet><title>Home | Sports Camp</title></Helmet>

            <Banner></Banner>
            <div className="my-16">
                <div className="mx-2 my-5 md:mx-10 md:my-32">
                    <TopCourses></TopCourses>
                </div>
                <div className="mx-2 my-5 md:mx-10 md:my-32">
                    <TopInstructors></TopInstructors>
                </div>
                <div className="mx-2 my-5 md:mx-10 md:my-32">
                    <Speciality></Speciality>
                </div>
                <div className="mx-2 my-10 md:mx-10 md:my-32">
                    <Status></Status>
                </div>
                <div className="mx-2 my-10 md:mx-10 md:my-32">
                    <Testimonial></Testimonial>
                </div>
                <div className="mx-2 my-5 md:mx-10 md:my-32">
                    <Newsletter></Newsletter>
                </div>
            </div>
        </div>
    );
};

export default Home;
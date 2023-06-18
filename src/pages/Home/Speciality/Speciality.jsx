import SectionTitle from "../../../components/SectionTitle/SectionTitle";
import icon1 from '../../../assets/icons/nature.png'
import icon2 from '../../../assets/icons/ball.png'
import icon3 from '../../../assets/icons/paratute.png'
import speciality from '../../../assets/speciality.jpg'


const Speciality = () => {
    return (
        <div className="flex flex-col lg:flex-row gap-y-5 lg:gap-20 justify-between items-center">
            <div className="flex flex-col justify-between gap-5 lg:w-[50%]">
                <SectionTitle>Why Chooose Us</SectionTitle>
                <p className="text-deepDark dark:text-light w-[300px]">We are providing great lessons by our great instructors which is good enough for you.</p>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-3 md:gap-10 justify-center content-center">
                    <div className="content-center space-y-5 p-10 bg-sec/10 min-w-[200px]">
                        <img src={icon1} alt="" />
                        <h3 className="text-deepDark font-semibold dark:text-light text-center">Natural all the way</h3>
                    </div>
                    <div className="content-center space-y-5 p-10 bg-sec/10 min-w-[200px]">
                        <img src={icon2} alt="" />
                        <h3 className="text-deepDark font-semibold dark:text-light text-center">Diversity abounds</h3>
                    </div>
                    <div className="content-center space-y-5 p-10 bg-sec/10 min-w-[200px]">
                        <img src={icon3} alt="" />
                        <h3 className="text-deepDark font-semibold dark:text-light text-center">Experienced and trustworthy</h3>
                    </div>
                </div>
            </div>
            <div className="lg:w-[50%]">
                <img className="max-h-[500px]" src={speciality} alt="" />
            </div>
        </div>
    );
};

export default Speciality;
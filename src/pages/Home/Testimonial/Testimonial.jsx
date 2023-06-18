import './Testimonial.css';
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Pagination, Navigation } from "swiper";
import SectionTitle from "../../../components/SectionTitle/SectionTitle";
import { Fade } from 'react-awesome-reveal';


const Testimonial = () => {

    const qoutes = [
        {
            name: 'Stephen',
            image: 'https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=580&q=80',
            description: 'We love Camp Woodmont! Both of my children have attended Camp Woodmont every summer for the past 12 years – first as campers, then as Counselor Assistants, and now as Counselors in Training. They begin a “countdown to camp” in January, as plans begin to reunite with other campers who also come back year after year.'
        },
        {
            name: 'Alex',
            image: 'https://images.unsplash.com/photo-1552642986-ccb41e7059e7?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=387&q=80',
            description: 'Our 2 daughters have attended Camp Woodmont for the last 8 years. They haven’t missed a summer, and BEG to stay longer! They absolutely love it and as a parent I couldn’t be more pleased with every experience they’ve had.'
        },
        {
            name: 'Eliza',
            image: 'https://images.unsplash.com/photo-1546961329-78bef0414d7c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=387&q=80',
            description: 'Seven years ago, I waved good-bye to my 8 year old daughter as I dropped her off at Camp Woodmont. I thought it would be the hardest 2 weeks of my life. Watching her develop each summer into a more independent, adventurous, leader and Christian young woman has been such a joy.'
        },
    ]
    return (
        <Fade>
        <div className="lg:flex justify-between items-center">
            <div className='lg:w-[40%]'>

                <SectionTitle>What our Clients Says</SectionTitle>
                <p className="mb-5 text-dark dark:text-light">Our Clients are very satisfied with us, you can see their talks about us.</p>
            </div>
            <div className='lg:w-[60%]'>
            <Swiper
                slidesPerView={1}
                spaceBetween={30}
                pagination={{
                    clickable: true,
                }}
                navigation={true}
                modules={[Pagination, Navigation]}
                className="mySwiper"
            >
                {
                    qoutes.map(qoute =>
                        <SwiperSlide>
                            <div className="py-40 px-10 bg-sec/20 flex flex-col justify-center items-center gap-10 max-h-[500px]">
                                <img className="w-[80px] h-[80px] object-cover rounded-full" src={qoute.image} alt="" />
                                <p className="text-center text-dark dark:text-light">{qoute.description}</p>
                                <h3 className="text-dark dark:text-light font-semibold">{qoute.name}</h3>
                            </div>
                        </SwiperSlide>
                    )
                }


            </Swiper>
            </div>
        </div>
        </Fade>
    );
};

export default Testimonial;
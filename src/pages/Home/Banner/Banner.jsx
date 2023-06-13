import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, EffectFade, Navigation, Pagination } from "swiper";
import { Link } from "react-router-dom";
import { Fade } from "react-awesome-reveal";

import "swiper/css";
import "swiper/css/effect-fade";
import "swiper/css/navigation";
import "swiper/css/pagination";

import banner1 from "../../../assets/banner1.jpg";
import banner2 from "../../../assets/banner2.jpg";
import banner3 from "../../../assets/banner3.jpg";

const slides = [banner1, banner2, banner3];

const Banner = () => {
    return (
        <>
            <Swiper
                spaceBetween={30}
                autoplay={{
                    delay: 3500,
                    disableOnInteraction: false,
                }}
                effect={"fade"}
                navigation={true}
                pagination={{
                    clickable: true,
                }}
                modules={[Autoplay, EffectFade, Navigation, Pagination]}
                className="mySwiper"
            >
                {
                    slides.map((slide, index)=>
                

                <SwiperSlide key={index}>
                    <div className="hero" style={{backgroundImage: `url(${slide})`}}>
                        <div className="hero-overlay bg-gradient-to-r from-deepDark to-light/20"></div>
                        <Fade>
                        <div className="hero-content text-center text-neutral-content">
                            <div className="max-w-[700px] py-10 sm:py-10 md:py-20">
                                <h1 className="mb-5 text-3xl md:text-9xl font-bold">Let's start with us.</h1>
                                <p className="mb-5 text-lg">We are providing you a great summer training, it'll be a great thing to your life.</p>
                                <Link to='/courses'><button className="px-5 py-2 border-[1px] border-light text-light bg-transparent">Explore Courses</button></Link>
                            </div>
                        </div>
                        </Fade>
                    </div>
                </SwiperSlide> )
                }

            </Swiper>
        </>
    );
};

export default Banner;
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, EffectFade, Navigation, Pagination } from "swiper";
import { Link } from "react-router-dom";
import "swiper/css";
import "swiper/css/effect-fade";
import "swiper/css/navigation";
import "swiper/css/pagination";

import banner1 from "../../../assets/banner1.jpg";
import banner2 from "../../../assets/banner2.jpg";
import banner3 from "../../../assets/banner3.jpg";

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
               
                <SwiperSlide>
                    <div className="">
                        <div className="">
                        <img className="w-full" src={banner1} />
                        </div>
                        <div className="absolute z-50 top-[20%] left-[10%] space-y-5 bg-dark/50 p-10">
                            <h1 className="font-bold text-9xl text-light">Let's Start <br /> with us.</h1>
                            <button className="bg-transparent px-4 py-2 font-semibold text-light border-[1px] border-light hover:bg-dark2/50" ><Link to='/classes'>Explore Courses</Link></button>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className="">
                        <div className="">
                        <img className="w-full" src={banner2} />
                        </div>
                        <div className="absolute z-50 top-[20%] left-[10%] space-y-5 bg-dark/50 p-10">
                            <h1 className="font-bold text-9xl text-light">Let's Start <br /> with us.</h1>
                            <button className="bg-transparent px-4 py-2 font-semibold text-light border-[1px] border-light hover:bg-dark2/50" ><Link to='/classes'>Explore Courses</Link></button>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className="">
                        <div className="">
                        <img className="w-full" src={banner3} />
                        </div>
                        <div className="absolute z-50 top-[20%] left-[10%] space-y-5 bg-dark/50 p-10">
                            <h1 className="font-bold text-9xl text-light">Let's Start <br /> with us.</h1>
                            <button className="bg-transparent px-4 py-2 font-semibold text-light border-[1px] border-light hover:bg-dark2/50" ><Link to='/classes'>Explore Courses</Link></button>
                        </div>
                    </div>
                </SwiperSlide>
            </Swiper>
        </>
    );
};

export default Banner;
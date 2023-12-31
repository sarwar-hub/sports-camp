import { Fade } from "react-awesome-reveal";
import { FaFacebookF, FaInstagram, FaTwitter } from "react-icons/fa";
import {Link} from 'react-router-dom';

const Footer = () => {
    return (
        <Fade>
        <div className='bg-light dark:bg-dark dark:text-light text-deepDark md:p-8 p-3'>
            <div className='md:flex max-sm:text-center max-sm:gap-y-5 max-w-[1480px] mx-auto md:justify-between'>
                <div>
                    <h1 className='text-xl uppercase mb-5'>Sports Camp</h1>
                    <p>232 Park road, CA</p>
                    <p>contact@sportscamp.com</p>
                    <p>+621 999 000</p>
                </div>
                <div className="flex flex-col max-sm:mt-10">
                    <Link className="hover:underline" to='/'>Home</Link>
                    <Link className="hover:underline" to='/courses'>Courses</Link>
                    <Link className="hover:underline" to='/instructor'>Instructor</Link>
                    <Link className="hover:underline" to='/blogs'>Blogs</Link>
                    <Link className="hover:underline" to='/dashboard/home'>Dashboard</Link>
                </div>
                <div className="max-sm:mt-10">
                    <h1 className='text-xl uppercase mb-5'>Follow us</h1>
                    <p>Follow us on social media</p>
                    <div className="flex space-x-5 mt-3 max-sm:justify-center">
                        <Link><FaFacebookF className="hover:text-deepDark  text-xl"></FaFacebookF></Link>
                        <Link><FaInstagram className="hover:text-deepDark  text-xl"></FaInstagram></Link>
                        <Link><FaTwitter className="hover:text-deepDark  text-xl"></FaTwitter></Link>
                    </div>
                </div>
            </div>
            <hr className="my-5 max-w-[1480px] mx-auto"/>
            <p className='text-center'>Copyright 2023 © Sports Camp | All rights reserved</p>
        </div>
        </Fade>
    );
};

export default Footer;
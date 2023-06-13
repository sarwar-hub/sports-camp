import { FaFacebookF, FaInstagram, FaTwitter } from "react-icons/fa";
import {Link} from 'react-router-dom';

const Footer = () => {
    return (
        <div className='bg-light dark:bg-dark dark:text-light text-deepDark md:p-8 p-3'>
            <div className='md:flex max-sm:text-center max-w-[1480px] mx-auto md:justify-between'>
                <div>
                    <h1 className='text-xl uppercase mb-5'>Sports Camp</h1>
                    <p>232 Park road, CA</p>
                    <p>contact@sportscamp.com</p>
                    <p>+621 999 000</p>
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
    );
};

export default Footer;
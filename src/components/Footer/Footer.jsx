

const Footer = () => {
    return (
        <div className='bg-dark text-light md:p-8 p-3'>
            <div className='flex max-w-[1480px] mx-auto justify-between'>
                <div>
                    <h1 className='text-xl uppercase mb-5'>Sports Camp</h1>
                    <p>232 Park road, CA</p>
                    <p>contact@sportscamp.com</p>
                    <p>+621 999 000</p>
                </div>
                <div>
                    <h1 className='text-xl uppercase mb-5'>Follow us</h1>
                    <p>Follow us on social media</p>
                    icons
                </div>
            </div>
            <hr className="my-5 max-w-[1480px] mx-auto"/>
            <p className='text-center'>Copyright 2023 © Sports Camp | All rights reserved</p>
        </div>
    );
};

export default Footer;
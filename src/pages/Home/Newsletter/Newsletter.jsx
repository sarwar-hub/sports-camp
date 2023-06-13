import { Fade } from 'react-awesome-reveal';
import newsletterbg from '../../../assets/newsletterbg.jpg';
const Newsletter = () => {
    return (
        <div className=''>
            <div className="hero bg-fixed" style={{ backgroundImage: `url(${newsletterbg})` }}>
                <div className="hero-overlay bg-light/50 dark:bg-dark/50"></div>
                <Fade>
                <div className="hero-content text-center text-neutral-content">
                    <div className="max-w-md">
                        <h1 className="mb-5 text-5xl text-deepDark dark:text-light font-bold">Subscribe Now</h1>
                        <p className="mb-5 text-dark dark:text-light">We'll send you our weekly news.</p>


                        <div className=" rounded-none">
                            <input type="email" placeholder="Email" className="bg-light/70 text-dark outline-none p-2 rounded-none" />
                            <button className="bg-light p-2">SEND</button>
                        </div>

                    </div>
                </div>
                </Fade>
            </div>
        </div>
    );
};

export default Newsletter;
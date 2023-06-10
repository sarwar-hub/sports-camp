import newsletterbg from '../../../assets/newsletterbg.jpg';
const Newsletter = () => {
    return (
        <div className=''>
            <div className="hero bg-fixed" style={{ backgroundImage: `url(${newsletterbg})` }}>
                <div className="hero-overlay bg-opacity-80"></div>
                <div className="hero-content text-center text-neutral-content">
                    <div className="max-w-md">
                        <h1 className="mb-5 text-5xl text-light font-bold">Subscribe Now</h1>
                        <p className="mb-5 text-gray-300">We'll send you our weekly news.</p>


                        <div className=" rounded-none">
                            <input type="email" placeholder="Email" className="bg-dark/70 outline-none p-2 rounded-none" />
                            <button className="bg-dark p-2">SEND</button>
                        </div>

                    </div>
                </div>
            </div>
        </div>
    );
};

export default Newsletter;
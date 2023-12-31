import { Link } from 'react-router-dom';
import bg404 from '../../assets/404.svg';
import { Helmet } from 'react-helmet-async';

const Error404 = () => {
    return (
        <>
            <Helmet><title>404 - Page not found</title></Helmet>

        <div className='w-[100vw] h-[100vh]' style={{backgroundImage: `url(${bg404})`, backgroundSize: 'full', backgroundRepeat: 'no-repeat', backgroundPosition: 'center'}}>
            <p className='w-[300px] mx-auto text-center text-deepDark font-semibold pt-5'>Back to <Link to='/' className='text-sec hover:underline'>Home</Link></p>
        </div>
        </>
    );
};

export default Error404;
import { Link } from 'react-router-dom';
import bg404 from '../../assets/404.svg';

const Error404 = () => {
    return (
        <div className='w-[100vw] h-[100vh]' style={{backgroundImage: `url(${bg404})`, backgroundSize: 'full', backgroundRepeat: 'no-repeat', backgroundPosition: 'center'}}>
            <p className='w-[300px] mx-auto text-center text-light font-semibold pt-5'>Back to <Link to='/' className='text-sec hover:underline'>Home</Link></p>
        </div>
    );
};

export default Error404;
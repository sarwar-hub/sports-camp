import { Link } from "react-router-dom";
import {useNavigate, useLocation} from 'react-router-dom';
import SectionTitle from "../../components/SectionTitle/SectionTitle";
import { useForm } from "react-hook-form";
import { useContext, useState } from "react";
import { AuthContext } from "../../context/AuthProvider";

const Login = () => {
    // error state
    const [error, setError] = useState('');

    // loaded from context
    const { login, googleLogin, loader } = useContext(AuthContext);

    // react hook form data
    const { register, handleSubmit, formState: { errors } } = useForm();

    // location
    const location = useLocation();
    const navigate = useNavigate();
    const from = location?.state?.from.pathname || '/';
    console.log(location);

    // login with email and password
    const onSubmit = async (data) => {



        // login
        try {
            await login(data.email, data.password);
            navigate(from, {replace:true});
        } catch (err) {
            setError(err.message);
        }


    }



    // login with google
    const handleGoogleLogin = async () => {
        try {
            await googleLogin();
        } catch (err) {
            setError(err.message);
        }
    }


    return (
        <div className="max-w-sm py-20 mx-auto">
            <SectionTitle>Login</SectionTitle>
            <div className="max-w-md mx-auto bg-light p-10">
                <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-y-10">
                    <div className="w-full">
                        <label className="text-deepDark mb-2 block">Email</label>



                        <input {...register('email', { required: true })} className=" p-3 w-full text-deepDark bg-deepLight outline-none " type="email" name="email" placeholder="Email" />
                        {errors.email && <span className="text-red-500 p-1">* Enter your email</span>}


                    </div>
                    <div className="w-full">
                        <label className="text-deepDark mb-2 block">Password</label>


                        <input {...register('password', { required: true })} className=" p-3 w-full text-deepDark bg-deepLight outline-none " type="password" name="password" placeholder="Password" />
                        {errors.email && <span className="text-red-500 p-1">* Enter your password</span>}

                        {/* error from firebase */}
                        {error && <span className="text-red-500 p-1">* {error}</span>}


                    </div>
                    {/* login button */}
                    <button type="submit" className="bg-deepLight px-4 py-2 text-deepDark font-semibold border-[1px] border-light hover:bg-deepLight ">{loader ? 'Loading...' : 'login'}</button>
                    <p className="text-deepDark">New here? Go for <Link to='/register' className="hover:underline text-sec">Register</Link></p>
                </form>
                <div>
                    <div className="flex flex-col ">
                        <div className="divider">OR</div>
                        <button onClick={handleGoogleLogin} className="bg-deepLight px-4 py-2 text-deepDark font-semibold border-[1px] border-light hover:bg-deepLight ">Continue with Google</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Login;
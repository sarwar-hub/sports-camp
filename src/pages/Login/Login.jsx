import { Link } from "react-router-dom";
import SectionTitle from "../../components/SectionTitle/SectionTitle";
import SocialLogin from "../../components/SocialLogin/SocialLogin";
import { useForm } from "react-hook-form";
import { useContext, useState } from "react";
import { AuthContext } from "../../context/AuthProvider";

const Login = () => {
    // error state
    const [error, setError] = useState('');

    // loaded from context
    const {login, loader} = useContext(AuthContext);

    // react hook form data
    const { register, handleSubmit, formState: { errors } } = useForm();

    const onSubmit = async(data) => {



        // login
        try{
            await login(data.email, data.password);
            //navigate(from, {replace:true});
        }catch(err){
            setError(err.message);
        }

        console.log(data)

    }

    return (
        <div className="max-w-sm py-20 mx-auto">
        <SectionTitle>Login</SectionTitle>
        <div className="max-w-md mx-auto bg-dark p-10">
            <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-y-10">
                <div className="w-full">
                    <label className="text-light mb-2 block">Email</label>
                    


                    <input {...register('email', {required: true})} className=" p-3 w-full text-light bg-dark2 outline-none " type="email" name="email" placeholder="Email" />
                    {errors.email && <span className="text-red-500 p-1">* Enter your email</span>}


                </div>
                <div className="w-full">
                    <label className="text-light mb-2 block">Password</label>


                    <input {...register('password', {required: true})} className=" p-3 w-full text-light bg-dark2 outline-none " type="password" name="password" placeholder="Password" />
                    {errors.email && <span className="text-red-500 p-1">* Enter your password</span>}

                    {error && <span className="text-red-500 p-1">* {error}</span>}


                </div>
                {/* login button */}
                <button type="submit" className="bg-dark2 px-4 py-2 text-light font-semibold border-[1px] border-light hover:bg-dark2/50">{loader ? 'Loading...' : 'login'}</button>
                <p className="text-light">New here? Go for <Link to='/register' className="hover:underline text-sec">Register</Link></p>
            </form>
            <SocialLogin></SocialLogin>
        </div>
        </div>
    );
};

export default Login;
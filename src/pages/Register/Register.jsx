import { Link } from "react-router-dom";
import SectionTitle from "../../components/SectionTitle/SectionTitle";
import { useForm } from "react-hook-form";
import { useContext, useState } from "react";
import { AuthContext } from "../../context/AuthProvider";

const Register = () => {

    const [isMatch, setIsMatch] = useState(true);
    const [error, setError] = useState('');
    
    const {registerUser, updateNamePhoto, loader} = useContext(AuthContext);

    const { register, handleSubmit, formState: { errors } } = useForm();
    const onSubmit = async(data) => {

        if(data.password !== data.confirmPassword) {
            return setIsMatch(false);
        } else {
            setIsMatch(true);
        }

        // register user
        try{
            await registerUser(data.email, data.password);
            await updateNamePhoto(data.name, data.photo);
            //navigate(from, {replace:true});
        }catch(err){
            setError(err.message);
        }


        console.log(data)



    }

    return (
        <div className="max-w-md py-20 mx-auto">
            <SectionTitle>Register</SectionTitle>
            <div className="max-w-md mx-auto bg-dark p-10">
                <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-y-10">
                    <div className="flex justify-between gap-x-5">
                        <div className="w-full">
                            {error && <span className="text-red-500 p-1">* {error}</span>}
                            <label className="text-light mb-2 block">Name *</label>


                            <input {...register('name', { required: true })} className=" p-3 w-full text-light bg-dark2 outline-none " type="text" name="name" placeholder="Name" />
                            {errors.name && <span className="text-red-500 p-1">* Name is required</span>}


                        </div>
                        <div className="w-full">
                            <label className="text-light mb-2 block">Photo URL *</label>


                            <input {...register('photo', { required: true })} className=" p-3 w-full text-light bg-dark2 outline-none " type="url" name="photo" placeholder="Photo URL" />
                            {errors.photo && <span className="text-red-500 p-1">* Photo URL is required</span>}


                        </div>
                    </div>
                    <div className="w-full">
                        <label className="text-light mb-2 block">Email *</label>


                        <input {...register('email', { required: true })} className=" p-3 w-full text-light bg-dark2 outline-none " type="email" name="email" placeholder="Email" />
                        {errors.email && <span className="text-red-500 p-1">* Email is required</span>}


                    </div>
                    <div className="flex justify-between gap-x-5">
                        <div className="w-full">
                            <label className="text-light mb-2 block">Password *</label>


                            <input {...register('password', { required: true, minLength: 6, maxLength: 20, pattern: /(?=.*[A-Z])(?=.*[!@#$&*])/ })} className=" p-3 w-full text-light bg-dark2 outline-none " type="password" name="password" placeholder="Password" />



                        </div>
                        <div className="w-full">
                            <label className="text-light mb-2 block">Re-type Password *</label>


                            <input {...register('confirmPassword', { required: true })} className=" p-3 w-full text-light bg-dark2 outline-none " type="password" name="confirmPassword" placeholder="Re-type Password" />
                            {errors.confirmPassword && <span className="text-red-500 p-1">* Re-type password.</span>}
                            {isMatch || <span className="text-red-500 p-1">* Password mismatch</span>}

                        </div>
                    </div>
                    {errors.password?.type === 'required' && <span className="text-red-500 p-1">* Enter a passowrd.</span>}
                    {errors.password?.type === 'minLength' && <span className="text-red-500 p-1">* Password should be at least 6 characters.</span>}
                    {errors.password?.type === 'maxLength' && <span className="text-red-500 p-1">* Password should not be more then 20 characters.</span>}
                    {errors.password?.type === 'pattern' && <span className="text-red-500 p-1">* Password should contain one uppercase and one cpecial character.</span>}

                    {/* register button */}
                    <button type="submit" className="bg-dark2 px-4 py-2 text-light font-semibold border-[1px] border-light hover:bg-dark2/50">{loader ? 'Loading...' : 'Register'}</button>
                    <p className="text-light">Alrady registered? Go for <Link to='/login' className="hover:underline text-sec">Login</Link></p>
                </form>
            </div>
        </div>
    );
};

export default Register;
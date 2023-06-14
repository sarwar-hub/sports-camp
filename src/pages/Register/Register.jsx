import { Link, useNavigate, useLocation } from "react-router-dom";
import SectionTitle from "../../components/SectionTitle/SectionTitle";
import { useForm } from "react-hook-form";
import { useContext, useState } from "react";
import { AuthContext } from "../../context/AuthProvider";
import Swal from "sweetalert2";
import SocialLogin from "../../components/SocialLogin/SocialLogin";

const Register = () => {

    const [isMatch, setIsMatch] = useState(true);
    const [error, setError] = useState('');

    // location and navigate
    const navigate = useNavigate();
    const location = useLocation();
    const from = location.state?.from.pathname || '/';
    console.log(location);

    // data from context
    const { registerUser, updateNamePhoto, loader, setLoader } = useContext(AuthContext);

    // hook form
    const { register, handleSubmit, reset, formState: { errors } } = useForm();


    // on form submit
    const onSubmit = async (data) => {

        if (data.password !== data.confirmPassword) {
            return setIsMatch(false);
        } else {
            setIsMatch(true);
        }

        // register user by email and password
        try {
            await registerUser(data.email, data.password);
            await updateNamePhoto(data.name, data.photo);

            const userInfo = { name: data.name, email: data.email, photo: data.photo, role: 'student' };
            fetch('http://localhost:5000/users', {
                method: 'POST',
                headers: { 'content-type': 'application/json' },
                body: JSON.stringify(userInfo)
            })
                .then(res => res.json())
                .then(data => {
                    if (data.insertedId) {
                        setLoader(false);
                        Swal.fire({
                            position: 'top-center',
                            icon: 'success',
                            title: 'Account created successfully',
                            showConfirmButton: false,
                            timer: 1500
                          })

                        reset();
                        
                        navigate(from, {replace: true});
                    }
                })
                .catch(err => {
                    setLoader(false);
                    console.log(err.message)
                })
        } catch (err) {
            setLoader(false);
            setError(err.message);
        }



    }

    return (
        <div className="max-w-md py-20 mx-auto">
            <SectionTitle>Register</SectionTitle>
            <div className="max-w-md mx-auto bg-light dark:bg-dark p-10">
                <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-y-10">
                    <div className="flex justify-between gap-x-5">
                        <div className="w-full">
                            
                            <label className="text-deepDark dark:text-light mb-2 block">Name *</label>


                            <input {...register('name', { required: true })} className=" p-1 w-full text-deepDark bg-deepLight outline-none " type="text" name="name" placeholder="Name" />
                            {errors.name && <span className="text-red-500 p-1">* Name is required</span>}


                        </div>
                        <div className="w-full">
                            <label className="text-deepDark dark:text-light mb-2 block">Photo URL *</label>


                            <input {...register('photo', { required: true })} className=" p-1 w-full text-deepDark bg-deepLight outline-none " type="url" name="photo" placeholder="Photo URL" />
                            {errors.photo && <span className="text-red-500 p-1">* Photo URL is required</span>}


                        </div>
                    </div>
                    <div className="w-full">
                        <label className="text-deepDark dark:text-light mb-2 block">Email *</label>


                        <input {...register('email', { required: true })} className=" p-1 w-full text-deepDark bg-deepLight outline-none " type="email" name="email" placeholder="Email" />
                        {error && <span className="text-red-500 p-1">* {error}</span>}
                        {errors.email && <span className="text-red-500 p-1">* Email is required</span>}


                    </div>
                    <div className="flex justify-between gap-x-5">
                        <div className="w-full">
                            <label className="text-deepDark dark:text-light mb-2 block">Password *</label>


                            <input {...register('password', { required: true, minLength: 6, maxLength: 20, pattern: /(?=.*[A-Z])(?=.*[!@#$&*])/ })} className=" p-1 w-full text-deepDark bg-deepLight outline-none " type="password" name="password" placeholder="Password" />
                            {errors.password?.type === 'required' && <span className="text-red-500 p-1">* Enter a passowrd.</span>}
                            {errors.password?.type === 'minLength' && <span className="text-red-500 p-1">* Password should be at least 6 characters.</span>}
                            {errors.password?.type === 'maxLength' && <span className="text-red-500 p-1">* Password should not be more then 20 characters.</span>}
                            {errors.password?.type === 'pattern' && <span className="text-red-500 p-1">* Password should contain one uppercase and one cpecial character.</span>}


                        </div>
                        <div className="w-full">
                            <label className="text-deepDark dark:text-light mb-2 block">Re-type Password *</label>


                            <input {...register('confirmPassword', { required: true })} className=" p-1 w-full text-deepDark bg-deepLight outline-none " type="password" name="confirmPassword" placeholder="Re-type Password" />
                            {errors.confirmPassword && <span className="text-red-500 p-1">* Re-type password.</span>}
                            {isMatch || <span className="text-red-500 p-1">* Password mismatch</span>}

                        </div>
                    </div>

                    {/* register button */}
                    <button type="submit" className="transition hover:bg-transparent p-1 hover:text-sec font-semibold border-[1px] border-sec bg-sec text-light ">{loader ? 'Loading...' : 'Register'}</button>
                    <p className="text-deepDark dark:text-light">Alrady registered? Go for <Link to='/login' className="hover:underline text-sec">Login</Link></p>
                </form>
                {/* social login */}
                <SocialLogin></SocialLogin>
            </div>
        </div>
    );
};

export default Register;
import { Link } from "react-router-dom";
import PrimaryBtn from "../../components/PrimaryBtn/PrimaryBtn";
import SectionTitle from "../../components/SectionTitle/SectionTitle";

const Register = () => {
    return (
        <div className="max-w-md mx-auto">
            <SectionTitle>Register</SectionTitle>
            <div className="max-w-md mx-auto bg-dark p-10">
                <form className="flex flex-col gap-y-10">
                    <div className="flex justify-between gap-x-5">
                        <div className="w-full">
                            <lable className="text-light mb-2 block">Name</lable>
                            <input className=" p-3 w-full text-light bg-dark2 outline-none " type="text" name="name" placeholder="Name" required />
                        </div>
                        <div className="w-full">
                            <lable className="text-light mb-2 block">Photo URL</lable>
                            <input className=" p-3 w-full text-light bg-dark2 outline-none " type="url" name="photo" placeholder="Photo URL" required />
                        </div>
                    </div>
                    <div className="w-full">
                        <lable className="text-light mb-2 block">Email</lable>
                        <input className=" p-3 w-full text-light bg-dark2 outline-none " type="email" name="email" placeholder="Email" required />
                    </div>
                    <div className="flex justify-between gap-x-5">
                        <div className="w-full">
                            <lable className="text-light mb-2 block">Password</lable>
                            <input className=" p-3 w-full text-light bg-dark2 outline-none " type="password" name="password" placeholder="Password" required />
                        </div>
                        <div className="w-full">
                            <lable className="text-light mb-2 block">Confirm Password</lable>
                            <input className=" p-3 w-full text-light bg-dark2 outline-none " type="password" name="confirm-password" placeholder="Confirm Password" required />
                        </div>
                    </div>
                    <PrimaryBtn>Register</PrimaryBtn>
                    <p className="text-light">Alrady registered? Go for <Link to='/login' className="hover:underline text-sec">Login</Link></p>
                </form>
            </div>
        </div>
    );
};

export default Register;
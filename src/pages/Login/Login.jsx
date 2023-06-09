import { Link } from "react-router-dom";
import PrimaryBtn from "../../components/PrimaryBtn/PrimaryBtn";
import SectionTitle from "../../components/SectionTitle/SectionTitle";
import SocialLogin from "../../components/SocialLogin/SocialLogin";

const Login = () => {
    return (
        <div className="max-w-md mx-auto">
        <SectionTitle>Login</SectionTitle>
        <div className="max-w-md mx-auto bg-dark p-10">
            <form className="flex flex-col gap-y-10">
                <div className="w-full">
                    <lable className="text-light mb-2 block">Email</lable>
                    <input className=" p-3 w-full text-light bg-dark2 outline-none " type="text" name="name" placeholder="Email" required />
                </div>
                <div className="w-full">
                    <lable className="text-light mb-2 block">Password</lable>
                    <input className=" p-3 w-full text-light bg-dark2 outline-none " type="password" name="name" placeholder="Password" required />
                </div>
                <PrimaryBtn>Login</PrimaryBtn>
                <p className="text-light">New here? Go for <Link to='/register' className="hover:underline text-sec">Register</Link></p>
            </form>
            <SocialLogin></SocialLogin>
        </div>
        </div>
    );
};

export default Login;
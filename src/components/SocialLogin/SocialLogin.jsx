import { useContext } from "react";
import { AuthContext } from "../../context/AuthProvider";
import { useLocation, useNavigate } from "react-router-dom";

const SocialLogin = () => {
    // location and navigate
    const navigate = useNavigate();
    const location = useLocation();
    const from = location?.state?.from.pathname || '/';

    // loaded from context
    const { googleLogin, setLoader } = useContext(AuthContext);


    // login with google
    const handleGoogleLogin = () => {

        googleLogin()
            .then(data => {
                const userByGoogle = data.user;
                const userInfo = { name: userByGoogle.displayName, email: userByGoogle.email, photo: userByGoogle.photoURL, role: 'student' };
                

                fetch('https://sports-camp-server-neon.vercel.app/users', {
                    method: 'POST',
                    headers: { 'content-type': 'application/json' },
                    body: JSON.stringify(userInfo)
                })
                    .then(res => res.json())
                    .then(data => {
                        console.log(data);
                        navigate(from, { replace: true });
                    })
                    .catch(err => {
                        setLoader(false);
                        console.log(err.message)
                    })
                    navigate(from, { replace: true });


            })
            .catch(err => {
                console.log(err.message);
            })


    }
    return (
        <div>
            <div className="flex flex-col ">
                <div className="divider">OR</div>
                <button onClick={handleGoogleLogin} className="transition hover:bg-transparent p-1 hover:text-sec font-semibold border-[1px] border-sec bg-sec text-light ">Continue with Google</button>
            </div>
        </div>
    );
};

export default SocialLogin;
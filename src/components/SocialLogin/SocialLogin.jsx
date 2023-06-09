import { Divider } from "@mui/material";
import GoogleIcon from '@mui/icons-material/Google';
import SecondaryBtn from "../SecondaryryBtn/SecondaryBtn";

const SocialLogin = () => {
    return (
        <div className="flex flex-col ">
            <Divider className="py-5" orientation="horizontal" flexItem>
                OR
            </Divider>

            <SecondaryBtn><GoogleIcon className="mr-5"></GoogleIcon> Continue with Google</SecondaryBtn>
        </div>
    );
};

export default SocialLogin;
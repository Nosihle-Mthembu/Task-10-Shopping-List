import { useSelector, useDispatch } from "react-redux";
import {verifyUser} from "../features/LogIn/LogInSlice"

function SignIn(){
    const dispatch = useDispatch();
    dispatch(verifyUser());

return(
    <>
        This is log In
    </>
);
  
}

export default SignIn;

import useAuth from "../../hooks/useAuth";

const FbLogin = () => {
    const {fbSignIn} = useAuth();
    const handleFbSignin=()=>{
        fbSignIn()
    }
    return (
        <div>
        <button onClick={handleFbSignin} className="btn w-full my-4 bg-white-500 text-blue-500"> Facebook
        </button>
    </div>
    );
};

export default FbLogin;
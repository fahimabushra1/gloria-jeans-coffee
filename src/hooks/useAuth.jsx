import { useContext } from "react";
import { authContext } from "../authProvider/authProvider";


const useAuth = () => {
   const auth = useContext(authContext);
   return auth;
};

export default useAuth;
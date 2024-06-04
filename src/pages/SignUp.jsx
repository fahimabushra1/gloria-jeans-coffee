import { Link, useLocation, useNavigate } from "react-router-dom";
import GoogleLogin from "../components/login-registration/GoogleLogin";
import { useState } from "react";
import useAuth from "../hooks/useAuth";
import FbLogin from "../components/login-registration/FbLogin";

const Register = () => {
  const {createUser,user}= useAuth();
  console.log(user)
const [passMatch, setPassMatch]= useState();

 const navigate = useNavigate();
  const location = useLocation();

  const from = location?.state?.from?.pathname || '/'

const handleSubmit= (e)=>{
  e.preventDefault();

  const form = e.target;
  const name = form.name.value;
  const email = form.email.value;
  const password = form.password.value;
  const confirmPassword = form.confirmPassword.value;
  console.log(name,email,password,confirmPassword)


  if(passMatch != confirmPassword){
    setPassMatch(true);
  }

  if(password==confirmPassword){
    createUser(email,password).then((data)=>{
      if(data?.user?.email){
          const userInfo = {
              email:data?.user?.email,
              name:name,
          }
          fetch('https://gloria-jeans-server.vercel.app/user',{
              method:"POST",
              header:{
                  "Content-Type":"application/json"},
                  body:JSON.stringify(userInfo),
          })
          .then(res=>res.json())
          .then(data=>console.log(data))
      }
              })
    if(user){
      navigate(from)
     }
  }

}

    return (
      <div>
      <div className="hero min-h-screen bg-base-200">
<div className="hero-content flex-col lg:flex-row-reverse">
<div className="text-center lg:text-left">
 <h1 className="text-5xl font-bold">Register now!</h1>
</div>
<div className="card shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
 <form onSubmit={handleSubmit} className="card-body">
   <div className="form-control">
     <label className="label">
       <span className="label-text">Name</span>
     </label>
     <input type="name" name="name" placeholder="your name" className="input input-bordered" required />
     <label className="label">
       <span className="label-text">Email</span>
     </label>
     <input type="email" name="email" placeholder="email" className="input input-bordered" required />
   </div>
   <div className="form-control">
     <label className="label">
       <span className="label-text">Password</span>
     </label>
     <input type="password" name="password" placeholder="password" className="input input-bordered" required />
     <label className="label">
       <span className="label-text">Confirm Password</span>
     </label>
     <input type="password" name="confirmPassword" placeholder="confirm password" className="input input-bordered" required />
     {
       passMatch &&
         (<div className="my-2">
           <p className="text-red-500">Passwords do not match</p>
         </div>)
      }
     <label className="label">
       <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
     </label>
   </div>
   <div className="form-control mt-6">
     <button className="btn btn-primary"><Link to='/home'>Sign Up</Link></button>
   </div>
   <div className="mt-6">
     <GoogleLogin/>
     <FbLogin/>
   </div>
   <div>
     <p>
       Already have an account?<Link to='/login'className="text-red-500" > Login</Link>
     </p>
   </div>
 </form>
</div>
</div>
</div> 
   </div>
    );
};

export default Register;

import { useEffect, useState } from "react";
import useAuth from "../../hooks/useAuth";
import { Link } from "react-router-dom";


const Dashboard = () => {
  const {user}= useAuth();
  const [userInfo, setUserInfo] = useState();


  useEffect(()=>{
    fetch(`http://localhost:5000/user/${user?.email}`)
    .then((res)=>res.json())
    .then(data=>setUserInfo(data))
  },[user])
 
  console.log(userInfo)

    return (
      <div>
      <h1 className="text-5xl text-center text-[#431407] my-8 font-bold">Dashboard</h1>
      <div className="card w-96 bg-base-100 shadow-xl">
  <div className="card-body">
    <h2 className="card-title">User Profile</h2>
    <p>User: <span className="text-[#f97316]">{userInfo?.name}</span></p>
    <p>Email: <span className="text-[#f97316]">{userInfo?.email}</span></p>
    <div className="card-actions justify-end">
      <Link to={`/dashboard/edit-profile/${userInfo?._id}`} className="btn btn-primary">Edit Profile</Link>
    </div>
  </div>
</div>
        </div>
 

    );
};

export default Dashboard;

import { useEffect, useState} from "react";
import useAuth from "../../hooks/useAuth";
import { useLoaderData } from "react-router-dom";
import { Chart as ChartJS} from "chart.js/auto";
import { Bar} from "react-chartjs-2";

import SearchCoffees from "../../components/dashboard/SearchCoffees";
import { Link } from "react-router-dom";


const Dashboard = () => {
  const coffee =  useLoaderData();
  const [userInfo, setUserInfo] = useState();
  const [search,setSearch] = useState();
  console.log(coffee);
  const {user}= useAuth();
console.log(user)

  useEffect(()=>{
    fetch(`http://localhost:5000/user/${user?.email}`)
    .then((res)=>res.json())
    .then(data=>setUserInfo(data))
  },[user])
 
  console.log(userInfo)


    return (
      <div>
      <h1 className="text-5xl text-center text-[#431407] my-8 font-bold">Dashboard</h1>
      <div className="my-4 flex flex-col justify-center items-center">
          <label className="input input-bordered flex items-center gap-2 w-1/4">
         <input type="text" className="grow" onChange={(e)=>setSearch(e.target.value)} placeholder="Search coffee" />
         <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" fill="currentColor" className="w-4 h-4 opacity-70"><path fillRule="evenodd" d="M9.965 11.026a5 5 0 1 1 1.06-1.06l2.755 2.754a.75.75 0 1 1-1.06 1.06l-2.755-2.754ZM10.5 7a3.5 3.5 0 1 1-7 0 3.5 3.5 0 0 1 7 0Z" clipRule="evenodd" /></svg>
         </label>
        </div>
      <div className="flex justify-evenly items-center">
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
        <div className="card w-96 bg-base-100 shadow-xl">
       <div className="card-body">
       <h2 className="card-title">All Coffees</h2>
       <p>{coffee.length} items</p>
       <div className="card-actions justify-end">
      <Link to={'/dashboard/popular-coffees'} className="btn btn-primary">See items</Link>
    </div>
  </div>
</div>
<div className="card w-96 bg-base-100 shadow-xl">
  <div className="card-body">
    <h2 className="card-title">Popular Coffees</h2>
    <p>{coffee?.filter((item)=>{return item.brand === 'Starbucks'}).length} items</p>
    <div className="card-actions justify-end">
      <Link to={'/dashboard/popular-coffees'} className="btn btn-primary">See items</Link>
    </div>
  </div>
</div>
       </div>
       <h2 className="text-3xl font-bold text-center my-4">All <span className="text-[#f97316]">Coffees</span> Here..</h2>
        <div className="flex justify-center items-stretch flex-wrap gap-4 px-6">
        {
            // eslint-disable-next-line react/prop-types
            coffee?.filter((item)=>{
              return search?.toLowerCase()===''
              ? item
              : item.name?.toLowerCase().includes(search);
            })
            ?.map((item)=>
              <SearchCoffees key={item._id} coffee={item} />)
          }
        </div>
<div className="w-1/2 my-24">
<Bar
          data={{
            labels:['A','B','C'],
            datasets:[
              {
                label: "revenue",
                data: ['200','300','500'],
                backgroundColor:[
                  "rgba(3, 207, 98, 0.89)",
                  "rgba(255, 0, 69, 0.8)",
                  "rgba(105, 0, 255, 0.89)",
                ],
                borderRadius:5,
              },
              {
                label: "loss",
                data: ['90','30','50'],
                backgroundColor:[
                  "rgba(0, 119, 145, 0.8)",
                  "rgba(149, 206, 82, 0.8)",
                  "rgba(15, 255, 255, 0.8)",
                ],
                borderRadius:5,
              },
            ],
          }}
          />
</div>
        </div>
        
 

    );
};

export default Dashboard;
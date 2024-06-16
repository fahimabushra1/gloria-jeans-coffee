import { Link, Outlet } from "react-router-dom";
import useAuth from "../hooks/useAuth";


const DashboardLayout = () => {
  const {logOut,user}= useAuth();

  const handleLogout = async ()=>{
    await logOut()
  }

    return (
      <>
      <div className="drawer">
  <input id="my-drawer-3" type="checkbox" className="drawer-toggle" /> 
  <div className="drawer-content flex flex-col">
    {/* Navbar */}
    <div className="w-full navbar bg-base-300 text-[#431407] font-bold">
      <div className="flex-none lg:hidden">
        <label htmlFor="my-drawer-3" aria-label="open sidebar" className="btn btn-square btn-ghost">
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" className="inline-block w-6 h-6 stroke-current"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"></path></svg>
        </label>
      </div> 
      <div className="flex-1 px-2 mx-2"><Link to={"/"}>Home</Link>
      <button onClick={handleLogout} className="btn ml-4">Log out</button>
      </div>
      <div className="flex-none hidden lg:block">
        <ul className="menu menu-horizontal">
          {/* Navbar menu content here */}
          <li><Link to={""}>Dashboard</Link></li>
                <li>
                  <Link to={"/dashboard/all-products"}>All Products</Link>
                  </li>
                <li>
                  <Link to={"/dashboard/add-products"}>Add Products</Link>
                  </li>
                  {
                    user &&
                    <span className="mx-4 mt-2">{user?.email}</span>
                  }  
        </ul>
      </div>
    </div>
    {/* Page content here */}
 <Outlet/>
  </div> 
  <div className="drawer-side">
    <label htmlFor="my-drawer-3" aria-label="close sidebar" className="drawer-overlay"></label> 
    <ul className="menu p-4 w-80 min-h-full bg-base-200">
      {/* Sidebar content here */}
      <li><Link to={""}>Dashboard</Link></li>
                <li>
                  <Link to={"/dashboard/all-products"}>All Products</Link>
                  </li>
                <li>
                  <Link to={"/dashboard/add-products"}>Add Products</Link>
                  </li>
                  {
                    user &&
                    <span className="text-[#4c0519] font-bold">{user?.email}</span>
                  } 
                  <button onClick={handleLogout} className="btn">Log out</button>
    </ul>
  </div>
</div>
      </>

    );
};

export default DashboardLayout;


{/* <li><Link to={""}>Dashboard</Link></li>
                <li>
                  <Link to={"/dashboard/all-products"}>All Products</Link>
                  </li>
                <li>
                  <Link to={"/dashboard/add-products"}>Add Products</Link>
                  </li> */}
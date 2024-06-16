
import SingleUser from "../../components/dashboard/SingleUser";
import useAuth from "../../hooks/useAuth";


const Dashboard = () => {
  const {user}= useAuth();
 
  console.log(user)

    return (
        <div>
            <h1 className="text-5xl text-center font-bold text-[#431407] my-8">My Dashboard</h1>
          <div className="overflow-x-auto">
            <table className="table">
              {/* head */}
                <thead>
                  <tr>
                    <th>ID</th>
                    <th>Name</th>
                    <th>Mail Address</th>
                    <th>Last Login Time</th>
                    <th>Access Token</th>
                  </tr>
                </thead>
            <tbody>
               {
               <SingleUser key={user?.id} user={user} />
               }
            </tbody>
            </table>
          </div>
        </div>
    );
};

export default Dashboard;
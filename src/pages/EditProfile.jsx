import toast from "react-hot-toast";
import {useLoaderData } from "react-router-dom";


const EditProfile = () => {
    const data = useLoaderData();

    const handleSubmit= async(e)=>{
        e.preventDefault();
    
        const form = e.target;
     const name = form.name.value;
     const phone = form.phone.value;
     const age = form.age.value;
     console.log(name,phone,age);
     const userData ={name,phone,age};

     await fetch(`http://localhost:5000/user/${data?.email}`,{
        method: "PATCH",
        headers: {
            "Content-type": "application/json"
        },
        body: JSON.stringify(userData),})
        .then((res) =>res.json())
        .then((data) =>{
          toast.success('data added successfully');
          console.log(data)
          form.reset()})
        .catch((err) => {
          console.log(err.message);
       });
    }
    return (
        <div>
        <h1 className="text-5xl text-center text-[#431407] my-8 font-bold">Edit Profile</h1>
      <div className=" flex flex-col items-center">
      <div className="card shrink-0 w-full max-w-sm shadow-2xl bg-base-100 mt-16">
        <form onSubmit={handleSubmit} className="card-body">
      <div className="bg-base-100 shadow-2xl p-12">
     <div className="form-control">
          <label className="label">
            <span className="label-text">Name</span>
          </label>
          <input type="text" name="name" placeholder="user name" defaultValue={data?.name}className="input input-bordered" required />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Email</span>
          </label>
          <input type="text" name="email" placeholder="user email" value={data?.email} disabled className="input input-bordered" required />
          </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Phone Number</span>
          </label>
          <input type="number" name="phone" placeholder="phone number" className="input input-bordered" required />
          </div>
       <div className="w-1/2">
       <div className="form-control">
          <label className="label">
            <span className="label-text">User Age</span>
          </label>
          <input type="text" name="age" placeholder="user age" className="input input-bordered" required />
        </div>
        </div>
      </div>
        <div className="form-control mt-6">
          <button className="btn btn-primary">Edit</button>
          </div>
      </form>
      </div>
      </div>
</div>
    );
};

export default EditProfile;
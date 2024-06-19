import { useState } from "react";
import toast from "react-hot-toast";
import { useLoaderData } from "react-router-dom";

const EditProduct = () => {
  const token = localStorage.getItem('token')
    const coffee = useLoaderData();
    console.log(coffee)

    const [coffeeName, setCoffeeName] = useState(coffee?.name);
    const [coffeeBrand, setCoffeeBrand] = useState(coffee?.brand);
    const [coffeeCategory, setCoffeeCategory] = useState(coffee?.category);
    const [coffeePrice, setCoffeePrice] = useState(coffee?.price);
    const [coffeeSize, setCoffeeSize] = useState(coffee?.size);
    const [coffeeImg, setCoffeeImg] = useState(coffee?.img);

    const handleSubmit= async (e)=>{
        e.preventDefault();
    
        const form = e.target;
     const name = form.productName.value;
     const brand = form.brandName.value;
     const price = form.price.value;
     const category = form.category.value;
     const size = form.size.value;
     const img = form.img.value;
     console.log(name,brand,price,category,size,img);

     const data ={name,category,brand,price,size,img};


     await fetch(`http://localhost:5000/coffees/${coffee._id}`,{
        method: "PATCH",
        headers: {
            "Content-type": "application/json",
            authorization: `Bearer ${token}`
        },
        body: JSON.stringify(data),})
        .then((res) =>res.json())
        .then((data) =>{
          toast.success('data updated successfully');
          console.log(data)
          form.reset()})
        .catch((err) => {
          toast.error('data  updated fail ')
          console.log(err.message);
       });
          
      }
        return (
        <div>
            <h1 className="text-5xl text-center text-[#431407] my-8 font-bold">Update Products</h1>
            <form onSubmit={handleSubmit} className="card-body w-full">
          <div className="flex justify-center gap-4 bg-base-100 shadow-2xl p-12">
         <div className="w-1/2">
         <div className="form-control w-full">
              <label className="label">
                <span className="label-text">Name</span>
              </label>
              <input type="text" name="productName" placeholder="product name" value={coffeeName} onChange={(e)=>setCoffeeName(e.target.value)} className="input input-bordered" required />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Brand Name</span>
              </label>
              <input type="text" name="brandName" placeholder="brand name" value={coffeeBrand} onChange={(e)=>setCoffeeBrand(e.target.value)} className="input input-bordered" required />
              </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Price</span>
              </label>
              <input type="number" name="price" placeholder="price" value={coffeePrice} onChange={(e)=>setCoffeePrice(e.target.value)} className="input input-bordered" required />
              </div>
         </div>
           <div className="w-1/2">
           <div className="form-control">
              <label className="label">
                <span className="label-text">Category Name</span>
              </label>
              <input type="text" name="category" placeholder="category" value={coffeeCategory} onChange={(e)=>setCoffeeCategory(e.target.value)} className="input input-bordered" required />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Size</span>
              </label>
              <input type="text" name="size" placeholder="size" value={coffeeSize} onChange={(e)=>setCoffeeSize(e.target.value)} className="input input-bordered" required />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Image</span>
              </label>
              <input type="text" name="img" placeholder="image URL" value={coffeeImg} onChange={(e)=>setCoffeeImg(e.target.value)} className="input input-bordered" required />
            </div>
           </div>
          </div>
            <div className="form-control mt-6">
              <button className="btn btn-primary">Update</button>
              </div>
          </form>
    </div>
);
    };
    

export default EditProduct;
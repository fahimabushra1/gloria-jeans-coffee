import { useLoaderData } from "react-router-dom";

const ProductDetails = () => {
    const coffee = useLoaderData();
    console.log(coffee)
    const {id,name,img,brand,category,price,size} = coffee
    return (
        <div className="flex justify-center items-center my-16 p-4">
            <div className="card card-compact w-96 bg-base-100 shadow-xl">
  <figure><img src= {img} alt="Coffees" /></figure>
  <div className="card-body">
    <h2 className="card-title font-bold text-3xl text-[#431407]">No:{id} {name}</h2>
    <p className="text-xl">Brand:<span className="font-bold text-2xl text-[#431407]"> {brand}</span></p>
    <p className="text-xl">Category: <span className="font-bold text-2xl text-[#431407]"> {category}</span></p>
    <p className="text-xl">Price: <span className="font-bold text-2xl text-[#431407]"> {price}$</span></p>
    <p className="text-xl">Size:<span className="font-bold text-2xl text-[#431407]"> {size}</span></p>
    <div className="card-actions justify-end">
      <button className="btn btn-primary mt-4">Buy Now</button>
    </div>
  </div>
</div>
        </div>
    );
};

export default ProductDetails;
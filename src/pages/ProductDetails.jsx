import { useLoaderData } from "react-router-dom";

const ProductDetails = () => {
    const coffee = useLoaderData();
    console.log(coffee)
    const {_id,name,img,brand,category,price,size} = coffee
    return (
        <div className="flex justify-center items-center mt-20 p-4">
            <div className="card card-compact w-96 bg-base-100 shadow-xl">
  <figure><img src= {img} alt="Coffees" /></figure>
  <div className="card-body">
    <h2 className="card-title font-bold text-xl text-[#431407]">{name}</h2>
    <span>No: {_id}</span>
    <p>Brand:<span className="font-bold text-[#d97706]"> {brand}</span></p>
    <p>Category: <span className="font-bold text-[#d97706]"> {category}</span></p>
    <p>Price: <span className="font-bold text-[#d97706]"> {price}$</span></p>
    <p>Size:<span className="font-bold text-[#d97706]"> {size}</span></p>
    <div className="card-actions justify-end">
      <button className="btn btn-primary mt-4">Buy Now</button>
    </div>
  </div>
</div>
        </div>
    );
};

export default ProductDetails;
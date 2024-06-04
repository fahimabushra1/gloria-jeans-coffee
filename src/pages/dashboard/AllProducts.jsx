import { useEffect, useState } from "react";
import SingleProduct from "../../components/dashboard/SingleProduct";


const AllProducts = () => {
  const [coffeeProducts,setCoffeeProducts] = useState();

  useEffect(()=>{
    fetch("https://gloria-jeans-server.vercel.app/coffees/")
    .then(res=>res.json())
    .then(data=>setCoffeeProducts(data));
        },[]);

        const handleDeleteProduct = (id) =>{
                setCoffeeProducts(coffeeProducts.filter((coffeeProduct) => coffeeProduct._id!==id))}

  return (
    <div>
      <h1 className="text-5xl text-center text-[#431407] my-8 font-bold">All Coffees</h1>
<div className=" flex justify-around items-center justify-items-stretch flex-wrap gap-4 px-6">
  {
    coffeeProducts?.map((coffeeProduct) =><SingleProduct key ={coffeeProduct._id} coffeeProduct= {coffeeProduct} onDelete={handleDeleteProduct}/>)
  }
</div>
    </div>
  );
};

export default AllProducts;
import toast from "react-hot-toast";
import { Link } from "react-router-dom";


const SingleProduct = ({coffeeProduct, onDelete}) => {
    console.log(coffeeProduct,onDelete)
    const {_id,name,img,brand,size,category,price}= coffeeProduct;

    const handleDelete = async () =>{
        await fetch(`http://localhost:5000/coffees/${_id}`,{
            method: "DELETE",
          })
            .then((res) =>res.json())
            .then((data) =>{
                console.log(data)
                onDelete(_id)
                toast.success('product deleted')
            })
          }

    return (
        <div>
            <div className="card card-compact w-96 bg-base-100 shadow-xl">
  <div className="flex justify-evenly items-center">
  <div>
  <figure><img className="rounded-xl w-52" src={img} alt="coffees" /></figure>
  </div>
 <div>
 <div className="card-body">
 <h2 className="card-title font-bold text-xl text-[#431407]">{name}</h2>
    <span className="text-xs">ID No: {_id}</span>
    <p>Brand:<span className="font-bold text-[#d97706]"> {brand}</span></p>
    <p>Category: <span className="font-bold text-[#d97706]"> {category}</span></p>
    <p>Price: <span className="font-bold text-[#d97706]"> {price}$</span></p>
    <p>Size:<span className="font-bold text-[#d97706]"> {size}</span></p>
    <div className="card-actions justify-start mt-2">
       <button className="mr-2 bg-[#E26E67] px-4 rounded"><Link to={`/dashboard/edit-product/${_id}`}>Edit</Link></button>
        <button onClick={handleDelete} className="bg-[#EB9532] px-2 rounded">Delete</button>
        </div>
    </div>
  </div>
  </div>
</div>
</div>
    );
};

export default SingleProduct;
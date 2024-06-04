import { Link } from "react-router-dom";


const SingleProduct = ({coffeeProduct, onDelete}) => {
    console.log(coffeeProduct,onDelete)
    const {_id,name,img,brand}= coffeeProduct;

    const handleDelete = async () =>{
        await fetch(`https://gloria-jeans-server.vercel.app/coffees/${_id}`,{
            method: "DELETE",
          })
            .then((res) =>res.json())
            .then((data) =>{
                console.log(data)
                onDelete(id)
            })
          }

    return (
        <div>
            <div className="card card-compact w-96 bg-base-100 shadow-xl">
  <figure><img className="rounded-xl w-52" src={img} alt="coffees" /></figure>
  <div className="card-body">
   <h2 className="card-title text-3xl font-bold">{name}</h2>
    <p className="text-xl font-bold">{brand}</p>
    <div className="card-actions justify-start mt-2">
       <button className="mr-2 bg-green-500 p-2 rounded"><Link to='/dashboard/edit-product/:id'>Edit</Link></button>
        <button onClick={handleDelete} className="bg-red-500 p-2 rounded">Delete</button>
    </div>
  </div>
</div>
</div>
    );
};

export default SingleProduct;
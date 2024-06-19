import { Link } from "react-router-dom";

const Product = ({coffee}) => {
    const {_id,name,price,img} = coffee;

    return (
        <div className="card w-96 bg-base-100 shadow-xl">
        <figure className="px-10 pt-10">
          <img src= {img} alt="coffees" className="rounded-xl w-52 max-h-36" />
        </figure>
        <div className="card-body items-center text-center">
          <h2 className="card-title font-bold text-3xl text-[#431407]">{name}</h2>
        <div>
         <p className="font-bold">Price: <span className="font-bold text-2xl text-[#431407]">{price}$</span></p>
        </div>
          <div className="card-actions">
            <button className="btn btn-primary mt-4"><Link to ={`/products/${_id}`}>See Details</Link></button>
          </div>
        </div>
      </div>
    );
};

export default Product;
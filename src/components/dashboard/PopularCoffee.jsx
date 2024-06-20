
const PopularCoffee = ({coffee}) => {
    console.log(coffee)
    const {_id,name,img,brand,category,price,size} = coffee
    return (
       
            <div className="card card-compact w-96 bg-base-100 shadow-xl">
  <figure><img src= {img} alt="Coffees" /></figure>
  <div className="card-body">
    <h2 className="card-title font-bold text-xl text-[#431407]">{name}</h2>
    <span>No: {_id}</span>
    <p>Brand:<span className="font-bold text-[#d97706]"> {brand}</span></p>
    <p>Category: <span className="font-bold text-[#d97706]"> {category}</span></p>
    <p>Price: <span className="font-bold text-[#d97706]"> {price}$</span></p>
    <p>Size:<span className="font-bold text-[#d97706]"> {size}</span></p>
  </div>
</div>
    );
};

export default PopularCoffee;
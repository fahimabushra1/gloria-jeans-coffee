import Product from "./Product";


const Products = ({data}) => {
  console.log(data)
    return (
        <div id="our-products">
         <h1 className="text-center font-bold text-[#431407] my-8 text-5xl our-products">Our Products</h1>
         <div className="flex justify-center items-stretch flex-wrap gap-4 px-6">
          {
            // eslint-disable-next-line react/prop-types
            data?.map((coffee)=>
              <Product key={coffee._id} coffee={coffee} />)
          }
         </div>
        </div>
    );
};

export default Products;
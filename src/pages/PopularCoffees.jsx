import { useEffect, useState } from "react";
import PopularCoffee from "../components/dashboard/PopularCoffee";

const PopularCoffees = () => {
    const [popularCoffees,setPopularCoffees] = useState();

    useEffect(()=>{
        fetch("http://localhost:5000/coffees/")
        .then(res=>res.json())
        .then(data=>{
            const popular = data?.filter((item)=>item.brand === 'Starbucks');
            setPopularCoffees(popular)});
            },[]);
    return (
        <div>
            <h1 className="text-center font-bold text-5xl my-12">Popular <span className="text-[#f97316]">Coffees</span></h1>
            <div className="flex justify-center items-stretch flex-wrap gap-4 px-6">
                {
                    popularCoffees?.map((coffee)=>
                  <PopularCoffee
                  key={coffee?._id}
                  coffee={coffee}
                  />
                )
                }
            </div>
        </div>
    );
};

export default PopularCoffees;
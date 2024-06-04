import { useLoaderData } from "react-router-dom";
import Banner from "../components/home/Banner";
import Products from "../components/home/Products";
import Accordian from "../components/home/Accordian";
import Outlets from "../components/home/Outlets";
import Statistics from "../components/home/Statistics";


const Home = () => {
    const data = useLoaderData();
    console.log(data)
    return (
        <div>
            <Banner/>
            <Statistics/>
            <Products data= {data}/>
            <Accordian/>
            <Outlets/>
        </div>
    );
};

export default Home;
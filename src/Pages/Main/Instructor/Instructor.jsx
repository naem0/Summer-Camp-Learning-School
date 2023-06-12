import { useLoaderData } from "react-router-dom";
import PopularInstatorCard from "../Home/PopularInstator/PopularInstatorCard";


const Instructor = () => {
    const popularinstactors = useLoaderData()
    console.log(popularinstactors)
    return (
        <div className="pt-32 mb-10">
           <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4">
                {
                    popularinstactors.map(popularinstactor =><PopularInstatorCard key= {popularinstactor._id} popularinstactor ={popularinstactor}></PopularInstatorCard>)
                }
            </div> 
        </div>
    );
};

export default Instructor;
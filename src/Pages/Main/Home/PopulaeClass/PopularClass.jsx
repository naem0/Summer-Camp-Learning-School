import { useQuery } from "react-query";
import useAxiosSecure from "../../../../hooks/useAxiosSecure";
import PopularClassCard from "./PopularClassCard/PopularClassCard";


const PopularClass = () => {
    const [axiosSecure] = useAxiosSecure();
    const { data: popularclass = [] } = useQuery(['popularclass'], async () => {
        const res = await axiosSecure.get(`/topclass`)
        return res.data;
    })
    console.log(popularclass)
    return (
        <div className="mt-12">
            <h1 className="text-center mb-12 text-4xl text-slate-600 font-bold">Popular Class</h1>
            <div className=" flex gap-12 justify-center mb-12 text-center md:w-2/3 lg:w-1/2 mx-auto text-slate-800 font-semibold">
                <p>
                    Unlock the Joy of Learning! Explore our vast collection of educational toys designed to engage young minds and make learning fun.
                </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-4 my-16 ">
                {
                    popularclass.map(topclass => <PopularClassCard topclass={topclass} key={topclass._id}></PopularClassCard>)
                }
            </div>
        </div>

    );
};

export default PopularClass;
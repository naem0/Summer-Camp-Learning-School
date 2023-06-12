import { useQuery } from "react-query";
import useAxiosSecure from "../../../../hooks/useAxiosSecure";
import PopularClassCard from "./PopularClassCard/PopularClassCard";


const PopularClass = () => {
    const [axiosSecure] = useAxiosSecure();
    const { data: popularclass = []} = useQuery(['popularclass'], async () => {
        const res = await axiosSecure.get(`/topclass`)
        return res.data;
    })
    console.log(popularclass)
    return (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 my-16 ">
            {
                popularclass.map(topclass=><PopularClassCard topclass={topclass} key={topclass._id}></PopularClassCard>)
            }
        </div>
    );
};

export default PopularClass;
import useAxiosSecure from '../../../../hooks/useAxiosSecure';
import { useQuery } from 'react-query';
import PopularInstatorCard from './PopularInstatorCard';

const PopularInstator = () => {
    const [axiosSecure] = useAxiosSecure();
    const { data: popularinstactors = [] } = useQuery(['popularinstactor'], async () => {
        const res = await axiosSecure.get(`/topinstructo`)
        return res.data;
    })
    console.log(popularinstactors)
    return (
        <div className="mb-12">
            <h1 className="text-center mb-12 text-4xl text-slate-600 font-bold">Popular Instactors</h1>
            <div className=" flex gap-12 justify-center mb-12 text-center md:w-2/3 lg:w-1/2 mx-auto text-slate-800 font-semibold">
                <p>
                    Unlock the Joy of Learning! Explore our vast collection of educational toys designed to engage young minds and make learning fun.
                </p>
            </div>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-4'>
                {
                    popularinstactors.map(popularinstactor => <PopularInstatorCard key={popularinstactor._id} popularinstactor={popularinstactor}></PopularInstatorCard>)
                }
            </div>
        </div>

    );
};

export default PopularInstator;
import useAxiosSecure from '../../../../hooks/useAxiosSecure';
import { useQuery } from 'react-query';
import PopularInstatorCard from './PopularInstatorCard';

const PopularInstator = () => {
    const [axiosSecure] = useAxiosSecure();
    const { data: popularinstactors = []} = useQuery(['popularinstactor'], async () => {
        const res = await axiosSecure.get(`/topinstructo`)
        return res.data;
    })
    console.log(popularinstactors)
    return (
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-10'>
            {
                popularinstactors.map(popularinstactor =><PopularInstatorCard key= {popularinstactor._id} popularinstactor ={popularinstactor}></PopularInstatorCard>)
            }
        </div>
    );
};

export default PopularInstator;
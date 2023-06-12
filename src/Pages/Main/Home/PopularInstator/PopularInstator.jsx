import useAxiosSecure from '../../../../hooks/useAxiosSecure';
import { useQuery } from 'react-query';

const PopularInstator = () => {
    const [axiosSecure] = useAxiosSecure();
    const { data: popularinstactor = []} = useQuery(['popularinstactor'], async () => {
        const res = await axiosSecure.get(`/topinstructo`)
        return res.data;
    })
    console.log(popularinstactor)
    return (
        <div>
            
        </div>
    );
};

export default PopularInstator;
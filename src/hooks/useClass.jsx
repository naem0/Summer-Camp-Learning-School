import { useQuery } from "react-query";
import useAuth from "./useAuth";
import useAxiosSecure from "./useAxiosSecure";


const useClass = () => {
    const { user, loading } = useAuth();
    // const token = localStorage.getItem('access-token');
    const [axiosSecure] = useAxiosSecure();
    const { refetch, data: allclass = [] } = useQuery({
        queryKey: ['allclass', user?.email],
        enabled: !loading,
        queryFn: async () => {
            const res = await axiosSecure(`/studentallclass?email=${user?.email}`)
            console.log('res from axios', res)
            return res.data;
        },
    })
    return [allclass, refetch]
};

export default useClass;
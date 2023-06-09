
import { useQuery } from "react-query";
import useAuth from "./useAuth";
import useAxiosSecure from "./useAxiosSecure";

const useInstructo = () => {
    const {user, loading} = useAuth();
    const [axiosSecure] = useAxiosSecure();
    // use axios secure with react query
    const {data: isInstructo, isLoading: isInstructoLoading} = useQuery({
        queryKey: ['isInstructo', user?.email],
        enabled: !loading,
        queryFn: async () => {
            const res = await axiosSecure.get(`/users/instructo/${user?.email}`);
            return res.data.instructo;
        }
    })
    return [isInstructo, isInstructoLoading]
};

export default useInstructo;
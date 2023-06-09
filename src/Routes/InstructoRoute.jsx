import { Navigate, useLocation } from "react-router";
import useInstructo from "../hooks/useInstructo";
import useAuth from "../hooks/useAuth";


// eslint-disable-next-line react/prop-types
const InstructoRoute = ({children}) => {
    const { user, loading } = useAuth();
    const [isInstructo, isInstructoLoading] = useInstructo();
    const location = useLocation();

    if(loading || isInstructoLoading){
        return <progress className="progress w-56"></progress>
    }

    if (user && isInstructo) {
        return children;
    }
    return <Navigate to="/" state={{from: location}} replace></Navigate>
};

export default InstructoRoute;
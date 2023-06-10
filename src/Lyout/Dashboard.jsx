import { NavLink, Outlet } from "react-router-dom";
import { FaWallet, FaCalendarAlt, FaHome, FaUtensils, FaBook, FaUsers } from 'react-icons/fa';
import useAdmin from "../hooks/useAdmin";
import useInstructo from "../hooks/useInstructo";
import useAuth from "../hooks/useAuth";

const Dashboard = () => {
    const {user, loading} = useAuth();
    if (loading) {
        <progress className="progress w-56"></progress>
    }
    const [isAdmin] = useAdmin();
    const [isInstructo] = useInstructo();
    console.log(isAdmin, isInstructo)

    return (
        <div className="drawer lg:drawer-open">
            <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
            <div className="drawer-content flex flex-col items-center justify-center">
                <Outlet></Outlet>
                <label htmlFor="my-drawer-2" className="btn btn-primary drawer-button lg:hidden">Open drawer</label>

            </div>
            <div className="drawer-side">
                <label htmlFor="my-drawer-2" className="drawer-overlay"></label>
                
                <div className="divider"></div>
                <ul className="menu p-4 w-80">

                    {
                        isAdmin ? <>
                            <li><NavLink to="/dashboard/adminhome"><FaHome></FaHome> Admin Home</NavLink></li>
                            <li><NavLink to="/dashboard/manageclass"><FaWallet></FaWallet> Manage Class</NavLink></li>
                            <li><NavLink to="/"><FaBook></FaBook> Manage Bookings(not implemented)</NavLink></li>
                            <li><NavLink to="/dashboard/allusers"><FaUsers></FaUsers> All Users</NavLink></li>

                        </> : <>
                            {
                                isInstructo ? <>
                                    <li><NavLink to="/dashboard/addclass"> <FaUtensils></FaUtensils> Add an Item</NavLink></li>
                                </> : <>
                                    <li><NavLink to="/dashboard/userhome"><FaHome></FaHome> User Home</NavLink></li>
                                    <li><NavLink to="/dashboard/myclass"><FaCalendarAlt></FaCalendarAlt> My Selected Classes</NavLink></li>
                                    <li><NavLink to="/dashboard/pamenthistory"><FaWallet></FaWallet> Payment History</NavLink></li>
                                </>
                            }


                        </>
                    }

                    <div className="divider"></div>
                    <li><NavLink to="/"><FaHome></FaHome> Home</NavLink> </li>
                    <li><NavLink to="/menu"> Our Menu</NavLink></li>
                    <li><NavLink to="/order/salad">Order Food</NavLink></li>
                </ul>
            </div>
        </div>
    );
};

export default Dashboard;
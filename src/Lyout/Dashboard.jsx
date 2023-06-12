import { NavLink, Outlet, useNavigate } from "react-router-dom";
import { FaWallet, FaCalendarAlt, FaHome, FaUtensils,  FaUsers, FaBookOpen, FaChalkboard, FaChalkboardTeacher, FaBook } from 'react-icons/fa';
import useAdmin from "../hooks/useAdmin";
import useInstructo from "../hooks/useInstructo";
import useAuth from "../hooks/useAuth";

const Dashboard = () => {
    const navigate = useNavigate();
    const {user, loading, logOut} = useAuth();
    if (loading) {
        <progress className="progress w-56"></progress>
    }
    const [isAdmin] = useAdmin();
    const [isInstructo] = useInstructo();
    const handleLogOut = () => {
        logOut()
            .then(() => {
                navigate('/')
             })
            .catch(error => console.log(error));
    }

    return (
        <div className="drawer lg:drawer-open">
            <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
            <div className="drawer-content flex flex-col items-center justify-center">
                <Outlet></Outlet>
                <label htmlFor="my-drawer-2" className="btn btn-primary drawer-button lg:hidden">nav</label>
            </div>
            <div className="drawer-side p-8">
                <label htmlFor="my-drawer-2" className="drawer-overlay"></label>
                <div className=" flex flex-col  justify-center text-center align-middle">
                    <img className="w-24 rounded-full mx-auto mb-4 text-3xl" src={user.photoURL} alt="" />
                    <h4>{user.displayName}</h4>
                    <p>{user.email}</p>
                    <button onClick={handleLogOut} className="btn btn-sm">LogOut</button>
                </div>
                <div className="divider"></div>
                <ul className="menu p-4 w-80">

                    {
                        isAdmin ? <>
                            <li><NavLink to="/dashboard/adminhome"><FaHome></FaHome> Admin Home</NavLink></li>
                            <li><NavLink to="/dashboard/manageclass"><FaWallet></FaWallet> Manage Class</NavLink></li>
                            <li><NavLink to="/dashboard/allusers"><FaUsers></FaUsers> All Users</NavLink></li>
                        </> : <>
                            {
                                isInstructo ? <>
                                    <li><NavLink to="/dashboard/addclass"> <FaUtensils></FaUtensils> Add an Item</NavLink></li>
                                    <li><NavLink to="/dashboard/instructormyclass"> <FaUtensils></FaUtensils> My Class</NavLink></li>
                                </> : <>
                                    <li><NavLink to="/dashboard/userhome"><FaHome></FaHome> User Home</NavLink></li>
                                    <li><NavLink to="/dashboard/myclass"><FaCalendarAlt></FaCalendarAlt> My Selected Classes</NavLink></li>
                                    <li><NavLink to="/dashboard/enrolclass"><FaBook></FaBook> My Enrol Classes</NavLink></li>
                                    <li><NavLink to="/dashboard/pamenthistory"><FaWallet></FaWallet> Payment History</NavLink></li>
                                </>
                            }


                        </>
                    }

                    <div className="divider"></div>
                    <li><NavLink to="/"><FaHome></FaHome> Home</NavLink> </li>
                    <li><NavLink to="/class"><FaBookOpen></FaBookOpen> Class</NavLink></li>
                    <li><NavLink to="/instructor"><FaChalkboardTeacher></FaChalkboardTeacher> Instructor</NavLink></li>
                </ul>
            </div>
        </div>
    );
};

export default Dashboard;
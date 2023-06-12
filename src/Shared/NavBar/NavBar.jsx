import { useContext, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../../providers/AuthProvider";
import useAxiosSecure from "../../hooks/useAxiosSecure";
import { useQuery } from "react-query";
import useClass from "../../hooks/useClass";
import useAdmin from "../../hooks/useAdmin";
import useInstructo from "../../hooks/useInstructo";
// import { FaMoon, FaSun } from "react-icons/fa";
// import useAdmin from "../../hooks/useAdmin";

const NavBar = () => {
    const { user } = useContext(AuthContext);
    const [isAdmin] = useAdmin();
    const [isInstructo] = useInstructo();
    const [allclass,] = useClass();
    const [axiosSecure] = useAxiosSecure();
    const { data: alclass = [], } = useQuery(['allclass'], async () => {
        const res = await axiosSecure.get('/allclass')
        return res.data;
    })

    const navOptions = <>
        <li><Link to="/">Home</Link></li>
        <li><Link to="/class">Class</Link></li>
        <li><Link to="/instructor">Instructor</Link></li>
        <li>
            {
                isAdmin ? <>
                    <Link to="/dashboard/adminhome" className="flex">
                        Dashboard
                        <div className="badge badge-secondary -ms-2">+{alclass?.length || 0}</div>
                    </Link>
                </> : <>
                    {
                        isInstructo ? <>
                            <Link to="/dashboard/instactorhome" className="flex">
                                Dashboard
                                <div className="badge badge-secondary -ms-2">+{allclass?.length || 0}</div>
                            </Link>
                        </> : <>
                            <Link to="/dashboard/userhome" className="flex">
                                Dashboard
                                <div className="badge badge-secondary -ms-2">+{allclass?.length || 0}</div>
                            </Link>
                        </>
                    }


                </>
            }
        </li>

    </>
    // use theme from local storage if available or set light theme
    const [theme, setTheme] = useState(
        localStorage.getItem("theme") ? localStorage.getItem("theme") : "light"
    );

    // update state on toggle
    const handleToggle = (e) => {
        if (e.target.checked) {
            setTheme("dark");
        } else {
            setTheme("light");
        }
    };

    // set theme state in localstorage on mount & also update localstorage on state change
    useEffect(() => {
        localStorage.setItem("theme", theme);
        const localTheme = localStorage.getItem("theme");
        // add custom data-theme attribute to html tag required to update theme using DaisyUI
        document.querySelector("html").setAttribute("data-theme", localTheme);
    }, [theme]);

    return (
        <>
            <div className="navbar fixed z-10 bg-opacity-30 max-w-screen-xl bg-black text-white">
                <div className="navbar-start">
                    <div className="dropdown">
                        <label tabIndex={0} className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                        </label>
                        <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 text-black rounded-box w-52">
                            {navOptions}
                        </ul>
                    </div>
                    <a className="btn btn-ghost normal-case text-xl">Bistro Boss</a>
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="ms-auto menu menu-horizontal px-1">
                        {navOptions}
                    </ul>
                </div>
                <div className="">
                    {/* Toggle button here */}
                    <label className="swap mt-0 swap-rotate w-8 h-8">
                        <input
                            type="checkbox"
                            onChange={handleToggle}
                            // show toggle image based on localstorage theme
                            checked={theme === "light" ? false : true}
                            className="toggle toggle-sm"
                        />

                    </label>
                </div>

                <div className="navbar-end">
                    {
                        user ? <>
                            {
                                user &&
                                    isAdmin ?

                                    <Link to="/dashboard/adminhome" className="flex">

                                        <img className="rounded-full w-12 " src={user.photoURL} alt="" />
                                        <div className="badge badge-secondary -ms-2">+{alclass?.length || 0}</div>
                                    </Link>
                                    :

                                    <Link to="/dashboard/userhome" className="flex">
                                        <img className="rounded-full w-12" src={user.photoURL} alt="" />
                                        <div className="badge badge-secondary -ms-2">+{allclass?.length || 0}</div>
                                    </Link>

                            }

                        </> : <>
                            <Link to="/login">Login</Link>
                        </>
                    }
                </div>
            </div>
        </>
    );
};

export default NavBar;
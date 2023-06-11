import { useQuery } from "react-query";
import useAuth from "../../../hooks/useAuth";
import useAxiosSecure from "../../../hooks/useAxiosSecure";
import { Link } from "react-router-dom";



const InstructorMyClass = () => {
    const { user } = useAuth();
    const [axiosSecure] = useAxiosSecure();
    const { data: myClass = [] } = useQuery(['myClass'], async () => {
        const res = await axiosSecure.get(`/instructoclass?email=${user?.email}`)
        return res.data;
    })
    console.log(myClass)
    return (
        <div className="w-full p-10">
            <div className="w-full">
                {/* <Helmet>
                    <title>Bistro Boss | All myClass</title>
                </Helmet> */}
                <h3 className="text-3xl font-semibold my-4">My Class: {myClass.length}</h3>
                <div className="overflow-x-auto">
                    <table className="table table-zebra w-full">
                        {/* head */}
                        <thead>
                            <tr>
                                <th>#</th>
                                <th>Name</th>
                                <th>Price</th>
                                <th>Booked Seats</th>
                                <th>Statas</th>
                                <th>Updat</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                myClass.map((myAClass, index) => <tr key={myAClass._id}>
                                    <th>{index + 1}</th>
                                    <td>{myAClass.sportsName}</td>
                                    <td>{myAClass.price}</td>
                                    <td>{myAClass.bookSeats ? myAClass.bookSeats : 0}</td>
                                    <td>{myAClass.status ? myAClass.status:'pending'}</td>
                                    <td><Link className="btn btn-xs" to={`/dashboard/updatclass/${myAClass._id}`}>Updat</Link></td>
                                </tr>)
                            }
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
};

export default InstructorMyClass;
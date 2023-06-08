import { useQuery } from "@tanstack/react-query";
// import { Helmet } from "react-helmet-async";
import { FaTrashAlt, FaUserShield } from "react-icons/fa";
import Swal from "sweetalert2";
import useAxiosSecure from "../../../hooks/useAxiosSecure";

const ManageClass = () => {
    const [axiosSecure] = useAxiosSecure();
    const { data: allclass = [], refetch } = useQuery(['allclass'], async () => {
        const res = await axiosSecure.get('/allclass')
        return res.data;
    })
    const handleApproved = user => {
        fetch(`http://localhost:5000/class/approved/${user._id}`, {
            method: 'PATCH'
        })
            .then(res => res.json())
            .then(data => {
                console.log(data)
                if (data.modifiedCount) {
                    refetch();
                    Swal.fire({
                        position: 'top-end',
                        icon: 'success',
                        title: `${user.name} Class Approved`,
                        showConfirmButton: false,
                        timer: 1500
                    })
                }
            })
    }
    const handleDeny = user => {
        fetch(`http://localhost:5000/class/deny/${user._id}`, {
            method: 'PATCH'
        })
            .then(res => res.json())
            .then(data => {
                if (data.modifiedCount) {
                    refetch();
                    Swal.fire({
                        position: 'top-end',
                        icon: 'success',
                        title: `${user.name} Class Deny`,
                        showConfirmButton: false,
                        timer: 1500
                    })
                }
            })
    }
    const handleFeeback = async user => {
        const { value: text } = await Swal.fire({
            input: 'textarea',
            inputLabel: 'Message',
            inputPlaceholder: 'Type your message here...',
            inputAttributes: {
              'aria-label': 'Type your message here'
            },
            showCancelButton: true
          })
          
        if (text) {
            Swal.fire(text)
            const feedback = text
            fetch(`http://localhost:5000/class/feedback/${user._id}`, {
            method: 'PATCH',
            body: feedback
        })
            .then(res => res.json())
            .then(data => {
                if (data.modifiedCount) {
                    refetch();
                    Swal.fire({
                        position: 'top-end',
                        icon: 'success',
                        title: `${user.name} Class Deny`,
                        showConfirmButton: false,
                        timer: 1500
                    })
                }
            })
        }
    }


    return (
        <div className="w-full">
            {/* <Helmet>
            <title>Bistro Boss | All users</title>
        </Helmet> */}
            <h3 className="text-3xl font-semibold my-4">Total Users: {allclass.length}</h3>
            <div className="overflow-x-auto">
                <table className="table table-zebra w-full">
                    {/* head */}
                    <thead>
                        <tr>
                            <th>#</th>
                            <th>Name</th>
                            <th>Instructor Name</th>
                            <th>Role</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            allclass.map((cors, index) => <tr key={cors._id}>
                                <th>{index + 1}</th>
                                <td>{cors.sportsName}</td>
                                <td>{cors.instructorName}</td>
                                <td>{cors.status === 'approved' ? 'Approved' :
                                    <button onClick={() => handleApproved(cors)} className="btn btn-ghost bg-orange-600  text-white"><FaUserShield></FaUserShield></button>
                                }</td>
                                <td>{cors.status === 'deny' ? 'Deny' :
                                    <button onClick={() => handleDeny(cors)} className="btn btn-ghost bg-red-600  text-white"><FaTrashAlt></FaTrashAlt></button>
                                }</td>
                                <td>
                                    <button onClick={() => handleFeeback(cors)} className="btn btn-ghost">feedbac</button>
                                </td>
                                
                            </tr>)
                        }
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default ManageClass;
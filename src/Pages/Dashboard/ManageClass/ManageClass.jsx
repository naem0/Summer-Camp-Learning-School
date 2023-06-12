
// import { Helmet } from "react-helmet-async";
import { FaTrashAlt, FaUserShield, FaPen, FaCheck, FaCheckCircle } from "react-icons/fa";
import Swal from "sweetalert2";
import useAxiosSecure from "../../../hooks/useAxiosSecure";
import { useQuery } from "react-query";

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
            inputLabel: 'Feedback Message',
            inputPlaceholder: 'Type your message here...',
            inputAttributes: {
                'aria-label': 'Type your message here'
            },
            showCancelButton: true
        })

        if (text) {
            const feedback = text
            fetch(`http://localhost:5000/class/feedback/${user._id}`, {
                method: 'PATCH',
                headers: {
                    'content-type': 'application/json'
                },
                body: JSON.stringify({ feedback })
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
        <div className="w-full mt-12">
            {/* <Helmet>
            <title>Bistro Boss | All users</title>
        </Helmet> */}
            <h3 className="text-3xl font-semibold my-4">Total Class: {allclass.length}</h3>
            <div className="overflow-x-auto">
                <table className="table table-zebra w-full">
                    {/* head */}
                    <thead>
                        <tr>
                            <th>#</th>
                            <th>Class</th>
                            <th>Instructor</th>
                            <th>Approved</th>
                            <th>Dnay</th>
                            <th>Feedback</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            allclass.map((cors, index) => <tr key={cors._id}>
                                <th>{index + 1}</th>
                                <td >
                                    <div className=" flex gap-2">
                                        <img className="w-10 h-10 rounded-xl" src={cors.image} alt="" />
                                        <div className="">
                                        <p className="font-semibold">{cors.sportsName}</p>
                                        <p className="text-xs">Price: ${cors.price}</p>
                                        </div>
                                    </div>
                                </td>
                                <td>
                                    <div className="">
                                        <p className="font-semibold">{cors.instructorName}</p>
                                        <p className="text-xs">{cors.instructorEmail}</p>
                                    </div>
                                </td>
                                <td>{cors.status === 'approved' ? <p className="text-xs">Approved</p>  :
                                    <button onClick={() => handleApproved(cors)} className="btn btn-sm bg-slate-800 hover:text-black  text-white"><FaCheckCircle></FaCheckCircle></button>
                                }</td>
                                <td>{cors.status === 'deny' ? 'Deny' :
                                    <button onClick={() => handleDeny(cors)} className="btn btn-sm bg-slate-800 hover:text-black  text-white"><FaTrashAlt></FaTrashAlt></button>
                                }</td>
                                <td>
                                    <button onClick={() => handleFeeback(cors)} className="btn text-xs btn-sm bg-slate-800 text-white hover:text-black lowercase font-normal">Feedbac<FaPen></FaPen></button>
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
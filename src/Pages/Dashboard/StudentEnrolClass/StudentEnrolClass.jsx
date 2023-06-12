import useAuth from '../../../hooks/useAuth';
import useAxiosSecure from '../../../hooks/useAxiosSecure';
import { useQuery } from 'react-query';

const StudentEnrolClass = () => {
    const { user} = useAuth();
    const [axiosSecure] = useAxiosSecure();
    const { data: enrolclass = []} = useQuery(['enrolclass'], async () => {
        const res = await axiosSecure.get(`/mypayments?email=${user?.email}`)
        return res.data;
    })
    console.log(enrolclass)
    return (
        <div className="w-full">
            {/* <Helmet>
                <title>Bistro Boss | My class</title>
            </Helmet> */}
            <div className="font-semibold h-[60px] flex justify-evenly items-center">
                <h3 className="text-3xl">Total Class: {enrolclass.length}</h3>
            </div>
            <div className="overflow-x-auto w-full">
                <table className="table w-full">
                    {/* head */}
                    <thead>
                        <tr>
                            <th>#</th>
                            <th>photo</th>
                            <th>Class Name</th>
                            <th>Price</th>
                            <th>Instructor Name</th>
                            <th>Instructor Name</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            enrolclass.map((item, index) => <tr
                                key={item._id}
                            >
                                <td>
                                    {index + 1}
                                </td>
                                <td>
                                    <div className="avatar">
                                        <div className="mask mask-squircle w-12 h-12">
                                            <img src={item.image} alt="Avatar Tailwind CSS Component" />
                                        </div>
                                    </div>
                                </td>
                                <td>
                                    {item.name}
                                </td>
                                <td className="text-end">${item.price}</td>
                                <td>
                                    {item.instructorName}
                                </td>
                                <td>
                                    {item.instructorEmail}
                                </td>
                            </tr>)
                        }
                    </tbody>
                </table>
            </div>

        </div>
    );
};

export default StudentEnrolClass;
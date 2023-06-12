import { useQuery } from "react-query";
import useAxiosSecure from "../../../hooks/useAxiosSecure";
import useAuth from "../../../hooks/useAuth";


const PamentHistory = () => {
    const { user} = useAuth();
    const [axiosSecure] = useAxiosSecure();
    const { data: payments = []} = useQuery(['payments'], async () => {
        const res = await axiosSecure.get(`/mypayments?email=${user?.email}`)
        return res.data;
    })
    console.log(payments)
    return (
        <div className="w-full">
            {/* <Helmet>
            <title>Bistro Boss | All payments</title>
        </Helmet> */}
            <h3 className="text-3xl font-semibold my-4">Total Pament: {payments.length}</h3>
            <div className="overflow-x-auto">
                <table className="table table-zebra w-full">
                    {/* head */}
                    <thead>
                        <tr>
                            <th>#</th>
                            <th>Name</th>
                            <th>Transaction Id</th>
                            <th>Price</th>
                            <th>Date</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            payments.map((payment, index) => <tr key={payment._id}>
                                <th>{index + 1}</th>
                                <td>{payment.name}</td>
                                <td>{payment.transactionId}</td>
                                <td>{payment.price}</td>
                                <td>{payment.date}</td>
                            </tr>)
                        }
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default PamentHistory;
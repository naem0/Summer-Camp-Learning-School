import { useForm } from "react-hook-form";
import useAuth from "../../../hooks/useAuth";
import useAxiosSecure from "../../../hooks/useAxiosSecure";
import Swal from "sweetalert2";
import { useLoaderData } from "react-router-dom";


const UpdatClass = () => {
    const { loading } = useAuth();
    const [axiosSecure] = useAxiosSecure();
    const lodedata = useLoaderData();
    const { sportsName, price, totalSeats, _id } = lodedata;
    const { register, handleSubmit, reset } = useForm();

    if (loading) {
        <progress className="progress w-56"></progress>
    }
    const onSubmit = data => {
        const { sportsName, price, totalSeats} = data;
        const newItem = { sportsName, price: parseFloat(price), totalSeats }
        console.log(newItem)
        axiosSecure.put(`/class/${_id}`, newItem)
            .then(data => {
                console.log(data.data)
                if (data.data.matchedCount > 0 ) {
                    reset();
                    Swal.fire({
                        position: 'top-end',
                        icon: 'success',
                        title: 'Item Updat successfully',
                        showConfirmButton: false,
                        timer: 1500
                    })
                }
            })

    };
    return (
        <div className="w-full px-10">
            {/* <SectionTitle subHeading="What's new" heading="Add an item" ></SectionTitle> */}
            <form onSubmit={handleSubmit(onSubmit)}>
                <div className="form-control w-full ">
                    <label className="label">
                        <span className="label-text font-semibold">Class Name*</span>
                    </label>
                    <input type="text" defaultValue={sportsName} placeholder="Class Name"
                        {...register("sportsName", { required: true, maxLength: 120 })}
                        className="input input-bordered w-full " />
                </div>
                <div className="grid grid-cols-2 gap-4">
                    <div className="form-control w-full ">
                        <label className="label">
                            <span className="label-text font-semibold">Total Seats*</span>
                        </label>
                        <input type="number" defaultValue={totalSeats} {...register("totalSeats", { required: true })} placeholder="Total Seats" className="input input-bordered w-full " />
                    </div>
                    <div className="form-control w-full">
                        <label className="label">
                            <span className="label-text font-semibold">Price*</span>
                        </label>
                        <input type="number" defaultValue={price} {...register("price", { required: true })} placeholder="Type here" className="input input-bordered w-full " />
                    </div>
                    <div className="form-control w-full">
                    <label className="label">
                        <span className="label-text">Item Image*</span>
                    </label>
                    <input type="file" {...register("image")} className="file-input file-input-bordered w-full " />
                </div>
                </div>
                <input className="btn btn-block mt-4" type="submit" value="Updat Item" />
            </form>
        </div>
    );
};

export default UpdatClass;
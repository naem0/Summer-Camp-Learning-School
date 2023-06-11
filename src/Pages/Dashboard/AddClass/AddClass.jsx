import { useForm } from 'react-hook-form';
import Swal from "sweetalert2";
import useAxiosSecure from '../../../hooks/useAxiosSecure';
import useAuth from '../../../hooks/useAuth';

const img_hosting_token = import.meta.env.VITE_Image_Upload_token;


const AddClass = () => {
    const {user, loading} = useAuth();
    const [axiosSecure] = useAxiosSecure();
    const { register, handleSubmit, reset } = useForm();
    const img_hosting_url = `https://api.imgbb.com/1/upload?key=${img_hosting_token}`;

    if (loading) {
        <progress className="progress w-56"></progress>
    }
    const onSubmit = data => {

        const formData = new FormData();
        formData.append('image', data.image[0])

        fetch(img_hosting_url, {
            method: 'POST',
            body: formData
        })
            .then(res => res.json())
            .then(imgResponse => {
                if (imgResponse.success) {
                    const imgURL = imgResponse.data.display_url;
                    const { sportsName, price, instructorEmail, instructorName, totalSeats } = data;
                    const newItem = { sportsName, price: parseFloat(price), bookSeats : 0, instructorEmail, instructorName, totalSeats, image: imgURL }
                    console.log(newItem)
                    axiosSecure.post('/class', newItem)
                        .then(data => {
                            console.log(data.data)
                            if (data.data.insertedId) {
                                reset();
                                Swal.fire({
                                    position: 'top-end',
                                    icon: 'success',
                                    title: 'Item added successfully',
                                    showConfirmButton: false,
                                    timer: 1500
                                })
                            }
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
                    <input type="text" placeholder="Class Name"
                        {...register("sportsName", { required: true, maxLength: 120 })}
                        className="input input-bordered w-full " />
                </div>
                <div className="grid grid-cols-2 gap-4">
                    <div className="form-control w-full ">
                        <label className="label">
                            <span className="label-text font-semibold">Total Seats*</span>
                        </label>
                        <input type="number" {...register("totalSeats", { required: true })} placeholder="Total Seats" className="input input-bordered w-full " />
                    </div>
                    <div className="form-control w-full">
                        <label className="label">
                            <span className="label-text font-semibold">Price*</span>
                        </label>
                        <input type="number" {...register("price", { required: true })} placeholder="Type here" className="input input-bordered w-full " />
                    </div>
                </div>
                <div className="grid grid-cols-2 gap-4">
                    <div className="form-control w-full ">
                        <label className="label">
                            <span className="label-text font-semibold">Instructor Name*</span>
                        </label>
                        <input type="text" value={user.displayName} {...register("instructorName", { required: true })} placeholder="Instructor Name" className="input input-bordered w-full " />
                    </div>
                    <div className="form-control w-full">
                        <label className="label">
                            <span className="label-text font-semibold">Instructor Email*</span>
                        </label>
                        <input type="text" value={user.email} {...register("instructorEmail", { required: true })} placeholder="Instructor Email" className="input input-bordered w-full " />
                    </div>
                </div>
                <div className="form-control w-full">
                    <label className="label">
                        <span className="label-text">Item Image*</span>
                    </label>
                    <input type="file" {...register("image", { required: true })} className="file-input file-input-bordered w-full " />
                </div>
                <input className="btn btn-block mt-4" type="submit" value="Add Item" />
            </form>
        </div>
    );
};

export default AddClass;
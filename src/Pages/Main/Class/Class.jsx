
import { useContext } from "react";
import { useLoaderData} from "react-router-dom";
import { AuthContext } from "../../../providers/AuthProvider";
import Swal from "sweetalert2";
import useClass from "../../../hooks/useClass";


const Class = () => {
    const datas = useLoaderData();
    console.log(datas)
    const {user} = useContext(AuthContext);
    const [, refetch] = useClass();


    const handleAddStudentMyclass = data => {
        console.log(data);
        const{_id, image, price, sportsName, instructorName, instructorEmail, totalSeats, bookSeats}=data
        if (user && user.email) {
            const cartItem = {instructorEmail, totalSeats, bookSeats, menuItemId: _id, name :sportsName, instructorName, image, price, email: user.email }
            fetch('http://localhost:5000/studentallclass', {
                method: 'POST',
                headers: {
                    'content-type': 'application/json'
                },
                body: JSON.stringify(cartItem)
            })
                .then(res => res.json())
                .then(data => {
                    if (data.insertedId) {
                        refetch(); 
                        Swal.fire({
                            position: 'top-end',
                            icon: 'success',
                            title: 'Food added on the cart.',
                            showConfirmButton: false,
                            timer: 1500
                        })
                    }
                })
        }
    }
        return (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
                {
                    datas.map(data => <div key={data._id} className="card bg-base-100 shadow-xl">
                        <figure><img src={data.img} alt="Shoes" /></figure>
                        <div className="card-body">
                            <h2 className="card-title">{data.sportsName}</h2>
                            <p>{data.price}</p>
                            <div className="card-actions justify-end">
                                <button onClick={() => handleAddStudentMyclass(data)} className="btn btn-primary">Buy Now</button>
                            </div>
                        </div>
                    </div>
                    )
                }
            </div>
        );
    };

    export default Class;
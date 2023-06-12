import { useContext, useEffect, useState } from 'react';
import Swal from 'sweetalert2';
import { AuthContext } from '../../../../../providers/AuthProvider';
import useClass from '../../../../../hooks/useClass';
import useAdmin from '../../../../../hooks/useAdmin';
import useInstructo from '../../../../../hooks/useInstructo';

const PopularClassCard = ({ topclass }) => {
    const { user } = useContext(AuthContext);
    const [disable, setDisabole] = useState(false);
    const [, refetch] = useClass();
    const [isAdmin] = useAdmin();
    const [isInstructo] = useInstructo();
    const { _id, image, price, sportsName, instructorName, instructorEmail, totalSeats, bookSeats } = topclass;
    const handleAddStudentMyclass = () => {
        if (user && user.email) {
            const cartItem = {
                instructorEmail,
                totalSeats,
                bookSeats,
                menuItemId: _id,
                name: sportsName,
                instructorName,
                image,
                price,
                email: user.email
            };

            fetch('http://localhost:5000/studentallclass', {
                method: 'POST',
                headers: {
                    'content-type': 'application/json'
                },
                body: JSON.stringify(cartItem)
            })
                .then(res => res.json())
                .then(topclass => {
                    if (topclass.insertedId) {
                        refetch();
                        Swal.fire({
                            position: 'top-end',
                            icon: 'success',
                            title: 'Food added on the cart.',
                            showConfirmButton: false,
                            timer: 1500
                        });
                    }
                });
        }
    };
    useEffect(() => {
        if (totalSeats <= bookSeats && isAdmin && isInstructo) {
            setDisabole(true);
        }
        if (isAdmin) {
            setDisabole(true);
        }
        if (isInstructo) {
            setDisabole(true);
        }
    }, [totalSeats, bookSeats, isAdmin, isInstructo]);
    return (
        <div className="card card-side bg-base-100 shadow-xl">
            <figure><img src={image} alt="Movie" /></figure>
            <div className="card-body">
                <h2 className="card-title">{sportsName}</h2>
                <p>{instructorName}</p>
                <div className="card-actions justify-end">
                    <button onClick={handleAddStudentMyclass}
                        disabled={disable}
                        className="btn btn-sm btn-primary">Book now</button>
                </div>
            </div>
        </div>
    );
};

export default PopularClassCard;
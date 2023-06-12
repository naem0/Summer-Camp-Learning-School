import { useContext, useEffect, useState } from 'react';
import Swal from 'sweetalert2';
import { AuthContext } from '../../../../../providers/AuthProvider';
import useClass from '../../../../../hooks/useClass';
import useAdmin from '../../../../../hooks/useAdmin';
import useInstructo from '../../../../../hooks/useInstructo';
import { useNavigate } from 'react-router-dom';
import { motion } from "framer-motion"




const PopularClassCard = ({ topclass }) => {
    const { user } = useContext(AuthContext);
    const [disable, setDisabole] = useState(false);
    const [, refetch] = useClass();
    const [isAdmin] = useAdmin();
    const [isInstructo] = useInstructo();
    const navigate = useNavigate();
    const { _id, image, price, sportsName, instructorName, instructorEmail, totalSeats, bookSeats } = topclass;
    const handleAddStudentMyclass = () => {
        if (!user) {
            return navigate('/login')
        }
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

            fetch('https://summer-camp-learning-school-surver.vercel.app/studentallclass', {
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
        if (totalSeats <= bookSeats) {
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
        <motion.div animate={{ backgroundColor: '#dddddd' }} className="card flex-col md:flex-row card-side bg-base-100 shadow-xl">
            <figure className='md:w-1/2 h-full'><img className='h-full' src={image} alt="Movie" /></figure>
            <div className="card-body my-0">
                <h2 className="card-title">{sportsName}</h2>
                <p className='text-sm font-semibold'>Instructor: {instructorName}</p>
                <p className='text-xs '>Email: {instructorEmail}</p>
                <div className="flex justify-between">
                    <p className='text-xs '>Total Seats: {totalSeats}</p>
                    <p className='text-xs '>Available Seats: {totalSeats-bookSeats}</p>
                </div>
                <div className=" flex justify-between">
                    <h3 className='font-bold text-lg my-auto'> ${price}</h3>
                    <button onClick={handleAddStudentMyclass}
                        disabled={disable}
                        className="btn btn-sm btn-primary">Book now</button>
                </div>
            </div>
        </motion.div>
    );
};

export default PopularClassCard;
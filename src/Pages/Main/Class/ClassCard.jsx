import { useContext, useState, useEffect } from "react";
import { AuthContext } from "../../../providers/AuthProvider";
import useClass from "../../../hooks/useClass";
import Swal from "sweetalert2";
import useAdmin from "../../../hooks/useAdmin";
import useInstructo from "../../../hooks/useInstructo";

const ClassCard = ({ data }) => {
  const { user } = useContext(AuthContext);
  const [, refetch] = useClass();
  const [disable, setDisabole] = useState(false);
  const [bg, setBg] = useState(false);
  const { _id, image, price, sportsName, instructorName, instructorEmail, totalSeats, bookSeats } = data;
  const [isAdmin] = useAdmin();
  const [isInstructo] = useInstructo();
  useEffect(() => {
    if (totalSeats <= bookSeats && isAdmin && isInstructo) {
      setDisabole(true);
      setBg(true);
    }
    if (isAdmin) {
      setDisabole(true);
    }
    if (isInstructo) {
      setDisabole(true);
    }
  }, [totalSeats, bookSeats]);

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
        .then(data => {
          if (data.insertedId) {
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

  return (
    <div key={_id} className={`card bg-base-100 shadow-xl
     ${bg ? "bg-red-500 bg-opacity-10" : ""} `}>
      <figure><img src={image} alt="Shoes" /></figure>
      <div className="card-body">
        <h2 className="card-title">{sportsName}</h2>
        <p>{price}</p>
        <div className="card-actions justify-end">
          <button onClick={handleAddStudentMyclass} 
          disabled={disable} 
          className="btn btn-primary">Buy Now</button>
        </div>
      </div>
    </div>
  );
};

export default ClassCard;

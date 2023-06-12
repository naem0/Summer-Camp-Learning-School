import { FaFacebook, FaInstagram, FaTwitter } from "react-icons/fa";


const PopularInstatorCard = ({popularinstactor}) => {
    const {name, email, image} = popularinstactor;
    return (
        <div>
            <div className={`card bg-base-100 shadow-md text-center`}>
                <figure><img src={image} alt="Shoes" /></figure>
                <div className="card-body justify-center items-center text-center">
                    <h2 className="card-title text-center">{name}</h2>
                    <p className="text-xs">{email}</p>
                    <div className=" flex justify-around gap-2 mt-2 text-xl ">
                        <p className="hover:text-2xl"><FaFacebook></FaFacebook></p>
                        <p className="hover:text-2xl"><FaTwitter></FaTwitter></p>
                        <p className="hover:text-2xl"><FaInstagram></FaInstagram></p>
                        
                    </div>
                </div>
            </div>
        </div>
    );
};

export default PopularInstatorCard;
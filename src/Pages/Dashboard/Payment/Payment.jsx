import { loadStripe } from "@stripe/stripe-js";
import CheckoutForm from "./CheckoutForm";
import { Elements } from "@stripe/react-stripe-js";
import { useLoaderData } from "react-router-dom";



const stripePromise = loadStripe(import.meta.env.VITE_Payment_Gateway_PK);
const Payment = () => {
    const data =useLoaderData();
    console.log(data)
    return (
        <div>
            <Elements stripe={stripePromise}>
                <CheckoutForm data={data}></CheckoutForm>
            </Elements>
        </div>
    );
};

export default Payment;
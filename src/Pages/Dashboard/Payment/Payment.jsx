import { loadStripe } from "@stripe/stripe-js";
import CheckoutForm from "./CheckoutForm";
import { Elements } from "@stripe/react-stripe-js";
import useClass from "../../../hooks/useClass";



const stripePromise = loadStripe(import.meta.env.VITE_Payment_Gateway_PK);
const Payment = () => {
    const [allclass] = useClass();
    const total = allclass.reduce((sum, item) => sum + item.price, 0);
    const price = parseFloat(total.toFixed(2))
    return (
        <div>
            <Elements stripe={stripePromise}>
                <CheckoutForm allclass={allclass} price={price}></CheckoutForm>
            </Elements>
        </div>
    );
};

export default Payment;
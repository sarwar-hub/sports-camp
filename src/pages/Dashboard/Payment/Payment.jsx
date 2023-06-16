import { loadStripe } from "@stripe/stripe-js";
import SectionTitle from "../../../components/SectionTitle/SectionTitle";
import { Elements } from "@stripe/react-stripe-js";
import Checkout from "./Checkout";


const stripePromise = loadStripe(import.meta.env.VITE_payment_gateway_pk);

const Payment = () => {
    return (
        <div>
            <SectionTitle>Payment</SectionTitle>
            <div>
                <Elements stripe={stripePromise}>
                    <Checkout></Checkout>
                </Elements>
            </div>
        </div>
    );
};

export default Payment;
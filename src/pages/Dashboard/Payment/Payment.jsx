import { loadStripe } from "@stripe/stripe-js";
import SectionTitle from "../../../components/SectionTitle/SectionTitle";
import { Elements } from "@stripe/react-stripe-js";
import { Helmet } from "react-helmet-async";
// import Checkout from "./Checkout";


const stripePromise = loadStripe(import.meta.env.VITE_payment_gateway_pk);

const Payment = () => {
    return (
        <div>
            <Helmet><title>Payment | Sports Camp</title></Helmet>

            <SectionTitle>Payment</SectionTitle>
            <div>
                <Elements stripe={stripePromise}>
                    {/* <Checkout></Checkout> */}
                </Elements>
            </div>
        </div>
    );
};

export default Payment;
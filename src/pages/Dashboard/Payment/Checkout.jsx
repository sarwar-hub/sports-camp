import { CardElement, useElements, useStripe } from "@stripe/react-stripe-js";
import { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import useSelected from "../../../hooks/useSelected";
import { AuthContext } from "../../../context/AuthProvider";


const Checkout = () => {
    const [error, setError] = useState('');
    const [clientSecrete, setClientSecrete] = useState('');
    
    const stripe = useStripe();
    const elements = useElements();

     const { id } = useParams();
     const [selectedItems] = useSelected();
     const selectedItem = selectedItems.find(item => item._id === id);
    const price = selectedItem?.courseFee;

    const {user} = useContext(AuthContext);
    




    //send price and get secret key
    useEffect(()=>{
        fetch('http://localhost:5000/create-payment-intent', {
            method: 'POST',
            headers: {'content-type': 'application/json'},
            body: JSON.stringify({price: price})
        })
        .then(res=>res.json())
        .then(data=>{
            setClientSecrete(data.clientSecret);
            console.log(data)
        })
        .catch(err=>{
            console.log(err.message);
        })

    }, [price])

    // when submit
    const handleSubmit = async (event) => {
        event.preventDefault();
        // if stripe and element not found
        if (!stripe || !elements) {
            return;
        }

        // get card
        const card = elements.getElement(CardElement);
        if (card == null) {
            return;
        }

        // check card validity
        const { error, paymentMethod } = await stripe.createPaymentMethod({
            type: 'card',
            card
        })

        if (error) {
            setError(error.message);
        } else {
            setError('');
            console.log(paymentMethod);
        }

        // confirm card payment
        const { paymentIntent, error:confirmationError } = await stripe.confirmCardPayment(
            clientSecrete,
            {
                payment_method: {
                    card: card,
                    billing_details: {
                        name: user?.displayName || 'unknown',
                        email: user?.email || 'unknown'
                    },
                },
            },
        );

        if (confirmationError) {
            setError(confirmationError.message);
        } else {
            setError('');
            console.log(paymentIntent);
        }

    // handle submit closing here
    }




    return (
        <div>
            <form onSubmit={handleSubmit}>
                <CardElement
                    className="min-w-[350px]"
                    options={{
                        style: {
                            base: {
                                fontSize: '16px',
                                color: '#424770',
                                '::placeholder': {
                                    color: '#aab7c4',
                                },
                            },
                            invalid: {
                                color: '#9e2146',
                            },
                        },
                    }}
                />
                <p className="text-red-400 p-2">*{error && error}</p>
                <button type="submit" className="btn btn-primary" disabled={!stripe}>
                    Pay
                </button>
            </form>
        </div>
    );
};

export default Checkout;
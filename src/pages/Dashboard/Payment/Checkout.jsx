import { CardElement, useElements, useStripe } from "@stripe/react-stripe-js";
import { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import useSelected from "../../../hooks/useSelected";
import { AuthContext } from "../../../context/AuthProvider";
import Swal from "sweetalert2";


const Checkout = () => {
    const [error, setError] = useState('');
    const [clientSecrete, setClientSecrete] = useState('');
    const [processing, setProcessing] = useState(false);
    

    const stripe = useStripe();
    const elements = useElements();

    const { id } = useParams();
    const [selectedItems] = useSelected();
    const selectedItem = selectedItems?.find(item => item._id === id);
    const price = selectedItem?.courseFee;
    console.log(selectedItem);

    const { user } = useContext(AuthContext);





    //send price and get secret key
    useEffect(() => {
        if (price > 0) {
            fetch('http://localhost:5000/create-payment-intent', {
                method: 'POST',
                headers: { 'content-type': 'application/json' },
                body: JSON.stringify({ price: price })
            })
                .then(res => res.json())
                .then(data => {
                    setClientSecrete(data.clientSecret);

                })
                .catch(err => {
                    console.log(err.message);
                })
        }

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

        // started processing
        setProcessing(true);

        // confirm card payment
        const { paymentIntent, error: confirmationError } = await stripe.confirmCardPayment(
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

        // completed processing
        setProcessing(false);


        // if completed payment
        if (paymentIntent?.status === "succeeded") {
            

            const paymentInfo = {
                id: selectedItem.courseId,
                courseName: selectedItem.courseName,
                buyerEmail: selectedItem.userEmail,
                courseFee: selectedItem.courseFee,
                trxId: paymentIntent.id,
                instructorName: selectedItem.instructorName,
                time: new Date()
            }
            fetch('http://localhost:5000/enrolledCourses', {
                method: 'POST',
                headers: {'content-type': 'application/json'},
                body: JSON.stringify(paymentInfo)
            })
            .then(res=>res.json())
            .then(data=>{
                if (data.insertedId) {
                    Swal.fire(
                        'Payment Successfull',
                        'Your payment has been successfull.',
                        'success'
                    )
        
                }
            })
            .catch(err=>{
                console.log(err.message);
            })

        }

        
        // handle submit closing here
    }




    return (
        <div className="bg-sec/20 p-5">
            <form onSubmit={handleSubmit}>
                <CardElement
                    className="min-w-[350px]"
                    options={{
                        style: {
                            base: {
                                backgroundColor: '#fff',
                                fontSize: '16px',
                                color: '#079992',
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
                <p className="text-red-400 p-2">{error && error}</p>
                <button type="submit" className={`${(!stripe || !clientSecrete || processing) && 'cursor-not-allowed'} btn border-none bg-sec btn-sm rounded-none hover:bg-sec/80 btn-primary`}>
                    {
                        processing ? 'Processing' : 'Pay'
                    }
                </button>
            </form>
        </div>
    );
};

export default Checkout;
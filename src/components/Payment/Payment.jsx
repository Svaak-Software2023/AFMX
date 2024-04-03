import axios from "axios";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Loader from "../Loader/Loader";
import {loadStripe} from '@stripe/stripe-js';


function Payment({ memberShipName, memberShipType, memberShipPlan }) {
    const navigate = useNavigate()
    const [loading, setLoading] = useState(false)
    const token = JSON.parse(localStorage.getItem("user"));
    const handleSubmit = async () => {
        if (token) {
            const body = {
                memberShipName: memberShipName,
                memberShipType: memberShipType,
                memberShipPlan: memberShipPlan,
                token: token.token,
            };

            setLoading(true)
            const stripe = await loadStripe(import.meta.env.VITE_STRIPE_KEY);
            await axios
                .post(
                    `${import.meta.env.VITE_DB_URL}/api/subscription/create-membership-subscription`,
                    body
                )
                .then((res) => {
                    console.log(res.data, "res");
                    localStorage.setItem("sub",JSON.stringify(res.data.savedUser))
                    // return stripe.redirectToCheckout({
                    //     sessionId: res.data.sessionId
                    // });
                 
                })
                .catch((error) => console.log(error))
                .finally(() => {
                    setLoading(false);
                });
            console.log(stripe);
        }
        else {
            navigate("/login")
        }
    };

    if (loading) return <Loader />
    return (
        <div>
            <button className="place_order_btn my-3 w-100" onClick={handleSubmit}>Subscribe</button>
        </div>
    );
}

export default Payment;

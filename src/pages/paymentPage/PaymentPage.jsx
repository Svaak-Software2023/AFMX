
import React, { useRef, useState } from 'react'
import { useNavigate } from 'react-router-dom'
// import Razorpay from 'razorpay';


export default function PaymentPage({ totalAmount }) {

    let totalSum = Number(totalAmount) * 100
    const [money, setMoney] = useState(totalSum.toFixed(2))
    const navigate = useNavigate()
    const loadScript = (src) => {
        return new Promise((resolve, reject) => {
            const script = document.createElement('script')
            script.src = src

            script.onload = () => {
                resolve(true)
            }
            script.onerror = () => {
                resolve(false)
            }

            document.body.appendChild(script)
        })
    }

    const displayRazorPay = async () => {
        const res = await loadScript("https://checkout.razorpay.com/v1/checkout.js")
        if (!res) {
            alert('You are offline... ')
            return
        }
        const options = {
            key: "rzp_test_mFHSfCm2xbgQ3P",
            currency: "INR",
            amount: money,
            name: "America's Finest Maintenance Company LLC",
            image: "https://americasfinestmaintenance.com/images/top-logo.png",
            description: "Thanks for purchasing",
            handler: (response) => {
                if (response.razorpay_payment_id) {
                    navigate("/")
                    console.log(response);
                }
            }
        }

        const paymeentObject = new window.Razorpay(options)
        paymeentObject.open()
    }
    return (
        <>
            <div className="d-flex justify-content-center">
                <button className="place_order_btn my-3" onClick={() => displayRazorPay()}>
                    Pay {(money !== 0) ? money / 100 : ""}
                </button>
            </div>

        </>
    );
};


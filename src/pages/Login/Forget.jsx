import axios from "axios";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from 'react-toastify';



function Forget() {
    const [email, setEmail] = useState("");
    const navigate = useNavigate()


    const submithandler = async (e) => {
        e.preventDefault();

        try {
            const response = await axios.post('https://afmx.madextube700.com/auth/forget-request', { email })
                .then((response) => {
                    toast.success(response.data.message);
                    console.log(response)
                    navigate("/")

                })
                .catch(err => {
                    toast.error(err?.response?.data?.message);
                    console.log(err)
                })

            console.log(response)
        } catch (err) {
            return toast.error(err.response?.data?.message);
        }
        console.log(email)
    }
    return (
        <>

            <div className="container p-0 bg-white my-3">
                <div className="row">
                    <div className="col-lg-6 col-md-6 col-12">
                        <img src="https://media.istockphoto.com/id/1281150061/vector/register-account-submit-access-login-password-username-internet-online-website-concept.jpg?s=612x612&w=0&k=20&c=9HWSuA9IaU4o-CK6fALBS5eaO1ubnsM08EOYwgbwGBo=" alt="" className="img-fluid" />
                    </div>
                    <div className="col-lg-6 col-md-6 col-12">

                        <div className="loginMain py-lg-5">
                            <div className='loginForm'>
                                <h3 className="userType">Forgot Password</h3>
                                <form className="form" onSubmit={submithandler}>
                                    <label htmlFor="email" className="label">Email</label>
                                    <input id='email'
                                        type="email"
                                        className='form-control mb-3 '
                                        required
                                        name='email'
                                        onChange={(e) => setEmail(e.target.value)}
                                    />
                                    <div className="loginButton">
                                        <button type="submit">Send Request</button>
                                    </div>
                                </form>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
        </>
    )
}

export default Forget
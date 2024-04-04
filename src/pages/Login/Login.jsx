import { useState } from "react"
import "./login.css"
import { toast } from 'react-toastify';
import { Link, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { signin } from "../../redux/features/authSlice";
import { useEffect } from "react";



function Login() {

    const [formData, setFormData] = useState({ clientEmail: "", clientPassword: "" });
    const navigate = useNavigate()
    const dispatch = useDispatch()
    const user = useSelector((state) => state.auth)
    const changehandler = (e) => {
        const name = e.target.name;
        const value = e.target.value;
        setFormData({ ...formData, [name]: value });
    }

    const submithandler = async (e) => {
        e.preventDefault();
        dispatch(signin({ formData, navigate, toast }))
    }

    const load = useSelector((state) => state.auth.loading)

    useEffect(() => {
        let user = JSON.parse(localStorage.getItem('user'))
        user && navigate(-1)
    }, [])
    return (
        <>
            <div className="container p-0 bg-white my-3">
                    <div className="row">
                        <div className="col-lg-6 col-md-6 col-12">
                            <img effect="blur" src="https://media.istockphoto.com/id/1281150061/vector/register-account-submit-access-login-password-username-internet-online-website-concept.jpg?s=612x612&w=0&k=20&c=9HWSuA9IaU4o-CK6fALBS5eaO1ubnsM08EOYwgbwGBo=" alt="" className="img-fluid" />
                        </div>
                        <div className="col-lg-6 col-md-6 col-12">

                            <div className="loginMain py-lg-5">
                                <div className='loginForm'>
                                    <h3 className="userType">Login</h3>
                                    <form className="form" onSubmit={submithandler}>
                                        <label htmlFor="email" className="label">Email</label>
                                        <input id='email'
                                            type="email"
                                            className='form-control mb-3 '
                                            required
                                            name='clientEmail'
                                            onChange={changehandler}
                                        />
                                        <label htmlFor="password" className="label">Password</label>
                                        <input id='password'
                                            type="password"
                                            className='form-control mb-3'
                                            required
                                            name='clientPassword'
                                            onChange={changehandler}
                                        />
                                        {user.error && <span className='error-message text-center'>{user.error}</span>}

                                        <div className="forget-login mb-2">

                                            <Link to="/forget-password">Forgot password</Link>
                                        </div>
                                        <div className="loginButton">
                                            <button type="submit" disabled={load}>
                                                Login
                                               {load&&<span className="spinner-border spinner-border-sm mx-1" role="status" aria-hidden="true"></span>
                                               }</button>
                                        </div>
                                        <div className="links-login">
                                            <p>Don't have an account? <Link to="/create-account">Sign Up</Link></p>
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

export default Login
import { useState } from "react"
import { Link, useNavigate } from "react-router-dom"
import "./create_acoount.css"
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { signup } from "../../redux/featurs/authSlice";
import { useDispatch } from "react-redux";
import { LazyLoadImage } from "react-lazy-load-image-component";

function CreateAccount() {
    const navigate = useNavigate()
    const [formData, setFormData] = useState({
        clientPrifix: "",
        clientFirstName: "",
        clientMiddleName: "",
        clientLastName: "",
        clientSuffix: "",
        clientEmail: "",
        clientPhone: "",
        clientPassword: "",
        clientSSN: "",
        clientAddress1: "",
    });

    const dispatch=useDispatch();

    const changehandller = (e) => {
        const name = e.target.name;
        setFormData({ ...formData, [name]: e.target.value })
    }
    const submithandler = async (e) => {
        e.preventDefault()
        dispatch(signup({formData,navigate,toast}))
        console.log(formData);
       
    }
    return (

        <>
            <div className="container p-0 bg-white my-3">
                <div className="row">
                    <div className="col-lg-6 col-md-6 col-12">
                        <LazyLoadImage src="https://media.istockphoto.com/id/1281150061/vector/register-account-submit-access-login-password-username-internet-online-website-concept.jpg?s=612x612&w=0&k=20&c=9HWSuA9IaU4o-CK6fALBS5eaO1ubnsM08EOYwgbwGBo=" alt="" className="img-fluid" />
                    </div>
                    <div className="col-lg-6 col-md-6 col-12">


                        <div className="loginMain py-lg-5" >
                            <div className='loginForm'>
                                <h3 className="userType">Create Account</h3>
                                <form onSubmit={submithandler}>
                                    <div className="row">
                                        <div className="col-lg-12">
                                            <label htmlFor="firstName" className="label">First Name<span>*</span></label>
                                            <input id='name'
                                                type="text"

                                                className='form-control mb-3 '
                                                name='clientFirstName'
                                                onChange={changehandller}
                                            />
                                            <label htmlFor="firstName" className="label">Last Name</label>
                                            <input id='name'
                                                type="text"

                                                className='form-control mb-3 '
                                                name='clientLastName'
                                                onChange={changehandller}
                                            />

                                            <label htmlFor="emailId" className="label">Email Id <span>*</span></label>
                                            <input id='emailId'
                                                type="email"
                                                className='form-control mb-3'
                                                name='clientEmail'
                                                onChange={changehandller}
                                            />
                                            <label htmlFor="password" className="label">Password <span>*</span></label>
                                            <input id='password'
                                                type="password"
                                                className='form-control mb-3'
                                                name='clientPassword'
                                                onChange={changehandller}
                                            />

                                            <label htmlFor="cpassword" className="label">Confirm Password <span>*</span></label>
                                            <input id='cpassword'
                                                type="password"
                                                className='form-control mb-3'
                                                name='cpassword'
                                                onChange={changehandller}
                                            />
                                            <label htmlFor="ssn" className="label">SSN Number <span>*</span></label>
                                            <input id='ssn'
                                                type="text"
                                                className='form-control mb-3'
                                                name='clientSSN'
                                                onChange={changehandller}
                                            />
                                            <label htmlFor="ein-number" className="label">EIN Number</label>
                                            <input id='ein-number'
                                                type="text"
                                                className='form-control mb-3'
                                                name='ein-number'
                                                onChange={changehandller}
                                            />
                                            <label htmlFor="bradstreet-number" className="label">Address<span>*</span></label>
                                            <input id='bradstreet-number'
                                                type="text"
                                                className='form-control mb-3 '
                                                name='clientAddress1'
                                                onChange={changehandller}
                                            />
                                           
                                        </div>

                                      
                                        <div className="loginButton">
                                            <button type="submit">Register</button>
                                        </div>
                                        <div className="links-login">
                                            <p>Already have an account? <Link to="/employee-login">Sign In</Link></p>
                                            {/* <Link to="/forget-password">Forget password</Link> */}

                                        </div>
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

export default CreateAccount
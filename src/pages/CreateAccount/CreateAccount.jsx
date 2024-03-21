import { useEffect, useState } from "react"
import { Link, useNavigate } from "react-router-dom"
import "./create_acoount.css"
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { signup } from "../../redux/features/authSlice";
import { useDispatch, useSelector } from "react-redux";
import { LazyLoadImage } from "react-lazy-load-image-component";

function CreateAccount() {
    const navigate = useNavigate()
    const [formData, setFormData] = useState({
        roleName:"Client",
        clientFirstName: "",
        clientLastName: "",
        clientEmail: "",
        clientPhone: "",
        clientPassword: "",
        clientSSN: "",
        clientAddress: "",
    });

    const[tonggle,setTonggle]=useState("ssn")
    const dispatch = useDispatch();

    const changehandller = (e) => {
        const name = e.target.name;
        setFormData({ ...formData, [name]: e.target.value })
    }
    const submithandler = async (e) => {
        e.preventDefault()
        dispatch(signup({ formData, navigate, toast }))
        // console.log(formData);
    }
    const load = useSelector((state) => state.auth.loading)

    useEffect(()=>{
        let user=JSON.parse(localStorage.getItem('user'))
        user&&navigate("/user-dashboard")
    },[])
    return (

        <>
            <div className="container p-0 bg-white my-3">
                <div className="row">
                    {/* <div className="col-lg-6 col-md-6 col-12">
                        <LazyLoadImage src="https://media.istockphoto.com/id/1281150061/vector/register-account-submit-access-login-password-username-internet-online-website-concept.jpg?s=612x612&w=0&k=20&c=9HWSuA9IaU4o-CK6fALBS5eaO1ubnsM08EOYwgbwGBo=" alt="" className="img-fluid" />
                    </div> */}
                    <div className="col-lg-12 col-md-12 col-12">
                        <div className="p-lg-5 p-3" >
                            <div className='px-lg-5'>
                                <h3 className="userType">Create Account</h3>
                                <form onSubmit={submithandler}>
                                    <div className="row">
                                        <div className="col-lg-6 col-12">
                                            <label htmlFor="firstName" className="label">First Name<span>*</span></label>
                                            <input id='name'
                                                type="text"
                                                className='form-control mb-3 '
                                                name='clientFirstName'
                                                onChange={changehandller}
                                                autoComplete="off"
                                            />
                                        </div>
                                        <div className="col-lg-6 col-12">
                                            <label htmlFor="firstName" className="label">Last Name</label>
                                            <input id='name'
                                                type="text"
                                                className='form-control mb-3 '
                                                name='clientLastName'
                                                onChange={changehandller}
                                                autoComplete="off"
                                            />
                                        </div>

                                        <div className="col-lg-12 col-12">
                                            <label htmlFor="emailId" className="label">Email Id <span>*</span></label>
                                            <input id='emailId'
                                                type="email"
                                                className='form-control mb-3'
                                                name='clientEmail'
                                                onChange={changehandller}
                                                autoComplete="off"
                                            />
                                        </div>

                                        <div className="col-lg-6 col-12">
                                            <label htmlFor="password" className="label">Password <span>*</span></label>
                                            <input id='password'
                                                type="password"
                                                className='form-control mb-3'
                                                name='clientPassword'
                                                onChange={changehandller}
                                                autoComplete="off"
                                            />
                                        </div>

                                        <div className="col-lg-6 col-12">
                                            <label htmlFor="cpassword" className="label">Confirm Password <span>*</span></label>
                                            <input id='cpassword'
                                                type="password"
                                                className='form-control mb-3'
                                                name='cpassword'
                                                onChange={changehandller}
                                                autoComplete="off"
                                            />
                                        </div>

                                        <div className="col-lg-6 col-6">
                                            <button className={tonggle=="ssn"?"ssn-ein-button":"ssn-ein-button active"} onClick={()=>setTonggle("ssn")}>SSN</button>
                                        </div>

                                        <div className="col-lg-6 col-6">
                                            <button className={tonggle=="ein"?"ssn-ein-button":"ssn-ein-button active"} onClick={()=>setTonggle("ein")}>EIN</button>
                                        </div>

                                        {tonggle=="ssn"?<div className="col-lg-12 col-12">
                                            <label htmlFor="ssn" className="label">SSN<span>*</span></label>
                                            <input id='ssn'
                                                type="text"
                                                className='form-control mb-3'
                                                name='clientSSN'
                                                onChange={changehandller}
                                                autoComplete="off"
                                                disabled= {formData.clientEIN?true:false}
                                            />
                                        </div>
                                        :
                                        <div className="col-lg-12 col-12">
                                            <label htmlFor="ein-number" className="label">EIN <span>*</span></label>
                                            <input id='clientEIN'
                                                type="text"
                                                className='form-control mb-3'
                                                name='clientEIN'
                                                onChange={changehandller}
                                                autoComplete="off"
                                               disabled= {formData.clientSSN?true:false}
                                            />
                                        </div>}

                                        <div className="col-lg-12 col-12">
                                            <label htmlFor="bradstreet-number" className="label">Address<span>*</span></label>
                                            <textarea id='bradstreet-number'
                                                type="text"
                                                className='form-control mb-3 '
                                                name='clientAddress'
                                                rows={3}
                                                onChange={changehandller}
                                                autoComplete="off"

                                            />
                                        </div>


                                        <div className="loginButton">
                                            <button type="submit" disabled={load}>Register
                                            {load&&<span className="spinner-border spinner-border-sm mx-1" role="status" aria-hidden="true"></span>
                                               }</button>
                                        </div>
                                        <div className="links-login">
                                            <p>Already have an account? <Link to="/login">Sign In</Link></p>
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
import axios from "axios";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from 'react-toastify';

function ResetPassword() {
    const [password, setPassword] = useState("");
    const [id, setId] = useState("")
    const [token, setToken] = useState("")
    const navigate= useNavigate()

    useEffect(() => {
        // Get the hash portion of the URL
        const hash = window.location.hash;
        // Parse the hash to extract the token and id
        const urlSearchParams = new URLSearchParams(hash);
        const token = urlSearchParams.get('token');
        const id = urlSearchParams.get('id');
        setId(id)
        setToken(token)
    }, []);
    const submithandler = async (e) => {
        e.preventDefault();
        try {
            const response = await axios.post('http://localhost:5000/auth/passwordReset', { password, id: id })
                .then((response) => {
                    toast.success(response?.data?.message);
                    navigate("/")
                })
                .catch(err => {
                    toast.error(err?.response?.data?.message);
                    console.log(err)
                })
            } catch (err) {
                return toast.error(err.response?.data?.message);
            }
            setPassword(" ")
    }
    return (
        <>
            <div className="loginMain py-lg-5">
                <div className='loginForm'>
                    <h3 className="userType">Reset Password</h3>
                    <form className="form" onSubmit={submithandler}>
                        <label htmlFor="password" className="label">Enter new password</label>
                        <input id='password'
                            type="password"
                            className='form-control mb-3 '
                            required
                            name='password'
                            onChange={(e) => setPassword(e.target.value)}
                        />
                        <div className="loginButton">
                            <button type="submit">Send Request</button>
                        </div>
                    </form>
                </div>
            </div>
        </>
    )
}

export default ResetPassword
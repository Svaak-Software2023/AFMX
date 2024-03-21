import React, { useState } from 'react'
import "./contact.css"
import { useDispatch } from 'react-redux'
import { contactForm } from '../../redux/features/contactUsSlice'
import { toast } from 'react-toastify'
import { TextField } from '@mui/material'

function Contact() {
    const [formData, setFormData] = useState({ name: "", email: "", phoneNumber: "", subject: "", message: "" })
    const dispatch = useDispatch()
    function changehandler(e) {
        const name = e.target.name
        setFormData({ ...formData, [name]: e.target.value })
    }
    function submithandler(e) {
        e.preventDefault()
        dispatch(contactForm({ formData, toast }))
        // setFormData({ name: "", email: "", phoneNumber: "", subject: "", message: "" })
    }
    return (
        <>
            {/* contact  */}
            <div className="services-memebership ">
                <div className="container p-0 bg-white">
                    <div className="my-3">
                        <div className="contact m-0">
                            <div className="">
                                <div className="section-title">
                                    <h2>Contact Us</h2>
                                </div>
                                <div className="row m-0 p-4">
                                    <div className="col-md-6 ">
                                        <img src="https://img.freepik.com/free-vector/flat-design-illustration-customer-support_23-2148887720.jpg?size=626&ext=jpg&ga=GA1.1.360853026.1666364970&semt=ais" alt="" className='img-fluid' />
                                    </div>
                                    <div className="col-md-6">
                                        <h3 className='contact-info-heading'>Get in Touch</h3>
                                        <h5 className='contact-info-text mb-3'>Our friendly team would love to hear you.</h5>
                                        <form onSubmit={submithandler}>
                                            <div className="row">
                                                <div className="col-md-12 mb-3">
                                                    <div className="form-group">
                                                        <TextField
                                                            className="form-control"
                                                            type="text"
                                                            label="Name"
                                                            variant="outlined"
                                                            value={formData.name}
                                                            onChange={changehandler}
                                                            name="name" />
                                                    </div>
                                                </div>
                                                <div className="col-md-12 mb-3">
                                                    <div className="form-group">

                                                        <TextField
                                                            className="form-control"
                                                            type="text"
                                                            label="Email"
                                                            onChange={changehandler}
                                                            value={formData.email}
                                                            name="email" />

                                                    </div>
                                                </div>
                                                <div className="col-md-12 mb-3">
                                                    <div className="form-group">
                                                        <TextField
                                                            className="form-control"
                                                            type="text"
                                                            label="Phone Number"
                                                            onChange={changehandler}
                                                            value={formData.phoneNumber}
                                                            name="phoneNumber" />
                                                    </div>
                                                </div>
                                                <div className="col-md-12 mb-3">
                                                    <div className="form-group">
                                                        <TextField
                                                            className="form-control"
                                                            type="text"
                                                            label="subject"
                                                            onChange={changehandler}
                                                            value={formData.subject}
                                                            name="subject" />
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="form-group">
                                                <textarea onChange={changehandler} value={formData.message} name="message" id="message" className="form-control" rows={4} placeholder="Message" defaultValue={""} />
                                                <p className="help-block text-danger" />
                                            </div>
                                            <div id="success " className='d-flex justify-content-center' >
                                                <button type="submit" className="btn btn-custom btn-lg">Send Message</button>
                                            </div>
                                        </form>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Contact
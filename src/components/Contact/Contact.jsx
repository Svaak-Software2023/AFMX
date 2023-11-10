import React from 'react'
import "./contact.css"
function Contact() {
    return (
        <>
            <div className="contact m-0">
                <div className="">
                    <div className="section-title">
                        <h2>Contact Us</h2>
                    </div>
                    <div className="row m-0 py-4">
                    <div className="col-md-4 ">
                        <h3>Contact Info</h3>
                        <div className="contact-item"> <span>Address</span>
                            <p>4321 California St,<br />
                                San Francisco, CA 12345</p>
                        </div>
                        <div className="contact-item"> <span>Email</span>
                            <p>info@company.com</p>
                        </div>
                        <div className="contact-item"> <span>Phone</span>
                            <p> +1 123 456 1234</p>
                        </div>
                    </div>
                    <div className="col-md-8">
                        <h3>Leave us a message</h3>
                        <form name="sentMessage" id="contactForm" noValidate>
                            <div className="row">
                                <div className="col-md-6">
                                    <div className="form-group">
                                        <input type="text" id="name" className="form-control" placeholder="Name" required="required" />
                                        <p className="help-block text-danger" />
                                    </div>
                                </div>
                                <div className="col-md-6">
                                    <div className="form-group">
                                        <input type="email" id="email" className="form-control" placeholder="Email" required="required" />
                                        <p className="help-block text-danger" />
                                    </div>
                                </div>
                            </div>
                            <div className="form-group">
                                <textarea name="message" id="message" className="form-control" rows={4} placeholder="Message" required defaultValue={""} />
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

        </>
    )
}

export default Contact
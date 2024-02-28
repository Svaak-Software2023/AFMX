import React from 'react'
import "./style.css"
import { FaUser, FaBookReader, FaBookOpen } from "react-icons/fa";
import { IoIdCard } from "react-icons/io5";
import { ImHammer2 } from "react-icons/im";
import { FiMonitor } from "react-icons/fi";
import { Link } from 'react-router-dom';

function UserDashboard() {
    const user = JSON.parse(localStorage.getItem('user'))
    return (
        <>
            <div className="container p-0 my-3">
                <div className="row m-0 p-0 ">
                    <div className=" col-lg-12 col-md-12 col-12 complain-main service_content">
                        <div className="row m-0 p-0">

                        <div className="col-lg-6 col-md-6 col-12">
                                <div className="row m-0 p-0">
                                    <div className="col-lg-12 col-12">
                                        <Link to="">
                                            <div className="user-dashboard-details">
                                                <h3>Welcome {user.clientFirstName} {user.clientLastName}</h3>
                                                <p>Company/Member ID : 123456</p>
                                                <h3>Member Status : Non Member</h3>
                                                {/* <FaUser className='user-complain-icon' /> */}
                                            </div>
                                        </Link>
                                    </div>
                                    <div className="col-lg-12 col-12">
                                        <div className="user-dashboard-details-img ">
                                            {/* <h3>Benifits</h3>
                                            <GiProfit className='user-complain-icon' /> */}
                                        </div>
                                    </div>

                                    <div className="col-lg-12 col-12">
                                        <div className="user-dashboard-details-img2">
                                            {/* <h3>Benifits</h3> */}
                                            {/* <GiProfit className='user-complain-icon' /> */}
                                        </div>
                                    </div>
                                </div>
                            </div>

                        <div className="col-lg-6 col-md-6 col-12">
                                <div className="row m-0 p-0">
                                    <div className="col-lg-6 col-12">
                                        <Link to="">
                                        <div className="user-complain">
                                            <h3>Membership Dues</h3>
                                            <FaBookReader className='user-complain-icon' />
                                        </div>
                                        </Link>
                                    </div>
                                    <div className="col-lg-6 col-12">
                                        <div className="user-complain">
                                            <h3>Benifits</h3>
                                            <FaUser className='user-complain-icon' />
                                        </div>
                                    </div>

                                    <div className="col-lg-6 col-12">
                                        <div className="user-complain">
                                            <h3>Events</h3>
                                            <IoIdCard className='user-complain-icon' />
                                        </div>
                                    </div>

                                    <div className="col-lg-6 col-12">
                                        <div className="user-complain">
                                            <h3>Training, Education</h3>
                                            <FaBookOpen className='user-complain-icon' />
                                        </div>
                                    </div>

                                    <div className="col-lg-6 col-12">
                                        <div className="user-complain">
                                            <h3>Advocacy</h3>
                                            <ImHammer2 className='user-complain-icon' />
                                        </div>
                                    </div>

                                    <div className="col-lg-6 col-12">
                                    <Link to="/user-complaint-list">
                                        <div className="user-complain">
                                            <h3>My Complaints</h3>
                                            <FiMonitor className='user-complain-icon' />
                                        </div>
                                    </Link>
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

export default UserDashboard
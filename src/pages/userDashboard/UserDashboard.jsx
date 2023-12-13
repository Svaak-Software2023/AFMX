import React from 'react'
import "./style.css"
import { FaUser } from "react-icons/fa";
import { GiProfit } from "react-icons/gi";
import { Link, useParams } from 'react-router-dom';
// import ImportantLinks from '../../components/ImportantLinks/ImportantLinks'

function UserDashboard() {
    const{type}=useParams()
    return (
        <>
            <div className="container p-0 my-3">
                <div className="row m-0 p-0 ">
                    {/* <div className="col-lg-3 col-md-3 col-0 p-0 service_menu">
                       <ImportantLinks/>
                    </div> */}
                    <div className=" col-lg-12 col-md-12 col-12 bg-white p-3 service_content">
                        {/* <h3 className="heading mb-3">{type}</h3> */}
                        <div className="row m-0 p-0">
                            <div className="col-lg-6 col-md-6 col-12">
                                <div className="row m-0 p-0">
                                    <div className="col-lg-6 col-12">
                                        <Link to="/user-complain">
                                        <div className="user-complain">
                                            <h3>Complain</h3>
                                            <FaUser className='user-complain-icon' />
                                        </div>
                                        </Link>
                                    </div>
                                    <div className="col-lg-6 col-12">
                                        <div className="user-complain">
                                            <h3>Benifits</h3>
                                            <GiProfit className='user-complain-icon' />
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-6 col-md-6 col-12"></div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default UserDashboard
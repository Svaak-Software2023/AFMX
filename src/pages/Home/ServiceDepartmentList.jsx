import React from 'react'
import { Link } from 'react-router-dom'
import serviceData from "../../assets/data/serviceDepartmentData.json";


function ServiceDepartmentList() {
    const serviceData1 = serviceData?.filter((item) => item.id < 19);
    const serviceData2 = serviceData?.filter((item) => item.id > 18);
    return (
        <>
            <div className="services-memebership my-3">
                <div className="container p-0">
                    <div className="row">
                        <div className="col-lg-12">
                            <div className="memebership-list">
                                <h2>Our Service Department</h2>
                                <div className="single-row">
                                    <ul className>
                                        {serviceData1?.map((item) => (
                                            <li key={item.id}>
                                                <Link to={`/service-department/${item.name.toString()}`}>{item.name}</Link>
                                            </li>
                                        ))}
                                    </ul>
                                    <ul className>
                                        {serviceData2?.map((item) => (
                                            <li key={item.id}>
                                                <Link to={`/service-department/${item.name}`}>{item.name}</Link>
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                                {/* <div className="load-more"><Link to="/new" >Load More</Link></div> */}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default ServiceDepartmentList
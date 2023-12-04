import React from 'react'
import ImportantLinks from '../../../../components/ImportantLinks/ImportantLinks'
import "./handyman.css"
import { LazyLoadImage } from 'react-lazy-load-image-component'
import { Link } from 'react-router-dom'
import departmentData from "../../../../assets/data/serviceDepartmentData.json"

function HandymanSolutionDepartment() {
    console.log(departmentData);
    return (
        <>
            <div className="container p-0 my-3">
                <div className="row m-0 p-0 ">
                    <div className="col-lg-3 col-md-3 col-12 p-0 service_menu">
                        <ImportantLinks />
                    </div>
                    <div className=" col-lg-9 col-md-9 col-12 bg-white p-3 service_content">
                        <div className="handyman-solution-department">
                            <h1 className="title mb-3">Handyman Solutions Department</h1>
                            <div className="row pt-lg-5">
                                <div className="col-lg-4 pt-lg-5 mb-3">
                                    <ul className="assemblyDepartment-a">
                                        <li className="p">Carpentry Installation and Repair </li>
                                        <li className="p">Attic Installation and Repair</li>
                                        <li className="p">Assembly Service</li>
                                        <li className="p">Handyman Services </li>
                                        <li className="p">Remodeling Services</li>
                                    </ul>
                                </div>

                                <div className="col-lg-8">
                                    <div className="top-flex-box justify-content-end mb-1">
                                        <div className="image-gallery margin-image-servicedepartment-item mx-1">
                                            <div>
                                            <Link to={"/service-department-item/1/1"}>
                                                    <LazyLoadImage
                                                        src={"/images/serviceDepartments/HandymanSolutionsDepartment/carpentryInstallationandRepairService.jpg"}
                                                        className="img-fluid "
                                                    />
                                                    <div className="service-name">
                                                        <h3>{"Carpentry Installation and Repair"}</h3>
                                                    </div>
                                                </Link>
                                            </div>
                                        </div>
                                        <div className="image-gallery margin-image-servicedepartment-item">
                                            <div>
                                                <Link to={"/service-department-item/1/2"}>
                                                    <LazyLoadImage
                                                        src={"./images/serviceDepartments/HandymanSolutionsDepartment/atticInstallationandRepairService.jpg"}
                                                        className="img-fluid "
                                                    />
                                                    <div className="service-name">
                                                        <h3>{"Attic Installation and Repair"}</h3>
                                                    </div>
                                                </Link>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="top-flex-box">
                                        <div className="image-gallery margin-image-servicedepartment-item">
                                            <div>
                                            <Link to={"/service-department-item/1/3"}>
                                                    <LazyLoadImage
                                                        src={"./images/serviceDepartments/HandymanSolutionsDepartment/fenceAssemblyService.jpg"}
                                                        className="img-fluid "
                                                    />
                                                    <div className="service-name">
                                                        <h3>{"Assembly Service"}</h3>
                                                    </div>
                                                </Link>
                                            </div>
                                        </div><div className="image-gallery margin-image-servicedepartment-item mx-1">
                                            <div>
                                                <Link to={"/service-department-item/1/4"}>
                                                    <LazyLoadImage
                                                        src={"/images/serviceDepartments/HandymanSolutionsDepartment/handiymanService.jpg"}
                                                        className="img-fluid "
                                                    />
                                                    <div className="service-name">
                                                        <h3>{"Handyman Services"}</h3>
                                                    </div>
                                                </Link>
                                            </div>
                                        </div><div className="image-gallery margin-image-servicedepartment-item">
                                            <div>
                                                <Link to={"/service-department-item/1/5"}>
                                                    <LazyLoadImage
                                                        src={"/images/serviceDepartments/HandymanSolutionsDepartment/remodelingService.jpg"}
                                                        className="img-fluid "
                                                    />
                                                    <div className="service-name">
                                                        <h3>{"Remodeling Services"}</h3>
                                                    </div>
                                                </Link>
                                            </div>
                                        </div>
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

export default HandymanSolutionDepartment
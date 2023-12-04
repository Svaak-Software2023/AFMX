import { LazyLoadImage } from "react-lazy-load-image-component"
import "./style.css"
import { Link } from "react-router-dom"
import ImportantLinks from "../../../../components/ImportantLinks/ImportantLinks"

function AssemblyDepartment() {
  return (
    <>
         <div className="container p-0 my-3">
                <div className="row m-0 p-0 ">
                    <div className="col-lg-3 col-md-3 col-12 p-0 service_menu">
                        <ImportantLinks />
                    </div>
                    <div className=" col-lg-9 col-md-9 col-12 bg-white p-3 service_content">
                        <div className="handyman-solution-department">
                            <h1 className="title mb-3">Assembly Department</h1>
                            <div className="row pt-lg-5">
                                <div className="col-lg-5 pt-lg-2 mb-3">
                                    <ul className="assemblyDepartment-a">
                                        <li className="assemblyDepartment-p">Cabinet Assembly</li>
                                        <li className="assemblyDepartment-p">Fence Assembly</li>
                                        <li className="assemblyDepartment-p">Furniture Assembly</li>
                                        <li className="assemblyDepartment-p">Handyman Services </li>
                                        <li className="assemblyDepartment-p">Grill Assembly</li>
                                    </ul>
                                </div>

                                <div className="col-lg-7">
                                    <div className="top-flex-box mb-1">
                                        <div className="image-gallery margin-image-servicedepartment-item mx-1">
                                            <div>
                                            <Link to={"/service-department-item/2/1"}>
                                                    <LazyLoadImage
                                                        src={"/images/serviceDepartments/assemblyDepartment/2.jpg"}                                                        className="img-fluid "
                                                    />
                                                    <div className="service-name">
                                                        <h3>Cabinet Assembly</h3>
                                                    </div>
                                                </Link>
                                            </div>
                                        </div>
                                        <div className="image-gallery margin-image-servicedepartment-item">
                                            <div>
                                                <Link to={"/service-department-item/2/2"}>
                                                    <LazyLoadImage
                                                        src={"./images/serviceDepartments/assemblyDepartment/4.jpg"}
                                                        className="img-fluid "
                                                    />
                                                    <div className="service-name">
                                                        <h3>Fence Assembly</h3>
                                                    </div>
                                                </Link>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="top-flex-box">
                                        <div className="image-gallery margin-image-servicedepartment-item">
                                            <div>
                                            <Link to={"/service-department-item/2/3"}>
                                                    <LazyLoadImage
                                                        src={"./images/serviceDepartments/assemblyDepartment/3.jpg"}
                                                        className="img-fluid "
                                                    />
                                                    <div className="service-name">
                                                        <h3>Furniture Assembly</h3>
                                                    </div>
                                                </Link>
                                            </div>
                                        </div><div className="image-gallery margin-image-servicedepartment-item mx-1">
                                            <div>
                                                <Link to={"/service-department-item/2/4"}>
                                                    <LazyLoadImage
                                                        src={"/images/serviceDepartments/assemblyDepartment/1.jpg"}
                                                        className="img-fluid "
                                                    />
                                                    <div className="service-name">
                                                        <h3>Grill Assembly</h3>
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

export default AssemblyDepartment
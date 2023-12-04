import { LazyLoadImage } from "react-lazy-load-image-component"
import "./style.css"
import { Link } from "react-router-dom"
import ImportantLinks from "../../../../components/ImportantLinks/ImportantLinks"

function AtticInstallationAndRepairDepartment() {
  return (
    <>
    <div className="container p-0 my-3">
           <div className="row m-0 p-0 ">
               <div className="col-lg-3 col-md-3 col-12 p-0 service_menu">
                   <ImportantLinks />
               </div>
               <div className=" col-lg-9 col-md-9 col-12 bg-white p-3 service_content">
                   <div className="handyman-solution-department">
                       <h1 className="title mb-lg-4">Attic Installation And Repair Department</h1>
                       <div className="row pt-lg-5">
                           <div className="col-lg-5 pt-lg-2 mb-4">
                               <ul className="assemblyDepartment-a">
                                   <li className="attic-p">Attic Door Installation</li>
                                   <li className="attic-p">Attic Fan Installation And Repair</li>
                                   <li className="attic-p">Attic Insulation</li>
                                   <li className="attic-p">Attic Stairs Installation</li>
                                   <li className="attic-p">Mold Prevention</li>
                                   <li className="attic-p">Structural Integrity</li>

                               </ul>
                           </div>

                           <div className="col-lg-7">
                               <div className="top-flex-box mb-1">
                                   <div className="image-gallery margin-image-servicedepartment-item mx-1">
                                       <div>
                                       <Link to={"/service-department-item/3/1"}>
                                               <LazyLoadImage
                                                   src={"/images/serviceDepartments/atticInstallationAndRepairDepartment/1.jpg"}                                                        className="img-fluid "
                                               />
                                               <div className="service-name">
                                                   <h3>Structural Integrity</h3>
                                               </div>
                                           </Link>
                                       </div>
                                   </div>
                                   <div className="image-gallery margin-image-servicedepartment-item">
                                       <div>
                                           <Link to={"/service-department-item/3/2"}>
                                               <LazyLoadImage
                                                   src={"./images/serviceDepartments/atticInstallationAndRepairDepartment/2.jpg"}
                                                   className="img-fluid "
                                               />
                                               <div className="service-name">
                                                   <h3>Attic door Installation</h3>
                                               </div>
                                           </Link>
                                       </div>
                                   </div>
                               </div>
                               <div className="top-flex-box mb-1">
                                   <div className="image-gallery margin-image-servicedepartment-item">
                                       <div>
                                       <Link to={"/service-department-item/3/3"}>
                                               <LazyLoadImage
                                                   src={"./images/serviceDepartments/atticInstallationAndRepairDepartment/3.jpg"}
                                                   className="img-fluid "
                                               />
                                               <div className="service-name">
                                                   <h3>Mold Prevention</h3>
                                               </div>
                                           </Link>
                                       </div>
                                   </div><div className="image-gallery margin-image-servicedepartment-item mx-1">
                                       <div>
                                           <Link to={"/service-department-item/3/4"}>
                                               <LazyLoadImage
                                                   src={"/images/serviceDepartments/atticInstallationAndRepairDepartment/5.jpg"}
                                                   className="img-fluid "
                                               />
                                               <div className="service-name">
                                                   <h3>Attic Fan Installation and repair</h3>
                                               </div>
                                           </Link>
                                       </div>
                                   </div>
                               </div>
                               <div className="top-flex-box">
                                   <div className="image-gallery margin-image-servicedepartment-item">
                                       <div>
                                       <Link to={"/service-department-item/3/5"}>
                                               <LazyLoadImage
                                                   src={"./images/serviceDepartments/atticInstallationAndRepairDepartment/4.jpg"}
                                                   className="img-fluid "
                                               />
                                               <div className="service-name">
                                                   <h3>Attic Stairs  installation</h3>
                                               </div>
                                           </Link>
                                       </div>
                                   </div><div className="image-gallery margin-image-servicedepartment-item mx-1">
                                       <div>
                                           <Link to={"/service-department-item/3/6"}>
                                               <LazyLoadImage
                                                   src={"/images/serviceDepartments/atticInstallationAndRepairDepartment/6.jpg"}
                                                   className="img-fluid "
                                               />
                                               <div className="service-name">
                                                   <h3>Attic Insulation</h3>
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

export default AtticInstallationAndRepairDepartment
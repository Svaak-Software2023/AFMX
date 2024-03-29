import { Link } from "react-router-dom";
import "./style.css"
import ImportantLinks from "../../../../components/ImportantLinks/ImportantLinks";
import departmentData from "../../../../assets/data/serviceDepartmentData.json";
import { LazyLoadImage } from "react-lazy-load-image-component";

const LawnCareDepartment = () => {
    const LawnDept = departmentData.find((item) => item.name === "Lawn care department");
    const maindata = LawnDept.submenu;
  return (
    <div>
      <div className="container p-0 my-3">
        <div className="row m-0 p-0 ">
          <div className="col-lg-3 col-md-3 col-12 p-0 service_menu">
            <ImportantLinks />
          </div>
          <div className=" col-lg-9 col-md-8 col-12 bg-white p-3 service_content">
            <div className="handyman-solution-department">
              <h1 className="title mb-lg-4"> LAWN CARE DEPARTMENT </h1>
              <div className="row pt-lg-3 d-flex .flex-wrap creativeDiv">
                <div className="row">
                  {maindata.map((item, index) => (
                    <div key={index} className="col-lg-3 mb-5 d-flex text-center ">
                      <div className="image-gallery margin-image-servicedepartment-item ">
                        <Link to={item.name}>
                          <LazyLoadImage src={item.image} className="img-fluid"  effect="blur"/>
                          <div className="service-name px-3">
                            <h3 className="border-3 border border-danger" style={{backgroundColor: "#F81894"}}>{item.name}</h3>
                          </div>
                        </Link>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default LawnCareDepartment

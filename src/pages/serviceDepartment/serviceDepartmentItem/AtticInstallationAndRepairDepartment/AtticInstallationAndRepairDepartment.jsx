import "./style.css";
import { Link } from "react-router-dom";
import ImportantLinks from "../../../../components/ImportantLinks/ImportantLinks";
import departmentData from "../../../../assets/data/serviceDepartmentData.json";
import { LazyLoadImage } from "react-lazy-load-image-component";

function AtticInstallationAndRepairDepartment() {
  const atticData = departmentData.find((item) => item.name === "Attic installation and repair department");
  const mainData = atticData.submenu;
  return (
    <>
      <div className="container p-0 my-3">
        <div className="row m-0 p-0 ">
          <div className="col-lg-3 col-md-3 col-12 p-0 service_menu">
            <ImportantLinks />
          </div>
          <div className=" col-lg-9 col-md-9 col-12 bg-white p-3 service_content">
            <div className="handyman-solution-department">
              <h1 className="title mb-lg-4"> Attic Installation And Repair Department </h1>
              <div className="row pt-lg-5 d-flex .flex-wrap">
                <div className="col-lg-4 pt-lg-2 mb-4">
                  {mainData.map((item, index) => (
                    <Link to={item.name} key={index}>
                      <ul className="assemblyDepartment-a">
                        <li className="attic-p px-2"> {item.name}</li>
                      </ul>
                    </Link>
                  ))}
                </div>
                <div className="row">
                  {mainData.map((item, index) => (
                    <div key={index} className="col-lg-4 mb-1 d-flex justify-content-center text-center ">
                      <div className="image-gallery margin-image-servicedepartment-item">
                        <Link to={item.name}>
                          <LazyLoadImage src={item.image} className="img-fluid" effect="blur"/>
                          <div className="service-name">
                            <h3>{item.name}</h3>
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
    </>
  );
}

export default AtticInstallationAndRepairDepartment;

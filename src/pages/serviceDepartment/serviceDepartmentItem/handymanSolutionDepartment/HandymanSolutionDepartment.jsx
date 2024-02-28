import ImportantLinks from "../../../../components/ImportantLinks/ImportantLinks";
import "./handyman.css";
import { Link } from "react-router-dom";
import { LazyLoadImage } from "react-lazy-load-image-component";
import departmentData from "../../../../assets/data/serviceDepartmentData.json";

function HandymanSolutionDepartment() {
  const handyData = departmentData.find((item) => item.name === "handyman-solutions-department");
  const maindata = handyData.submenu;
  const k = maindata.filter((item) => item.id < 3);
  const l = maindata.filter((item) => item.id > 2);
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
                  {maindata.map((item, index) => (
                    <Link to={item.name} key={index}>
                    <ul className="assemblyDepartment-a list-group " >
                      <li className="p list-group-item ">{item.name} </li>
                    </ul>
                  </Link>
                  ))}
                </div>

                <div className="col-lg-8">
                  <div className=" mb-1">
                    <div className="row justify-content-end">
                      {k.map((item, index) => (
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
                    <div className="row">
                      {l.map((item, index) => (
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
        </div>
      </div>
    </>
  );
}

export default HandymanSolutionDepartment;

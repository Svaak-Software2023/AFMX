import { LazyLoadImage } from "react-lazy-load-image-component";
import "./style.css";
import { Link } from "react-router-dom";
import ImportantLinks from "../../../../components/ImportantLinks/ImportantLinks";
import departmentData from "../../../../assets/data/serviceDepartmentData.json";

function AssemblyDepartment() {
  const AssemblyData = departmentData.find((item) => item.name === "Assembly department");
  const maindata = AssemblyData.submenu;
  return (
    <>
      <div className="container p-0 my-3">
        <div className="row m-0 p-0 ">
          <div className="col-lg-3 col-md-3 col-12 p-0 service_menu">
            <ImportantLinks />
          </div>
          <div className=" col-lg-9 col-md-9 col-12 bg-white p-1 service_content">
            <div className="handyman-solution-department">
              <h1 className="title mb-3 pb-lg-3">Assembly Department</h1>
              <div className="row">
                <div className="col-lg-4 pt-lg-5 mb-3">
                  {maindata.map((item, index) => (
                            <Link to={`/service-department/assembly-department-list/${item.id}`} key={index} target="_blank">
                        <ul className="assemblyDepartment-a">
                        <li className="assemblyDepartment-p">{item.name}</li>
                        </ul>
                    </Link>
                  ))}
                </div>

                <div className="col-lg-8">
                  <div className=" mb-1">
                    <div className="row justify-content-end">
                      {maindata.map((item, index) => (
                        <div key={index} className="col-lg-5 mb-1 d-flex justify-content-center text-center ">
                          <div className="image-gallery margin-image-servicedepartment-item">
                            <Link to={`/service-department/assembly-department-list/${item.id}`}>
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

export default AssemblyDepartment;

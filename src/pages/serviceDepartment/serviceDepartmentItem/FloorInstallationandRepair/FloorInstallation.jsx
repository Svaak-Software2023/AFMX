import { LazyLoadImage } from "react-lazy-load-image-component";
import { Link } from "react-router-dom";
import ImportantLinks from "../../../../components/ImportantLinks/ImportantLinks";
import departmentData from "../../../../assets/data/serviceDepartmentData.json";
import "./style.css"
const FloorInstallation = () => {
  const AssemblyData = departmentData.find((item) => item.name === "Floor installation and repair department");
  const maindata = AssemblyData.submenu;
  return (
    <div className="container p-0 my-3">
      <div className="row m-0 p-0 ">
        <div className="col-lg-3 col-md-3 col-12 p-0 service_menu">
          <ImportantLinks />
        </div>
        <div className=" col-lg-9 col-md-9 col-12 bg-white p-1 service_content">
          <div className="handyman-solution-department">
            <h1 className="title mb-3 pb-lg-3"> Floor installation and repair department </h1>
            <div className="row px-4 justify-content-center">
              {maindata.map((item, index) => (
                <div key={index} className="col-lg-4 mb-4 d-flex justify-content-center text-center rounded-4" >
                  <div className="image-gallery margin-image-servicedepartment-item ">
                    <Link to={item.name}>
                      <LazyLoadImage src={item.image} className="img-fluid image-cont rounded-4" effect="blur" />
                      
                        <h4 className="item-name">{item.name}</h4>
                    </Link>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FloorInstallation;

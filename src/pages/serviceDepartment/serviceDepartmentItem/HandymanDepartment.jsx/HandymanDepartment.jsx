import { Link } from "react-router-dom";
import ImportantLinks from "../../../../components/ImportantLinks/ImportantLinks";
import departmentData from "../../../../assets/data/serviceDepartmentData.json";
import { LazyLoadImage } from "react-lazy-load-image-component";

const HandymanDepartment = () => {
  const JunkData = departmentData.find((item) => item.name === "Handyman department");
  const maindata = JunkData.submenu;
  return (
    <div className="container p-0 my-3">
      <div className="row m-0 p-0 ">
        <div className="col-lg-2 col-md-3 col-12 p-0 service_menu">
          <ImportantLinks />
        </div>
        <div className=" col-lg-10 col-md-8 col-12 bg-white p-3 service_content">
          <div className="handyman-solution-department">
            <h1 className="title mb-lg-4"> Handyman department </h1>
            <div className="row pt-lg-3 d-flex .flex-wrap">
              <div className="row">
                {maindata.map((item, index) => (
                  <div
                    key={index}
                    className="col-lg-2 mb-5 d-flex justify-content-center text-center "
                  >
                    <div className="image-gallery margin-image-servicedepartment-item">
                      <Link to={item.name}>
                        <LazyLoadImage
                          src={item.image}
                          className="img-fluid"
                          effect="blur"
                        />
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
  );
};

export default HandymanDepartment;

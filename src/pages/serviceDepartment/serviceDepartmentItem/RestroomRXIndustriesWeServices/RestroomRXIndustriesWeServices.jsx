import ImportantLinks from "../../../../components/ImportantLinks/ImportantLinks";
import departmentData from "../../../../assets/data/serviceDepartmentData.json";
import { Link } from "react-router-dom";
import './RestroomRXIndustriesWeServices.css'

const RestroomRXIndustriesWeServices = () => {
  const carpentryData = departmentData.find(
    (item) => item.name === "Restroom RX Industries We Services"
  );
  const mainData = carpentryData.submenu;
  return (
    <>
      <div className="container p-0 my-3">
        <div className="row m-0 p-0 ">
          <div className="col-lg-3 col-md-2 col-12 p-0 service_menu">
            <ImportantLinks />
          </div>
          <div className="col-lg-9 col-md-10 col-12 bg-white py-2">
            <h1 className="title mb-3">{"Restroom RX Industries We Services"} </h1>
            <div className="d-flex flex-wrap text-center pt-5 justify-content-center RXcreative">
              {mainData && mainData.map((item) => (
                  <Link to={item.name} key={item.id}>
                    <ul className="RXulCss p-3 m-2 bg-sky-200 text-fit text-center d-flex flex-column justify-content-center list-unstyled pe-auto RXheight-indicator">
                      <li> {item.name} </li>
                    </ul>
                  </Link>
                ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default RestroomRXIndustriesWeServices;

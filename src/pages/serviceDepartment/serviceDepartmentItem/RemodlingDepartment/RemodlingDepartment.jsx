import ImportantLinks from "../../../../components/ImportantLinks/ImportantLinks";
import { Link } from "react-router-dom";
import "./remodling.css";
import departmentData from "../../../../assets/data/serviceDepartmentData.json";

const RemodlingDepartment = () => {
  const remodelingDepartment = departmentData.find((item) => item.name === "Remodeling department");
  const mainData = remodelingDepartment.submenu;
  return (
    <div className="container p-0 my-3">
      <div className="row m-0 p-0 flex">
        <div className="col-lg-3 col-md-3 col-12 p-0 service_menu">
          <ImportantLinks />
        </div>
        <div className="col d-flex flex-column justify-content-center align-items-center">
          <h1 className="heading1"> REMODELING DEPARTMENT </h1>
          <div className="d-flex flex-wrap text-center justify-content-center creative">
            {mainData && mainData.map((item) => (
              <Link to={item.name} key={item.id}>
                <ul className="ulCss text-[5rem] p-3 m-2 bg-sky-200 text-fit text-center d-flex flex-column justify-content-center list-unstyled pe-auto height-indicator">
                  <li> {item.name} </li>
                </ul>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default RemodlingDepartment;

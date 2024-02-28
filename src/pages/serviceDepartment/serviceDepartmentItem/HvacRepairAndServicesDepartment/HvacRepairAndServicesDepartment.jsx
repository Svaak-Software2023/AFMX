import ImportantLinks from "../../../../components/ImportantLinks/ImportantLinks";
import { Link } from "react-router-dom";
import "./style.css";
import departmentData from "../../../../assets/data/serviceDepartmentData.json";

const HvacRepairAndServicesDepartment = () => {
  const HvacRepairAndServicesDepartments = departmentData.find((item) => item.name === "Hvac Repair And Services Department");
  const mainData = HvacRepairAndServicesDepartments.submenu;
  return (
    <div className="container p-0 my-3">
      <div className="row m-0 p-0 flex">
        <div className="col-lg-3 col-md-3 col-12 p-0 service_menu">
          <ImportantLinks />
        </div>
        <div className="col d-flex flex-column justify-content-center align-items-center">
          <h1 className="hvac-heading1"> Hvac Repair And Services Department</h1>
          <div className="d-flex flex-wrap text-center justify-content-center creative">
            {mainData && mainData.map((item) => (
              <Link to={item.name} key={item.id}  target="_blank">
                <ul className="hvac-ulCss text-[5rem] p-1 m-2 bg-sky-200 text-fit text-center d-flex flex-column justify-content-center list-unstyled pe-auto hvac-height-indicator">
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

export default HvacRepairAndServicesDepartment;

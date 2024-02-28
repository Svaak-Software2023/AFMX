import ImportantLinks from "../../../../components/ImportantLinks/ImportantLinks";
import "./style.css";
import { Link } from "react-router-dom";
import departmentData from "../../../../assets/data/serviceDepartmentData.json";

function TechnologyAndDataCentersDepartment() {
  const carpentryData = departmentData.find(
    (item) => item.name === "Technology And Data Centers Department"
  );
  const maindata = carpentryData.submenu;
  return (
    <>
      <div className="container p-0 my-3">
        <div className="row m-0 p-0 ">
          <div className="col-lg-3 col-md-2 col-12 p-0 service_menu">
            <ImportantLinks />
          </div>
          <div className="col-lg-9 col-md-10 col-12 bg-white py-2">
            <h1 className="title mb-3">{carpentryData.name}</h1>
            <div className="d-flex flex-wrap gap-1 justify-content-center align-items-center">
              {maindata.map((item, index) => (
                <Link to={item.name} key={index}  target="_blank">
                  <div className="text-white absolute" id="tdcd-div">
                    {item.name}
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default TechnologyAndDataCentersDepartment;

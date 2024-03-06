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
            <div className="row justify-content-center technology_div_color gap-1 pb-5"
              style={{ fontSize: "12px", transform: 'perspective(1000px) rotateX(30deg) rotateY(-1deg)',
              transition: 'transform 0.5s ease' }}>

              {maindata.map((item, index) => (
                <Link to={item.name} key={index} target="_blank" className="col-auto" >
                  <div className="card justify-content-center text-center align-items-center" style={{height:"320px", width:"85px", color: "white", borderRadius: "10px", boxShadow: "0 0 10px rgba(0, 0, 0, 0.3)", }} >
                      <p className="card-text">{item.name}</p>
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

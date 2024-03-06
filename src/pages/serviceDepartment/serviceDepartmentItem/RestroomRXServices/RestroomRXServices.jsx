import ImportantLinks from "../../../../components/ImportantLinks/ImportantLinks";
// import { Link } from "react-router-dom";
import departmentData from "../../../../assets/data/serviceDepartmentData.json";
import "./RestroomRXServices.css"
import { Link } from "react-router-dom";


const data = [
  "Restroom Cleaning  Rx, Clearblue toilet bowl Disinfecting",
  "Floor care Restroom Clinic",
  "Restroom Clinic, Odor control",
  "Toilet bowl cleaning",
  "Sink cleaning, restroom clinic",
  "Restroom Clinic Rx dispensers",
  "Restroom Clinic steel polishing",
  "Restroom Clinic restroom mirrors",
  "Rx-shield Disinfection technology",
  "Restroom supplies restocking services",
  "Restroom vent cleaning and restoration",
];

const RestroomRxServices = () => {
  const carpentryData = departmentData.find(
    (item) => item.name === "Restroom RX Services"
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
            <h1 className="title mb-3">{"Restroom RX Services"} </h1>
            <div className="RestroomRxMain">
              {mainData && mainData.map((item) => (
                <Link to={item.name} key={item.id}  target="_blank" className="RestroomRxDiv">
                {/* <div className="RestroomRxDiv"> */}
                  <div className="RestroomRxUnder">{item.name}</div>
                {/* </div> */}
                </Link>
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default RestroomRxServices;

import ImportantLinks from "../../../../components/ImportantLinks/ImportantLinks";
import { Link } from "react-router-dom";
import "./restroomClinicRXDepartment.css";
import departmentData from "../../../../assets/data/serviceDepartmentData.json";


const data = [
  {
    name: "RxCheckup",
    img: "/rx1.jpg",
    cost: "Cost : $89.99",
    color: "#D1E6B5",
    tasks: [
      "toilet bowl",
      "sink",
      "Accessible Bar wipe down ",
      "Urinal bowl",
      "Sweep Floors",
      "Baby Station wipe down ",
      "Clean Mirror",
      "Free Walkthrough ",
      "One time cleaning Frequency",
    ],
  },
  {
    name: "RxPreferred",
    img: "/rx2.jpg",
    cost: "Cost : $189.99",
    color: "#00B050",
    tasks: [
      "Free Walkthrough",
      "Bi-weekly Bathroom Cleaning",
      "Mirror Cleaning",
      "Floor Cleaning",
      "Toilet Cleaning",
      "Trash Removal",
      "Priority Scheduling",
      "Discounts on Additional Services",
      "Dedicated Customer Support",
    ],
  },
  {
    name: "RxSheild",
    img: "/rx3.jpg",
    cost: "Cost : $350",
    color: "#893713",
    tasks: [
      "For clients with high traffic",
      "Sink Polishing ",
      "Sinks & Countertops ",
      "Glass & Mirrors",
      "Shower/Tub. ",
      "Cabinet Exteriors ",
      "Toilets Cleaned ",
      "Door-Frames, Doorknobs, & Baseboards ",
      "Chrome Fixtures ",
      "ClearBlu Services ",
      "Bathroom stalls and walls ",
      "XShield disinfection ",
    ],
  },
  {
    name: "RxCatastrophic",
    img: "/rx4.jpg",
    cost: "Call us for a quote today",
    color: "#FFB7B7",
    tasks: [
      "Sink Polishing ",
      "Sinks & Countertops ",
      "Glass & Mirrors ",
      "Shower/Tub ",
      "Cabinet Exteriors ",
      "Toilets Cleaned ",
      "ClearBlu ",
      "Door-Frames, Doorknobs, & Baseboards ",
      "Chrome Fixtures and Shine ",
      "Emerncy On call cleaning",
      "Catastrophic bathroom cleaning ",
      "Virus and  Bacteria Disinfection ",
      "XShield disinfection",
      "Proper Waste Disposal",
    ],
  },
];

const RestroomClinicRXDepartment = () => {
  const RestroomClinicRXDepartments = departmentData.find((item) => item.name === "Restroom Clinic RX");
  const mainData = RestroomClinicRXDepartments.submenu;
  return (
    <div className="container p-0 my-3">
      <div className="row m-0 p-0 flex">
        <div className="col-lg-3 col-md-3 col-12 p-0 service_menu">
          <ImportantLinks />
        </div>
        <div className="col d-flex flex-column justify-content-center align-items-center">
          <h1 className="rcx-heading1"> Restroom Clinic RX</h1>
          <div className="d-flex flex-wrap text-center justify-content-center creative">
            {mainData && mainData.map((item) => (
              <Link to={item.name} key={item.id}  target="_blank">
                <ul className="rcx-ulCss text-[5rem] p-1 m-2 bg-sky-200 text-fit text-center d-flex flex-column justify-content-center list-unstyled pe-auto rcx-height-indicator">
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

export default RestroomClinicRXDepartment;




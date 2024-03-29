import { useParams } from "react-router-dom";
import ImportantLinks from "../../../../components/ImportantLinks/ImportantLinks";
import Payment from "../../../../components/Payment/Payment";
import "./RestroomRXMemberships.css";


const data = [

  {
    name: "Rx Checkup",
    img: "./images/serviceDepartments/restroomCleaningRx/RestroomRXMemberships/rx1.jpg",
    cost1: "",
    cost2: "Cost: $89.99",
    color: "#D1E6B5",
    tasks: [
      "(1) toilet bowl ",
      "(1) sink",
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
    name: "Rx Preferred",
    img: "./images/serviceDepartments/restroomCleaningRx/RestroomRXMemberships/rx2.jpg",
    cost1: "",
    cost2: "Cost: $189.99",
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
    name: "Rx Shield",
    img: "./images/serviceDepartments/restroomCleaningRx/RestroomRXMemberships/rx3.jpg",
    cost1: "",
    cost2: "Cost: $350.00",
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
    name: "Rx Catastrophic",
    img: "./images/serviceDepartments/restroomCleaningRx/RestroomRXMemberships/rx4.jpg",
    cost1: "Call us for a quote today",
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

const RestroomRXMemberships = () => {

  return (
    <div className="container p-0 my-3">
      <div className="row m-0 p-0 flex">
        <div className="col-lg-3 col-md-3 col-12 p-0 service_menu">
          <ImportantLinks />
        </div>
        <div className="col d-flex flex-column justify-content-center align-items-center bg-white">
          <h1 className="rcx-heading1"> Restroom RX Memberships</h1>
          <div className="RestroomRxMembershipMain">
            {data.map((item, index) => (
              <div key={index} >
                <div className="RxMembershipHeading">
                  <img src={item.img} alt={item} />
                  <h3> {item.name} </h3>
                </div>
                <div
                  style={{
                    border: `2px solid ${item.color}`,
                    padding: "5px 10px",
                  }}
                >
                  {index === 1 || index === 3 ? (
                    <ol>
                      {item.tasks.map((task, index) => (
                        <li key={index}>{task}</li>
                      ))}
                    </ol>
                  ) : (
                    <ul>
                      {item.tasks.map((task, index) => (
                        <li key={index}>{task}</li>
                      ))}
                    </ul>
                  )}
                  <div className="RxMembershipCostDiv">
                    <div>
                      <p> {item?.cost1} </p>
                      <p> {item?.cost2} </p>
                    </div>
                    {/* <Link to={item.name} target="_blank" className="d-flex align-items-end"><button> More... </button></Link> */}
                  </div>
                  {(index < 3) &&
                    <Payment
                      memberShipPlan={Number(item?.cost2.split("$")[1])}
                      memberShipName={item.name}
                      memberShipType="month" />
                  }
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default RestroomRXMemberships;

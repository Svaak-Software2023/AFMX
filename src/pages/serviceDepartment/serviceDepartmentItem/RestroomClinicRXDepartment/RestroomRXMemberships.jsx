import { useParams } from "react-router-dom";
import ImportantLinks from "../../../../components/ImportantLinks/ImportantLinks";
import Payment from "../../../../components/Payment/Payment";
import "./RestroomRXMemberships.css";
import ListItemWithImage from "../../../../components/list of item with image/ListItemWithImage";
import departmentData from "../../../../assets/data/serviceDepartmentData.json";
import { useEffect, useState } from "react";
import { LazyLoadImage } from "react-lazy-load-image-component";

// console.log(JSON.parse(localStorage.getItem('user')));

const RestroomRXMemberships = () => {
  const user = JSON.parse(localStorage.getItem('user'))

  const sub = JSON.parse(localStorage.getItem('sub'))
  const [isMember, setIsMember] = useState(false)
  useEffect(() => {
    if (sub?.memberShipName || user?.isRxRestRoomMember !== "Non-Member" && user?.isRxRestRoomMember) {
      setIsMember(true)
    }
  }, [sub])

  const [data, setData] = useState([

    {
      name: "Rx Checkup",
      button: true,
      type: "month",
      img: "./images/serviceDepartments/restroomCleaningRx/RestroomRXMemberships/rx1.jpg",
      cost1: 49.65,
      cost2: 89.99,
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
      button: true,
      type: "month",
      img: "./images/serviceDepartments/restroomCleaningRx/RestroomRXMemberships/rx2.jpg",
      cost1: 139.78,
      cost2: 189.99,
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
      button: true,
      type: "month",
      img: "./images/serviceDepartments/restroomCleaningRx/RestroomRXMemberships/rx3.jpg",
      cost1: 220.54,
      cost2: 350.00,
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
      button: false,
      type: "month",
      img: "./images/serviceDepartments/restroomCleaningRx/RestroomRXMemberships/rx4.jpg",
      info: "Call us for a quote today",
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

  ])

  const clickHandler = (type, index) => {
    const newData = [...data]; // Create a copy of the state array

    // Toggle the type between "month" and "year" based on the current type
    newData[index].type = type === "month" ? "oneTimeService" : "month";

    setData(newData); // Update the state with the modified array
  };
  if (isMember) {
    return (

      <ListItemWithImage name={departmentData[31].name} propData={departmentData[31].submenu} />
    );
  }
  else {
    return (
      <div className="container p-0 my-3">
        <div className="row m-0 p-0 flex">
          <div className="col-lg-3 col-md-3 col-12 p-0 service_menu">
            <ImportantLinks />
          </div>
          <div className="col d-flex flex-column justify-content-center align-items-center bg-white">
            <h1 className="rcx-heading1"> Restroom RX Memberships</h1>
            <div className="RestroomRxMembershipMain">
              {data.length && data?.map((item, index) => (
                <div key={index} >
                  <div className="RxMembershipHeading">
                    <LazyLoadImage effect="blur" src={item.img} alt={item} />
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
                    {item.button && <div className="d-flex justify-content-center">
                      <div>
                        <label className="rx-switch-button">
                          <input type="checkbox" />
                          <span className="rx-slider-btn text-center " onClick={() => clickHandler(item.type, index)}>{item.type === "month" ? "Month" : "One Time"}</span>
                        </label>
                      </div>
                    </div>}
                    <div className="RxMembershipCostDiv">
                      {<p>{item?.info}</p>}

                      {item?.cost2 && <p> $ {item.type === 'month' ? `${item?.cost1} per month` : `${item?.cost2} one time`}</p>}
                      {/* <Link to={item.name} target="_blank" className="d-flex align-items-end"><button> More... </button></Link> */}
                    </div>
                    {(index < 3) &&
                      <Payment
                        memberShipPlan={item.type === 'month' ? Number(item?.cost1) : Number(item?.cost2)}
                        memberShipName={item.name}
                        memberShipType={item.type} />
                    }
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

    );
  }
};

export default RestroomRXMemberships;
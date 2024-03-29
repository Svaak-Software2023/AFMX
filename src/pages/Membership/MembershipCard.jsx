import { useState } from "react";
import "./membership.css";
import { LazyLoadImage } from "react-lazy-load-image-component";

const MembershipCard = (props) => {
  const data = props.data;
  console.log(data);
  const [isToggled, setIsToggled] = useState(false);



  const handleClick = (id) => {
    setIsToggled((prevState) => ({
      ...prevState,
      [id]: !prevState[id],
    }));
  };
 
  return (
    <>
        <div className={`card${data.id} mb-3 card`}>
          <div className="plan_img">
            <LazyLoadImage effect="blur" src={data.planImage} alt={data.planName} />
          </div>
          <h1>{data.planName}</h1>
          <div
            className="subscriptionName"
            onClick={() => handleClick(data.id)}
            style={{
              backgroundColor: "#257616"
            }}
          >
            {isToggled[data.id] ? "Monthly" : data.subscriptionName}

            <div
              className="white_circle"
              onClick={() => handleClick(data.id)}
              style={{
                position: "absolute",
                right: isToggled[data.id] ? "107px" : "5px",
                transition: "right 0.4s ease-in-out",
              }}
            ></div>
          </div>
          <h2>
            <span>$</span>
            {isToggled[data.id] ? data.planValue : data.planValue - 3}
            &nbsp;
            <span>00</span>
          </h2>
          <h4>USD Per Month</h4>
          <div className="benefit_list">
            {data.membershipBenefit
              .map((i) => (
                <>
                  <p key={i.benefitId}>{i.benefitName}</p>
                </>
              ))}
          </div>
          <button>Get Started</button>
        </div>

    </>
  );
};

export default MembershipCard;

import { useState } from "react";
import "./style.css";

const MembershipCard = (props) => {
  const SingleCard = ({ data }) => {
    const [isToggled, setIsToggled] = useState(false);

    const handleClick = (id) => {
      setIsToggled((prevState) => ({
        ...prevState,
        [id]: !prevState[id],
      }));
    };
    return data.map((item) => {
      return (
        <>
          <label htmlFor={`s${item.id}`} id={`slide${item.id}`} key={item.id}>
            <div className="card ">
              <div className="plan_img">
                <img src={item.planImage} alt={item.planName} />
              </div>
              <h1>{item.planName}</h1>
              <div
                className="subscriptionName"
                onClick={() => handleClick(item.id)}
                style={{
                  backgroundColor: isToggled[item.id] ? "#257616" : "#37ab21",
                }}
              >
                {isToggled[item.id] ? "Monthly" : item.subscriptionName}

                <div
                  className="white_circle"
                  onClick={() => handleClick(item.id)}
                  style={{
                    position: "absolute",
                    right: isToggled[item.id] ? "107px" : "5px",
                    transition: "right 0.3s ease-in-out",
                  }}
                ></div>
              </div>
              <h2>
                <span>$</span>
                {isToggled[item.id] ? item.planValue : item.planValue - 3}
                &nbsp;
                <span>00</span>
              </h2>
              <h4>USD Per Month</h4>
              <div className="benefit_list">
                {item.membershipBenefit
                  .filter((e) => e.benefitId < 8)
                  .map((i) => (
                    <>
                      <p key={i.benefitId}>{i.benefitName}</p>
                    </>
                  ))}
              </div>
              <button>Get Started</button>
            </div>
          </label>
        </>
      );
    });
  };
  return <>{SingleCard(props)}</>;
};

export default MembershipCard;

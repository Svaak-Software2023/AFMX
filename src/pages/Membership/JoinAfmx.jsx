import "./style.css";
import MembershipPlan from "../../assets/data/membership/membershipPlan.json";
import MembershipCard from "./MembershipCard";

const JoinAfmx = () => {
  return (
    <>
      <div className="container slider-body">
        <h1 className="membership_heading">Membership Plans</h1>
        <div className="membership_container">
          <input
            type="radio"
            name="slider"
            className="d-none"
            id="s1"
            checked
          />
          <input type="radio" name="slider" className="d-none" id="s2" />
          <input type="radio" name="slider" className="d-none" id="s3" />
          <input type="radio" name="slider" className="d-none" id="s4" />
          <div className="membership_cards">
            <MembershipCard data={MembershipPlan} />
          </div>
        </div>
      </div>
    </>
  );
};

export default JoinAfmx;

import "./membership.css";
import MembershipPlan from "../../assets/data/membership/membershipPlan.json";
import MembershipCard from "./MembershipCard";

const JoinAFMX = () => {
  
  return (
    <>
      <div className="container slider-body">
        <h1 className="membership_heading">Membership Plans</h1>
        <div className="membership_container">
          <div className="membership_cards">
            <div className="cards d-flex flex-wrap justify-content-center">
              <MembershipCard data={MembershipPlan} />
            </div>
          </div>
          <div className="card-background">
            
          </div>
        </div>
      </div>
    </>
  );
};

export default JoinAFMX;

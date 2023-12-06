import { RiArrowDropDownLine } from "react-icons/ri";
import "./complain.css";
import { TextField } from "@mui/material";
import { BsFillPersonFill } from "react-icons/bs";
import { Link } from "react-router-dom";

function ComplainPortal() {
  return (
    <>
      <div className="container p-0 my-3 bg-white">
        <div className="row m-0 p-0 ">
          <div className="col-lg-3 col-md-3 col-0 p-0 service_menu">
            <h3 className="left-menu-heading">
              Complain System
            </h3>
            <div className="left-menu mb-3">
              <div className="left-menu-user-profile">
                <div className="side-menu-profile-img">
                  <img src="https://img.freepik.com/premium-vector/man-avatar-profile-picture-vector-illustration_268834-538.jpg" alt="" className="img-fluid" />
                </div>
                <div className="left-menu-user-profile-name">
                  <h3 >User Name</h3>
                </div>
              </div>
              <h3 className="MAIN-NAVIGATION">MAIN NAVIGATION</h3>
              <ul className="left-menu-list">
                <li><Link to="">Dashboard</Link></li>
                <li><Link to="">Complaint <RiArrowDropDownLine className="fs-5" /></Link></li>
                <li><Link to="">Reports</Link></li>
                <li></li>
              </ul>
            </div>
          </div>
          <div className=" col-lg-9 col-md-9 col-12 service_content" style={{paddingLeft:"2px",paddingRight:"0px"}}>
            <h3 className="left-menu-heading text-end fs-6" >
              User Name
            </h3>
            <div>
            </div>
            <div className="p-3">
              <h3 className="heading border-none">Dashboard</h3>
              <div className="row mt-3">
                <div className="col-lg-4 col-12 mb-3">
                  <div className="box-item1">
                    <h3 className="box-item-text">150</h3>
                    <h3 className="box-item-text box-item-textb-bottom">Total Complaints</h3>
                  </div>
                </div>
                <div className="col-lg-4 col-12 mb-3">
                  <div className="box-item2">
                  <h3 className="box-item-text">150</h3>
                    <h3 className="box-item-text box-item-textb-bottom">Complaint Solve</h3>
                  </div>
                </div>
                <div className="col-lg-4 col-12 mb-3">
                  <div className="box-item3">
                  <h3 className="box-item-text">150</h3>
                    <h3 className="box-item-text box-item-textb-bottom">Reports</h3>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default ComplainPortal;

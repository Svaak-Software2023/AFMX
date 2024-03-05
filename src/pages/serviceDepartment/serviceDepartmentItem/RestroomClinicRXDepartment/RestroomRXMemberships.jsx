import React from "react";
import "./restroomClinicRXDepartment.css";

const RestroomRXMemberships = () => {
  return (
    <>
      <div className="container p-0 my-5">
        <div className="row p-0 title_card_shadow justify-content-center">
          <div className="col-3 p-0 rx_Layer_one​_absolute rx_Layer_one​"></div>
          <div className="col-3 p-0 rx_Layer_two_absolute rx_Layer_two"></div>
          <div className="col-3 p-0 rx_Layer_three_absolute rx_Layer_three"></div>
          <div className="col-3 p-0 rx_Layer_four_absolute rx_Layer_four"></div>
          <div className="col-6 col-sm-6 col-md-4 col-lg-5 col-xl-5 col-xxl-5 p-0 rotate_position_relative">
            <h6 className="rx_Catastrophic​">Rx Catastrophic​</h6>
            <h6 className="rx_Shield​​">Rx Shield​​</h6>
            <h6 className="rx_Preferred​​​">Rx Preferred</h6>
            <h6 className="rx_Checkup​">Rx Checkup</h6>
          </div>
        </div>
      </div>
    </>
  );
};

export default RestroomRXMemberships;

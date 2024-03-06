import React from "react";

const ThankyouPage = () => {
  return (
    <>
      <div className="container my-3 ">
        <div className="row px-0 justify-content-center">
          <div className="col-8 px-0">
            <div className="card">
              <div className="card-body">
                <div className="row justify-content-md-center">
                  <div className="col-12 content_center_grid">
                  <div className="w-50">
                  <img src="assets/thankyou.jpg" className="img-fluid d-block" />
                  </div>
                    <h6 className="congrats_content">Congrats! Your Order Has Been Accepted..</h6>
                  </div>
                </div>
                    <button className="btn btn-danger m-auto d-block my-4 back_to_home_btn">Return To Home</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ThankyouPage;

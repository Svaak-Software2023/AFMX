import React, { useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";

const ThankyouPage = () => {
  const navigate=useNavigate()

  useEffect(()=>{
    setTimeout(()=>{
      navigate("/")
    },10000)
  },[])
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
                    <h6 className="congrats_content">Congrats! Your order has been placed successfully...</h6>
                  </div>
                </div>
                <Link to="/"> <button className="btn btn-danger m-auto d-block my-4 back_to_home_btn">Return To Home</button></Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ThankyouPage;

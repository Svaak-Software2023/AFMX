import React, { useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import "./style.css"
import { LazyLoadImage } from "react-lazy-load-image-component";
const ThankyouPage = ({ message }) => {
  const navigate = useNavigate()

  useEffect(() => {
    setTimeout(()=>{
      navigate("/")
    },10000)
  }, [])
  return (
    <>
      <div className="container my-xl-3 ">
        <div className="row px-0 justify-content-center">
          <div className="col-8 px-0 col-12">
            <div className="card">
              <div className="card-body">
                <div className="row justify-content-md-center">
                  <div className="col-12 content_center_grid">
                    <div className="w-100">
                      <div className="d-flex justify-content-center mb-2">
                        <LazyLoadImage effect="blur" src="assets/thankyou.jpg" className="img-fluid d-block" />
                      </div>
                    </div>
                    <h6 className="congrats_content text-center">{message}</h6>
                  </div>
                </div>
                {/* <Link to="/"> <button className="btn btn-danger m-auto d-block my-4 back_to_home_btn">Return To Home</button></Link> */}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ThankyouPage;

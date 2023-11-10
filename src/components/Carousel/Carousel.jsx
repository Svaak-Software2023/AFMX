import { Link } from "react-router-dom";
import "./Carousel.css";
import { useEffect, useState } from "react";
const Slider = () => {
  const [user, setUser] = useState("");

  useEffect(() => {
    if(localStorage.getItem("user")){
    const {signUpService} = JSON.parse(localStorage.getItem("user"));
    if (signUpService) {
      setUser(signUpService);
    }
  }
  }, []);
  console.log(user,"User details");
  const handleSignOut = () => {
    localStorage.clear();
    setUser("");
  };
  return (
    <>
      <div className="banner">
        <div className="container p-0">
          <div className="row">
            <div className="col-lg-9">
              {/* Carousel */}
              <div id="demo" className="carousel slide" data-bs-ride="carousel">
                {/* The slideshow/carousel */}
                <div className="carousel-inner">
                  <div className="carousel-item active">
                    <img src="images/Banner/chemicalShoppingCenterBanner.webp" alt />
                  </div>
                  <div className="carousel-item">
                    <img src="images/Banner/constructionCleaningBanner.webp" alt />
                  </div>
                  <div className="carousel-item">
                    <img src="images/Banner/floorCleaningBanner.webp" alt />
                  </div>
                  <div className="carousel-item">
                    <img src="images/Banner/geoFencingBanner.webp" alt />
                  </div>
                  <div className="carousel-item">
                    <img src="images/Banner/handymanServicesBanner.webp" alt />
                  </div>
                  <div className="carousel-item">
                    <img src="images/Banner/janitorialCleaningServicesBanner.webp" alt />
                  </div>
                  <div className="carousel-item">
                    <img src="images/Banner/maidXBanner.webp" alt />
                  </div>
                  <div className="carousel-item">
                    <img src="images/Banner/mebershipBanner.webp" alt />
                  </div>
                  <div className="carousel-item">
                    <img src="images/Banner/priceCalculatorBanner.webp" alt />
                  </div>
                  <div className="carousel-item">
                    <img src="images/Banner/roboticCleaningBanner.webp" alt />
                  </div>
                </div>
                {/* Left and right controls/icons */}
                <button className="carousel-control-prev" type="button" data-bs-target="#demo" data-bs-slide="prev">
                  <span className="carousel-control-prev-icon" />
                </button>
                <button className="carousel-control-next" type="button" data-bs-target="#demo" data-bs-slide="next">
                  <span className="carousel-control-next-icon" />
                </button>
              </div>
            </div>
            <div className="col-lg-3">
              {user ? (
                <div className="login-button">
                  <div className="profile_pic">
                    {user?.clientFirstName.charAt(0).toUpperCase()}
                  </div>
                  <h3 className="profile_name">Welcome, {user?.clientFirstName}!</h3>
                  <Link to="/">View Profile</Link>
                  <button className="signout_btn" onClick={handleSignOut}>
                    Sign Out
                  </button>
                </div>
              ) : (
                <div className="login-button">
                  <Link to="/client-login">Login</Link>
                  <Link to="/forget-password">Forgot Password</Link>
                  <Link to="/create-account">Create Account</Link>
                </div>
              )}
              <div className="banner-ad">
                <Link to="/create-account" >
                  <video width height autoPlay loop muted>
                    <source src="assets/img/ad-video.mp4" type="video/mp4" />
                    Your browser does not support the video tag.
                  </video>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>


    </>
  );
};

export default Slider;

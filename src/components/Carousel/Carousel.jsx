import { Link } from "react-router-dom";
import "./Carousel.css";
import { useEffect, useState } from "react";
import { LazyLoadImage } from "react-lazy-load-image-component";
const Slider = () => {
  const [user, setUser] = useState("");
  const isLogin =JSON.parse(localStorage.getItem('user'))
  
  useEffect(() => {
    if (isLogin) {
      if (isLogin) {
        setUser(isLogin);
      }
    }
  }, []);
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
              <div id="carouselExampleInterval" className="carousel slide" data-bs-ride="carousel">
                <div className="carousel-inner">
                  <div className="carousel-item active" data-bs-interval="10000">
                    <div className="carousel-video">
                        <video src="images/Banner/FloorService.mp4" autoPlay muted loop className="img-fluid"></video>
                    </div>
                  </div>
                  <div className="carousel-item" data-bs-interval="2000">
                    <LazyLoadImage src="images/Banner/Image1.png" className="d-block w-100 banner-img" effect="blur" alt="..." />
                  </div>
                  <div className="carousel-item" data-bs-interval="2000">
                    <LazyLoadImage   src="images/Banner/NewEraNewTechnology.png" className="d-block w-100 banner-img" effect="blur" alt="..." />
                  </div>
                  <div className="carousel-item">
                    <LazyLoadImage   src="images/Banner/HandymanServices.jpg" className="d-block w-100 banner-img" effect="blur" alt="..." />
                  </div>
                  <div className="carousel-item">
                    <LazyLoadImage   src="images/Banner/RoboticCleaning.jpg" className="d-block w-100 banner-img" effect="blur" alt="..." />
                  </div>
                  <div className="carousel-item">
                    <LazyLoadImage   src="images/Banner/GeoFencing.jpg" className="d-block w-100 banner-img" effect="blur" alt="..." />
                  </div>
                  <div className="carousel-item">
                    <LazyLoadImage   src="images/Banner/ConstructionCleaning.jpg" className="d-block w-100 banner-img" effect="blur" alt="..." />
                  </div>
                  <div className="carousel-item">
                    <LazyLoadImage   src="images/Banner/MaidXPro.jpg" className="d-block w-100 banner-img" effect="blur" alt="..." />
                  </div>
                  <div className="carousel-item">
                    <LazyLoadImage   src="images/Banner/PayAsYouGo.jpg" className="d-block w-100 banner-img" effect="blur" alt="..." />
                  </div>
                  <div className="carousel-item">
                    <LazyLoadImage   src="images/Banner/Membership.jpg" className="d-block w-100 banner-img" effect="blur" alt="..." />
                  </div>
                  <div className="carousel-item">
                    <LazyLoadImage   src="images/Banner/ChemicalShop.jpg" className="d-block w-100 banner-img" effect="blur" alt="..." />
                  </div>
                  <div className="carousel-item">
                    <LazyLoadImage   src="images/Banner/PriceCalculator.jpg" className="d-block w-100 banner-img" effect="blur" alt="..." />
                  </div>
                  <div className="carousel-item">
                    <LazyLoadImage   src="images/Banner/Membership.jpg" className="d-block w-100 banner-img" effect="blur" alt="..." />
                  </div>
                  <div className="carousel-item">
                    <LazyLoadImage   src="images/Banner/JanitorialLeaning.jpg" className="d-block w-100 banner-img" effect="blur" alt="..." />
                  </div>
                  <div className="carousel-item">
                    <LazyLoadImage   src="images/Banner/IsNowAvailable.png" className="d-block w-100 banner-img" effect="blur" alt="..." />
                  </div>
                  
                  <div className="carousel-item " >
                    <div className="carousel-video">
                        <video src="images/Banner/AdvertiseWithUs.mp4" autoPlay muted loop className="img-fluid"></video>
                    </div>
                  </div>
                  <div className="carousel-item " >
                    <div className="carousel-video">
                        <video src="images/Banner/RoboticCleaning.mp4" autoPlay muted loop className="img-fluid"></video>
                    </div>
                  </div>
                  <div className="carousel-item " >
                    <div className="carousel-video">
                        <video src="images/Banner/AFMXDonation.mp4" autoPlay muted loop className="img-fluid"></video>
                    </div>
                  </div>
                  <div className="carousel-item " >
                      <div className="carousel-video">
                        <video src="images/Banner/PaymentOptions.mp4" autoPlay muted loop className="img-fluid"></video>
                    </div>
                  </div>
                  <div className="carousel-item " >
                    <div className="carousel-video">
                        <video src="images/Banner/IntelliChat.mp4" autoPlay muted loop className="img-fluid"></video>
                    </div>
                  </div>
                </div>
                <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleInterval" data-bs-slide="prev">
                  <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                  <span className="visually-hidden">Previous</span>
                </button>
                <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleInterval" data-bs-slide="next">
                  <span className="carousel-control-next-icon" aria-hidden="true"></span>
                  <span className="visually-hidden">Next</span>
                </button>
              </div>
            </div>

            <div className="col-lg-3">
              {user&&user.token ? (
                <div className="login-button">
                  <div className="profile_pic">
                    {user&&user?.clientFirstName?.charAt(0).toUpperCase()}
                  </div>
                  <h3 className="profile_name">Welcome, {user?.clientFirstName}</h3>
                  <Link to="/user-dashboard">View Profile</Link>
                  <button className="signout_btn" onClick={handleSignOut}>
                    Sign Out
                  </button>
                </div>
              ) : (
                <div className="login-button">
                  <Link to="/login">Login</Link>
                  <Link to="/forget-password">Forgot Password</Link>
                  <Link to="/create-account">Create Account</Link>
                </div>
              )}
              <div className="banner-ad banner_ad_relative">
                <Link to="/create-account" >
                  <video width height autoPlay loop muted>
                    <source src="./video/AfmxJoin.mp4" type="video/mp4" />
                    Your browser does not support the video tag.
                  </video>
                  <img className="tv_absolute" src="/tvpng.png" />
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

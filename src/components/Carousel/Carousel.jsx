import { Link } from "react-router-dom";
import "./Carousel.css";
import { useEffect, useState } from "react";
import { getMiniTv } from "../../redux/features/miniTvSlice"
import { useDispatch, useSelector } from 'react-redux';
import MiniTv from "./MiniTv";
const Slider = () => {
  const [user, setUser] = useState("");
  const isLogin = JSON.parse(localStorage.getItem('user'))
  const dispatch = useDispatch()
  const { minitv: miniTv, loading: miniTvLoading } = useSelector((state) => state.miniTv)

  useEffect(() => {
    if (isLogin) {
      if (isLogin) {
        setUser(isLogin);
      }
    }
    // get mini tv 
    dispatch(getMiniTv())
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
                    <img src="images/Banner/Image1.png" className="d-block w-100 banner-img" effect="blur" alt="..." />
                  </div>
                  <div className="carousel-item" data-bs-interval="2000">
                    <img src="images/Banner/NewEraNewTechnology.png" className="d-block w-100 banner-img" effect="blur" alt="..." />
                  </div>
                  <div className="carousel-item">
                    <img src="images/Banner/HandymanServices.jpg" className="d-block w-100 banner-img" effect="blur" alt="..." />
                  </div>
                  <div className="carousel-item">
                    <img src="images/Banner/RoboticCleaning.jpg" className="d-block w-100 banner-img" effect="blur" alt="..." />
                  </div>
                  <div className="carousel-item">
                    <img src="images/Banner/GeoFencing.jpg" className="d-block w-100 banner-img" effect="blur" alt="..." />
                  </div>
                  <div className="carousel-item">
                    <img src="images/Banner/ConstructionCleaning.jpg" className="d-block w-100 banner-img" effect="blur" alt="..." />
                  </div>
                  <div className="carousel-item">
                    <img src="images/Banner/MaidXPro.jpg" className="d-block w-100 banner-img" effect="blur" alt="..." />
                  </div>
                  <div className="carousel-item">
                    <img src="images/Banner/PayAsYouGo.jpg" className="d-block w-100 banner-img" effect="blur" alt="..." />
                  </div>
                  <div className="carousel-item">
                    <img src="images/Banner/Membership.jpg" className="d-block w-100 banner-img" effect="blur" alt="..." />
                  </div>
                  <div className="carousel-item">
                    <img src="images/Banner/ChemicalShop.jpg" className="d-block w-100 banner-img" effect="blur" alt="..." />
                  </div>
                  <div className="carousel-item">
                    <img src="images/Banner/PriceCalculator.jpg" className="d-block w-100 banner-img" effect="blur" alt="..." />
                  </div>
                  <div className="carousel-item">
                    <img src="images/Banner/Membership.jpg" className="d-block w-100 banner-img" effect="blur" alt="..." />
                  </div>
                  <div className="carousel-item">
                    <img src="images/Banner/JanitorialLeaning.jpg" className="d-block w-100 banner-img" effect="blur" alt="..." />
                  </div>
                  <div className="carousel-item">
                    <img src="images/Banner/IsNowAvailable.png" className="d-block w-100 banner-img" effect="blur" alt="..." />
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

            <div className="col-lg-3 m-0 p-0">
              {user && user.token ? (
                <div className="login-button">
                  <div className="profile_pic">
                    {user && user?.clientFirstName?.charAt(0).toUpperCase()}
                  </div>
                  <h3 className="profile_name mb-2 p-0">Welcome, {user?.clientFirstName}</h3>
                  <Link to="/user-dashboard">View Profile</Link>
                  <button className="signout_btn" onClick={handleSignOut}>
                    Sign Out
                  </button>
                </div>
              ) : (
                <div className="login-button py-4">
                  <Link to="/login">Login</Link>
                  <Link to="/forget-password">Forgot Password</Link>
                  <Link to="/create-account">Create Account</Link>
                </div>
              )}
              {miniTv.length ? <MiniTv data={miniTv} /> : <div className="d-flex justify-content-center w-100 py-5">
                <span className="spinner-border " role="status"></span>
              </div>}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Slider;

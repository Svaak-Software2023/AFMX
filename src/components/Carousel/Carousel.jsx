import { Link } from "react-router-dom";
import "./Carousel.css";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
const Slider = () => {
  const [user, setUser] = useState("");
  const data = useSelector((state) => state.auth.user)


  useEffect(() => {
    if (data) {
      if (data) {
        setUser(data);
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
                      <div className="carousel-video">
                        <video src="images/Banner/FloorService.mp4" autoPlay muted loop className="img-fluid"></video>
                      </div>
                    </div>
                  </div>
                  <div className="carousel-item" data-bs-interval="2000">
                    <img src="images/Banner/Image1.png" className="d-block w-100" alt="..." />
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
                    <source src="./video/AfmxJoin.mp4" type="video/mp4" />
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

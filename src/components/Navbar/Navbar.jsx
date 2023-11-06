import { useEffect, useState } from "react";
import "./navbar.css";
import { RiArrowDropDownLine } from "react-icons/ri";
import { Link, useLocation } from "react-router-dom";
import { HiSpeakerphone } from "react-icons/hi";
import { ImLocation } from "react-icons/im";
import { FaSearch } from "react-icons/fa";

function Navbar() {
  const [navbar, setNavbar] = useState("navbar");
  const [logindrop, setlogindrop] = useState(false);
  const [membershipdrop, setmembershipdrop] = useState(false);
  const [showInputLocation, setShowInputLocation] = useState(false);
  const [showInputSearch, setShowInputSearch] = useState(false);

  const handleShowSearch = () => {
    setShowInputSearch(!showInputSearch);
  };
  const handleShowLocation = () => {
    setShowInputLocation(!showInputLocation);
  };

  const { pathname } = useLocation();
  useEffect(() => {
    setNavbar("navbar");
  }, [pathname]);

  const logindropdown = () => {
    setlogindrop(!logindrop);
  };
  const membershipdropdown = () => {
    setmembershipdrop(!membershipdrop);
  };

  return (
    <>
      {/* {/ topbar  /} */}
      <section id="topbar" className="align-items-center">
        <div className="containe p-0">
          <div className="row align-items-center p-0 m-0">
            <div className="col-lg-12">
            <div className="logo">
                <Link to="/">
                  <img src="images/logo-red.png" />
                </Link>
              </div>
              <div className="ad">
              
                <a href="">
                  <img src="assets/img/Ad/ad.jpg" />
                  <div className="advertise_banner"></div>

                  <p>
                    <HiSpeakerphone />
                    &nbsp; Advertise with us !
                  </p>
                </a>
              </div>
            </div>

            <div className="col-lg-6 col-2">
            </div>

            <div className="col-lg-6 col-10">
              <div className="contactus">
                <ul>
                    <li className="m-0 p-0 py-2">
                      <button>
                        <Link to="/" className="complaint_btn">
                          Complaint Portal
                        </Link>
                      </button>
                    </li>
                  <li>
                    {showInputSearch && (
                      <input type="text" placeholder="Search" />
                    )}
                      <button onClick={handleShowSearch}>
                        <FaSearch
                          className="search_icon"
                          onClick={handleShowSearch}
                        />
                      </button>
                  </li>
                  {/* {/ location /} */}
                  <li>
                    {showInputLocation && (
                      <input type="text" placeholder="Search Location" />
                    )}
                      <button onClick={handleShowLocation}>
                        <Link to="/location">
                          <ImLocation className="search_location" />
                        </Link>
                      </button>
                    {/* {/ <img src="assets/img/searc.svg" onClick={searchBox} /> /} */}
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* {/ header  /} */}

      <header id="header" className="d-flex align-items-center">
        <div className="container d-flex align-items-center justify-content-center">
          <nav id="navbar" className={navbar}>
            <ul>
              <li>
                  <Link
                    to="/new"
                    className="nav-link "
                    aria-current="page"
                    href="#"
                  >
                    Price Calculator
                  </Link>
              </li>
              <li className="dropdown" onClick={membershipdropdown}>
                <a href="#">
                  <span>Membership</span>
                  <i className="bi bi-chevron-down"></i>
                </a>
                {membershipdrop && (
                  <ul className="dropdown-active">
                    <li>
                      <Link to="/join-AFMX">Join AFMX</Link>
                    </li>
                    <li>
                      <Link to="/new">Renew your Membership</Link>
                    </li>
                    <li>
                      <Link to="/new">Membership Levels</Link>
                    </li>
                    <li>
                      <Link to="/new">
                        Membership Benefits <RiArrowDropDownLine />
                      </Link>
                    </li>
                  </ul>
                )}
              </li>
              <li>
                  <Link to="/service-list" className="nav-link ">
                    Services
                  </Link>
              </li>
              <li>
                  <Link to="/industrirs-list" className="nav-link ">
                    Industries We Serve
                  </Link>
              </li>
              <li>
                  <Link to="/new" className="nav-link ">
                    Robotic Cleaning
                  </Link>
              </li>
              <li>
                  <Link to="/new" className="nav-link ">
                    Media
                  </Link>
              </li>
              <li>
                  <Link to="/new" className="nav-link ">
                    Marketing Department
                  </Link>
              </li>
              <li>
                  <Link to="/careers-employment" className="nav-link ">
                    Careers & Employment
                  </Link>
              </li>

              <li className="dropdown" onClick={logindropdown}>
                <a>
                  <span>Login</span> <i className="bi bi-chevron-down"></i>
                </a>
                {logindrop && (
                  <ul className="dropdown-active">
                    <li>
                      <Link to="/employee-login">Employee Login</Link>
                    </li>
                    <li>
                      <Link to="/client-login">Client Login</Link>
                    </li>
                    <li>
                      <Link to="/federal-govrment-login">
                      Federal Government Login
                      </Link>
                    </li>
                    <li>
                      <Link to="/admin-login">Admin Login</Link>
                    </li>
                  </ul>
                )}
              </li>
            </ul>

            <i
              className={`bi bi-list mobile-nav-toggle`}
              onClick={() =>
                navbar === "navbar"
                  ? setNavbar("navbar-mobile")
                  : setNavbar("navbar")
              }
            ></i>
          </nav>
        </div>
      </header>
    </>
  );
}

export default Navbar;
import { useEffect, useState } from "react";
import "./navbar.css";
import { Link, useLocation } from "react-router-dom";
import { HiSpeakerphone } from "react-icons/hi";
import { ImLocation } from "react-icons/im";
import { FaSearch } from "react-icons/fa";
import { AiOutlineClose, AiOutlineMenu } from "react-icons/ai";
import { RiArrowDropDownLine } from "react-icons/ri";

import { useDispatch, useSelector } from "react-redux";
import { getCart } from "../../redux/features/cartSlice";

function Navbar() {
  const [navbar, setNavbar] = useState("navbar");
  const [logindrop, setlogindrop] = useState(false);
  const [price, setprice] = useState(false);

  const [membershipdrop, setmembershipdrop] = useState(false);
  const [showInputLocation, setShowInputLocation] = useState(false);
  const [showInputSearch, setShowInputSearch] = useState(false);

  const data = localStorage.getItem('user')

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
  const priceCalculator = () => {
    setprice(!price);
  };
  const membershipdropdown = () => {
    setmembershipdrop(!membershipdrop);
  };


  const { data: cartData } = useSelector((state) => state.cart);

  const dispatch = useDispatch()

  useEffect(() => {
    let token = `${JSON.parse(localStorage.getItem('user'))?.token}`;
    if (token) {
      dispatch(getCart({ token }))
    }
  }, [])
  return (
    <>
      <div className="navbar-container-wraper">
        <div className="top-navbar-section">
          <section id="topbar" className="align-items-center">
            <div className="containe p-0">
              <div className="row align-items-center p-0 m-0">
                <div className="col-lg-12">
                  <div className="logo">
                    <Link to="/">
                      <img src="images/top-logo.png" />
                    </Link>
                  </div>
                  <div className="mobile-nav-toggle">
                    <AiOutlineMenu
                      style={{ fontSize: "2.2rem" }}
                      onClick={() =>
                        navbar === "navbar"
                          ? setNavbar("navbar-mobile")
                          : setNavbar("navbar")
                      }
                    />

                    {navbar === "navbar-mobile" ? <AiOutlineClose
                      className="nav-close-btn"
                      onClick={() => setNavbar("navbar")}
                    /> : ""}
                  </div>
                  <div className="ad">

                    <a href="">
                      <img src="./images/helpingHand/wildlife-fund.png" />
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

                <div className="col-lg-6 col-12">
                  <div className="contactus">
                    <ul>
                      <li className="m-0 p-0 py-2">
                        <button>
                          <Link target="_blank" to="/complain-portal" className="complaint_btn">
                            Complaint Portal
                          </Link>
                        <Link to="/cart" className="position-relative mx-2">
                          <img src="assets/img/cart.png" />
                          {(cartData) && (cartData?.Products?.length) ? <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">{cartData?.Products?.length}</span> : ""}
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
                        <Link target="_blank" to="/location">
                          <ImLocation className="search_location" />
                        </Link>
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
              <nav id="navbar" className={navbar.toString()}>
                <ul>
                  <li className="dropdown" onClick={priceCalculator} style={{ border: "none" }}>
                    <a >
                      <span>Price Calculator<RiArrowDropDownLine className="fs-4" /></span>
                    </a>
                    {price && (
                      <ul className="dropdown-active">
                        {/* <li>
                            <Link target="_blank" to="/price-calculator">Price Calculator</Link>
                          </li> */}
                        <li>
                          <Link target="_blank" to="">Budget Buddy </Link>
                        </li>
                        <li>
                          <Link target="_blank" to="">Start A Project</Link>
                        </li>
                        <li>
                          <Link target="_blank" to="">Pay As You Go</Link>
                        </li>
                      </ul>
                    )}
                  </li>

                  <li className="dropdown" onClick={membershipdropdown}>
                    <Link>
                      <span>Membership<RiArrowDropDownLine className="fs-4" /></span>
                    </Link>
                    {membershipdrop && (
                      <ul className="dropdown-active">
                        <li>
                          <Link target="_blank" to="/join-AFMX">Join AFMX</Link>
                        </li>
                        <li>
                          <Link target="_blank" to="/new">Renew your Membership</Link>
                        </li>
                        <li>
                          <Link target="_blank" to="/new">Membership Levels</Link>
                        </li>
                        <li>
                          <Link target="_blank" to="/new">
                            Membership Benefits <RiArrowDropDownLine />
                          </Link>
                        </li>
                      </ul>
                    )}
                  </li>
                  <li>
                    <Link to="/service-department-list" className="nav-link ">
                      Service Department
                    </Link>
                  </li>
                  <li>
                    <Link target="_blank" to="/industries-list" className="nav-link ">
                      Industries We Serve
                    </Link>
                  </li>
                  <li>
                    <Link target="_blank" to="/new" className="nav-link ">
                      Robotic Cleaning
                    </Link>
                  </li>
                  <li>
                    {/* <Link target="_blank" to="/media/1" className="nav-link ">
                      Media
                    </Link> */}
                    <Link target="_blank" to="https://madextube.com/" className="nav-link ">
                      Media
                    </Link>
                  </li>
                  <li>
                    <Link target="_blank" to="/new" className="nav-link ">
                      Marketing Department
                    </Link>
                  </li>
                  <li>
                    <Link target="_blank" to="/careers-employment" className="nav-link ">
                      Careers & Employment
                    </Link>
                  </li>

                  {data ?
                    <li style={{ border: "none !important" }}>
                      <Link target="_blank" to="/" className="nav-link " onClick={() => localStorage.clear()}>
                        Logout
                      </Link>
                    </li>
                    :
                    <li className="dropdown" onClick={logindropdown} style={{ border: "none !important" }}>
                      <a >
                        <span>Login<RiArrowDropDownLine className="fs-4" /></span>
                      </a>
                      {logindrop && (
                        <ul className="dropdown-active">
                          <li>
                            <Link target="_blank" to="/login">Employee Login</Link>
                          </li>
                          <li>
                            <Link target="_blank" to="/login">Client Login</Link>
                          </li>
                          <li>
                            <Link target="_blank" to="/login">
                              Federal Government Login
                            </Link>
                          </li>
                          <li>
                            <Link target="_blank" to="/login">Admin Login</Link>
                          </li>
                        </ul>
                      )}
                    </li>}
                </ul>
              </nav>
            </div>
          </header>
        </div>
      </div>

    </>
  );
}

export default Navbar;
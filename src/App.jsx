import { useEffect, useState } from "react";
import { Route, Routes, useLocation, useNavigate } from "react-router-dom";
import { FaArrowUp } from "react-icons/fa";
import { ToastContainer } from "react-toastify";
import Navbar from "./components/Navbar/Navbar";
import Footer from "./components/Footer/Footer";
import "./App.css";
import { navigation } from "./routers/Router";
import Authentication from "./authentication/Authentication";
import { setUser } from "./redux/features/authSlice";
import { useDispatch } from "react-redux";
import InternetConnectionStatus from "./assets/connection/InternetConnectionStatus";
import Intellichat from "./components/Intellichat/Intellichat";
import { TbMessageCircle2Filled } from "react-icons/tb";

function App() {
  const [showButton, setShowButton] = useState(false);
  const [openchat, setOpenChat] = useState(false);

  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  // function to hide and show scrollToTop button
  const handleScroll = () => {
    if (window.scrollY > window.innerHeight / 2) {
      setShowButton(true);
    } else {
      setShowButton(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  // function to scroll on top
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  const dispatch = useDispatch();
  const navigate = useNavigate();

  useEffect(() => {
    const logdInUser = JSON.parse(localStorage.getItem("user"));
    dispatch(setUser(logdInUser));
  });

  if (!navigator.onLine) return <InternetConnectionStatus />;

  return (
    <>
      <div className=" d-flex align-items-center justify-content-center active">
        <div className="chat_container">
          {/* <div className={openchat ? "chat_box_hide" : "chat_box"}>
            <Intellichat openchat={setOpenChat} />
          </div> */}
          {openchat ? (
            <div className="chat_box">
              <Intellichat openchat={setOpenChat} />
            </div>
          ) : null}
          <div className="chat_icon" onClick={() => setOpenChat(!openchat)}>
            <TbMessageCircle2Filled />
          </div>
        </div>
      </div>
      <ToastContainer />
      <Navbar />
      <div className="m-0 backgroundPage">
        <Routes>
          {navigation.map((item, i) => {
            if (!item.isPrivate) {
              return <Route key={i} path={item.path} element={item.element} />;
            } else if (item.isPrivate) {
              return (
                <Route
                  key={i}
                  path={item.path}
                  element={<Authentication>{item.element}</Authentication>}
                />
              );
            }
          })}
        </Routes>
      </div>
      <Footer />
      {showButton && (
        <div
          className="back-to-top d-flex align-items-center justify-content-center active"
          onClick={scrollToTop}
        >
          <FaArrowUp className="text-white" />
        </div>
      )}
    </>
  );
}

export default App;

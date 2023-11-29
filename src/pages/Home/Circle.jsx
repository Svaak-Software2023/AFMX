import { useState } from "react";
import "./circle.css";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { LazyLoadImage } from 'react-lazy-load-image-component';

const Circle = () => {
  const navigate=useNavigate()
  const [angle, setAngle] = useState(null);
  const calculateAngle = (num) => {
    setAngle(num);
  };

  const resetAngle = () => {
    setAngle(0);
  };


  useEffect(() => {

  }, [angle])
  return (
    <>
       <div className="row m-0 mb-3 p-0 circle">
        <div className="col-lg-12 col-md-12 col-12 m-0 p-0">
          <div className="containerx container-lg bg-white">
            <div className=" py-3">
              <div className="circle-main">
                <div className="inner-circle" >
                  <ul className="sc-fsYfxw fAFqhE circle-menu-image">
                    <li className=" circle-item  circle-image-box12">
                      <div className="inner-circle-item">
                        <button className=" circle-item-img" onMouseMove={() => calculateAngle(29)} onMouseLeave={resetAngle} ><LazyLoadImage onClick={()=>navigate("/service-list-item/1")} src="images/2.png" alt="" className="img-fluid" /></button>
                      </div>
                    </li>
                    <li className=" circle-item  circle-image-box1">
                      <div className="inner-circle-item">
                        <button className=" circle-item-img" onMouseMove={() => calculateAngle(50)} onMouseLeave={resetAngle} ><LazyLoadImage onClick={()=>navigate("/join-AFMX")} src="images/3.png" alt="" className="img-fluid" /></button>
                      </div>
                    </li>
                    <li className=" circle-item  circle-image-box2">
                      <div className="inner-circle-item">
                        <button className=" circle-item-img" onMouseMove={() => calculateAngle(80)} onMouseLeave={resetAngle} ><LazyLoadImage onClick={()=>navigate("/client-login")} src="images/7.png" alt="" className="img-fluid" /></button>
                      </div>
                    </li>
                    <li className=" circle-item  circle-image-box3">
                      <div className="inner-circle-item">
                        <button className=" circle-item-img" onMouseMove={() => calculateAngle(115)} onMouseLeave={resetAngle} ><LazyLoadImage src="images/6.png" alt="" className="img-fluid" /></button>
                      </div>
                    </li>
                    <li className=" circle-item  circle-image-box4">
                      <div className="inner-circle-item">
                        <button className=" circle-item-img" onMouseMove={() => calculateAngle(140)} onMouseLeave={resetAngle} ><LazyLoadImage onClick={()=>navigate("/careers-employment")} src="images/5.png" alt="" className="img-fluid" /></button>
                      </div>
                    </li>
                    <li className=" circle-item  circle-image-box5">
                      <div className="inner-circle-item">
                        <button className=" circle-item-img" onMouseMove={() => calculateAngle(180)} onMouseLeave={resetAngle} ><LazyLoadImage src="images/10.png" alt="" className="img-fluid" /></button>
                      </div>
                    </li>
                    <li className=" circle-item  circle-image-box6">
                      <div className="inner-circle-item">
                        <button className=" circle-item-img" onMouseMove={() => calculateAngle(210)} onMouseLeave={resetAngle} ><LazyLoadImage onClick={()=>navigate("/price-calculator")} src="images/8.png" alt="" className="img-fluid" /></button>
                      </div>
                    </li>
                    <li className=" circle-img2  circle-image-box7">
                      <div className="inner-circle-item">
                        <button className=" circle-item-img" onMouseMove={() => calculateAngle(240)} onMouseLeave={resetAngle} ><LazyLoadImage src="images/11.png" alt="" className="img-fluid" /></button>
                      </div>
                    </li>
                    <li className=" circle-item  circle-image-box8">
                      <div className="inner-circle-item">
                        <button className=" circle-item-img" onMouseMove={() => calculateAngle(270)} onMouseLeave={resetAngle} ><LazyLoadImage onClick={()=>navigate("/service-list-item/19")} src="images/1.png" alt="" className="img-fluid" /></button>
                      </div>
                    </li>
                    <li className=" circle-item  circle-image-box9">
                      <div className="inner-circle-item">
                        <button className=" circle-item-img" onMouseMove={() => calculateAngle(295)} onMouseLeave={resetAngle} ><LazyLoadImage src="images/12.png" alt="" className="img-fluid" /></button>
                      </div>
                    </li>
                    <li className=" circle-image-box10">
                      <div className="inner-circle-item">
                        <button className=" circle-item-img" onMouseMove={() => calculateAngle(325)} onMouseLeave={resetAngle} ><LazyLoadImage src="images/9.png" alt="" className="img-fluid" /></button>
                      </div>
                    </li>
                    <li className=" circle-image-box11">
                      <div className="inner-circle-item">
                        <button className=" circle-item-img" onMouseMove={() => calculateAngle(360)} onMouseLeave={resetAngle} ><LazyLoadImage src="images/4.png" alt="" className="img-fluid" /></button>
                      </div>
                    </li>
                  </ul>
                  <div className="inner-circle2">
                    <div className="circle-image">
                      <LazyLoadImage src="images/circle.png" className="circle-inner-img" />
                      <LazyLoadImage src="images/star.png" className="circle-star" />
                      <LazyLoadImage src="images/arrow.png" className="circle-arrow" style={{ transform: `rotate(${angle}deg)` }} />

                    </div>
                  </div>
                </div>

                <div className="circle-menue-text">
                  <ul className=" fAFqhE">
                    <li className=" circle-item-text circle-item1 ">
                      <div className="inner-circle-item">
                        <p className="w-100">Advanced Technology and Robotic Cleaning</p>

                      </div>
                    </li>
                    <li className=" circle-item-text circle-item2">
                      <div className="inner-circle-item">
                        <span onClick={()=>navigate("/service-list-item/1")} >Janitorial Service</span>
                      </div>
                    </li>
                    <li className=" circle-item-text circle-item3 ">
                      <div className="inner-circle-item">
                        <span onClick={()=>navigate("/join-AFMX")}>Membership</span>

                      </div>
                    </li>
                    <li className=" circle-item-text circle-item4 ">
                      <div className="inner-circle-item">
                        <span onClick={()=>navigate("/client-login")}>Login</span>
                      </div>
                    </li>
                    <li className=" circle-item-text circle-item5 ">
                      <div className="inner-circle-item">
                        <span>Complaint</span>
                      </div>
                    </li>
                    <li className=" circle-item-text circle-item6 ">
                      <div className="inner-circle-item">
                        <span onClick={()=>navigate("/careers-employment")}>Careers and Employment</span>
                      </div>
                    </li>
                    <li className=" circle-item-text circle-item7">
                      <div className="inner-circle-item">
                        <span>My Florida Hurricane Watch</span>
                      </div>
                    </li>
                    <li className=" circle-item-text circle-item8  ">
                      <div className="inner-circle-item">
                        <span onClick={()=>navigate("/price-calculator")}>Price Calculator</span>

                      </div>
                    </li>
                    <li className=" circle-item-text circle-item9 ">
                      <div className="inner-circle-item">
                        <span>Art and Gallery</span>
                      </div>
                    </li>
                    <li className=" circle-item-text circle-item10  ">
                      <div className="inner-circle-item">
                        <span onClick={()=>navigate("/service-list-item/19")}>Handyman</span>
                      </div>
                    </li>
                    <li className=" circle-item-text circle-circle-image-box10">
                      <div className="inner-circle-item">
                        <span>Maid <i className="x">X </i> Pro</span>
                      </div>
                    </li>
                    <li className=" circle-item-text circle-circle-image-box11">
                      <div className="inner-circle-item">
                        <span>Advertisement</span>
                      </div>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* <div className="circle-mobile-menu">

        <div className="main">
          <div className="services-memebership">
            <div className="container p-0">
              <div className="row p-0">
                <div className="col-lg-6">
                  <div className="memebership-list m-0">
                    <h2>Important Links</h2>
                    <ul>
                      <li> <Link to="" className="Links"> Advanced Technology and Robotic Cleaning</Link></li>
                      <li> <Link to="" className="Links"> Janitorial Service</Link></li>
                      <li> <Link to="" className="Links"> Membership</Link></li>
                      <li> <Link to="/client-login" className="Links"> Login</Link></li>
                      <li> <Link to="" className="Links"> Complaint</Link></li>
                      <li> <Link to="" className="Links"> Careers and Employment</Link></li>
                      <li> <Link to="" className="Links"> My Florida Hurricane Watch</Link></li>
                      <li> <Link to="" className="Links"> Price Calculator</Link></li>
                      <li> <Link to="" className="Links"> Art and Gallery</Link></li>
                      <li> <Link to="" className="Links"> Advertisement</Link></li>
                      <li> <Link to="" className="Links"> Maid X Pro</Link></li>
                      <li> <Link to="" className="Links"> Handyman</Link></li>
                    </ul>

                  </div>
                </div>

              </div>
            </div>
          </div>
        </div>
      </div> */}


    </>
  );
};

export default Circle;

import LeftMenue from "../../../../components/leftmenu/LeftMenu"
import industryData from "../../../../assets/data/industriesWeServeData.json";
import "./style.css"
function Motel() {
  return (
    <>
            <div className="container p-0 my-3">
                <div className="row m-0 p-0 ">
                    <div className="col-lg-3 col-md-3 col-12 p-0 service_menu">
                        <LeftMenue
                            type="Industries We Serve"
                            data={industryData}
                            url={`/industrirs-list`}
                        />
                    </div>
                    <div className=" col-lg-9 col-md-9 col-12 bg-white p-3 service_content">
                        <div className="service-item-list ">
                            <div className="container p-0 m-0">
                                <div className="bg-white ">

                                    <div className="row">
                                        <div className="col-lg-6">
                                            <div className="d-flex">
                                                <div className="w-50">
                                                <div className="mb-2">
                                                    <img src="./images/industry/Motel/Motel1.png" alt="" className="img-fluid" />
                                                </div>
                                                <div className="mb-2">
                                                    <img src="./images/industry/Motel/Motel5.png" alt="" className="img-fluid" />
                                                </div>
                                               
                                                </div>

                                                <div className="w-50 mx-2">
                                                    <div className="mb-2">
                                                        <img src="./images/industry/Motel/Motel2.png" alt="" className="img-fluid" />
                                                    </div>
                                                    <div className="mb-2">
                                                        <img src="./images/industry/Motel/Motel3.png" alt="" className="img-fluid" />
                                                    </div>
                                                    <div className="mb-2">
                                                        <img src="./images/industry/Motel/Motel4.png" alt="" className="img-fluid" />
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-lg-6">
                                            <div className="mb-3">
                                                <h3 className="heading">Motel</h3>
                                            </div>
                                            <ul className="comminityCollegeList">
                                                <li>Enhance the appeal and functionality of your establishment with AfmX, your trusted partner in professional cleaning, maid services, handyman solutions, and more.</li>
                                                <li><h3>Our Services</h3></li>
                                                <li><b>Cleaning Services:</b> Impeccable cleanliness is our commitment. Our professional cleaning staff ensures that every corner of your motel is spotless, creating a welcoming atmosphere for your guests.</li>
                                                <li><b>Maid Services:</b> Elevate guest satisfaction with our reliable and discreet maid services. From room preparation to daily upkeep, our experienced maids prioritize guest comfort and satisfaction.</li>
                                                <li><b>Handyman Solutions:</b> Maintain your motel's infrastructure seamlessly with our skilled handyman services. From routine maintenance to urgent repairs, AfmX ensures that your property is in top-notch condition.</li>
                                            </ul>
                                        </div>
                                    </div>
                                    <ul className="comminityCollegeList">
                                        <li><h3> Why Choose AfmX?</h3></li>
                                        <li><b>Reliability:</b> Count on AfmX for punctual and dependable services, tailored to meet the unique needs of your motel.</li>
                                        <li><b>Professionalism:</b> Our highly trained staff adheres to the highest standards of professionalism, ensuring a positive and seamless experience for both you and your guests.</li>
                                        <li><b>Customized Packages:</b> We offer flexible service packages, allowing you to choose the services that best suit your motel's requirements and budget.</li>
                                        <li>Partner with AfmX today and elevate your motel's reputation for cleanliness, efficiency, and guest satisfaction.</li>
                                    </ul>

                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
  )
}

export default Motel
import LeftMenue from "../../../../components/leftmenu/LeftMenu"
import industryData from "../../../../assets/data/industriesWeServeData.json";
import "./style.css"
function ApartmentHotel() {
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
                                            <div className="mb-1">
                                                <img src="./images/industry/ApartmentHotel/ApartmentHotel1.png" alt="" className="img-fluid" />
                                            </div>
                                            <div className="mb-2">
                                                <img src="./images/industry/ApartmentHotel/ApartmentHotel2.png" alt="" className="img-fluid" />
                                            </div>

                                        </div>

                                        <div className="w-50 mx-1 ">
                                            <div className="mb-1">
                                                <img src="./images/industry/ApartmentHotel/ApartmentHotel3.png" alt="" className="img-fluid" />
                                            </div>
                                            <div className="mb-2">
                                                <img src="./images/industry/ApartmentHotel/ApartmentHotel4.png" alt="" className="img-fluid" />
                                            </div>

                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-6">
                                    <div className="mb-3">
                                        <h3 className="heading">Apartment Hotel</h3>
                                    </div>
                                    <ul className="comminityCollegeList">
                                        <li>Dear Apartment Hotel Owners,</li>
                                        <li>Elevate the standards of your establishment with AfmX - Your one-stop solution for top-notch cleaning, maid, handyman, and other services tailored to meet the unique needs of apartment hotels.</li>
                                        <li>Cleaning Services: Maintain the impeccable cleanliness of your premises with our professional cleaning services. Our dedicated team ensures a pristine environment that leaves a lasting impression on your guests.</li>
                                        <li>Maid Services: Provide an unparalleled guest experience by availing our meticulous maid services. From room refreshes to personalized guest assistance, our trained maids are committed to delivering excellence.</li>
                                        <li>Handyman Services: Address maintenance issues promptly and efficiently with AfmX. Our skilled handymen are equipped to handle a diverse range of repairs, ensuring that your property remains in optimal condition at all times.</li>
                                         </ul>
                                </div>
                            </div>
                            <ul className="comminityCollegeList">
                                <li><h3> Why Choose AfmX?</h3></li>
                                <li>✅ Experienced and Trained Staff: Our professionals are skilled, reliable, and committed to delivering exceptional service.</li>
                                <li>✅ Customized Solutions: Tailored packages to meet the specific needs of apartment hotels, ensuring a seamless and efficient operation.</li>
                                <li>✅ 24/7 Availability: Count on us for round-the-clock support, ensuring that your property is always at its best.</li>
                                <li>Ready to enhance the guest experience and streamline your operations? Contact AfmX today for a consultation.</li>
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

export default ApartmentHotel
import LeftMenue from "../../../../components/leftmenu/LeftMenu"
import industryData from "../../../../assets/data/industriesWeServeData.json";
import "./style.css"

function Hostel() {
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
                                                <div className="w-60">
                                                    <img src="./images/industry/Hostel/Hostel1.png" alt="" className="img-fluid" />
                                                </div>

                                                <div className="w-40 mx-2">
                                                    <div className="mb-2">
                                                        <img src="./images/industry/Hostel/Hostel2.png" alt="" className="img-fluid" />
                                                    </div>
                                                    <div className="mb-2">
                                                        <img src="./images/industry/Hostel/Hostel3.png" alt="" className="img-fluid" />
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="d-flex">
                                                <div className="w-30 mb-2">
                                                    <img src="./images/industry/Hostel/Hostel4.png" alt="" className="img-fluid" />
                                                </div>
                                                <div className="w-70 mb-2 mx-2">
                                                    <img src="./images/industry/Hostel/Hostel5.png" alt="" className="img-fluid" />
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-lg-6">
                                            <div className="mb-3">
                                                <h3 className="heading">Hostel</h3>
                                            </div>
                                            <ul className="comminityCollegeList">
                                                <li>Are you seeking reliable and professional property maintenance services for your hostel? Look no further than AfmX - your trusted partner in ensuring a clean, safe, and well-maintained environment for your guests.</li>
                                                <li><h3>Our Services</h3></li>
                                                <li><b>Cleaning Services:</b> Ensure pristine cleanliness with our thorough and efficient cleaning services. Our experienced team pays meticulous attention to detail, leaving your hostel spotless and inviting.</li>
                                                <li><b>Maid Services:</b> Elevate the guest experience with our trained and courteous maids. From daily room upkeep to laundry services, we take care of the finer details to enhance overall guest satisfaction.</li>
                                                <li><b>Handyman Services:</b> Address maintenance issues promptly with our skilled handyman team. Whether it's plumbing, electrical, or general repairs, we've got you covered to keep your property in optimal condition.</li>
                                            </ul>
                                        </div>
                                    </div>
                                    <ul className="comminityCollegeList">
                                        <li><b>And More:</b> Explore our range of additional services tailored to meet the unique needs of hostel owners. From landscaping to security solutions, AfmX is your one-stop destination for comprehensive property care.</li>
                                        <li><h3> Why Choose AfmX?</h3></li>
                                        <li><b>Reliability:</b> Count on us for timely and dependable services.</li>
                                        <li><b>Professionalism:</b> Our trained staff upholds the highest standards of professionalism.</li>
                                        <li><b>Custom Solutions:</b> Tailored packages to suit your hostel's specific requirements.</li>
                                        <li><b>Quality Assurance:</b> We prioritize quality in every service we deliver.</li>
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

export default Hostel
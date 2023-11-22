import LeftMenue from "../../../../components/leftmenu/LeftMenu"
import industryData from "../../../../assets/data/industriesWeServeData.json";
import "./style.css"

function Inn() {
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
                                                        <img src="./images/industry/Inn/Inn1.png" alt="" className="img-fluid" />
                                                    </div>
                                                    <div className="mb-2">
                                                        <img src="./images/industry/Inn/Inn2.png" alt="" className="img-fluid" />
                                                    </div>

                                                </div>

                                                <div className="w-50 mx-1 ">
                                                    <div className="mb-3">
                                                        <img src="./images/industry/Inn/Inn3.png" alt="" className="img-fluid" />
                                                    </div>
                                                    <div className="mb-2">
                                                        <img src="./images/industry/Inn/Inn4.png" alt="" className="img-fluid" />
                                                    </div>

                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-lg-6">
                                            <div className="mb-3">
                                                <h3 className="heading">Inn</h3>
                                            </div>
                                            <ul className="comminityCollegeList">
                                                <li>Are you searching for top-notch cleaning, maid, handyman, and more services to elevate the standards of your inn? Look no further than AfmX!.</li>
                                                <li><b>Immaculate Cleaning Services:</b> Our highly trained cleaning professionals ensure a pristine environment for your guests. From rooms to common areas, we leave no corner untouched.</li>
                                                <li><b>Efficient Maid Services:</b> Experience the epitome of hospitality with our dedicated maid services. Our meticulous staff ensures every guest's comfort and satisfaction.</li>
                                                <li><b>Skillful Handyman Solutions:</b> Address maintenance concerns promptly with our skilled handyman team. We specialize in timely and efficient repairs, ensuring your property is always in top condition.</li>
                                            </ul>
                                        </div>
                                    </div>
                                    <ul className="comminityCollegeList">
                                        <li><h3> Why Choose AfmX?</h3></li>
                                        <li><b>Professional Excellence:</b> Our team comprises trained and vetted professionals committed to delivering exceptional service.</li>
                                        <li><b>Timely Solutions:</b> We understand the importance of efficiency in the hospitality industry. Expect prompt and reliable services tailored to your schedule.</li>
                                        <li><b>Customized Packages:</b> Choose from our flexible service packages to meet the unique needs of your inn. We offer bespoke solutions for every property.</li>
                                        <li><b>Comprehensive Service Range:</b> Beyond cleaning, maid, and handyman services, AfmX provides a range of property-related solutions to streamline your operations.</li>
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

export default Inn
import "./style.css"
import LeftMenue from "../../../../components/leftmenu/LeftMenu"
import industryData from "../../../../assets/data/industriesWeServeData.json";

function TechnicalSchool() {
    return (
        <>
            <div className="container p-0 my-3">
                <div className="row m-0 p-0 ">
                    <div className="col-lg-3 col-md-3 col-12 p-0 service_menu">
                        <LeftMenue
                            type="Industries We Serve"
                            data={industryData}
                            url={`/industries-list`}
                        />
                    </div>
                    <div className=" col-lg-9 col-md-9 col-12 bg-white p-3 service_content">
                        <div className="service-item-list ">
                            <div className="container p-0 m-0">
                                <div className="bg-white ">
                                    <div className="row">
                                        <div className="col-lg-6">
                                            <div className="w-100">
                                                <div className="w-100 m-1 mt-0">
                                                    <img src="./images/industry/TechnicalSchool/TechnicalSchool1.png" alt="" className="img-fluid" />
                                                </div>
                                            </div>
                                            <div className="d-flex">
                                                <div className="w-100 mx-1 m-0">
                                                    <img src="./images/industry/TechnicalSchool/TechnicalSchool2.png" alt="" className="img-fluid" />
                                                </div>
                                                <div className="w-100 mb-3">
                                                    <img src="./images/industry/TechnicalSchool/TechnicalSchool3.png" alt="" className="img-fluid" />
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-lg-6">
                                            <div className="mb-3">
                                                <h3 className="heading">Technical School</h3>
                                            </div>
                                            <ul className="liberalArtsCollegeList">
                                                <li>Transform your campus into a haven of efficiency and excellence with AfmX - your one-stop solution for top-notch cleaning, expert maid services, skilled handymen, and much more!</li>
                                                <li><b>Tailored Solutions:</b> Our services are custom-crafted to meet the unique needs of technical institutions, ensuring a clean, safe, and vibrant learning environment.</li>
                                                <li><b>Experienced Professionals:</b> AfmX boasts a team of skilled maids and handymen who are not just experts in their craft but also understand the specialized requirements of technical school settings.</li>
                                                <li><b>Cutting-Edge Technology:</b> We leverage state-of-the-art cleaning equipment and technology to provide efficient and thorough services, leaving your campus sparkling and fully functional.</li>
                                            </ul>
                                        </div>
                                    </div>
                                    <ul className="liberalArtsCollegeList">
                                        <li><h3>Services We Offer</h3></li>
                                        <li><b>Comprehensive Services:</b> From janitorial services to technical repairs, we've got it all covered. Elevate your campus experience with AfmX's holistic approach to facility management.</li>
                                        <li><b>Cleaning Services:</b> Immaculate spaces foster a conducive learning atmosphere. Let AfmX keep your classrooms, labs, and common areas spotless.</li>
                                        <li><b>Maid Services:</b> Our skilled maids ensure that student accommodations and common areas are always welcoming and hygienic.</li>
                                        <li><b>Handyman Services:</b> Quick and efficient repairs for technical equipment, classrooms, and facilities, keeping everything in optimal working condition.</li>
                                        <li><b>Technology Integration:</b> Explore our smart solutions to enhance security, energy efficiency, and overall campus management</li>
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

export default TechnicalSchool
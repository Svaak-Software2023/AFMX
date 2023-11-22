import LeftMenue from "../../../../components/leftmenu/LeftMenu"
import industryData from "../../../../assets/data/industriesWeServeData.json";
import "./style.css"


import React from 'react'

function CommercialGeneralContractors() {
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
                                            <div className="mb-3">
                                                <h3 className="heading">Commercial General Contractors</h3>
                                            </div>
                                            <ul className="comminityCollegeList">
                                                <li>Ready to transform your construction sites into pristine showcases of excellence? Look no further than AfmX - Your Partner in Unmatched Construction Cleaning!</li>
                                                <li><h3>Why AFMX?</h3></li>
                                                <li><b>Specialized Expertise:</b> Our dedicated team understands the unique needs of commercial construction sites, delivering tailored cleaning solutions.</li>
                                                <li><b>Cutting-Edge Technology:</b> AfmX utilizes state-of-the-art cleaning equipment and eco-friendly products for superior results without compromising the environment.</li>
                                                <li><b>Time-Efficient Services:</b> We know time is money. AfmX ensures swift and efficient cleaning processes, allowing your team to focus on what they do best - construction!</li>
                                                <li><b>Customized Packages:</b> No two construction sites are the same. AfmX offers flexible cleaning packages to fit your project's specific requirements and budget.</li>
                                                <li><b>Impeccable Safety Record:</b> Safety is our priority. AfmX adheres to the highest safety standards, ensuring a secure working environment for everyone on-site.</li>
                                                <li>Experience the AfmX Difference Today!</li>
                                            </ul>
                                        </div>
                                        <div className="col-lg-6">
                                            <div className="w-100  m-0 p-0">
                                                <img src="./images/industry/CommercialGeneralContractors/CommercialGeneralContractors1.png" alt="" className="img-fluid" />
                                            </div>
                                            <div className="d-flex">
                                                <div className="w-50 mb-2">
                                                    <img src="./images/industry/CommercialGeneralContractors/CommercialGeneralContractors2.png" alt="" className="img-fluid" />
                                                </div> <div className="w-50 mb-2">
                                                    <img src="./images/industry/CommercialGeneralContractors/CommercialGeneralContractors3.png" alt="" className="img-fluid" />
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default CommercialGeneralContractors
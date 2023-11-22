import LeftMenue from "../../../../components/leftmenu/LeftMenu"
import industryData from "../../../../assets/data/industriesWeServeData.json";
import "./style.css"

function BedAndBreakfast() {
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
                                                <h3 className="heading">Bed and breakfast</h3>
                                            </div>
                                            <ul className="comminityCollegeList">
                                                <li>Transform your Bed and Breakfast into a haven of luxury and relaxation with AfmX - your one-stop solution for cleaning, maid services, handyman assistance, and more!</li>
                                                <li><b>Cleaning Services:</b> Let AfmX elevate the cleanliness of your B&B to new heights. Our expert cleaners ensure every nook and cranny is spotless, leaving your guests with an unforgettable, pristine experience.</li>
                                                <li><b>Maid Services:</b> Impress your guests with impeccable service! AfmX maids are dedicated to providing a seamless and personalized experience, attending to every detail to make your B&B feel like a home away from home.</li>
                                                <li><b>Handyman Assistance:</b> From minor repairs to major renovations, AfmX has your back. Our skilled handymen are ready to tackle any task, ensuring your Bed and Breakfast is always in top-notch condition.</li>
                                                <li><b>More Services:</b> Elevate the uniqueness of your B&B with our additional services! From interior design consultations to personalized guest experiences, AfmX goes above and beyond to make your Bed and Breakfast stand out.!</li>
                                            </ul>
                                        </div>
                                        <div className="col-lg-6">
                                            <div className="d-flex">
                                                <div className="w-50">
                                                    <img src="./images/industry/BedAndBreakfast/BedAndBreakfast1.png" alt="" className="img-fluid" />
                                                </div>
                                                <div className="w-50 ">
                                                    <img src="./images/industry/BedAndBreakfast/BedAndBreakfast2.png" alt="" className="img-fluid" />
                                                </div>
                                            </div>
                                            <div className="d-flex">
                                                <div className="w-50 mb-2">
                                                    <img src="./images/industry/BedAndBreakfast/BedAndBreakfast3.png" alt="" className="img-fluid" />
                                                </div>
                                                <div className="w-50 mb-2">
                                                    <img src="./images/industry/BedAndBreakfast/BedAndBreakfast4.png" alt="" className="img-fluid" />
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <ul className="comminityCollegeList">
                                        <li><h3> Why Choose AfmX?</h3></li>
                                        <li>Tailored solutions to meet your specific needs.</li>
                                        <li>Trained professionals dedicated to excellence.</li>
                                        <li>Unmatched attention to detail for a truly unique experience.</li>
                                        <li>Reliable and timely service to keep your B&B running smoothly.</li>
                                        <li>Book AfmX Today and Redefine Hospitality Excellence!</li>
                                        <li>Let AfmX be the secret ingredient that sets your Bed and Breakfast apart. Elevate your guest experience with our comprehensive services.</li>

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

export default BedAndBreakfast
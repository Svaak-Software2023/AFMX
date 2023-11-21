import "./style.css"
import LeftMenue from "../../../../components/leftmenu/LeftMenu"
import industryData from "../../../../assets/data/industriesWeServeData.json";
function NonprofitCollege() {
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
                                                    <div className="w-100 m-1 mt-0">
                                                        <img src="./images/industry/NonprofitCollege/NonprofitCollege1.png" alt="" className="img-fluid" />
                                                    </div>
                                                    <div className="w-100 mt-1 ">
                                                        <img src="./images/industry/NonprofitCollege/NonprofitCollege2.png" alt="" className="img-fluid" />
                                                    </div>
                                                </div>

                                                <div className="w-50">
                                                    <div className="w-100 m-2 mt-0">
                                                        <img src="./images/industry\NonprofitCollege/NonprofitCollege3.png" alt="" className="img-fluid" />
                                                    </div>
                                                    <div className="w-100 mt-1 mx-2 mb-3">
                                                        <img src="./images/industry\NonprofitCollege/NonprofitCollege4.png" alt="" className="img-fluid" />
                                                    </div>
                                                </div>
                                            </div>

                                        </div>
                                        <div className="col-lg-6">
                                            <div className="mb-3">
                                                <h3 className="heading">Nonprofit College</h3>
                                            </div>
                                            <ul className="liberalArtsCollegeList">
                                                <li>Transform your campus environment with AfmX - where cleanliness meets innovation!</li>
                                                <li>Unleash the Power of AfmX: Experience a revolutionary cleaning solution tailored for Nonprofit Colleges.</li>
                                                <li>AfmX combines cutting-edge technology with eco-friendly practices, ensuring a spotless campus that reflects your commitment to excellence.</li>
                                                <li>Green Cleaning, Smart Living: Choose AfmX for a sustainable future. Our advanced cleaning products prioritize the environment without compromising effectiveness. Lead the way in eco-conscious campus management.</li>
                                                <li>Seamless Integration: AfmX seamlessly integrates into your daily operations, providing hassle-free cleaning solutions that allow your staff to focus on what truly matters - nurturing academic growth and community spirit.</li>
                                                <li>Tech-Driven Efficiency: Say goodbye to traditional cleaning methods. AfmX harnesses the power of technology to optimize cleaning schedules, resource allocation, and reporting. Witness unparalleled efficiency at your fingertips.</li>
                                            </ul>
                                        </div>
                                    </div>
                                    <ul className="liberalArtsCollegeList">
                                        <li>Tailored to Your Needs: We understand that each campus is unique. AfmX offers customizable cleaning solutions to meet the specific requirements of your Nonprofit College. Let us create a cleaning plan as exceptional as your institution.</li>
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

export default NonprofitCollege
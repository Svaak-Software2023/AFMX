import LeftMenue from "../../../../components/leftmenu/LeftMenu"
import industryData from "../../../../assets/data/industriesWeServeData.json";
import "./style.css"

function FacilityManagers() {
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
                    <div className="col-lg-4">
                      <div className="w-100 mb-2">
                        <img src="./images/industry/FacilityManagers/FacilityManagers1.png" alt="" className="img-fluid" />
                      </div>
                      <div className="w-100 mb-2">
                        <img src="./images/industry/FacilityManagers/FacilityManagers2.png" alt="" className="img-fluid" />
                      </div> <div className="w-100 mb-2">
                        <img src="./images/industry/FacilityManagers/FacilityManagers3.png" alt="" className="img-fluid" />
                      </div>
                    </div>
                    <div className="col-lg-8">
                      <div className="mb-3">
                        <h3 className="heading">Facility Managers</h3>
                      </div>
                      <ul className="facilityManagersList">
                        <li>Are you tired of juggling multiple service providers for cleaning, maintenance, and handyman services? AfmX is your one-stop solution for seamless facility management!</li>
                        <li><h3>Why Choose AfmX? </h3></li>
                        <li> <b>Effortless Cleaning:</b> Our skilled and reliable cleaning professionals ensure spotless spaces that leave a lasting impression. From offices to common areas, AfmX takes cleanliness to the next level.</li>
                        <li> Handyman Expertise: </li>
                        <li> Say goodbye to maintenance headaches! AfmX's experienced handymen are ready to tackle repairs, installations, and upgrades with precision and efficiency. We've got the tools and skills to keep your facility in top shape.</li>
                        <li> Total Facility Care: We go beyond the basics! AfmX offers a comprehensive suite of services, including janitorial work, landscaping, and more. Your facility will thrive under our expert care.</li>
                        <li> Cutting-Edge Technology:</li>
                        <li> AfmX leverages innovative solutions to streamline communication and service delivery. Monitor progress, submit requests, and receive real-time updates—all at your fingertips.</li>
                        <li> Tailored Packages: No two facilities are alike, and neither are our solutions. AfmX customizes packages to suit your unique needs and budget, ensuring you get exactly what you need without breaking the bank.</li>
                        <li> Trusted Professionals: Our team comprises skilled, background-checked professionals dedicated to exceeding your expectations. Rest easy knowing AfmX has your facility's best interests at heart.</li>
                      </ul>
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

export default FacilityManagers
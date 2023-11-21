import LeftMenue from "../../../../components/leftmenu/LeftMenu"
import industryData from "../../../../assets/data/industriesWeServeData.json";
import "./style.css"

function CommunityCollege() {
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
                    <div className="col-lg-4">
                      <div className="w-100 mb-2">
                        <img src="./images/industry\CommunityCollege/CommunityCollege1.png" alt="" className="img-fluid" />
                      </div>
                      <div className="w-100 mb-2">
                        <img src="./images/industry\CommunityCollege/CommunityCollege2.png" alt="" className="img-fluid" />
                      </div> <div className="w-100 mb-2">
                        <img src="./images/industry\CommunityCollege/CommunityCollege3.png" alt="" className="img-fluid" />
                      </div>
                    </div>
                    <div className="col-lg-8">
                      <div className="mb-3">
                        <h3 className="heading">Community College</h3>
                      </div>
                      <ul className="comminityCollegeList">
                        <li><h3>Sparkle and Shine with AfmX!</h3></li>
                        <li>Attention Community Colleges! Elevate your campus experience with our top-notch cleaning services tailored just for you. At AfmX, we understand the unique needs of educational institutions, and we're here to make your environment spotless, safe, and inspiring.</li>
                        <li><h3>Why Choose AFMX?</h3></li>
                        <li> Expertise: Our highly trained cleaning professionals specialize in educational settings, ensuring a thorough and effective cleaning process.</li>
                        <li> Custom Solutions: We offer personalized cleaning plans to meet the specific requirements of your community college, from classrooms to common areas.</li>
                        <li> Health and Safety: Creating a clean and healthy learning environment is our priority. Our eco-friendly products and advanced cleaning techniques promote a space where students and faculty can thrive.</li>
                        <li> Flexible Scheduling: We work around your academic calendar to minimize disruptions. Whether it's after-hours or during breaks, we've got you covered.</li>
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

export default CommunityCollege
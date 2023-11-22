import LeftMenue from "../../../../components/leftmenu/LeftMenu"
import industryData from "../../../../assets/data/industriesWeServeData.json";
import "./style.css"
function LiberalArtsCollege() {
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

                      <div className="d-flex">
                        <div className="w-50 m-1">
                          <img src="./images/industry/LiberalArtsCollege/LiberalArtsCollege1.png" alt="" className="img-fluid" />
                        </div>
                        <div className="w-50 m-1">
                          <img src="./images/industry/LiberalArtsCollege/LiberalArtsCollege2.png" alt="" className="img-fluid" />
                        </div>
                      </div>

                      <div className="d-flex">
                        <div className="w-50 m-1">
                          <img src="./images/industry\LiberalArtsCollege/LiberalArtsCollege3.png" alt="" className="img-fluid" />
                        </div>
                        <div className="w-50 m-1 mb-3">
                          <img src="./images/industry\LiberalArtsCollege/LiberalArtsCollege4.png" alt="" className="img-fluid" />
                        </div>
                      </div>

                    </div>
                    <div className="col-lg-6">
                      <div className="mb-3">
                        <h3 className="heading">Liberal Arts College</h3>
                      </div>
                      <ul className="liberalArtsCollegeList">
                        <li>Embark on a journey of pristine perfection with AfmX Cleaning Solutions - your gateway to immaculate surroundings and an enhanced learning environment.</li>
                        <li><h3>Why Choose AFMX?</h3></li>
                        <li>Tailored Cleaning Plans: We understand the unique needs of liberal arts institutions. Our customizable cleaning plans ensure every nook and cranny of your campus radiates cleanliness.</li>
                        <li>Eco-Friendly Approach: AfmX is committed to sustainability. Our eco-friendly cleaning practices not only preserve the environment but also contribute to a healthier atmosphere for students and faculty.</li>
                        <li>Cutting-Edge Technology: Say goodbye to old-fashioned cleaning methods! AfmX employs state-of-the-art technology and industry-leading equipment to ensure a thorough and efficient cleaning process.</li>
                      </ul>
                    </div>
                  </div>
                  <ul className="liberalArtsCollegeList">
                    <li>Expert Team: Our highly trained and dedicated cleaning professionals are passionate about maintaining the highest standards of cleanliness. Trust us to keep your campus sparkling clean.</li>
                    <li>Specialized Services: Beyond routine cleaning, AfmX offers specialized services tailored to meet the unique requirements of liberal arts colleges, creating a conducive environment for creativity and learning.</li>

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

export default LiberalArtsCollege
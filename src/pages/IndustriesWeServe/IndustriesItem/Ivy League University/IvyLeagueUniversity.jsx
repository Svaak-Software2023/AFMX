import LeftMenue from "../../../../components/leftmenu/LeftMenu"
import industryData from "../../../../assets/data/industriesWeServeData.json";
import "./style.css"

export default function IvyLeagueUniversity() {
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
                        <div className="w-50 m-0">
                          <img src="./images/industry/IvyLeagueUniversity/IvyLeagueUniversity1.png" alt="" className="img-fluid" />
                        </div>
                        <div className="w-50 m-0">
                          <img src="./images/industry/IvyLeagueUniversity/IvyLeagueUniversity2.png" alt="" className="img-fluid" />
                        </div>
                      </div>

                      <div className="d-flex">
                        <div className="w-50 m-0">
                          <img src="./images/industry\IvyLeagueUniversity/IvyLeagueUniversity3.png" alt="" className="img-fluid" />
                        </div>
                        <div className="w-50 m-0 mb-3">
                          <img src="./images/industry\IvyLeagueUniversity/IvyLeagueUniversity4.png" alt="" className="img-fluid" />
                        </div>
                      </div>
                    </div>
                    <div className="col-lg-6">
                      <div className="mb-3">
                        <h3 className="heading">Ivy League University</h3>
                      </div>
                      <ul className="liberalArtsCollegeList">
                        <li>Embark on a journey of pristine excellence with AfmX - where brilliance meets cleanliness!</li>
                        <li><h3>Why AFMX?</h3></li>
                        <li>Tailored for Ivy League Perfection: We understand the standards of excellence at Ivy League institutions and deliver cleaning services that match your academic prowess.</li>
                        <li>Customized Cleaning Solutions: From state-of-the-art lecture halls to your exclusive study sanctuaries, AfmX ensures a tailor-made cleaning experience tailored to your unique needs.</li>
                        <li>Seamless Service, No Disruptions: Focus on your studies while AfmX takes care of the rest. Our discreet and efficient cleaning teams operate like academic ninjas, leaving no trace behind.</li>
                        <li>Experience AfmX Excellence Today!</li>
                      </ul>
                    </div>
                  </div>

                  <ul className="liberalArtsCollegeList">
                    <li>Green and Clean: We prioritize sustainability! AfmX utilizes eco-friendly products and practices to keep your campus green and your mind focused on conquering academic heights.</li>
                    <li>Exclusive Discounts for Ivy League Universities: Because brilliance deserves a sparkling reward! Enjoy special rates as our esteemed Ivy League clientele.</li>
                    <li>Hassle-Free Scheduling: Your time is precious. AfmX offers flexible scheduling options to fit seamlessly into your busy academic calendar.</li>
                    <li>Trust the Experts: With a proven track record of delivering exceptional cleaning services, AfmX is the trusted choice for Ivy League universities.</li>

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

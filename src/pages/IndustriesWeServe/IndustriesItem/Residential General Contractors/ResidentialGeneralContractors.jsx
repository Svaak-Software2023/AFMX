import LeftMenue from "../../../../components/leftmenu/LeftMenu"
import industryData from "../../../../assets/data/industriesWeServeData.json";
import "./style.css"

function ResidentialGeneralContractors() {
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
                        <img src="./images/industry/ResidentialGeneralContractors/ResidentialGeneralContractors1.png" alt="" className="img-fluid" />
                      </div>
                      <div className="w-100 mb-2">
                        <img src="./images/industry/ResidentialGeneralContractors/ResidentialGeneralContractors2.png" alt="" className="img-fluid" />
                      </div> <div className="w-100 mb-2">
                        <img src="./images/industry/ResidentialGeneralContractors/ResidentialGeneralContractors3.png" alt="" className="img-fluid" />
                      </div>
                    </div>
                    <div className="col-lg-8">
                      <div className="mb-3">
                        <h3 className="heading">Residential General Contractors</h3>
                      </div>
                      <ul className="residentialGeneralContractorsList">
                        <li> Elevate your projects with AfmX, where excellence meets cleanliness. Our construction cleaning services are tailored for those who appreciate precision and demand a pristine finish.  <br></br><b>Why AfmX?</b></li>

                        <li> <b>Unparalleled Expertise: </b> Our skilled team understands the unique needs of residential construction sites, ensuring every nook and cranny is spotless.</li>

                        <li> <b>Efficiency Redefined: </b> AfmX doesn't just clean; we optimize. Streamlined processes mean quicker turnaround times, getting your projects ready for the spotlight faster.</li>

                        <li> <b>Green Clean: </b> Join us in our commitment to sustainability. AfmX employs eco-friendly practices and products, making your construction site cleaner and greener.</li>

                        <li> <b>Custom Solutions: </b> No two projects are the same, and neither are our cleaning solutions. AfmX adapts to your specific needs, providing a bespoke cleaning experience.</li>

                        <li> <b>Seamless Collaboration: </b> We integrate seamlessly into your workflow, minimizing disruption while maximizing results. Your success is our priority.</li>
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

export default ResidentialGeneralContractors
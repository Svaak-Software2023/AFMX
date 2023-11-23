import LeftMenue from "../../../../components/leftmenu/LeftMenu"
import industryData from "../../../../assets/data/industriesWeServeData.json";
import "./style.css"

function CruiseShip() {
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
                        <img src="./images/industry/CruiseShip/CruiseShip1.png" alt="" className="img-fluid" />
                      </div>
                      <div className="w-100 mb-2">
                        <img src="./images/industry/CruiseShip/CruiseShip2.png" alt="" className="img-fluid" />
                      </div> <div className="w-100 mb-2">
                        <img src="./images/industry/CruiseShip/CruiseShip3.png" alt="" className="img-fluid" />
                      </div>
                    </div>
                    <div className="col-lg-8">
                      <div className="mb-3">
                        <h3 className="heading">Cruise Ship</h3>
                      </div>
                      <ul className="cruiseShipList">
                        <li>Ensure an impeccable environment for your guests with AfmX Janitorial Cleaning Services. We specialize in delivering professional and efficient cleaning solutions tailored to meet the unique needs of cruise ships.</li>
                        <li><h3>Key Features</h3></li>
                        <li><b>Experienced Janitorial Team:</b> Our skilled professionals are trained to maintain high cleanliness standards on cruise ships.</li>
                        <li><b>Tailored Solutions:</b> Customized cleaning plans to suit the specific requirements of your vessel.</li>
                        <li><b>Cutting-edge Equipment:</b> We use advanced cleaning equipment and eco-friendly products to ensure a pristine and hygienic environment.</li>
                        <li><b>Flexible Scheduling:</b> Adaptable cleaning schedules to minimize disruption to your cruise operations.</li>
                        <li> Choose AfmX for a spotless and welcoming cruise ship experience.</li>
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

export default CruiseShip
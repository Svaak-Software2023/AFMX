import LeftMenue from "../../../../components/leftmenu/LeftMenu"
import industryData from "../../../../assets/data/industriesWeServeData.json";
import "./style.css"

function GuestHouse() {
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
                        <img src="./images/industry/GuestHouse/GuestHouse1.png" alt="" className="img-fluid" />
                      </div>
                      <div className="w-100 mb-2">
                        <img src="./images/industry/GuestHouse/GuestHouse2.png" alt="" className="img-fluid" />
                      </div> <div className="w-100 mb-2">
                        <img src="./images/industry/GuestHouse/GuestHouse3.png" alt="" className="img-fluid" />
                      </div>
                    </div>
                    <div className="col-lg-8">
                      <div className="mb-3">
                        <h3 className="heading">Guest House</h3>
                      </div>
                      <ul className="guestHouseList">
                        <li>Are you a Guest House Owner looking to enhance the experience for your guests? AfmX is here to provide tailored solutions for your property management needs.</li>
                        <li><h3>Our Services Include:</h3></li>
                        <li> <b>Cleaning Services: </b> Impeccable cleanliness is our priority. Our professional cleaners ensure that every corner of your guest house is spotless, creating a welcoming environment for your guests.</li>
                        <li> <b>Maid Services: </b>From daily upkeep to special requests, our trained maids handle all aspects of housekeeping with precision and care.</li>
                        <li> <b>Handyman Services: </b>Timely maintenance is crucial for a smooth guest experience. Our skilled handymen are ready to address any repairs or improvements needed, ensuring your property remains in top condition.</li>
                        <li> <b>And More: </b>Beyond the essentials, AfmX offers a range of additional services to cater to your unique requirements. From landscaping to concierge services, we've got you covered.</li>
                        <li> <b>Why Choose AfmX?</b></li>
                        <li> <b>Professionalism: </b>Our team is committed to delivering professional, reliable services to meet the highest standards.</li>
                        <li> <b>Customization: </b>Tailor our services to fit the specific needs and preferences of your guest house.</li>
                        <li> <b>Peace of Mind: </b>With AfmX, you can focus on providing an exceptional guest experience while we take care of the behind-the-scenes tasks</li>
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

export default GuestHouse
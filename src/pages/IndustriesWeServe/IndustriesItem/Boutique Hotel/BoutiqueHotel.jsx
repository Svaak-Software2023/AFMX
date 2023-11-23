import LeftMenue from "../../../../components/leftmenu/LeftMenu"
import industryData from "../../../../assets/data/industriesWeServeData.json";
import "./style.css"
function BoutiqueHotel() {
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
                          <img src="./images/industry/BoutiqueHotel/BoutiqueHotel1.png" alt="" className="img-fluid" />
                        </div>
                        <div className="w-50 m-1">
                          <img src="./images/industry/BoutiqueHotel/BoutiqueHotel2.png" alt="" className="img-fluid" />
                        </div>
                      </div>

                      <div className="d-flex">
                        <div className="w-50 m-1">
                          <img src="./images/industry/BoutiqueHotel/BoutiqueHotel3.png" alt="" className="img-fluid" />
                        </div>
                        <div className="w-50 m-1 mb-3">
                          <img src="./images/industry/BoutiqueHotel/BoutiqueHotel4.png" alt="" className="img-fluid" />
                        </div>
                      </div>

                    </div>
                    <div className="col-lg-6">
                      <div className="mb-3">
                        <h3 className="heading">Boutique Hotel</h3>
                      </div>
                      <ul className="boutiqueHotelList">
                        <li>Elevate the standards of your establishment with AfmX, your one-stop solution for premium cleaning, maid, handyman, and more services. Our commitment is to provide unmatched excellence, ensuring your boutique hotel maintains an impeccable reputation.</li>
                        <li><b>Services Offered</b></li>
                        <li>Cleaning Services </li>
                        <li>Thorough and systematic cleaning to meet the highest hygiene standards. </li>
                        <li>Daily, weekly, or customized cleaning schedules to suit your hotel's unique needs. </li>
                      </ul>
                    </div>
                  </div>
                  <ul className="boutiqueHotelList">
                    <li><b>Maid Services</b> </li>
                    <li>Professionally trained maids to ensure your guests experience a seamless and comfortable stay. </li>
                    <li>Attention to detail in every aspect, from room preparation to personalized guest services. </li>
                    <li><b>Handyman Services</b> </li>
                    <li>Prompt and reliable maintenance solutions for a well-functioning and aesthetically pleasing environment. </li>
                    <li>Skilled technicians available around the clock to address any unforeseen issues. </li>
                    <li><b>More Services</b></li>
                    <li>Tailored packages to meet specific requirements of boutique hotels. </li>
                    <li>Dedicated account manager for personalized and efficient communication. </li>
                    <li><h3>Why Choose AfmX?</h3> </li>
                    <li><b>Expertise:</b> Years of experience in serving the hospitality industry. </li>
                    <li><b>Reliability:</b> Trustworthy professionals ensuring consistency in service delivery. </li>
                    <li><b>Customization:</b> Flexible packages to align with your boutique hotel's unique needs. </li>
                    <li><b>Efficiency:</b> Streamlined processes for prompt and hassle-free services. </li>
                    <li><b>Quality Assurance:</b> Uncompromising commitment to maintaining the highest standards. </li>
                    <li>Partner with AfmX to enhance the overall guest experience, leaving a lasting impression on your discerning clientele. Elevate your boutique hotel to new heights of excellence with AfmX by your side. </li>

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

export default BoutiqueHotel
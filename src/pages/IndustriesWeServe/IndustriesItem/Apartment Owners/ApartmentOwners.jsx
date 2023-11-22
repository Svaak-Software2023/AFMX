import LeftMenue from "../../../../components/leftmenu/LeftMenu"
import industryData from "../../../../assets/data/industriesWeServeData.json";
import "./style.css"

function ApartmentOwners() {
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
                        <img src="./images/industry/ApartmentOwners/ApartmentOwners1.png" alt="" className="img-fluid" />
                      </div>
                      <div className="w-100 mb-2">
                        <img src="./images/industry/ApartmentOwners/ApartmentOwners2.png" alt="" className="img-fluid" />
                      </div> 
                      <div className="w-100 mb-2">
                        <img src="./images/industry/ApartmentOwners/ApartmentOwners3.png" alt="" className="img-fluid" />
                      </div>
                    </div>
                    <div className="col-lg-8">
                      <div className="mb-3">
                        <h3 className="heading">Apartment Owners</h3>
                      </div>
                      <ul className="apartmentOwnerList">
                        <li>Attention Apartment Complex Owners.</li>
                        <li> Transform your residents' living spaces into havens of comfort and convenience with AfmX – Your One-Stop Solution for Cleaning, Maid, Handyman, and More!</li>
                        <li> <b>Immaculate Cleaning Services:</b> Experience the epitome of cleanliness with our top-notch cleaning services. From sparkling floors to pristine surfaces, we ensure a spotless environment for your residents to call home. </li>
                        <li> <b>Meticulous Maid Services:</b> Our skilled and trustworthy maids go beyond the basics. Let AfmX bring a touch of luxury to your residents' lives with personalized maid services that cater to their unique needs.</li>
                        <li> <b>Expert Handyman Solutions:</b> Say goodbye to maintenance headaches! AfmX's expert handymen are ready to tackle any repair or improvement project. From leaky faucets to intricate installations, we've got it covered.</li>
                        <li> <b>And More...:</b> Discover the diverse range of services AfmX offers to enhance your apartment complex. Whether it's landscaping, pest control, or special requests – we're here to make your residents' lives easier.Say goodbye to maintenance headaches! AfmX's expert handymen are ready to tackle any repair or improvement project. From leaky faucets to intricate installations, we've got it covered.</li>
                        <li> <b>Why Choose AfmX?</b></li>
                        <li> <b>Tailored Services:</b> Customize packages to suit your apartment complex's specific requirements.</li>
                        <li> <b>Cutting-Edge Technology:</b> We leverage the latest tools and techniques for optimal efficiency.</li>
                        <li> <b>Seamless Communication:</b> Experience hassle-free coordination through our user-friendly platform.</li>   
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

export default ApartmentOwners
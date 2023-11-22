import LeftMenue from "../../../../components/leftmenu/LeftMenu"
import industryData from "../../../../assets/data/industriesWeServeData.json";
import "./style.css"

function ReligiousUniversities() {
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
                        <div className="w-50 m-0">
                          <img src="./images/industry/ReligiousUniversities/ReligiousUniversities1.png" alt="" className="img-fluid" />
                        </div>
                        <div className="w-50 m-0">
                          <img src="./images/industry/ReligiousUniversities/ReligiousUniversities2.png" alt="" className="img-fluid" />
                        </div>
                      </div>

                      <div className="d-flex">
                        <div className="w-50 m-0">
                          <img src="./images/industry/ReligiousUniversities/ReligiousUniversities3.png" alt="" className="img-fluid" />
                        </div>
                        <div className="w-50 m-0 mb-3">
                          <img src="./images/industry/ReligiousUniversities/ReligiousUniversities4.png" alt="" className="img-fluid" />
                        </div>
                      </div>
                    </div>
                    <div className="col-lg-6">
                      <div className="mb-3">
                        <h3 className="heading">Religious Universities</h3>
                      </div>
                      <ul className="religiousUniversitiesList">
                        <li>At AfmX, we understand the sanctity and uniqueness of religious institutions, and we are committed to providing unparalleled cleaning, maid, handyman, and more services tailored to meet the distinctive needs of your university.</li>
                        <li>1. Respect for Religious Practices: Our team deeply values the religious practices and traditions of your institution. We operate with utmost sensitivity, ensuring that our services align seamlessly with your sacred spaces and cultural norms.</li>
                        <li>2. Customized Solutions: Our services are not one-size-fits-all. We work closely with decision makers like you to understand the unique requirements of your campus. Whether it's specific cleaning schedules, maid services, or handyman tasks, we tailor our offerings to suit your individual needs.</li>
                      </ul>
                    </div>
                  </div>

                  <ul className="religiousUniversitiesList">
                    <li>3. Adaptable to Restrictions: AfmX takes pride in its flexibility. We recognize the importance of adhering to any restrictions or guidelines set by your university, ensuring a harmonious coexistence with your religious principles.</li>
                    <li>4. Professional Excellence: AfmX boasts a team of skilled professionals dedicated to maintaining the highest standards of cleanliness and service. Our staff is trained to respect the sacred nature of your campus while delivering exceptional results.</li>
                    <li>5. Transparent Communication: We believe in open and transparent communication. Our dedicated account managers ensure a seamless flow of information, keeping decision makers informed and in control every step of the way.</li>
                    <li>Transform your university environment with AfmX. Let us be your trusted partner in upholding the sanctity and cleanliness of your religious institution.</li>                        
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

export default ReligiousUniversities
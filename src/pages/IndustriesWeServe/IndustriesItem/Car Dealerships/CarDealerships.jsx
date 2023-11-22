import "./style.css";
import LeftMenue from "../../../../components/leftmenu/LeftMenu";
import industryData from "../../../../assets/data/industriesWeServeData.json";
function CarDealerships() {
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
                        <div className="w-50">
                          <div className="w-100 m-1 mt-0">
                            <img
                              src="./images/industry/CarDealerships/CarDealerships1.png"
                              alt=""
                              className="img-fluid"
                            />
                          </div>
                          <div className="w-100 mt-1 ">
                            <img
                              src="./images/industry/CarDealerships/CarDealerships2.png"
                              alt=""
                              className="img-fluid"
                            />
                          </div>
                        </div>

                        <div className="w-50">
                          <div className="w-100 m-2 mt-0">
                            <img
                              src="./images/industry/CarDealerships/CarDealerships3.png"
                              alt=""
                              className="img-fluid"
                            />
                          </div>
                          <div className="w-100 mt-1 mx-2 mb-3">
                            <img
                              src="./images/industry/CarDealerships/CarDealerships4.png"
                              alt=""
                              className="img-fluid"
                            />
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="col-lg-6">
                      <div className="mb-3">
                        <h3 className="heading">Car Dealerships</h3>
                      </div>
                      <ul className="carDealershipsList">
                        <li>
                          We understand the importance of maintaining a pristine
                          and well-functioning environment in your dealership.
                          That's why we at AfmX are here to offer tailored
                          janitorial cleaning and handyman services to elevate
                          the standards of your facility.
                        </li>
                        <li>
                          Our skilled janitorial team specializes in providing
                          meticulous cleaning services, ensuring every corner of
                          your dealership is spotless. From showroom floors to
                          customer waiting areas, our professionals are
                          committed to creating a clean and welcoming atmosphere
                          for your clients.
                        </li>
                        <li>
                          Additionally, our experienced handyman services cover
                          a wide range of maintenance tasks, addressing any
                          issues promptly to keep your facility running
                          smoothly. Whether it's repairing fixtures, handling
                          minor electrical or plumbing concerns, or general
                          maintenance tasks, AfmX is your reliable partner.
                        </li>
                        <li>
                          <b>Why choose AfmX?</b>
                        </li>
                        <li>
                          <b>Expertise: </b>Our team comprises trained
                          professionals with extensive experience in janitorial
                          and handyman services for automotive facilities.
                        </li>
                      </ul>
                    </div>
                  </div>
                  <ul className="carDealershipsList">
                    <li>
                      <b>Custom Solutions: </b>: We understand that each
                      dealership is unique. Our services are tailored to meet
                      the specific needs of your facility, ensuring a
                      comprehensive solution.
                    </li>
                    <li>
                      <b>Reliability: </b>AfmX is dedicated to delivering
                      services on time and within budget, allowing you to focus
                      on your core business operations.
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default CarDealerships;

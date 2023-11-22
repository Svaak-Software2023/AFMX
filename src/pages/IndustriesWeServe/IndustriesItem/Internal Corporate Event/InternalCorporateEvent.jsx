import "./style.css";
import LeftMenue from "../../../../components/leftmenu/LeftMenu";
import industryData from "../../../../assets/data/industriesWeServeData.json";
function InternalCorporateEvent() {
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
                              src="./images/industry/InternalCorporateEvent/InternalCorporateEvent1.png"
                              alt=""
                              className="img-fluid"
                            />
                          </div>
                          <div className="w-100 mt-1 ">
                            <img
                              src="./images/industry/InternalCorporateEvent/InternalCorporateEvent3.png"
                              alt=""
                              className="img-fluid"
                            />
                          </div>
                        </div>

                        <div className="w-50">
                          <div className="w-100 m-2 mt-0">
                            <img
                              src="./images/industry/InternalCorporateEvent/InternalCorporateEvent2.png"
                              alt=""
                              className="img-fluid"
                            />
                          </div>
                          <div className="w-100 mt-1 mx-2 mb-3">
                            <img
                              src="./images/industry/InternalCorporateEvent/InternalCorporateEvent4.png"
                              alt=""
                              className="img-fluid"
                            />
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="col-lg-6">
                      <div className="mb-3">
                        <h3 className="heading">Internal Corporate Event</h3>
                      </div>
                      <ul className="internalCorporateEventList">
                        <li>
                          Are you seeking unparalleled janitorial cleaning,
                          handyman, and more for your upcoming internal
                          corporate event? Look no further than AfmX Corporate
                          Services – your trusted partner in maintaining
                          pristine and professional workspaces.
                        </li>
                        <li>
                          <b>Our Comprehensive Services Include: </b>
                        </li>
                        <li>
                          <b>Janitorial Excellence: </b>Impeccable cleanliness
                          tailored to your event needs, ensuring a welcoming and
                          hygienic environment.
                        </li>
                        <li>
                          <b>Handyman Expertise: </b>Swift and efficient repairs
                          and maintenance to address any unforeseen issues,
                          allowing your event to run seamlessly.
                        </li>
                        <li>
                          <b>Event Setup and Breakdown: </b>Our team ensures a
                          smooth transition from preparation to cleanup, so you
                          can focus on what matters most – your event.
                        </li>
                        <li>
                          <b>Customized Solutions: </b>Tailoring our services to
                          meet your specific requirements, we guarantee a
                          personalized approach to elevate your corporate
                          setting.
                        </li>
                        <li>
                          <b>Why AfmX? </b>
                        </li>
                      </ul>
                    </div>
                  </div>
                  <ul>
                    <li>
                      <b>✓ Professionalism: </b>Our team is dedicated to
                      upholding the highest standards of professionalism in
                      every aspect of our service.
                    </li>
                    <li>
                      <b>✓ Reliability: </b>Count on AfmX to deliver punctual
                      and dependable services, allowing you to focus on the
                      success of your corporate event.
                    </li>
                    <li>
                      <b>✓ Excellence in Execution: </b>From meticulous cleaning
                      to efficient repairs, AfmX is committed to excellence in
                      every task we undertake.
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

export default InternalCorporateEvent;

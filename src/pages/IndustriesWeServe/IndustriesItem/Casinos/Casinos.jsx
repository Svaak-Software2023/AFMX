import "./style.css";
import LeftMenue from "../../../../components/leftmenu/LeftMenu";
import industryData from "../../../../assets/data/industriesWeServeData.json";
function Casinos() {
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
                              src="./images/industry/Casinos/Casinos1.png"
                              alt=""
                              className="img-fluid"
                            />
                          </div>
                          <div className="w-100 mt-1 ">
                            <img
                              src="./images/industry/Casinos/Casinos3.png"
                              alt=""
                              className="img-fluid"
                            />
                          </div>
                        </div>

                        <div className="w-50">
                          <div className="w-100 m-2 mt-0">
                            <img
                              src="./images/industry/Casinos/Casinos2.png"
                              alt=""
                              className="img-fluid"
                            />
                          </div>
                          <div className="w-100 mt-1 mx-2 mb-3">
                            <img
                              src="./images/industry/Casinos/Casinos4.png"
                              alt=""
                              className="img-fluid"
                            />
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="col-lg-6">
                      <div className="mb-3">
                        <h3 className="heading">Casinos</h3>
                      </div>
                      <ul className="casinosList">
                        <li>
                          Are you seeking unparalleled excellence in janitorial
                          cleaning, handyman services, and more for your
                          esteemed establishment? Look no further than AfmX -
                          your premier choice for comprehensive facility
                          management.
                        </li>
                        <li>
                          <h3>Our Commitment:</h3>
                        </li>
                        <li>
                          <b>Immaculate Janitorial Cleaning: </b>Elevate the
                          cleanliness standards of your casino with our
                          meticulous janitorial services. We understand the
                          importance of maintaining a pristine environment for
                          your guests.
                        </li>
                        <li>
                          <b>Skilled Handyman Services: </b>Experience prompt
                          and efficient repairs and maintenance with our team of
                          skilled handymen. From minor fixes to major overhauls,
                          AfmX ensures seamless operations within your facility.
                        </li>
                        <li>
                          <b>More Than Just Maintenance: </b>Beyond janitorial
                          and handyman services, AfmX offers a suite of facility
                          management solutions tailored to meet the unique needs
                          of casinos. Trust us to handle the details, allowing
                          you to focus on providing an exceptional gaming
                          experience.
                        </li>

                      </ul>
                    </div>
                  </div>
                  <ul className="casinosList">
                        <li>
                          <h3>Why Choose AfmX?</h3>
                        </li>
                    <li>
                      <b>Reliability: </b>Count on us for consistent, reliable,
                      and high-quality services. Our team is dedicated to
                      meeting and exceeding your expectations.
                    </li>
                    <li>
                      <b>Comprehensive Solutions: </b>AfmX is your one-stop-shop
                      for all facility management needs, offering a diverse
                      range of services designed to enhance the functionality
                      and aesthetics of your casino.
                    </li>
                    <li>
                      <b>Professionalism at its Core: </b>Our team is composed
                      of experienced professionals who prioritize efficiency,
                      professionalism, and confidentiality. Your satisfaction is
                      our top priority.
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

export default Casinos;

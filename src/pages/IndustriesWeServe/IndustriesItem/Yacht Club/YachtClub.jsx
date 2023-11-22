import "./style.css";
import LeftMenue from "../../../../components/leftmenu/LeftMenu";
import industryData from "../../../../assets/data/industriesWeServeData.json";
function YachtClub() {
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
                              src="./images/industry/YachtClub/YachtClub1.png"
                              alt=""
                              className="img-fluid"
                            />
                          </div>
                          <div className="w-100 mt-1 ">
                            <img
                              src="./images/industry/YachtClub/YachtClub2.png"
                              alt=""
                              className="img-fluid"
                            />
                          </div>
                        </div>

                        <div className="w-50">
                          <div className="w-100 m-2 mt-0">
                            <img
                              src="./images/industry/YachtClub/YachtClub3.png"
                              alt=""
                              className="img-fluid"
                            />
                          </div>
                          <div className="w-100 mt-1 mx-2 mb-3">
                            <img
                              src="./images/industry/YachtClub/YachtClub4.png"
                              alt=""
                              className="img-fluid"
                            />
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="col-lg-6">
                      <div className="mb-3">
                        <h3 className="heading">Yacht Club</h3>
                      </div>
                      <ul className="yachtClubList">
                        <li>
                          Are you a discerning Yacht or Yacht Club owner seeking
                          top-notch maintenance services? Look no further than
                          AfmX!
                        </li>
                        <li>
                          Handyman Expertise: Our skilled technicians specialize
                          in yacht maintenance, ensuring your vessel stays in
                          pristine condition. From routine inspections to
                          emergency repairs, we've got you covered.
                        </li>
                        <li>
                          Janitorial Excellence: Experience meticulous
                          cleanliness with our janitorial services tailored for
                          yachts and yacht clubs. We understand the importance
                          of a spotless environment, and our dedicated team
                          ensures every nook and cranny is flawlessly
                          maintained.
                        </li>
                        <li>
                          Comprehensive Solutions: Beyond janitorial and
                          handyman services, AfmX offers a range of solutions to
                          meet your diverse needs. Whether it's upholstery
                          cleaning, electrical repairs, or general maintenance,
                          we provide comprehensive services to keep your yacht
                          in optimal condition.
                        </li>
                      </ul>
                    </div>
                  </div>
                  <ul className="yachtClubList">
                    <li>
                      Tailored Packages: Our service packages are designed to
                      suit the unique requirements of yacht and yacht club
                      owners. Enjoy the flexibility to choose the services that
                      best align with your priorities.
                    </li>
                    <li>
                      Trusted Professionals: Rest easy knowing that AfmX employs
                      highly skilled and vetted professionals. Our team is
                      committed to delivering quality services with the utmost
                      professionalism.
                    </li>
                    <li>
                      Efficient Turnaround: We understand the value of time in
                      the yachting world. Our services are characterized by
                      efficiency, ensuring minimal downtime for your vessel.
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

export default YachtClub;

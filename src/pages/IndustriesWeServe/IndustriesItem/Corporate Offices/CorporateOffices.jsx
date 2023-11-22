import "./style.css";
import LeftMenue from "../../../../components/leftmenu/LeftMenu";
import industryData from "../../../../assets/data/industriesWeServeData.json";
function CorporateOffices() {
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
                              src="./images/industry/CorporateOffices/CorporateOffices1.png"
                              alt=""
                              className="img-fluid"
                            />
                          </div>
                          <div className="w-100 mt-1 ">
                            <img
                              src="./images/industry/CorporateOffices/CorporateOffices3.png"
                              alt=""
                              className="img-fluid"
                            />
                          </div>
                        </div>

                        <div className="w-50">
                          <div className="w-100 m-2 mt-0">
                            <img
                              src="./images/industry/CorporateOffices/CorporateOffices2.png"
                              alt=""
                              className="img-fluid"
                            />
                          </div>
                          <div className="w-100 mt-1 mx-2 mb-3">
                            <img
                              src="./images/industry/CorporateOffices/CorporateOffices4.png"
                              alt=""
                              className="img-fluid"
                            />
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="col-lg-6">
                      <div className="mb-3">
                        <h3 className="heading">Corporate Offices</h3>
                      </div>
                      AfmX Facilities Management Solutions <br></br>
                      Dear Corporate Office Managers,
                      <ul className="corporateOfficesList">
                        <li>
                          Are you seeking a reliable partner for comprehensive
                          janitorial cleaning, handyman services, and more? Look
                          no further than AfmX Facilities Management Solutions –
                          your trusted ally in maintaining a pristine and
                          efficient work environment.
                        </li>
                        <li>Our Services Include</li>
                        <li>
                          <b>- Janitorial Cleaning: </b>Impeccable cleanliness
                          tailored to your office needs.
                        </li>
                        <li>
                          <b>- Handyman Services: </b> Swift and professional
                          repairs and maintenance.
                        </li>
                        <li>
                          <b>- Facilities Management: </b>A holistic approach
                          for a seamless workplace.
                        </li>
                        <li>
                          <b>Why Choose AfmX?</b>
                        </li>
                        <li>
                          <b>- Expertise: </b> Industry-leading professionals
                          ensuring top-notch
                        </li>
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
  );
}

export default CorporateOffices;

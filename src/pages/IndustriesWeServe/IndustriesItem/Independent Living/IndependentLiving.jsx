import "./style.css";
import LeftMenue from "../../../../components/leftmenu/LeftMenu";
import industryData from "../../../../assets/data/industriesWeServeData.json";
function IndependentLiving() {
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
                              src="./images/industry/IndependentLiving/IndependentLiving1.png"
                              alt=""
                              className="img-fluid"
                            />
                          </div>
                          <div className="w-100 mt-1 ">
                            <img
                              src="./images/industry/IndependentLiving/IndependentLiving3.png"
                              alt=""
                              className="img-fluid"
                            />
                          </div>
                        </div>

                        <div className="w-50">
                          <div className="w-100 m-2 mt-0">
                            <img
                              src="./images/industry/IndependentLiving/IndependentLiving2.png"
                              alt=""
                              className="img-fluid"
                            />
                          </div>
                          <div className="w-100 mt-1 mx-2 mb-3">
                            <img
                              src="./images/industry/IndependentLiving/IndependentLiving4.png"
                              alt=""
                              className="img-fluid"
                            />
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="col-lg-6">
                      <div className="mb-3">
                        <h3 className="heading">Independent Living</h3>
                      </div>
                      <ul className="independentLivingList">
                        <li>
                          introducing AfmX – Elevate Your Independent Living
                          Facility
                        </li>
                        <li>
                          AfmX delivers unparalleled janitorial cleaning
                          services tailored for Independent Living managers and
                          owners. Elevate your facility with our professional
                          touch. Impeccable cleanliness, attention to detail,
                          and a commitment to excellence define our services.
                          Partner with AfmX for a pristine environment that
                          mirrors the standards of your establishment.
                        </li>
                        <li>Experience the AfmX Advantage:</li>
                        <li>Customized Janitorial Solutions</li>
                        <li>Exceptional Attention to Cleanliness</li>
                        <li>Professionalism Beyond Compare</li>
                        <li>Elevate your Independent Living facility with AfmX.</li>
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

export default IndependentLiving;

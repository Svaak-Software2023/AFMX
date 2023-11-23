import "./style.css";
import LeftMenue from "../../../../components/leftmenu/LeftMenu";
import industryData from "../../../../assets/data/industriesWeServeData.json";
function PetFriendlyResort() {
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
                              src="./images/industry/PetFriendlyResort/PetFriendlyResort1.png"
                              alt=""
                              className="img-fluid"
                            />
                          </div>
                          <div className="w-100 mt-1 ">
                            <img
                              src="./images/industry/PetFriendlyResort/PetFriendlyResort3.png"
                              alt=""
                              className="img-fluid"
                            />
                          </div>
                        </div>

                        <div className="w-50">
                          <div className="w-100 m-2 mt-0">
                            <img
                              src="./images/industry/PetFriendlyResort/PetFriendlyResort2.png"
                              alt=""
                              className="img-fluid"
                            />
                          </div>
                          <div className="w-100 mt-1 mx-2 mb-3">
                            <img
                              src="./images/industry/PetFriendlyResort/PetFriendlyResort4.png"
                              alt=""
                              className="img-fluid"
                            />
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="col-lg-6">
                      <div className="mb-3">
                        <h3 className="heading">Pet Friendly Resort</h3>
                      </div>
                      <ul className="petFriendlyResortList">
                        <li>
                          Transform the appeal of your pet-friendly resort with
                          AfmX, your trusted service provider for superior
                          cleaning, maid, handyman, and more!
                        </li>

                        <li>Our Offerings:</li>
                        <li>
                          <b>Premium Cleaning Services: </b>Exemplary
                          cleanliness is our pledge. Our proficient team ensures
                          that your resort emanates cleanliness and coziness for
                          your guests and their beloved pets.
                        </li>
                        <li>
                          <b>Maid Services: </b>Enhance the guest experience
                          with our skilled maid services. From thorough room
                          transformations to personalized care, our maids leave
                          no detail overlooked.
                        </li>
                        <li>
                          <b>Handyman Proficiency: </b>Safeguard the integrity
                          of your resort with our handyman services. From
                          routine maintenance to urgent repairs, AfmX promises a
                          prompt and effective response to keep your property in
                          impeccable condition.
                        </li>
                      </ul>
                    </div>
                  </div>
                  <ul className="petFriendlyResortList">
                        <li>
                          <b>Why Opt for AfmX? </b>
                        </li>
                    <li>
                      <b>Pet-Centric Approach: </b> We comprehend the
                      significance of catering to pet enthusiasts. Our services
                      are crafted to establish a warm and inviting atmosphere
                      for guests with pets, ensuring a seamless and delightful
                      stay.
                    </li>
                    <li>
                      <b>Proven Mastery: </b>With years of experience in the
                      industry, AfmX has earned a reputation for delivering
                      excellence. Our adept professionals are committed to
                      upholding the highest standards in every service we
                      provide.
                    </li>
                    <li>
                      <b>Dependability: </b>Count on AfmX to be your steadfast
                      partner in preserving the beauty and functionality of your
                      resort. Our dedication to timeliness and precision sets us
                      apart in the industry.
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

export default PetFriendlyResort;

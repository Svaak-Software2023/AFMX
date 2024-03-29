import { Link } from "react-router-dom"
import "./Career.css"
import ImportantLinks from "../../components/ImportantLinks/ImportantLinks"
import JobData from "../../assets/data/careerAndEmployment/carrerAndEmployment.json"


function CareersAndEmployment() {
    return (
        <>
            <div className="container p-0  my-3 career-main-container">
                <div className="row m-0 p-0">
                    {/* <div className="col-lg-3 col-md-3 col-0 p-0 service_menu">
           <ImportantLinks/>
          </div> */}
                    <div className=" col-lg-12 col-md-12 col-12 bg-white p-0 p-lg-3 m-0 service_content">
                        <div className="container bg-white my-2 m-0">
                            <div className="row m-0 py-2">
                                <div className="col-lg-12 col-12 overFlow m-0 p-0 career-employement-img">
                                    <img src="./images/career/career.png" alt="" className="img-fluid overFlow m-0 p-0 mb-3" />
                                </div>
                                <div className="col-lg-12 col-12 ">
                                    <div className="">
                                        <h3 className="career-heading">Welcome to AFMX Company!</h3>
                                        <p className="career-text mb-3">At AFMX Company, we hold a unique perspective on what our roles mean to us. To put it simply, we believe our jobs go beyond merely offering services – they're about making a difference in people's lives.</p>
                                        <p className="career-text mb-3">When you become a part of AFMX Company, we want you to know that you are valued. Your voice matters, and your role is pivotal to our company's success. We can't wait to get to know you, appreciate your talents, and
                                            share in your achievements as you journey with us. Join us on this exciting adventure!</p>
                                        <p className="career-text mb-3">What Makes Working at AFMX Company Special</p>
                                        <ol className="mb-3">
                                            <li> Thrive in a dynamic, fast-paced environment akin to a thriving startup.</li>
                                            <li> Collaborate closely with our company's president, fostering valuable connections.</li>
                                            <li> Witness the direct impact of your work on our company's growth and success.</li>
                                            <li> Forge positive relationships within our robust company culture.</li>
                                            <li> Embrace the camaraderie of working with an exceptional team.</li>
                                        </ol>

                                        <p className="career-text mb-3">Our dedicated team is the heartbeat of our exceptional work culture, and we're constantly on the lookout for exceptional individuals who can help us nurture this environment we're so proud of. If you believe you're the right
                                            fit, we eagerly look forward to hearing from you</p>
                                    </div>
                                </div>
                                <div className="col-lg-12 col-12 overFlow m-0 p-0 mb-3">
                                    <LazyLoadImage src="./images/career/employmentAtAfmx.png" alt="" className="img-fluid overFlow career-employement-img" />
                                </div>
                                <p className="career-text mb-3">Afmx Company stands at the forefront of the building maintenance industry, setting the standard
                                    for excellence in management services. Our extensive offerings encompass a wide spectrum of
                                    services, including janitorial, maintenance, handyman, residential, pressure washing, and window
                                    cleaning, catering to the diverse needs of our clients. However, our commitment extends beyond
                                    mere service provision; we take immense pride in our role as a dedicated partner, actively aiding
                                    our clients in time-saving and problem-solving endeavors.</p>
                            </div>
                            <div className="career-filter row m-0 p-0">
                                <div className="creer-filter-input w-100 mb-3 ">
                                    <input className="w-100 px-3 rounded" type="text" placeholder="🔍 Search..." />
                                </div>
                                <div className="col-lg-3 clo-12">
                                    <div className="creer-filter-input w-100 mb-3 ">
                                        <select className=" p-2 w-100 rounded">
                                            <option value="" disabled>Workplace type</option>
                                            <option value="">Workplace type 1</option>
                                            <option value="">Workplace type 2</option>
                                            <option value="">Workplace type 3</option>

                                        </select>
                                    </div>
                                </div>

                                <div className="col-lg-3 clo-12">
                                    <div className="creer-filter-input w-100 mb-3 ">
                                        <select className=" p-2 w-100 rounded">
                                            <option value="" disabled>Location </option>
                                            <option value="Tampa">Tampa</option>
                                            <option value="Largo">Largo</option>
                                            <option value="Clearwater">Clearwater</option>
                                            <option value="Traveling Superintendent">Traveling Superintendent</option>
                                        </select>
                                    </div>
                                </div>

                                <div className="col-lg-3 clo-12">
                                    <div className="creer-filter-input w-100 mb-3 ">
                                        <select className=" p-2 w-100 rounded">
                                            <option value="" disabled>Department</option>
                                            <option value="">Handyman</option>
                                            <option value="">Janitorial</option>
                                            <option value="">Hvac</option>
                                            <option value="">Carpentry</option>
                                            <option value="">Valet Taxi Trash</option>
                                            <option value="">Restroom Rx</option>
                                            <option value="">Office</option>
                                            <option value="">Lawn care</option>
                                            <option value="">Landscape</option>
                                            <option value="">Window cleaning</option>
                                            <option value="">Disaster</option>
                                            <option value="">Polish</option>
                                            <option value="">Parking lot</option>
                                            <option value="">Trash busters</option>
                                            <option value="">Porter and Matron</option>
                                            <option value="">Junk Removal</option>

                                        </select>
                                    </div>
                                </div>

                                <div className="col-lg-3 clo-12">
                                    <div className="creer-filter-input w-100 mb-3 ">
                                        <select className=" p-2 w-100 rounded">
                                            <option value="" disabled>Work type</option>
                                            <option value="Remote">Remote</option>
                                            <option value="Emergency">Emergency</option>
                                            <option value="Full-Time">Full-Time</option>
                                            <option value="Part Time">Part Time</option>
                                            <option value="Temporary">Temporary</option>
                                            <option value="On-Call">On-Call</option>
                                        </select>
                                    </div>
                                </div>
                            </div>

                            <div className="job-post">
                                <div className="row">
                                    <div className="col-md-12">
                                        <ul className="job">
                                            {
                                                JobData.map((item, index) =>
                                                    <li key={index}>
                                                        <div>
                                                            <Link to={`/apply-job/${item?.title}`}>
                                                                <h2 className="styles--3TJHk"><span>{item?.title}</span></h2>
                                                                <small className="small">Posted 1 day ago</small>
                                                            </Link>
                                                        </div>
                                                        <span className="child">{item?.location}</span>
                                                        {/* <span className>Locations</span> */}
                                                        <span>{item?.jobType}</span>
                                                    </li>)
                                            }
                                        </ul>
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

export default CareersAndEmployment
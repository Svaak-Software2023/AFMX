import { Link } from "react-router-dom"
import "./Career.css"

function CareersAndEmployment() {
    return (
        <>
            <div className="container bg-white my-2">
                <div className="row m-0 py-2">
                    <div className="col-lg-5 col-12 overFlow">
                        <img src="./images/career.jpg" alt="" className="img-fluid overFlow" />
                    </div>
                    <div className="col-lg-7 col-12 ">
                        <div className="">
                            <h3 className="career-heading">We are looking for top talent!</h3>
                            <p className="career-text">Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatem facere perferendis commodi, tempore sunt ad! Commodi unde, aliquam, quidem amet labore nulla itaque sunt voluptatem accusantium repellendus est similique consequatur? Aut optio illum adipisci dignissimos modi, mollitia nihil quod ut, vitae, perspiciatis accusantium facilis? Hic numquam nisi quis atque impedit ad culpa, quam eius voluptatum fugit, ab pariatur libero omnis maxime rerum rem, ratione dolores. Quod non error quis quas? Facilis doloremque expedita, amet ab possimus delectus aliquid sapiente molestiae.</p>
                        </div>
                    </div>
                </div>
                <div className="job-post">
                    <div className="row">
                        <div className="col-md-12">
                            <ul className="job">
                                <li>
                                    <div>
                                        <Link to="/apply-job">
                                            <h2 className="styles--3TJHk"><span>Night Manager</span></h2>
                                            <small className="small">Posted 1 day ago</small>
                                        </Link>
                                    </div>
                                    <span className="child">Burnsville, Minnesota, United States</span>
                                    <span className>Locations</span>
                                    <span>Full time</span>
                                </li>
                                <li>
                                    <div>
                                        <Link to="/apply-job">
                                            <h2 className="styles--3TJHk"><span>Service Technician</span></h2>
                                            <small className="small">Posted 1 day ago</small>
                                        </Link>
                                    </div>
                                    <span className="child">Burnsville, Minnesota, United States</span>
                                    <span className>Locations</span>
                                    <span>Full time</span>
                                </li>
                                <li>
                                    <div>
                                        <Link to="/apply-job">
                                            <h2 className="styles--3TJHk"><span>Commercial Compliance Manager</span></h2>
                                            <small className="small">Posted 1 day ago</small>
                                        </Link>
                                    </div>
                                    <span className="child">Burnsville, Minnesota, United States</span>
                                    <span className>Locations</span>
                                    <span>Full time</span>
                                </li>
                                <li>
                                    <div>
                                        <Link to="/apply-job">
                                            <h2 className="styles--3TJHk"><span>Facilities Account Manager</span></h2>
                                            <small className="small">Posted 1 day ago</small>
                                        </Link>
                                    </div>
                                    <span className="child">Burnsville, Minnesota, United States</span>
                                    <span className>Locations</span>
                                    <span>Full time</span>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default CareersAndEmployment
import ImportantLinks from "../../components/ImportantLinks/ImportantLinks"
import "./applyJob.css"

function ApplyJob() {
    return (
        <>
            <div className="container p-0 my-3">
                <div className="row m-0 p-0 ">
                    <div className="col-lg-3 col-md-3 col-0 p-0 service_menu">
                        <ImportantLinks />
                    </div>
                    <div className=" col-lg-9 col-md-9 col-12 bg-white p-3 service_content">

                        <div className="container bg-white my-2">

                            <div className="tab-pane show active  p-lg-5 p-2" >
                                <div className="row">
                                    <div className="content mt-3">
                                        <p><b>Description</b></p>
                                        <p className="font-14">America Finest Maintenance provides janitorial services to commercial properties and is seeking a manager to oversee buildings in a territory, manage service providers, and work with the account manager on resolving customer issues.</p>
                                        <p className="font-14">As a City-Wide Night Manager, you will develop and maintain productive working relationships with service providers, communicate with the account manager any issues that need immediate attention, make recommendations of service providers for work assignments, and inspect buildings. In the buildings you oversee, you will be responsible for inspecting, organizing, managing, and maintaining records and inventories.</p>
                                        <p className="font-14">America Finest Maintenance is a privately held company that emphasizes a dedication to serving others with excellence in all we do. Here you will find a high-energy work environment that balances high expectations with collaboration, group support, and fun.</p>
                                        <p><b>Requirements</b></p>
                                        <ul className="apply-job-list">
                                            <li>Respond to guest complaints, requests, and emergencies</li>
                                            <li>Oversee staff on a daily basis</li>
                                            <li>Demonstrated ability to work effectively in a team environment</li>
                                            <li>Excellent communication skills</li>
                                            <li>Energetic, hard-working, dependable, and detail-oriented</li>
                                            <li>Previous management experience</li>
                                            <li>Work experience as a Supervisor or similar role</li>
                                            <li>6 months of related experience and/or training</li>
                                            <li>High school diploma or equivalent (GED)</li>
                                            <li>Solid understanding of basic business math</li>
                                            <li>Strong MS Office experience</li>
                                            <li>Ability to read and interpret documents such as safety rules, operating and maintenance instructions, and procedure manuals</li>
                                            <li>Ability to write routine reports and correspondence</li>
                                            <li>Prompt, regular attendance</li>
                                        </ul>
                                        <p><b>Benefits</b></p>
                                        <ul className="apply-job-list">
                                            <li>Comprehensive Benefits Package (Health, Dental, Vision, etc.)</li>
                                            <li>Paid Time Off</li>
                                            <li>Paid Holidays</li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                            <div className="apply-job-button pb-3">
                                <button data-bs-toggle="modal" data-bs-target="#staticBackdrop">Apply</button>
                            </div>
                        </div>


                        {/*modal  */}
                        <div>
                            {/* Button trigger modal */}

                            {/* Modal */}
                            <div className="modal fade" id="staticBackdrop" data-bs-backdrop="static" data-bs-keyboard="false" tabIndex={-1} aria-labelledby="staticBackdropLabel" aria-hidden="true">
                                <div className="modal-dialog ">
                                    <div className="modal-content">
                                        <div className="modal-header">
                                            <h3 className="applyjob-heading" >Personal information</h3>
                                            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close" />
                                        </div>
                                        <div className="modal-body" >
                                            <div className="row">
                                                <div className="col-lg-12 col-12">
                                                    <form className="">
                                                        <div className="mb-3">
                                                            <label htmlFor="name">Name :</label>
                                                            <input type="text" className="form-control my-1" id="name" name="name" />
                                                        </div>
                                                        <div className="mb-3">
                                                            <label htmlFor="email">Email :</label>
                                                            <input type="text" className="form-control my-1" id="email" name="email" />
                                                        </div> <div className="mb-3">
                                                            <label htmlFor="address">Address :</label>
                                                            <input type="text" className="form-control my-1" id="address" name="address" />
                                                        </div> <div className="mb-3">
                                                            <label htmlFor="name">Upload Resume :</label>
                                                            <input type="file" className="form-control my-1" id="name" name="resume" />
                                                        </div>
                                                    </form>
                                                </div>

                                            </div>
                                        </div>
                                        <div className="modal-footer">

                                            <div className="apply-job-button pb-3">
                                                <button data-bs-dismiss="modal">Submit</button>
                                            </div>
                                        </div>
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

export default ApplyJob
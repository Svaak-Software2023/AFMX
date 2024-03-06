import { useState } from "react"
import ImportantLinks from "../../components/ImportantLinks/ImportantLinks"
import "./applyJob.css"
import { useForm } from "react-hook-form"
import { useDispatch } from "react-redux"
import { submitForm } from "../../redux/featurs/careerSlice"

function ApplyJob() {
    const [option, setOption] = useState(false)
    const tonglehandler = () => {
        setOption(!option)
        window.scrollTo(0, 0)
    }

    const [careerAdd, setCareerAdd] = useState(false)
    const [educationAdd, setEducationAdd] = useState(false)

    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm();

    const[files,setFiles]=useState([])

    const handleChange=(e)=>{
        setFiles([...e.target.files]);
        console.log(e.target.files);
    }

    const dispatch=useDispatch()
    const onSubmit=(data)=>{ 
        const formData = new FormData();
        for (var key in data) {
            if (data.hasOwnProperty(key)) {
                formData.append(key, data[key]);
            }
        }
        files.forEach((file) => {
            formData.append("resume", file); // Use [] to handle multiple files
        });
        dispatch(submitForm(formData));
        console.log("Form Data",data);
    }
    return (
        <>
            <div className="container p-0 my-3">
                <div className="row m-0 p-0 ">
                    <div className="col-lg-3 col-md-3 col-0 p-0 service_menu">
                        <ImportantLinks />
                    </div>
                    <div className=" col-lg-9 col-md-9 col-12 bg-white p-3 service_content">
                        <div className="job-tongler">
                            <h5 className={!option && "job-tongler-active"} onClick={tonglehandler}>Description</h5>
                            <h5 className={option && "job-tongler-active"} onClick={tonglehandler}>Application</h5>
                        </div>
                        {
                            !option
                                ?
                                <div className="container bg-white my-2">

                                    <div className="tab-pane show active  p-lg-5 p-2" >
                                        <div className="row">
                                            <div className="content mt-3">
                                                <p><b>Description</b></p>
                                                <p className="font-14">America Finest Maintenance provides janitorial services to commercial properties and is seeking a manager to oversee buildings in a territory, manage service providers, and work with the account manager on resolving customer issues.</p>
                                                <p className="font-14">As a AFMX Night Manager, you will develop and maintain productive working relationships with service providers, communicate with the account manager any issues that need immediate attention, make recommendations of service providers for work assignments, and inspect buildings. In the buildings you oversee, you will be responsible for inspecting, organizing, managing, and maintaining records and inventories.</p>
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
                                        <button onClick={tonglehandler}>Apply</button>
                                    </div>
                                </div>
                                :
                                <div className="container bg-white my-2">
                                    <div className="tab-pane show active  p-lg-5 p-2" >
                                        <div className="row">
                                            <div className="content mt-3">

                                                <div className="row">
                                                    <div className="col-lg-12 col-12">
                                                        <form onSubmit={handleSubmit(onSubmit)}>
                                                            <p className="mb-3"><b>Personal information</b></p>
                                                            <div className="row m-0 p-0">
                                                                <div className="col-lg-6 col-12 mb-3">
                                                                    <label className="career-label" htmlFor="firstName">First Name :</label>
                                                                    <input type="text" className="form-control my-1" id="firstName" name="firstName" {...register('firstName', { required: true })} />
                                                                    {errors.firstName && <p className="text-danger">First name is required.</p>}
                                                                </div>

                                                                <div className="col-lg-6 col-12 mb-3">
                                                                    <label className="career-label" htmlFor="lastName">Last Name :</label>
                                                                    <input type="text" className="form-control my-1" id="lastName" name="lastName" {...register('lastName', { required: true })} />
                                                                    {errors.lastName && <p className="text-danger">Last name is required.</p>}
                                                                </div>

                                                                <div className="col-lg-12 col-12 mb-3">
                                                                    <label className="career-label" htmlFor="email">Email :</label>
                                                                    <input type="email" className="form-control my-1" id="email" name="email" {...register('email', { required: true })} />
                                                                    {errors.email && <p className="text-danger">Email is required.</p>}
                                                                </div>

                                                                <div className="col-lg-12 col-12 mb-3">
                                                                    <label className="career-label" htmlFor="phone">Phone :</label>
                                                                    <input type="text" className="form-control my-1" id="phone" name="phone" {...register('phone', { required: true })} />
                                                                    <span style={{ fontSize: "12px" }}>The hiring team may use this number to contact you about this job.</span>
                                                                    {errors.phone && <p className="text-danger">Phone number is required.</p>}
                                                                </div>

                                                                <p className="mb-3"><b>Profile</b></p>

                                                                <div className="d-flex justify-content-between mb-3">
                                                                    <div>
                                                                        <p>Education (Optional)</p>
                                                                    </div>
                                                                    <div>
                                                                        {!educationAdd ? <p className="career-add-btn" onClick={() => setEducationAdd(!educationAdd)}>+ Add</p>
                                                                            :
                                                                            <p className="career-add-btn" onClick={() => setEducationAdd(!educationAdd)}>Clear</p>
                                                                        }
                                                                    </div>
                                                                </div>

                                                                {
                                                                    educationAdd && <> <div className="row m-0 py-3 mb-3" style={{ backgroundColor: "#e5e5e5" }}>
                                                                        <div className="col-lg-12 col-12 mb-3">
                                                                            <label className="career-label" htmlFor="School">School :</label>
                                                                            <input type="text" className="form-control my-1" id="School" name="School" {...register('school', { required: true })} />
                                                                            {errors.school && <p className="text-danger">School name is required.</p>}
                                                                        </div>

                                                                        <div className="col-lg-12 col-12 mb-3">
                                                                            <label className="career-label" htmlFor="fieldOfStudy">Field of study (Optional) :</label>
                                                                            <input type="text" className="form-control my-1" id="fieldOfStudy" name="fieldOfStudy" {...register('fieldOfStudy')} />
                                                                            {/* {errors.fieldOfStudy && <p className="text-danger">This field is required.</p>} */}
                                                                        </div>

                                                                        <div className="col-lg-12 col-12 mb-3">
                                                                            <label className="career-label" htmlFor="Degree">Degree (Optional) :</label>
                                                                            <input type="text" className="form-control my-1" id="Degree" name="Degree" {...register('degree')} />
                                                                            {/* {errors.degree && <p className="text-danger">This field is required.</p>} */}
                                                                        </div>

                                                                        <div className="col-lg-6 col-12 mb-3">
                                                                            <label className="career-label" htmlFor="Start date">Start date (Optional) :</label>
                                                                            <input type="date" className="form-control my-1" id="Start date"  {...register('startDate')} />
                                                                            {/* {errors.startDate && <p className="text-danger">This field is required.</p>} */}
                                                                        </div>

                                                                        <div className="col-lg-6 col-12 mb-3">
                                                                            <label className="career-label" htmlFor="End date">End date (Optional) :</label>
                                                                            <input type="date" className="form-control my-1" id="End date" name="End date" {...register('endDate')} />
                                                                            {/* {errors.endDate && <p className="text-danger">This field is required.</p>} */}
                                                                        </div>
                                                                    </div>
                                                                    </>
                                                                }

                                                                <div className="d-flex justify-content-between mb-3">
                                                                    <div>
                                                                        <p>Experience (Optional)</p>
                                                                    </div>
                                                                    <div>
                                                                        {!careerAdd ? <p className="career-add-btn" onClick={() => setCareerAdd(!careerAdd)}>+ Add</p>
                                                                            : <p className="career-add-btn" onClick={() => setCareerAdd(!careerAdd)}>Clear</p>

                                                                        }
                                                                    </div>
                                                                </div>

                                                                {
                                                                    careerAdd && <>
                                                                        <div className="row m-0 py-3 mb-3" style={{ backgroundColor: "#e5e5e5" }}>
                                                                            <div className="col-lg-12 col-12 mb-3">
                                                                                <label className="career-label" htmlFor="title">Title :</label>
                                                                                <input type="text" className="form-control my-1" id="title"  {...register('title', { required: true })} />
                                                                                {errors.title && <p className="text-danger">This field is required.</p>}
                                                                            </div>

                                                                            <div className="col-lg-12 col-12 mb-3">
                                                                                <label className="career-label" htmlFor="company">Company (Optional) :</label>
                                                                                <input type="text" className="form-control my-1" id="company" {...register('company')} />
                                                                                {/* {errors.company && <p className="text-danger">This field is required.</p>} */}
                                                                            </div>

                                                                            <div className="col-lg-12 col-12 mb-3">
                                                                                <label className="career-label" htmlFor="Industry">Industry (Optional) :</label>
                                                                                <input type="text" className="form-control my-1" id="Industry" name="Industry" />
                                                                            </div>

                                                                            <div className="col-lg-12 col-12 mb-3">
                                                                                <label className="career-label" htmlFor="Summary">Summary (Optional) :</label>
                                                                                <textarea rows={4} type="text" className="form-control my-1" id="Summary" name="Summary" />
                                                                            </div>

                                                                            <div className="col-lg-6 col-12 mb-3">
                                                                                <label className="career-label" htmlFor="Start date">Start date (Optional) :</label>
                                                                                <input type="date" className="form-control my-1" id="Start date" name="Start date" />
                                                                            </div>

                                                                            <div className="col-lg-6 col-12 mb-3">
                                                                                <label className="career-label" htmlFor="End date">End date (Optional) :</label>
                                                                                <input type="date" className="form-control my-1" id="End date" name="End date" />
                                                                            </div>
                                                                        </div>
                                                                    </>
                                                                }


                                                                <div className="col-lg-12 col-12 mb-3">
                                                                    <label className="career-label" htmlFor="Summary">Summary (Optional) :</label>
                                                                    <textarea rows={4} type="text" className="form-control my-1" id="Summary"  {...register('summary')} />
                                                                </div>

                                                                <div className="col-lg-12 col-12 mb-3">
                                                                    <label className="career-label" htmlFor="Resume">Resume :</label>
                                                                    <input type="file" className="form-control my-1" id="Resume" name="Resume" 
                                                                    
                                                                    onChange={handleChange}
                                                                    />
                                                                    {/* {errors.Resume && <p className="text-danger">This field is required.</p>} */}
                                                                </div>

                                                                <p className="mb-3"><b>Details</b></p>

                                                                <div className="col-lg-12 col-12 mb-3">
                                                                    <label className="career-label" htmlFor="Cover letter">Cover letter (Optional) :</label>
                                                                    <textarea rows={4} type="text" className="form-control my-1" id="Cover letter" {...register('coverLatter')}/>
                                                                </div>

                                                                <div className="col-lg-12 col-12 mb-3">
                                                                    <p className="d-flex aliign-items-center"><span className="text-danger fs-4 mx-1">*</span>Can you provide proof that you are legally eligible for employment in the US?</p>
                                                                    <div className="job-option-tongle d-flex">
                                                                        <div className="d-flex mx-3">
                                                                            <input type="radio" name="usEmployee" id="usEmployee" {...register('eligibleForEmployment', { required: true })} />
                                                                            <span className="mx-1">Yes</span>
                                                                        </div>
                                                                        <div className="d-flex mx-3">
                                                                            <input type="radio" name="usEmployee" id="usEmployee" {...register('eligibleForEmployment', { required: true })} />
                                                                            <span className="mx-1">No</span>
                                                                        </div>

                                                                    </div>
                                                                    {errors.eligibleForEmployment && <p className="text-danger">This field is required.</p>}
                                                                </div>
                                                                <div className="col-lg-12 col-12 mb-3">
                                                                    <p className="d-flex aliign-items-center"><span className="text-danger fs-4 mx-1">*</span>Have you previously been employed by AFMX ?</p>
                                                                    <div className="job-option-tongle d-flex">
                                                                        <div className="d-flex mx-3">
                                                                            <input type="radio" name="usCity" id="usCity" {...register('employedByCityWide', { required: true })} />
                                                                            <span className="mx-1">Yes</span>
                                                                        </div>
                                                                        <div className="d-flex mx-3">
                                                                            <input type="radio" name="usCity" id="usCity" {...register('employedByCityWide', { required: true })} />
                                                                            <span className="mx-1">No</span>
                                                                        </div>
                                                                    </div>
                                                                    {errors.employedByCityWide && <p className="text-danger">This field is required.</p>}
                                                                </div>
                                                            </div>
                                                            <div className="apply-job-button pb-3 mt-3">
                                                                <button type="submit">Submit</button>
                                                            </div>
                                                        </form>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                        }

                        <div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default ApplyJob
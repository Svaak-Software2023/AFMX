import { useState } from "react"
import ImportantLinks from "../../components/ImportantLinks/ImportantLinks"
import "./applyJob.css"
import { useForm } from "react-hook-form"
import { useDispatch, useSelector } from "react-redux"
import { submitJobForm } from "../../redux/features/JobSlice"
import JobDescription from "./JobDescription"
import { useNavigate, useParams } from "react-router-dom"
import Loader from "../../components/Loader/Loader"

function ApplyJob() {
    const [option, setOption] = useState(false)
    const tonglehandler = () => {
        setOption(!option)
        window.scrollTo(0, 0)
    }

    const {loading}=useSelector((state)=>state.JobSlice)
    const {title}=useParams()
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
    const navigate=useNavigate()
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
        dispatch(submitJobForm({formData,navigate}))
        console.log("Form Data",data);
    }

    if(loading) return <Loader/>
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
                              <JobDescription tonglehandler={tonglehandler} title={title}/>
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

                                                                

                                                                <div className="d-flex justify-content-between mb-3">
                                                                    <div>
                                                                        <p className="mb-3"><b>Education</b></p>
                                                                    </div>
                                                                   
                                                                </div>

                                                                <div className="row m-0 py-3 mb-3" style={{ backgroundColor: "#e5e5e5" }}>
                                                                        <div className="col-lg-12 col-12 mb-3">
                                                                            <label className="career-label" htmlFor="School">School :</label>
                                                                            <input type="text" className="form-control my-1" id="School" name="School" {...register('school', { required: true })} />
                                                                            {errors.school && <p className="text-danger">School name is required.</p>}
                                                                        </div>

                                                                        <div className="col-lg-12 col-12 mb-3">
                                                                            <label className="career-label" htmlFor="fieldOfStudy">Field of study :</label>
                                                                            <input type="text" className="form-control my-1" id="fieldOfStudy" name="fieldOfStudy" {...register('fieldOfStudy', { required: true })} />
                                                                            {errors.fieldOfStudy && <p className="text-danger">This field is required.</p>}
                                                                        </div>

                                                                        <div className="col-lg-12 col-12 mb-3">
                                                                            <label className="career-label" htmlFor="Degree">Degree :</label>
                                                                            <input type="text" className="form-control my-1" id="Degree" name="Degree" {...register('degree', { required: true })} />
                                                                            {errors.degree && <p className="text-danger">This field is required.</p>}
                                                                        </div>

                                                                        <div className="col-lg-6 col-12 mb-3">
                                                                            <label className="career-label" htmlFor="Start date">Start date :</label>
                                                                            <input type="date" className="form-control my-1" id="Start date"  {...register('startDate', { required: true })} />
                                                                            {errors.startDate && <p className="text-danger">This field is required.</p>}
                                                                        </div>

                                                                        <div className="col-lg-6 col-12 mb-3">
                                                                            <label className="career-label" htmlFor="End date">End date :</label>
                                                                            <input type="date" className="form-control my-1" id="End date" name="End date" {...register('endDate',{required:true})} />
                                                                            {errors.endDate && <p className="text-danger">This field is required.</p>}
                                                                        </div>
                                                                    </div>
                                                                    

                                                                <div className="d-flex justify-content-between mb-3">
                                                                    <div>
                                                                    <p className="mb-3"><b>Experience</b></p>
                                                                    </div>
                                                                    
                                                                </div>

                                                                
                                                                        <div className="row m-0 py-3 mb-3" style={{ backgroundColor: "#e5e5e5" }}>
                                                                            <div className="col-lg-12 col-12 mb-3">
                                                                                <label className="career-label" htmlFor="title">Title :</label>
                                                                                <input type="text" className="form-control my-1" id="title"  {...register('title', { required: true })} />
                                                                                {errors.title && <p className="text-danger">This field is required.</p>}
                                                                            </div>

                                                                            <div className="col-lg-12 col-12 mb-3">
                                                                                <label className="career-label" htmlFor="company">Company :</label>
                                                                                <input type="text" className="form-control my-1" id="company" {...register('company', { required: true })} />
                                                                                {errors.company && <p className="text-danger">This field is required.</p>}
                                                                            </div>

                                                                            <div className="col-lg-12 col-12 mb-3">
                                                                                <label className="career-label" htmlFor="Industry">Industry :</label>
                                                                                <input type="text" className="form-control my-1" id="Industry" {...register('Industry', { required: true })}/>
                                                                                {errors.Industry && <p className="text-danger">This field is required.</p>}
                                                                            </div>

                                                                            <div className="col-lg-12 col-12 mb-3">
                                                                                <label className="career-label" htmlFor="Summary">Summary :</label>
                                                                                <textarea rows={4} type="text" className="form-control my-1" id="Summary" {...register('Summary', { required: true })} />
                                                                                {errors.Summary && <p className="text-danger">This field is required.</p>}
                                                                            </div>

                                                                            <div className="col-lg-6 col-12 mb-3">
                                                                                <label className="career-label" htmlFor="Start date">Start date :</label>
                                                                                <input type="date" className="form-control my-1" id="Start date" name="Start date" {...register('startDate', { required: true })} />
                                                                                {errors.startDate && <p className="text-danger">This field is required.</p>}

                                                                            </div>

                                                                            <div className="col-lg-6 col-12 mb-3">
                                                                                <label className="career-label" htmlFor="End date">End date (Optional) :</label>
                                                                                <input type="date" className="form-control my-1" id="End date" name="endDate" {...register('endDate', { required: true })} />
                                                                                {errors.endDate && <p className="text-danger">This field is required.</p>}
                                                                            </div>
                                                                        </div>
                                                                    
                                                                <div className="col-lg-12 col-12 mb-3">
                                                                    <label className="career-label" htmlFor="Summary">Summary (Optional) :</label>
                                                                    <textarea rows={4} type="text" className="form-control my-1" id="Summary"  {...register('summary')} />
                                                                </div>

                                                                <div className="col-lg-12 col-12 mb-3">
                                                                    <label className="career-label" htmlFor="Resume">Resume :</label>
                                                                    <input type="file"
                                                                     className="form-control my-1" 
                                                                     id="Resume" 
                                                                     name="Resume" 
                                                                     accept=".pdf,.doc,.docx"
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
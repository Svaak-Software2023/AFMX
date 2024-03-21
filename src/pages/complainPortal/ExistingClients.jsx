import React from 'react'
import ImportantLinks from "../../components/ImportantLinks/ImportantLinks";
import { IoDocumentText, IoLogOut, IoMail, IoPerson, IoSettingsSharp } from "react-icons/io5";
import { FaCamera, FaExclamationCircle, FaFolderPlus, FaIdCardAlt, FaPhoneAlt, FaVideo } from "react-icons/fa";
import { MdAddLocationAlt, MdCloudUpload, MdDateRange, MdMiscellaneousServices, MdOutlineSlowMotionVideo } from "react-icons/md";
import { FaCircleExclamation } from "react-icons/fa6";
import { MdBadge } from "react-icons/md";
import { AiFillMessage } from "react-icons/ai";
import { useState } from "react";
import { useForm } from "react-hook-form"
import { toast } from 'react-toastify';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { createExistingComplain } from '../../redux/features/complainSlice';


function ExistingClients() {
    const [file, setFile] = useState("")
    const [video, setVideo] = useState("")
    const [complainType, setComplainType] = useState("")
    const user = JSON.parse(localStorage.getItem('user'))
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm()

    const navigate = useNavigate()
    const dispatch = useDispatch()

    const onSubmit = (data) => {
        console.log(user.clientId);
        const newData = new FormData();
        newData.append('loggedInIds', Number(user.clientId))
        newData.append('evidencePicture', file);
        newData.append('evidenceVideo', video);
        Object.entries(data).forEach(([key, value]) => {
            newData.append(key, value);
        });
        dispatch(createExistingComplain({ newData, navigate, toast }))
    }

    return (
        <>
            <div className="container p-0 my-3 ">
                <div className="row m-0 p-0 ">
                    <div className="col-lg-3 col-md-3 col-0 p-0 service_menu">
                        <ImportantLinks />
                    </div>
                    <div className=" col-lg-9 col-md-9 p-0 col-12 service_content bg-white">
                        <h3 className="left-menu-heading fs-6" >
                            Complaint
                        </h3>
                        <div>
                        </div>
                        <div className="p-3">
                            <h3 className="heading fs-6 mb-4">Add Complaint</h3>
                            <div className="row mt-3 px-lg-3">
                                <form onSubmit={handleSubmit(onSubmit)}>
                                
                                    <div className="row">
                                        <div className="col-lg-6">
                                            <h3 className="complain-input-lebel"><IoPerson className='name-icon' /> Customer Name</h3>
                                            <div className="mb-3 complain-input-div">
                                                <input type="text" className="form-control shadow-none complain-input" {...register("customerName", { required: true, maxLength: 40 })} placeholder="Complainer Name..." />
                                                {errors.complaineeName && <span className='error-message'>Customer name is required</span>}
                                            </div>
                                        </div>

                                        <div className="col-lg-6">
                                            <h3 className="complain-input-lebel"><FaPhoneAlt className='phone-icon' /> Phone No</h3>
                                            <div className="mb-3 complain-input-div">
                                                <input type="text" className="form-control shadow-none complain-input" {...register('customerPhone', { required: true })} placeholder="Your Phone No..." />
                                                {errors.complaineePhone && <span className='error-message'>Phone number is required</span>}
                                            </div>
                                        </div>
                                    </div>

                                    <div className="row">
                                        <div className="col-lg-6 col-12">
                                            <h3 className="complain-input-lebel"><IoMail className='email-icon' /> Email</h3>
                                            <div className="mb-3 complain-input-div">
                                                <input type="email" className="form-control shadow-none complain-input" {...register('customerEmail', { required: true })} placeholder="Enter valid Email Address..." />
                                                {errors.complaineeEmail && <span className='error-message'>Email Id is required</span>}
                                            </div>
                                        </div>

                                        <div className="col-lg-6 col-12">
                                            <h3 className="complain-input-lebel"><IoSettingsSharp className='service-icon' /> Services</h3>
                                            <div className="mb-3 complain-input-div">
                                                <select type="text" className="form-control shadow-none complain-select" {...register('complaintServiceName', { required: true })}>
                                                    <option value="" >Select Service</option>
                                                    <option value="Cabinet Assembly" >Cabinet Assembly</option>
                                                    <option value="5" >Service 2</option>
                                                    <option value="Service 3" >Service 3</option>
                                                    <option value="Service 4" >Service 4</option>
                                                    <option value="Service 5" >Service 5</option>
                                                </select>
                                                {errors.complaintServiceName && <span className='error-message'>Services is required</span>}
                                            </div>
                                        </div>

                                        <div className="col-lg-12 col-12">
                                            <h3 className="complain-input-lebel "><FaCircleExclamation className='complain-type-icon' /> Complaint Type</h3>
                                            <div className="mb-3 complain-input-div">
                                                <select type="text" className="form-control shadow-none complain-select" {...register('complaintType', { required: true })} onChange={(e) => setComplainType(e.target.value)} >
                                                    <option value="" >Select Complain Type</option>
                                                    <option value="Driver/Fleet Vehicle Complaint" >Driver/Fleet Vehicle Complaint</option>
                                                    <option value="Employee Complaint" >Employee Complaint</option>
                                                    <option value="Billing Help" >Billing Help</option>
                                                    <option value="Other">Other</option>
                                                </select>
                                                {errors.complainType && <span className='error-message'>Complaint type is required</span>}
                                            </div>
                                        </div>

                                        {
                                            complainType == "Driver/Fleet Vehicle Complaint" ?
                                                <>
                                                    <div className="col-lg-6 col-12">
                                                        <h3 className="complain-input-lebel"><IoPerson className='name-icon' /> Driver Name</h3>
                                                        <div className="mb-3 complain-input-div">
                                                            <input type="text" className="form-control shadow-none complain-input" {...register('driverName', { required: true })} placeholder="Driver Name..." />
                                                            {errors.driverName && <span className='error-message'>Driver name is required</span>}
                                                        </div>
                                                    </div>

                                                    <div className="col-lg-6 col-12">
                                                        <h3 className="complain-input-lebel"><FaIdCardAlt className='badge-icon' /> Badge No</h3>
                                                        <div className="mb-3 complain-input-div">
                                                            <input type="text" className="form-control shadow-none complain-input" {...register('badgeNo', { required: true })} placeholder="Driver Badge No..." />
                                                            {errors.badgeNumber && <span className='error-message'>Badge number is required</span>}
                                                        </div>
                                                    </div>

                                                    <div className="col-lg-6 col-12">
                                                        <h3 className="complain-input-lebel"><IoDocumentText className='licence-icon' />Licensee Plate Number</h3>
                                                        <div className="mb-3 complain-input-div">
                                                            <input type="text" className="form-control shadow-none complain-input" {...register('licensePlateNo', { required: true })} placeholder="Enter Vehicle Plat No..." />
                                                            {errors.fleetAndLicenseePlateNumber && <span className='error-message'>Fleet and licensee plate number is required</span>}
                                                        </div>
                                                    </div>

                                                    <div className="col-lg-6 col-12">
                                                        <h3 className="complain-input-lebel"><AiFillMessage className='other-icon' /> Other</h3>
                                                        <div className="mb-3 complain-input-div">
                                                            <input type="text" className="form-control shadow-none complain-input" {...register('other')} placeholder="Other then above info..." />
                                                        </div>
                                                    </div>
                                                </>
                                                : ""
                                        }

                                        {
                                            complainType == "Employee Complaint" ?
                                                <>
                                                    <div className="col-lg-6 col-12">
                                                        <h3 className="complain-input-lebel"><IoPerson className='name-icon' /> Employee Name</h3>
                                                        <div className="mb-3 complain-input-div">
                                                            <input type="text" className="form-control shadow-none complain-input" {...register('employeeName', { required: true })} placeholder="Employee Name..." />
                                                            {errors.employeeName && <span className='error-message'>Employee name is required</span>}
                                                        </div>
                                                    </div>

                                                    <div className="col-lg-6 col-12">
                                                        <h3 className="complain-input-lebel"><MdBadge className='badge-icon' /> Badge No</h3>
                                                        <div className="mb-3 complain-input-div">
                                                            <input type="text" className="form-control shadow-none complain-input" {...register('badgeNo', { required: true })} placeholder="Employee Badge No..." />
                                                            {errors.badgeNumber && <span className='error-message'>Badge number is required</span>}
                                                        </div>
                                                    </div>

                                                    <div className="col-lg-12 col-12">
                                                        <h3 className="complain-input-lebel"><AiFillMessage className='other-icon' /> Other</h3>
                                                        <div className="mb-3 complain-input-div">
                                                            <input type="text" className="form-control shadow-none complain-input" {...register('other')} placeholder="Other" />
                                                        </div>
                                                    </div>
                                                </> : ""
                                        }


                                        {
                                            complainType == "Billing Help" ?
                                                <>
                                                    <div className="col-lg-6 col-12">
                                                        <h3 className="complain-input-lebel"><IoPerson className='name-icon' /> Billing Help</h3>
                                                        <div className="mb-3 complain-input-div">
                                                            <input type="text" className="form-control shadow-none complain-input" {...register('billingHelp', { required: true })} placeholder="Billing Help" />
                                                            {errors.billingHelp && <span className='error-message'>Billing help is required</span>}
                                                        </div>
                                                    </div>
                                                    <div className="col-lg-6 col-12">
                                                        <h3 className="complain-input-lebel"><AiFillMessage className='other-icon' /> Other</h3>
                                                        <div className="mb-3 complain-input-div">
                                                            <input type="text" className="form-control shadow-none complain-input" {...register('other')} placeholder="Other" />
                                                        </div>
                                                    </div>
                                                </>
                                                : ""
                                        }
                                        {
                                            complainType == "Other" ?
                                                <div className="col-lg-12 col-12">
                                                    <h3 className="complain-input-lebel"><AiFillMessage className='other-icon' /> Other</h3>
                                                    <div className="mb-3 complain-input-div">
                                                        <input type="text" className="form-control shadow-none complain-input" {...register('other')} placeholder="Other" />
                                                    </div>
                                                </div>
                                                : ""
                                        }

                                        <div className="col-lg-6 col-12">
                                            <h3 className="complain-input-lebel"><MdAddLocationAlt className='address-icon' /> Address</h3>
                                            <div className="mb-3 complain-input-div">
                                                <input type="text" className="form-control shadow-none complain-input" {...register('complaintAddress', { required: true })} placeholder="Enter Address of Incedent..." />
                                                {errors.address && <span className='error-message'>Address is required</span>}
                                            </div>
                                        </div>

                                        <div className="col-lg-6 col-12">
                                            <h3 className="complain-input-lebel"><MdDateRange className='date-icon' /> Enter the Date of Incident</h3>
                                            <div className="mb-3 complain-input-div">
                                                <input type="date" className="form-control shadow-none complain-input" {...register('dateOfIncedent', { required: true })} placeholder='Select Date' />
                                                {errors.date && <span className='error-message'>Date is required</span>}
                                            </div>
                                        </div>

                                        <div className="col-lg-6 col-12">
                                            <h3 className="complain-input-lebel"><FaFolderPlus className='name-icon' /> Created By</h3>
                                            <div className="mb-3 complain-input-div">
                                                <input type="text" className="form-control shadow-none complain-input" {...register('createdBy', { required: true })} placeholder="Person name who was involved in incident..." />
                                                {errors.createdBy && <span className='error-message'>Created by is required</span>}
                                            </div>
                                        </div>

                                        <div className="col-lg-6 col-12">
                                            <h3 className="complain-input-lebel"><IoLogOut className='phone-icon' /> Desired Outcome</h3>
                                            <div className="mb-3 complain-input-div">
                                                <input type="text" className="form-control shadow-none complain-input" {...register('desireOutcome', { required: true })} placeholder="What you think about this complaint..." />
                                                {errors.desiredOutcome && <span className='error-message'>Desired outcome is required</span>}
                                            </div>
                                        </div>

                                        <div className="col-lg-12 col-12">
                                            <h3 className="complain-input-lebel"><FaExclamationCircle className='complain-icon' />Complaint Message</h3>
                                            <div className="mb-3 complain-input-div">
                                                <textarea type="text" className="form-control shadow-none complain-input" {...register('complaintMessage', { required: true })} rows="6" cols="50" placeholder="Write your message..."></textarea>
                                                {errors.complaintMessage && <span className='error-message'>Complaint detail is required</span>}
                                            </div>
                                        </div>

                                        <div className="col-lg-6 col-12">
                                            <h3 className="complain-input-lebel"><FaCamera className='phone-icon' /> Evidence Picture</h3>
                                            <div className="mb-3 complain-video">
                                                <div>
                                                    <div className="file-upload-icon complain-input">
                                                        <MdCloudUpload className='image-file-icon' />
                                                        <h3>Drop File here or</h3>
                                                        <div className='d-flex justify-content-center'>
                                                            <input type="file" className="form-control shadow-none complain-input file-input" accept="image/png, image/gif, image/jpeg" onChange={e => setFile(e.target.files[0])} name="complaintImage" placeholder="Select File" />
                                                        </div>
                                                        {file && <span>{file.name}</span>}
                                                        {!file && <span className='error-message mt-2'>Picture is required</span>}
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-lg-6 col-12">
                                            <h3 className="complain-input-lebel"><MdOutlineSlowMotionVideo className='video-icon' /> Evidence Video</h3>
                                            <div className="mb-3 complain-video">
                                                <div>
                                                    <div className="file-upload-icon complain-input">
                                                        <MdCloudUpload className='video-file-icon' />
                                                        <h3>Drop File here or</h3>
                                                        <div className='d-flex justify-content-center'>
                                                            <input type="file" className="form-control shadow-none complain-input file-input" accept="video/mp4,video/x-m4v,video/*" onChange={e => setVideo(e.target.files[0])} name="complaintImage" placeholder="Select Video" />
                                                        </div>
                                                        {video && <span>{video.name}</span>}

                                                        {!video && <span className='error-message mt-2'>Video is required</span>}
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="complain-button">
                                        <button type="submit">Submit</button>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default ExistingClients
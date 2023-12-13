import React from 'react'
import ImportantLinks from "../../components/ImportantLinks/ImportantLinks";
import { IoMail, IoPerson } from "react-icons/io5";
import { FaExclamationCircle, FaFolderPlus, FaPhoneAlt, FaVideo } from "react-icons/fa";
import { MdAddLocationAlt, MdDateRange, MdInsertPhoto, MdMiscellaneousServices } from "react-icons/md";
import { BsPersonFillExclamation,BsFillCreditCard2FrontFill } from "react-icons/bs";
import { MdBadge } from "react-icons/md";
import { VscOutput } from "react-icons/vsc";
import { RiBillFill, RiPsychotherapyFill } from "react-icons/ri";
import { useState } from "react";
import { useForm } from "react-hook-form"
import { toast } from 'react-toastify';
import { useDispatch, useSelector } from 'react-redux';
import { complainCreate } from '../../redux/featurs/complainSlice';
import { useNavigate } from 'react-router-dom';

function ExistingClients() {
    const [file, setFile] = useState("")
    const [video, setVideo] = useState("")
    const [complainType, setComplainType] = useState("")
    // const initialValue = { name: "", phone: "", category: "", service: "", description: "" }
    // const user = useSelector((state) => state.auth.user)
    const user = JSON.parse(localStorage.getItem('user'))
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm()

    const navigate = useNavigate()
    const dispatch = useDispatch()

    const onSubmit = async (data) => {
        // data.loggedInIds=user.clientId;
        // data.complaintImage=file
        const newData = new FormData();
        newData.append('loggedInIds', Number(user.clientId))
        newData.append('complaintImage', file);
        Object.entries(data).forEach(([key, value]) => {
            newData.append(key, value);
        });
        // dispatch(complainCreate({ newData, navigate, toast }))

        try {
            const response = await fetch('https://85f8-122-161-49-135.ngrok-free.app/api/create-complaint', {
                method: 'POST',
                body: newData,
            });

            if (response.ok) {
                // File and form data sent successfully
                console.log('File and form data sent successfully', response);
            } else {
                console.error('Error sending file and form data');
            }
        } catch (error) {
            console.error('Error:', error);
        }

        for (const [key, value] of newData.entries()) {
            console.log(`${key}: ${value}`);
        }
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
                                            <h3 className="complain-input-lebel"><IoPerson/> Customer Name</h3>
                                            <div className="mb-3 complain-input-div">
                                                <input type="text" className="form-control shadow-none complain-input" {...register("complaineeName", { required: true, maxLength: 40 })} placeholder="Enter Your Name" />
                                                {errors.complaineeName && <span className='error-message'>Customer name is required</span>}
                                            </div>
                                        </div>

                                        <div className="col-lg-6">
                                            <h3 className="complain-input-lebel"><FaPhoneAlt/> Phone No</h3>
                                            <div className="mb-3 complain-input-div">
                                                <input type="text" className="form-control shadow-none complain-input" {...register('complaineePhone', { required: true })} placeholder="Enter Your Phone Number" />
                                                {errors.complaineePhone && <span className='error-message'>Phone number is required</span>}
                                            </div>
                                        </div>
                                    </div>

                                    <div className="row">
                                        <div className="col-lg-6 col-12">
                                            <h3 className="complain-input-lebel"><IoMail /> Email</h3>
                                            <div className="mb-3 complain-input-div">
                                                <input type="email" className="form-control shadow-none complain-input" {...register('complaineeEmail', { required: true })} placeholder="Enter Your Email Id" />
                                                {errors.complaineeEmail && <span className='error-message'>Email Id is required</span>}
                                            </div>
                                        </div>

                                        <div className="col-lg-6 col-12">
                                            <h3 className="complain-input-lebel"><MdMiscellaneousServices/> Services</h3>
                                            <div className="mb-3 complain-input-div">
                                                <select type="text" className="form-control shadow-none complain-select" {...register('complaintServiceName', { required: true })}>
                                                    <option value="" >Select Service</option>
                                                    <option value="Service 1" >Service 1</option>
                                                    <option value="Service 2" >Service 2</option>
                                                    <option value="Service 3" >Service 3</option>
                                                    <option value="Service 4" >Service 4</option>
                                                    <option value="Service 5" >Service 5</option>
                                                </select>
                                                {errors.complaintServiceName && <span className='error-message'>Services is required</span>}
                                            </div>
                                        </div>
                                    </div>

                                    <div className="row">
                                        <div className="col-lg-12 col-12">
                                            <h3 className="complain-input-lebel "><BsPersonFillExclamation/> Complain Type</h3>
                                            <div className="mb-3 complain-input-div">
                                                <select type="text" className="form-control shadow-none complain-select" {...register('complainType', { required: true })} onChange={(e) => setComplainType(e.target.value)} >
                                                    <option value="" >Select Complain Type</option>
                                                    <option value="Driver/Fleet Vehicle Complain" >Driver/Fleet Vehicle Complain</option>
                                                    <option value="Employee Complain" >Employee Complain</option>
                                                    <option value="Billing Help" >Billing Help</option>
                                                    <option value="Other" >Other</option>
                                                </select>
                                                {errors.complainType && <span className='error-message'>Complain type is required</span>}
                                            </div>
                                        </div>

                                        {
                                            complainType == "Driver/Fleet Vehicle Complain" ?
                                                <>
                                                    <div className="col-lg-6 col-12">
                                                        <h3 className="complain-input-lebel"><IoPerson/> Driver Name</h3>
                                                        <div className="mb-3 complain-input-div">
                                                            <input type="text" className="form-control shadow-none complain-input" {...register('driverName', { required: true })} placeholder="Enter Driver Name" />
                                                            {errors.driverName && <span className='error-message'>Driver name is required</span>}
                                                        </div>
                                                    </div>
                                                    <div className="col-lg-6 col-12">
                                                        <h3 className="complain-input-lebel"><MdBadge/> Badge No</h3>
                                                        <div className="mb-3 complain-input-div">
                                                            <input type="text" className="form-control shadow-none complain-input" {...register('badgeNumber', { required: true })} placeholder="Enter Badge Number" />
                                                            {errors.badgeNumber && <span className='error-message'>Badge number is required</span>}
                                                        </div>
                                                    </div>

                                                    <div className="col-lg-6 col-12">
                                                        <h3 className="complain-input-lebel"><BsFillCreditCard2FrontFill/>Licensee Plate Number</h3>
                                                        <div className="mb-3 complain-input-div">
                                                            <input type="text" className="form-control shadow-none complain-input" {...register('fleetAndLicenseePlateNumber', { required: true })} placeholder="Enter Licensee Plate Number" />
                                                            {errors.fleetAndLicenseePlateNumber && <span className='error-message'>Fleet and licensee plate number is required</span>}
                                                        </div>
                                                    </div>
                                                    <div className="col-lg-6 col-12">
                                                        <h3 className="complain-input-lebel"><RiPsychotherapyFill/> Other</h3>
                                                        <div className="mb-3 complain-input-div">
                                                            <input type="text" className="form-control shadow-none complain-input" {...register('other')} placeholder="Other" />
                                                        </div>
                                                    </div>
                                                </>
                                                : ""
                                        }

                                        {
                                            complainType == "Employee Complain" ?
                                                <>
                                                    <div className="col-lg-6 col-12">
                                                        <h3 className="complain-input-lebel"><IoPerson/> Employee Name</h3>
                                                        <div className="mb-3 complain-input-div">
                                                            <input type="text" className="form-control shadow-none complain-input" {...register('employeeName', { required: true })} placeholder="Enter Employee Name" />
                                                            {errors.employeeName && <span className='error-message'>Employee name is required</span>}
                                                        </div>
                                                    </div>
                                                    <div className="col-lg-6 col-12">
                                                        <h3 className="complain-input-lebel"><MdBadge/> Badge No</h3>
                                                        <div className="mb-3 complain-input-div">
                                                            <input type="text" className="form-control shadow-none complain-input" {...register('badgeNumber', { required: true })} placeholder="Enter Badge Number" />
                                                            {errors.badgeNumber && <span className='error-message'>Badge number is required</span>}
                                                        </div>
                                                    </div>
                                                    <div className="col-lg-12 col-12">
                                                        <h3 className="complain-input-lebel"><RiPsychotherapyFill/> Other</h3>
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
                                                        <h3 className="complain-input-lebel"><RiBillFill /> Billing Help</h3>
                                                        <div className="mb-3 complain-input-div">
                                                            <input type="text" className="form-control shadow-none complain-input" {...register('billingHelp', { required: true })} placeholder="Billing Help" />
                                                            {errors.billingHelp && <span className='error-message'>Billing help is required</span>}
                                                        </div>
                                                    </div>
                                                    <div className="col-lg-6 col-12">
                                                        <h3 className="complain-input-lebel"><RiPsychotherapyFill/> Other</h3>
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
                                                        <h3 className="complain-input-lebel"><RiPsychotherapyFill/> Other</h3>
                                                        <div className="mb-3 complain-input-div">
                                                            <input type="text" className="form-control shadow-none complain-input" {...register('other')} placeholder="Other" />
                                                        </div>
                                                    </div>
                                                : ""
                                        }

                                        <div className="col-lg-6 col-12">
                                            <h3 className="complain-input-lebel"><MdAddLocationAlt /> Address</h3>
                                            <div className="mb-3 complain-input-div">
                                                <input type="text" className="form-control shadow-none complain-input" {...register('address', { required: true })} placeholder="Enter Your Address" />
                                                {errors.address && <span className='error-message'>Address is required</span>}
                                            </div>
                                        </div>

                                        <div className="col-lg-6 col-12">
                                            <h3 className="complain-input-lebel"><MdDateRange /> Date</h3>
                                            <div className="mb-3 complain-input-div">
                                                <input type="date" className="form-control shadow-none complain-input" {...register('date', { required: true })} placeholder='Select Date' />
                                                {errors.date && <span className='error-message'>Date is required</span>}
                                            </div>
                                        </div>

                                        <div className="col-lg-6 col-12">
                                            <h3 className="complain-input-lebel"><FaFolderPlus /> Created By</h3>
                                            <div className="mb-3 complain-input-div">
                                                <input type="text" className="form-control shadow-none complain-input" {...register('createdBy', { required: true })} placeholder="Created By" />
                                                {errors.createdBy && <span className='error-message'>Created by is required</span>}
                                            </div>
                                        </div>

                                        <div className="col-lg-6 col-12">
                                            <h3 className="complain-input-lebel"><VscOutput/> Desired Outcome</h3>
                                            <div className="mb-3 complain-input-div">
                                                <input type="text" className="form-control shadow-none complain-input" {...register('desiredOutcome', { required: true })} placeholder="Desired Outcome" />
                                                {errors.desiredOutcome && <span className='error-message'>Desired outcome is required</span>}
                                            </div>
                                        </div>

                                        <div className="col-lg-6 col-12">
                                        <h3 className="complain-input-lebel"><MdInsertPhoto /> Photo</h3>
                                            <div className="mb-3 complain-input-div">
                                                <input type="file" className="form-control shadow-none complain-input" accept="image/png, image/gif, image/jpeg" onChange={e => setFile(e.target.files[0])} name="complaintImage" placeholder="Select File" />
                                                {!file && <span className='error-message'>Photo is required</span>}

                                            </div>
                                        </div>

                                        <div className="col-lg-6 col-12">
                                        <h3 className="complain-input-lebel"><FaVideo /> Video</h3>
                                            <div className="mb-3 complain-input-div">
                                                <input type="file" className="form-control shadow-none complain-input" accept="video/mp4,video/x-m4v,video/*" onChange={e => setVideo(e.target.files[0])} name="complaintImage" placeholder="Select Video" />
                                                {!video && <span className='error-message'>Video is required</span>}

                                            </div>
                                        </div>

                                    </div>

                                    <h3 className="complain-input-lebel"><FaExclamationCircle />Complaint Detail</h3>
                                    <div className="mb-3 complain-input-div">
                                        <textarea type="text" className="form-control shadow-none complain-input" {...register('complaintMessage', { required: true })} rows="3" cols="50" placeholder="Write your message..."></textarea>
                                        {errors.complaintMessage && <span className='error-message'>Complaint detail is required</span>}
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
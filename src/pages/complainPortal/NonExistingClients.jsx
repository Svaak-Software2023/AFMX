import React from 'react'
import ImportantLinks from "../../components/ImportantLinks/ImportantLinks";
import { IoDocumentText, IoLogOut, IoMail, IoPerson } from "react-icons/io5";
import { FaCamera, FaExclamationCircle, FaFolderPlus, FaIdCardAlt, FaPhoneAlt, FaVideo } from "react-icons/fa";
import { MdAddLocationAlt, MdCloudUpload, MdDateRange, MdInsertPhoto, MdMiscellaneousServices, MdOutlineSlowMotionVideo } from "react-icons/md";
import { FaCircleExclamation } from "react-icons/fa6";
import { MdBadge } from "react-icons/md";
import { AiFillMessage } from "react-icons/ai";
import { useState } from "react";
import { useForm } from "react-hook-form"
import { toast } from 'react-toastify';
import { useDispatch, useSelector } from 'react-redux';
import { complainCreate } from '../../redux/featurs/complainSlice';
import { useNavigate } from 'react-router-dom';

function NonExistingClients() {
  const [file, setFile] = useState("")
  const [video, setVideo] = useState("")
  const [complainType, setComplainType] = useState("")

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm()


  const onSubmit = async (data) => {
    console.log(data);
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
                  <div className="row mb-3">

                    <div className="col-lg-6 col-12">
                      <div className="complain-radio  m-lg-3 mb-0 ">
                        <input type="radio" id="radio1" name="complain_type" value="Complaint of Fleet" {...register("radio", { required: true })} />
                        <label htmlFor="radio1">Complaint of Fleet</label>
                      </div>
                    </div>

                    <div className="col-lg-6 col-12">
                      <div className="complain-radio m-lg-3 mb-0">
                        <input type="radio" id="radio2" name="complain_type" value="Complaint of Driver" {...register("radio", { required: true })} />
                        <label htmlFor="radio2">Complaint of Driver</label>
                      </div>
                    </div>
                    {errors.radio && <span className='error-message'>This feild is required</span>}
                  </div>

                  <div className="row">
                    <div className="col-lg-6">
                      <h3 className="complain-input-lebel"><IoPerson className='name-icon' /> Customer Name</h3>
                      <div className="mb-3 complain-input-div">
                        <input type="text" className="form-control shadow-none complain-input" {...register("complaineeName", { required: true, maxLength: 40 })} placeholder="Comlainee Name..." />
                        {errors.complaineeName && <span className='error-message'>Customer name is required</span>}
                      </div>
                    </div>

                    <div className="col-lg-6">
                      <h3 className="complain-input-lebel"><FaPhoneAlt className='phone-icon' /> Phone No</h3>
                      <div className="mb-3 complain-input-div">
                        <input type="text" className="form-control shadow-none complain-input" {...register('complaineePhone', { required: true })} placeholder="Your Phone No..." />
                        {errors.complaineePhone && <span className='error-message'>Phone number is required</span>}
                      </div>
                    </div>
                  </div>

                  <div className="row">
                    <div className="col-lg-6 col-12">
                      <h3 className="complain-input-lebel"><IoMail className='email-icon' /> Email</h3>
                      <div className="mb-3 complain-input-div">
                        <input type="email" className="form-control shadow-none complain-input" {...register('complaineeEmail', { required: true })} placeholder="Enter valid Email Address..." />
                        {errors.complaineeEmail && <span className='error-message'>Email Id is required</span>}
                      </div>
                    </div>

                    <div className="col-lg-6 col-12">
                      <h3 className="complain-input-lebel "><FaCircleExclamation className='complain-type-icon' /> Complain Type</h3>
                      <div className="mb-3 complain-input-div">
                        <select type="text" className="form-control shadow-none complain-select" {...register('complainType', { required: true })} onChange={(e) => setComplainType(e.target.value)} >
                          <option value="" >Select Complain Type</option>
                          <option value="Driver/Fleet Vehicle Complain" >Driver/Fleet Vehicle Complain</option>
                          <option value="Employee Complain" >Employee Complain</option>
                          <option value="Motor/Automobile  Accident" >Motor/Automobile  Accident</option>
                          <option value="Suggestions How We Can Improve" >Suggestions How We Can Improve</option>
                        </select>
                        {errors.complainType && <span className='error-message'>Complain type is required</span>}
                      </div>
                    </div>

                    {
                      complainType == "Driver/Fleet Vehicle Complain" ?
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
                              <input type="text" className="form-control shadow-none complain-input" {...register('badgeNumber', { required: true })} placeholder="Driver Badge No..." />
                              {errors.badgeNumber && <span className='error-message'>Badge number is required</span>}
                            </div>
                          </div>

                          <div className="col-lg-6 col-12">
                            <h3 className="complain-input-lebel"><IoDocumentText className='licence-icon' />Licensee Plate Number</h3>
                            <div className="mb-3 complain-input-div">
                              <input type="text" className="form-control shadow-none complain-input" {...register('fleetAndLicenseePlateNumber', { required: true })} placeholder="Enter Vehicle Plat No..." />
                              {errors.fleetAndLicenseePlateNumber && <span className='error-message'>Fleet and licensee plate number is required</span>}
                            </div>
                          </div>

                          <div className="col-lg-6 col-12">
                            <h3 className="complain-input-lebel"><AiFillMessage  className='other-icon' /> Other</h3>
                            <div className="mb-3 complain-input-div">
                              <input type="text" className="form-control shadow-none complain-input" {...register('other')} placeholder="Other then above info..." />
                            </div>
                          </div>
                        </>
                        : ""
                    }

                    {
                      complainType == "Employee Complain" ?
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
                              <input type="text" className="form-control shadow-none complain-input" {...register('badgeNumber', { required: true })} placeholder="Employee Badge No..." />
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
                      complainType == "Motor/Automobile  Accident" ?
                        <>
                          <div className="col-lg-6 col-12">
                            <h3 className="complain-input-lebel"><IoPerson className='name-icon' /> Details</h3>
                            <div className="mb-3 complain-input-div">
                              <input type="text" className="form-control shadow-none complain-input" {...register('details', { required: true })} placeholder="Enter Accident Detail ..." />
                              {errors.details && <span className='error-message'>Details is required</span>}
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
                      complainType == "Suggestions How We Can Improve" ?
                        <>
                          <div className="col-lg-6 col-12">
                            <h3 className="complain-input-lebel"><IoPerson className='name-icon' /> Suggestions</h3>
                            <div className="mb-3 complain-input-div">
                              <input type="text" className="form-control shadow-none complain-input" {...register('suggestions', { required: true })} placeholder="Enter Your Suggestions ..." />
                              {errors.suggestions && <span className='error-message'>Details is required</span>}
                            </div>
                          </div>

                          <div className="col-lg-6 col-12">
                            <h3 className="complain-input-lebel"><AiFillMessage  className='other-icon' /> Other</h3>
                            <div className="mb-3 complain-input-div">
                              <input type="text" className="form-control shadow-none complain-input" {...register('other')} placeholder="Other then above info..." />
                            </div>
                          </div>
                        </>
                        : ""
                    }

                    <div className="col-lg-6 col-12">
                      <h3 className="complain-input-lebel"><MdAddLocationAlt className='address-icon' /> Address</h3>
                      <div className="mb-3 complain-input-div">
                        <input type="text" className="form-control shadow-none complain-input" {...register('address', { required: true })} placeholder="Enter Address of Incedent..." />
                        {errors.address && <span className='error-message'>Address is required</span>}
                      </div>
                    </div>

                    <div className="col-lg-6 col-12">
                      <h3 className="complain-input-lebel"><MdDateRange className='date-icon' /> Enter the Date of Incedent</h3>
                      <div className="mb-3 complain-input-div">
                        <input type="date" className="form-control shadow-none complain-input" {...register('date', { required: true })} placeholder='Select Date' />
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
                        <input type="text" className="form-control shadow-none complain-input" {...register('desiredOutcome', { required: true })} placeholder="What you think about this complaint..." />
                        {errors.desiredOutcome && <span className='error-message'>Desired outcome is required</span>}
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
                            {!file && <span className='error-message'>Picture is required</span>}
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
                            {!video && <span className='error-message'>Video is required</span>}
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  <h3 className="complain-input-lebel"><FaExclamationCircle className='complain-icon' />Complaint Detail</h3>
                  <div className="mb-3 complain-input-div">
                    <textarea type="text" className="form-control shadow-none complain-input" {...register('complaintMessage', { required: true })} rows="6" cols="50" placeholder="Write your message..."></textarea>
                    {errors.complaintMessage && <span className='error-message'>Complaint detail is required</span>}
                  </div>
                  <div className="complain-button">
                    <button type="submit">Submit</button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div >
      </div >
    </>
  )
}

export default NonExistingClients
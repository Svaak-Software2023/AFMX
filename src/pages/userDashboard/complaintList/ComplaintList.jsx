import { useDispatch, useSelector } from "react-redux";
import LeftMenue from "../../../components/leftmenu/LeftMenu";
import "./style.css"
import DataTable from 'react-data-table-component';
import { useEffect, useRef, useState } from "react";
import { getComplaint } from "../../../redux/features/complainSlice";

import { IoDocumentText, IoLogOut, IoMail, IoPerson, IoSettingsSharp } from "react-icons/io5";
import { FaCamera, FaExclamationCircle, FaFolderPlus, FaIdCardAlt, FaPhoneAlt, FaVideo } from "react-icons/fa";
import { MdAddLocationAlt, MdCloudUpload, MdDateRange, MdMiscellaneousServices, MdOutlineSlowMotionVideo } from "react-icons/md";
import { FaCircleExclamation } from "react-icons/fa6";
import { TbDiscountCheckFilled } from "react-icons/tb";
import { MdBadge } from "react-icons/md";
import { AiFillMessage } from "react-icons/ai";
import moment from "moment";
import ComplainRemark from "./ComplainRemark";
import Loader from "../../../components/Loader/Loader";


function formateDate(date) {
    return moment(date).format("MM/DD/YYYY")
}

const customStyles = {
    rows: {
        style: {
            minHeight: '72px', // override the row height
        },
    },
    headCells: {
        style: {
            alignItems: "center",
            fontSize: "15px",
            backgroundColor: "#3f63b9",
            color: "white",
            width: "100%",
            height: "40px"
        },
    },
    cells: {
        style: {
            alignItems: "center",
            fontSize: "14px",
            //    backgroundColor:"#e2dddddb",
            borderBottom: "1px solid #e2dddddb",
            cursor: "pointer",
            height: "40px"

        },
    },
};


const columns = [

    {
        name: 'NAME',
        selector: row => row.customerName,
    },
    {
        name: 'STATUS',
        selector: row => {
            switch (row.complaintStatusId) {
                case 1:
                    return 'Open'
                    break;
                case 2:
                    return 'Not Yet Started'
                    break;
                case 3:
                    return 'In Review'
                    break;
                case 4:
                    return 'In Progress'
                    break;
                case 5:
                    return 'On Hold'
                    break;
                case 6:
                    return 'Completed'
                    break;
            }
        },
    },
    {
        name: 'Date',
        selector: row => formateDate(row.dateOfIncedent),
    },
];


function ComplaintList() {
    const user = JSON.parse(localStorage.getItem('user'))
    const dispach = useDispatch()
    const myRef = useRef()
    const allComplaints = useSelector((state) => state.complain.complaints)
    const loading = useSelector((state) => state.complain.loading)

    const [formData, setFormData] = useState([])

    useEffect(() => {
        // console.log(user);
        dispach(getComplaint(user.clientId))
    }, [])

    function handleClick(element) {
        const complaintDetail = allComplaints.find((item) => item.complaintId == element.complaintId)
        setFormData(complaintDetail)
        myRef.current.click()
    }

    return (
        <>
            <div className="container p-0 my-3">
                <div className="row m-0 p-0 ">
                    <div className="col-lg-3 col-md-3 col-0 p-0 service_menu">
                        <LeftMenue
                            type="User Menue"
                            data={[{ name: "Membership Dues" }, { name: "Benifits" }, { name: "Events" }, { name: "Training, Education" }, { name: "Advocacy" }, { name: "My Complaints" }]}
                            url="/media"
                        />
                    </div>
                    <div className=" col-lg-9 col-md-9 col-12 bg-white  service_content m-0 p-0" >
                        {loading
                            ?
                            <div className="d-flex align-items-center justify-content-center p-5" >
                                <div class="spinner-border" role="status">
                                    <span class="visually-hidden">Loading...</span>
                                </div>
                            </div>
                            :
                            <DataTable
                                customStyles={customStyles}
                                columns={columns}
                                data={allComplaints}
                                onRowClicked={handleClick}
                                pagination
                                dense
                            />}
                    </div>
                </div>
            </div>
            <div>
                {/* Button trigger modal */}
                <button ref={myRef} type="button" className="btn btn-primary" style={{ display: "none" }} data-bs-toggle="modal" data-bs-target="#staticBackdrop">
                    Launch static backdrop modal
                </button>

                {/* Modal */}
                <div className="modal fade" id="staticBackdrop" data-bs-backdrop="static" data-bs-keyboard="false" tabIndex={-1} aria-labelledby="staticBackdropLabel" aria-hidden="true">
                    <div className="modal-dialog modal-xl modal-dialog-scrollable">
                        <div className="modal-content">
                            <div className="modal-header">
                                <h5 className="modal-title" id="staticBackdropLabel">Complaint Information</h5>
                                <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close" />
                            </div>
                            <div className="modal-body">
                                <form >

                                    <div className="row">
                                        <div className="col-lg-6">
                                            <h3 className="complain-input-lebel"><IoPerson className='name-icon' /> Customer Name</h3>
                                            <div className="mb-3 complain-input-div">
                                                <input type="text" className="form-control shadow-none complain-input" value={formData.customerName} disabled />
                                            </div>
                                        </div>

                                        <div className="col-lg-6">
                                            <h3 className="complain-input-lebel"><FaPhoneAlt className='phone-icon' /> Phone No</h3>
                                            <div className="mb-3 complain-input-div">
                                                <input type="text" className="form-control shadow-none complain-input" value={formData.customerPhone} disabled />
                                            </div>
                                        </div>
                                    </div>

                                    <div className="row">
                                        <div className="col-lg-6 col-12">
                                            <h3 className="complain-input-lebel"><IoMail className='email-icon' /> Email</h3>
                                            <div className="mb-3 complain-input-div">
                                                <input type="email" className="form-control shadow-none complain-input" value={formData.customerEmail} disabled />
                                            </div>
                                        </div>

                                        <div className="col-lg-6 col-12">
                                            <h3 className="complain-input-lebel"><IoSettingsSharp className='service-icon' disabled /> Services</h3>
                                            <div className="mb-3 complain-input-div">
                                                <select type="text" className="form-control shadow-none complain-select" disabled>
                                                    <option value={formData.complaintServiceName} >{formData.complaintServiceName}</option>
                                                </select>
                                            </div>
                                        </div>

                                        <div className="col-lg-12 col-12">
                                            <h3 className="complain-input-lebel "><FaCircleExclamation className='complain-type-icon' /> Complaint Type</h3>
                                            <div className="mb-3 complain-input-div">
                                                <select type="text" className="form-control shadow-none complain-select" disabled>
                                                    <option value={formData.complaintType} selected>{formData.complaintType}</option>
                                                </select>

                                            </div>
                                        </div>

                                        {
                                            formData.complainType == "Driver/Fleet Vehicle Complaint" ?
                                                <>
                                                    <div className="col-lg-6 col-12">
                                                        <h3 className="complain-input-lebel"><IoPerson className='name-icon' /> Driver Name</h3>
                                                        <div className="mb-3 complain-input-div">
                                                            <input type="text" className="form-control shadow-none complain-input" value={formData.driverName} disabled />
                                                        </div>
                                                    </div>

                                                    <div className="col-lg-6 col-12">
                                                        <h3 className="complain-input-lebel"><FaIdCardAlt className='badge-icon' /> Badge No</h3>
                                                        <div className="mb-3 complain-input-div">
                                                            <input type="text" className="form-control shadow-none complain-input" value={formData.badgeNo} disabled />
                                                        </div>
                                                    </div>

                                                    <div className="col-lg-6 col-12">
                                                        <h3 className="complain-input-lebel"><IoDocumentText className='licence-icon' />Licensee Plate Number</h3>
                                                        <div className="mb-3 complain-input-div">
                                                            <input type="text" className="form-control shadow-none complain-input" value={formData.licensePlateNo} disabled />
                                                        </div>
                                                    </div>

                                                    <div className="col-lg-6 col-12">
                                                        <h3 className="complain-input-lebel"><AiFillMessage className='other-icon' /> Other</h3>
                                                        <div className="mb-3 complain-input-div">
                                                            <input type="text" className="form-control shadow-none complain-input" value={formData.other} disabled />
                                                        </div>
                                                    </div>
                                                </>
                                                : ""
                                        }

                                        {
                                            formData.complainType == "Employee Complaint" ?
                                                <>
                                                    <div className="col-lg-6 col-12">
                                                        <h3 className="complain-input-lebel"><IoPerson className='name-icon' /> Employee Name</h3>
                                                        <div className="mb-3 complain-input-div">
                                                            <input type="text" className="form-control shadow-none complain-input" value={formData.employeeName} disabled />
                                                        </div>
                                                    </div>

                                                    <div className="col-lg-6 col-12">
                                                        <h3 className="complain-input-lebel"><MdBadge className='badge-icon' /> Badge No</h3>
                                                        <div className="mb-3 complain-input-div">
                                                            <input type="text" className="form-control shadow-none complain-input" value={formData.badgeNo} disabled />
                                                        </div>
                                                    </div>

                                                    <div className="col-lg-12 col-12">
                                                        <h3 className="complain-input-lebel"><AiFillMessage className='other-icon' /> Other</h3>
                                                        <div className="mb-3 complain-input-div">
                                                            <input type="text" className="form-control shadow-none complain-input" value={formData.other} disabled />
                                                        </div>
                                                    </div>
                                                </> : ""
                                        }


                                        {
                                            formData.complainType == "Billing Help" ?
                                                <>
                                                    <div className="col-lg-6 col-12">
                                                        <h3 className="complain-input-lebel"><IoPerson className='name-icon' /> Billing Help</h3>
                                                        <div className="mb-3 complain-input-div">
                                                            <input type="text" className="form-control shadow-none complain-input" value={formData.billingHelp} disabled />
                                                        </div>
                                                    </div>
                                                    <div className="col-lg-6 col-12">
                                                        <h3 className="complain-input-lebel"><AiFillMessage className='other-icon' /> Other</h3>
                                                        <div className="mb-3 complain-input-div">
                                                            <input type="text" className="form-control shadow-none complain-input" value={formData.other} disabled />
                                                        </div>
                                                    </div>
                                                </>
                                                : ""
                                        }
                                        {
                                            formData.complainType == "Other" ?
                                                <div className="col-lg-12 col-12">
                                                    <h3 className="complain-input-lebel"><AiFillMessage className='other-icon' /> Other</h3>
                                                    <div className="mb-3 complain-input-div">
                                                        <input type="text" className="form-control shadow-none complain-input" value={formData.other} disabled />
                                                    </div>
                                                </div>
                                                : ""
                                        }

                                        <div className="col-lg-6 col-12">
                                            <h3 className="complain-input-lebel"><MdAddLocationAlt className='address-icon' /> Address</h3>
                                            <div className="mb-3 complain-input-div">
                                                <input type="text" className="form-control shadow-none complain-input" value={formData.complaintAddress} disabled />
                                            </div>
                                        </div>

                                        <div className="col-lg-6 col-12">
                                            <h3 className="complain-input-lebel"><MdDateRange className='date-icon' /> Enter the Date of Incident</h3>
                                            <div className="mb-3 complain-input-div">
                                                <input type="text" className="form-control shadow-none complain-input" value={formateDate(formData.dateOfIncedent)} disabled />
                                            </div>
                                        </div>

                                        <div className="col-lg-6 col-12">
                                            <h3 className="complain-input-lebel"><FaFolderPlus className='name-icon' /> Created By</h3>
                                            <div className="mb-3 complain-input-div">
                                                <input type="text" className="form-control shadow-none complain-input" value={formData.createdBy} disabled />
                                            </div>
                                        </div>

                                        <div className="col-lg-6 col-12">
                                            <h3 className="complain-input-lebel"><IoLogOut className='phone-icon' /> Desired Outcome</h3>
                                            <div className="mb-3 complain-input-div">
                                                <input type="text" className="form-control shadow-none complain-input" value={formData.desireOutcome} disabled />
                                            </div>
                                        </div>

                                        <div className="col-lg-12 col-12">
                                            <h3 className="complain-input-lebel"><FaExclamationCircle className='complain-icon' />Complaint Message</h3>
                                            <div className="mb-3 complain-input-div">
                                                <textarea type="text" className="form-control shadow-none complain-input" value={formData.complaintMessage} rows="4" cols="50" disabled></textarea>
                                            </div>
                                        </div>

                                        <div className="col-lg-6 col-12 mb-3 picture-video-name">
                                            <h3 className="complain-input-lebel mb-3"><FaCamera className='phone-icon' /> Evidence Picture </h3><p>{formData.evidencePicture}</p>
                                        </div>
                                        <div className="col-lg-6 col-12 mb-3 picture-video-name">
                                            <h3 className="complain-input-lebel mb-3 "><MdOutlineSlowMotionVideo className='video-icon' /> Evidence Video </h3><p>{formData.evidenceVideo}</p>
                                        </div>
                                    </div>
                                    <h3 className="complain-input-lebel"><FaExclamationCircle className='complain-icon' />Remarks</h3>
                                    {formData.remarks ?
                                        <ComplainRemark data={formData} />
                                        :
                                        <h3 className="heading text-center my-3 fs-6">Remarks are Not availbel</h3>}

                                    <div className="complain-list-button-status">
                                        <div>
                                            <h3 className="complain-input-lebel"><TbDiscountCheckFilled className='complain-icon' />Status</h3>
                                            <input type="text" value={"Open"} disabled />
                                        </div>
                                        <div className="complain-list-button">
                                            <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                                        </div>
                                    </div>
                                </form>
                            </div>
                            {/* <div className="modal-footer">
                                <button type="button" className="btn btn-primary">Understood</button>
                            </div> */}
                        </div>
                    </div>
                </div>
            </div>

        </>

    )
}
export default ComplaintList
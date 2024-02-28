import "./complainRemarkemarkstyle.css"
import { IoSend } from "react-icons/io5";
import React, { useEffect, useState } from 'react'
import moment from "moment";
import { useDispatch, useSelector } from "react-redux";
import { createRemarks, getComplaint } from "../../../redux/featurs/complainSlice";

function ComplainRemark({ data }) {
    function formateDate(date) {
        return moment(date).format('DD MMM, YYYY HH:MM')
    }
    const allComplaints = useSelector((state) => state.complain.complaints)
    const remarksData = allComplaints.find((item) => item.complaintId === data.complaintId)
    const loading = useSelector((state) => state.complain.loading)

    const dispatch = useDispatch()
    const [message, setMessage] = useState("")
    const [remarks, setRemarks] = useState([])
    const { complaintId, complaineeId, complaintStatusId } = remarksData
    // This function is use to create new remark 
    function handleClick() {
        console.log(remarksData);
        let formData = {}
        formData.complaintStatusId = complaintStatusId
        formData.remarks = {
            complaintAssigneeId: complaineeId,
            remarks: message,
            roleId:2
        }
        // console.log(formData, "This is the form data");
        dispatch(createRemarks({ formData, complaintId }))
        dispatch(getComplaint(complaineeId))
        setMessage("")
    }
    useEffect(() => {
        setRemarks(remarksData.remarks)

    }, [remarksData])

    return (
        <>
            <div className="remark-box mb-3 p-2">
                {remarks && remarks.map((item) =>
                    <>{item?.remarksCreatedBy == "Client" ?
                        <div className="sender-message">
                            <h3>{item?.remarks}<span className="remark-date-time">{formateDate(item.createdDate)}</span></h3>
                        </div>
                        :
                        <div className="reciver-message">
                            <h3 ><span className="sender-name">{item?.remarksCreatedBy}</span>{item?.remarks}<span className="remark-date-time">{formateDate(item.createdDate)}</span></h3>
                        </div>
                    }</>)}

                <div className="remark-input">
                    <input type="text" placeholder="Message" onChange={(e) => setMessage(e.target.value)} value={message} />
                  {loading ? <div className="spinner-border mx-1 text-primary" role="status">
                        <span className="visually-hidden">Loading...</span>
                    </div> :
                       message&&<IoSend onClick={handleClick} />}
                </div>
            </div>
        </>
    )
}

export default ComplainRemark
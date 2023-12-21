import { useDispatch, useSelector } from "react-redux";
import LeftMenue from "../../../components/leftmenu/LeftMenu";
import "./style.css"
import DataTable from 'react-data-table-component';
import { useEffect, useRef, useState } from "react";
import { getComplaint } from "../../../redux/featurs/complainSlice";
import {  IoPerson } from "react-icons/io5";


const customStyles = {
    rows: {
        style: {
            minHeight: '72px', // override the row height
        },
    },
    headCells: {
        style: {
            alignItems: "center",
            fontWeight: "600",
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
            fontWeight: "600",
            //    backgroundColor:"#e2dddddb",
            borderBottom: "1px solid #e2dddddb",
            cursor: "pointer"
        },
    },
};


const columns = [
    {
        name: 'SR. NO',
        selector: (_, index) => index + 1,
    },
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
];


function ComplaintList() {
    const user = JSON.parse(localStorage.getItem('user'))
    const dispach = useDispatch()
    const myRef=useRef()

    const allComplaints = useSelector((state) => state.complain.complaints)

    const[formData,setFormData]=useState([])

    useEffect(() => {
        // console.log(user);
        dispach(getComplaint(user.clientId))
    }, [])

    function handleClick(element) {
        const complaintDetail=allComplaints.find((item)=>item.complaintId==element.complaintId)
        setFormData(complaintDetail)
        console.log(formData);
        alert(element.complaintId)
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
                    <div className=" col-lg-9 col-md-9 col-12 bg-white  service_content m-0 p-0">
                        <DataTable
                            customStyles={customStyles}
                            columns={columns}
                            data={allComplaints}
                            onRowClicked={handleClick}
                        />
                    </div>
                </div>
            </div>


            <div>
                {/* Button trigger modal */}
                <button ref={myRef} type="button" className="btn btn-primary" style={{display:"none"}} data-bs-toggle="modal" data-bs-target="#staticBackdrop">
                    Launch static backdrop modal
                </button>
                {/* Modal */}
                <div className="modal fade" id="staticBackdrop" data-bs-backdrop="static" data-bs-keyboard="false" tabIndex={-1} aria-labelledby="staticBackdropLabel" aria-hidden="true">
                    <div className="modal-dialog">
                        <div className="modal-content">
                            <div className="modal-header">
                                <h5 className="modal-title" id="staticBackdropLabel">Modal title</h5>
                                <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close" />
                            </div>
                            <div className="modal-body">
                            
                                        <div className="col-lg-6">
                                            <h3 className="complain-input-lebel"><IoPerson className='name-icon' /> Customer Name</h3>
                                            <div className="mb-3 complain-input-div">
                                                <input type="text" className="form-control shadow-none complain-input" disabled value={formData.customerName} placeholder="Complainer Name..." />
                                            </div>
                                        </div>
                            </div>
                            <div className="modal-footer">
                                <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                                <button type="button" className="btn btn-primary">Understood</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </>

    )
}
export default ComplaintList
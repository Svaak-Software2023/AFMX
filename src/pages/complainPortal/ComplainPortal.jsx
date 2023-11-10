import { FormControl, MenuItem, Select } from "@mui/base"
import ImportantLinks from "../../components/ImportantLinks/ImportantLinks"
import "./complain.css"
import { InputLabel, TextField } from "@mui/material"
import { BsFillPersonFill } from "react-icons/bs"

function ComplainPortal() {
    return (
        <>

            <div className="container p-0 my-3">
                <div className="row m-0 p-0 ">
                    <div className="col-lg-3 col-md-3 col-0 p-0 service_menu">
                        <ImportantLinks />
                    </div>
                    <div className=" col-lg-9 col-md-9 col-12 bg-white p-3 service_content">
                        <div>
                            <h3 className="heading">Complaint Portal</h3>
                        </div>
                        <div className=" row my-3">
                            <div className="col-lg-6 ">
                                <p className="label-text"><BsFillPersonFill className="fs-4" />User Id</p>
                                <TextField 
                                className="w-100"
                                 />
                            </div>
                            <div className="col-lg-6 ">
                                <p className="label-text"><BsFillPersonFill className="fs-4" />User Name</p>
                                <TextField 
                                className="w-100"
                                 />
                            </div>

                            


                        </div>
                    </div>
                </div>
            </div>

        </>
    )
}

export default ComplainPortal
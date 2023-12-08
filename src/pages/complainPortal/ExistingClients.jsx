import React from 'react'
import ImportantLinks from "../../components/ImportantLinks/ImportantLinks";
import { useState } from "react";

function ExistingClients() {
    const [file, setFile] = useState("")
    const initialValue = { name: "", phone: "", category: "", service: "", description: "" }
    const [formData, setFormData] = useState(initialValue)

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value })
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        formData.file = file
        console.log(formData);
        setFormData(initialValue)
        setFile("")
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
                                <form onSubmit={handleSubmit}>

                                    <div className="row">
                                        <div className="col-lg-6">
                                            <h3 className="complain-input-lebel">Name :</h3>
                                            <div className="mb-3 complain-input">
                                                <input type="text" className="form-control shadow-none complain-input" onChange={handleChange} value={formData.name} name="name" placeholder="Complaint Name ..." />
                                            </div>
                                        </div>
                                        <div className="col-lg-6">
                                            <h3 className="complain-input-lebel">Phone :</h3>
                                            <div className="mb-3 complain-input">
                                                <input type="text" className="form-control shadow-none complain-input" onChange={handleChange} value={formData.phone} name="phone" placeholder="Phone Number ..." />
                                            </div>
                                        </div>
                                    </div>
                                    <div className="row">

                                        <div className="col lg-6 col-12">
                                            <h3 className="complain-input-lebel ">Category :</h3>
                                            <div className="mb-3 complain-input">
                                                <select type="text" className="form-control shadow-none complain-select" onChange={handleChange} value={formData.category} name="category" >
                                                    <option value="" >Select Category</option>
                                                    <option value="Category 1" >Category 1</option>
                                                    <option value="Category 2" >Category 2</option>
                                                    <option value="Category 3" >Category 3</option>
                                                    <option value="Category 4" >Category 4</option>
                                                    <option value="Category 5" >Category 5</option>
                                                </select>
                                            </div>
                                        </div>
                                        <div className="col lg-6 col-12">
                                            <h3 className="complain-input-lebel">Service :</h3>
                                            <div className="mb-3 complain-input">
                                                <select type="text" className="form-control shadow-none complain-select" onChange={handleChange} value={formData.service} name="service">
                                                    <option value="" >Select Service</option>
                                                    <option value="Service 1" >Service 1</option>
                                                    <option value="Service 2" >Service 2</option>
                                                    <option value="Service 3" >Service 3</option>
                                                    <option value="Service 4" >Service 4</option>
                                                    <option value="Service 5" >Service 5</option>
                                                </select>
                                            </div>
                                        </div>
                                    </div>
                                    <h3 className="complain-input-lebel">Complain Related Doc(if any) :</h3>
                                    <div className="mb-3 complain-input">
                                        <input type="file" className="form-control shadow-none complain-input" onChange={e => setFile(e.target.files[0])} name="file" placeholder="No File Choose" />
                                    </div>

                                    <h3 className="complain-input-lebel">Description :</h3>
                                    <div className="mb-3 complain-input">
                                        <textarea type="text" className="form-control shadow-none complain-input" onChange={handleChange} value={formData.description} name="description" rows="3" cols="50" placeholder="Max Words 200..."></textarea>
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
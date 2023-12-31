import axios from "axios";

const API = axios.create({ baseURL: "http://localhost:5000/api" });

export const signin = (formData) => API.post("/signin", formData);
export const signup = (formData) => API.post("/signup", formData);

export const contactUs = (formData) => API.post("/contact-page", formData);

// complain API
export const existingComplainCreate = (formData) => API.post('/create-exist-complaint',formData);
export const nonExistingComplainCreate = (formData) => API.post('/create-nonExist-complaint',formData);
export const getComplaint = (id) => API.get(`/all-complaint-portal/${id}`);
export const createRemarks = ({formData,complaintId}) => API.put(`/update-complaint/${complaintId}`,formData);




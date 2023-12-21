import axios from "axios";

const API = axios.create({ baseURL: "http://localhost:5000" });

export const signin = (formData) => API.post("/api/signin", formData);
export const signup = (formData) => API.post("/api/signup", formData);

export const contactUs = (formData) => API.post("/api/contact-page", formData);

// complain API
export const existingComplainCreate = (formData) => API.post('/api/create-exist-complaint',formData);
export const nonExistingComplainCreate = (formData) => API.post('/api/create-nonExist-complaint',formData);
export const getComplaint = (id) => API.get(`/api/all-complaint-portal/${id}`);


